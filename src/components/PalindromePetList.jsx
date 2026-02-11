export function PalindromePetList({ petsWithPalindrome }) {
  return (
    <div className="mt-8">
      <h2 className="text-[#6b7280] text-lg font-medium mb-2">
        Daftar Peliharaan dengan Nama Palindrome
      </h2>

      <div>
        <ul className="list-disc [&>li]:ml-6">
          {petsWithPalindrome.map((pet, index) => (
            <li key={`${pet.name}-${index}`}>
              {pet.name} (Panjang: {pet.length} huruf)
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
