import { useState } from 'react';
import { pets, favorites } from './lib/data';
import { PetTable } from './components/PetTable';
import { FavoritePetList } from './components/FavoritePetList';
import { PalindromePetList } from './components/PalindromePetList';
import { isPalindrome } from './lib/utils';
import { SumOfEvenNumbers } from './components/SumOfEvenNumbers';
import { IsAnagramTestCases } from './components/IsAnagramTestCases';
import { FormatJson } from './components/FormatJson';

function App() {
  const [petList, setPetList] = useState(pets);
  const [favoritePets, setFavoritePets] = useState(favorites);
  const [favoriteOrder, setFavoriteOrder] = useState('asc');
  const [typeCount, setTypeCount] = useState({});

  const addNewPet = ({ name, type, race, description }) => {
    setPetList((prevPetList) => [
      ...prevPetList,
      { name, type, race, description },
    ]);
  };

  const addNewFavorite = (petName) => {
    if (!favoritePets.includes(petName)) {
      setFavoritePets((prevFavoritePets) => [...prevFavoritePets, petName]);
    }

    return;
  };

  const handleAddPet = (
    pet = {
      name: '',
      type: '',
      race: '',
      description: '',
    },
    option = { isFavorite: false },
  ) => {
    addNewPet({
      name: pet.name,
      type: pet.type,
      race: pet.race,
      description: pet.description,
    });

    if (option.isFavorite) {
      addNewFavorite(pet.name);
    }
  };

  // Task 2: Fungsi untuk menambah hewan peliharaan baru Esa, yaitu seekor badak Jawa dengan nama Rino yang pekerja keras, yang juga menjadi kesayangan Esa.
  const handleAddRino = () => {
    if (petList.some((pet) => pet.name === 'Rino')) return;

    handleAddPet(
      {
        name: 'Rino',
        type: 'badak',
        race: 'Badak Jawa',
        description: 'Pekerja keras.',
      },
      { isFavorite: true },
    );
  };

  // Task 3: Buat fungsi untuk mengambil hewan kesayangan Esa secara descending dan ascending
  const handleSortFavorite = () => {
    setFavoriteOrder((prevOrder) => {
      const nextOrder = prevOrder === 'asc' ? 'desc' : 'asc';
      setFavoritePets((prevFavs) => {
        const sorted = [...prevFavs].sort();
        return nextOrder === 'asc' ? sorted : sorted.reverse();
      });
      return nextOrder;
    });
  };

  // Task 4: Buat fungsi untuk mengganti kucing Persia menjadi kucing Maine Coon
  const changePersianToMaineCoon = () => {
    setPetList((prevPets) =>
      prevPets.map((pet) => {
        if (pet.race === 'Persia') {
          return { ...pet, race: 'Maine Coon' };
        }
        return pet;
      }),
    );
  };

  // Task 5: Buat fungsi untuk menghitung jumlah hewan peliharaan Esa sesuai dengan jenisnya
  const handleShowTypeCount = () => {
    const countBasedOnType = petList.reduce((acc, current) => {
      if (acc[current.type]) {
        acc[current.type]++;
      } else {
        acc[current.type] = 1;
      }

      return acc;
    }, {});

    setTypeCount(countBasedOnType);
  };

  // Task 6: Buat fungsi untuk mengecek hewan peliharaan Esa yang mengandung kata palindrome beserta panjang string dari namanya
  const filterPetsWithPalindrome = (pets = []) => {
    const palindromePets = pets
      .filter((pet) => isPalindrome(pet.name))
      .map((pet) => ({
        name: pet.name,
        length: pet.name.length,
      }));

    return palindromePets;
  };

  return (
    <main className="p-2 md:p-4">
      <h1 className="text-[#0b74b6] text-2xl font-semibold">
        Test Dev Integrasia - Front End
      </h1>

      <PetTable
        petList={petList}
        handleAddRino={handleAddRino}
        changePersianToMaineCoon={changePersianToMaineCoon}
        typeCount={typeCount}
        handleShowTypeCount={handleShowTypeCount}
      />

      <FavoritePetList
        favoritePets={favoritePets}
        handleSortFavorite={handleSortFavorite}
        favoriteOrder={favoriteOrder}
      />

      <PalindromePetList
        petsWithPalindrome={filterPetsWithPalindrome(petList)}
      />

      <SumOfEvenNumbers />

      <IsAnagramTestCases />

      <FormatJson />
    </main>
  );
}

export default App;
