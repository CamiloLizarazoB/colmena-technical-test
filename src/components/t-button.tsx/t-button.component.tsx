export default function TButonComponent({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="px-3 md:px-4 py-1 md:py-2 bg-sky-600 border border-sky-600 text-white rounded-lg hover:bg-sky-700"
    >
      <i className="fa-solid fa-arrow-right-to-bracket"></i> Add
    </button>
  );
}
