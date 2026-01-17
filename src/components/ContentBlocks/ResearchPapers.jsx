import PaperModal from "../Modals/PaperModal";
import toggleAttach from "../../utils/attach";

function ResearchPapers({
  showModal,
  setShowModal,
  attachMode,
  selectedItems,
  setSelectedItems,
}) {
  const item = {
    id: "paper-",
    type: "paper",
    title:
      "A large pool of actively cycling progenitors orchestrates self-renewal",
    year: 2019,
    journal: "Nature Cell Journey",
  };

  const isSelected = selectedItems.some((p) => p.id === item.id);

  const handleClick = () => {
    if (attachMode) {
      toggleAttach(item, setSelectedItems);
    } else {
      setShowModal(true);
    }
  };

  return (
    <div
      className={`border-border bg-white hover:bg-border p-2.5 rounded-lg cursor-pointer border transition flex flex-col gap-2 ${attachMode && isSelected && "ring-2 ring-dark-blue bg-dark-blue/40"}`}
      onClick={handleClick}
      type={item.type}
    >
      <h2 className="text-center line-clamp-2 font-semibold leading-tight">
        {item.title}
      </h2>
      <hr />
      <div className="flex justify-between items-center text-xs">
        <div>
          <p>
            <b>Published:</b> {item.year}
          </p>
          <p>
            <b>Journal:</b> {item.journal}
          </p>
        </div>
        <i className="bx bx-star text-xl" />
      </div>
      {showModal && <PaperModal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default ResearchPapers;
