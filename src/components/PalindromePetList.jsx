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

      <button
        onClick={handleShowPalindromePets}
        className="mt-4 px-4 py-2 bg-[#0b74b6] text-white rounded-md hover:bg-[#095a91] disabled:opacity-50 disabled:cursor-not-allowed font-medium"
      >
        Tampilkan Peliharaan Palindrome
      </button>
    </div>
  );
}
