export function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="mt-4 px-4 py-2 bg-[#0b74b6] text-white rounded-md hover:bg-[#095a91] disabled:opacity-50 disabled:cursor-not-allowed font-medium"
    >
      {children}
    </button>
  );
}
