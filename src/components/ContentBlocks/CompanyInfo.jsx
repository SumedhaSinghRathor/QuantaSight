import CompanyModal from "../Modals/CompanyModal";
import toggleAttach from "../../utils/attach";

function CompanyInfo({
  showModal,
  setShowModal,
  attachMode,
  selectedItems,
  setSelectedItems,
}) {
  const item = {
    id: "company-",
    type: "company",
    name: "Genetech, Inc.",
    location: "California, United States",
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
      className={`border-border bg-white hover:bg-border p-2.5 rounded-lg cursor-pointer border transition flex flex-col items-center gap-2 ${attachMode && isSelected && "ring-2 ring-dark-blue bg-dark-blue/20"}`}
      onClick={handleClick}
    >
      <h1 className="font-semibold">{item.name}</h1>
      <div className="flex gap-3 w-fit">
        <i className="bx bx-location-plus" />
        <p className="text-xs">{item.location}</p>
      </div>
      {showModal && <CompanyModal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default CompanyInfo;
