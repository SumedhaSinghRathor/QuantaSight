import KOLModal from "../Modals/KOLModal";
import toggleAttach from "../../utils/attach";

function KOLs({
  showModal,
  setShowModal,
  attachMode,
  selectedItems,
  setSelectedItems,
}) {
  const item = {
    id: "kol-",
    type: "kol",
    name: "Jimmy Kuang-hsien Hu",
    location: "California, United States",
    status: "Academic",
    college: "Rothschild Foundation",
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
      type={item.type}
    >
      <h1 className="font-semibold text-center">{item.name}</h1>
      <div className="w-full flex flex-wrap gap-1 justify-evenly">
        <div className="flex gap-1 border border-border px-2 py-0.5 rounded-full">
          <i className="bx bxs-building" />
          <p className="text-xs">{item.college}</p>
        </div>
        <div className="flex gap-1 border border-border px-2 py-0.5 rounded-full">
          <i className="bx bx-location-plus" />
          <p className="text-xs">{item.location}</p>
        </div>
        <div className="flex gap-1 border border-border px-2 py-0.5 rounded-full">
          <i className="bx bxs-user-detail" />
          <p className="text-xs">{item.status}</p>
        </div>
      </div>
      {showModal && <KOLModal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default KOLs;
