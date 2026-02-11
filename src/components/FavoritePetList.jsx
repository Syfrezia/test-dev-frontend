import { Button } from './ui/Button';

export function FavoritePetList({
  favoritePets,
  handleSortFavorite,
  favoriteOrder,
}) {
  return (
    <div className="mt-8">
      <h2 className="text-[#6b7280] text-lg font-medium mb-2">
        Daftar Peliharaan Kesayangan Esa
      </h2>

      <div>
        <ul className="list-disc [&>li]:ml-6">
          {favoritePets.map((fav, index) => (
            <li key={`${fav}-${index}`}>{fav}</li>
          ))}
        </ul>
      </div>

      <Button onClick={handleSortFavorite}>
        Urutkan {favoriteOrder === 'asc' ? 'Z > A' : 'A > Z'}
      </Button>
    </div>
  );
}
