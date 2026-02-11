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

      <button
        onClick={handleSortFavorite}
        className="mt-4 px-4 py-2 bg-[#0b74b6] text-white rounded-md hover:bg-[#095a91] disabled:opacity-50 disabled:cursor-not-allowed font-medium"
      >
        Urutkan {favoriteOrder === 'asc' ? 'Z > A' : 'A > Z'}
      </button>
    </div>
  );
}
