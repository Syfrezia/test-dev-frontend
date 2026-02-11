import { Button } from './ui/Button';

export function PalindromePetList({
  petsWithPalindrome,
  handleShowPalindromePets,
}) {
  return (
    <div className="mt-8">
      <h2 className="text-[#6b7280] text-lg font-medium mb-2">
        Daftar Peliharaan dengan Nama Palindrome
      </h2>

      <div>
        {petsWithPalindrome.length === 0 && (
          <p className="text-[#6b7280]">
            Belum ada peliharaan dengan nama palindrome yang ditampilkan.
          </p>
        )}
        <ul className="list-disc [&>li]:ml-6">
          {petsWithPalindrome.length > 1 &&
            petsWithPalindrome.map((pet, index) => (
              <li key={`${pet.name}-${index}`}>
                {pet.name} (Panjang: {pet.length} huruf)
              </li>
            ))}
        </ul>
      </div>

      <Button onClick={handleShowPalindromePets}>
        Tampilkan Peliharaan Palindrome
      </Button>
    </div>
  );
}
