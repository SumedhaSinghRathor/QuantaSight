import TrialModal from "../Modals/TrialModal";
import toggleAttach from "../../utils/attach";

function ClinicalTrials({
  showModal,
  setShowModal,
  attachMode,
  selectedItems,
  setSelectedItems,
}) {
  const item = {
    id: "trial-",
    type: "trial",
    title:
      "An Extension Study to Evaluate the Long-Term Safety of Lampalizumab in Participants With Geographic Atrophy",
    type: "Terminated",
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
      className={`border-border bg-white hover:bg-border p-2.5 rounded-lg cursor-pointer border transition flex flex-col gap-2 ${attachMode && isSelected && "ring-2 ring-dark-blue bg-dark-blue/20"}`}
      onClick={handleClick}
    >
      <h1 className="font-semibold line-clamp-2 text-center leading-tight">
        {item.title}
      </h1>
      <div className="flex justify-between items-center">
        <div className="px-2 py-1 bg-grey text-white w-fit rounded-full text-xs">
          {item.type}
        </div>
        <i className="bx bx-star text-xl" />
      </div>
      {showModal && <TrialModal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default ClinicalTrials;
