import toggleAttach from "../../utils/attach";

function Patent({ attachMode, selectedItems, setSelectedItems }) {
  const item = {
    id: "patent-",
    type: "patent",
    title: "SURGICAL SYSTEMS AND METHODS FOR TREATMENT OF GLAUCOMA",
    location: "GOOI, Patrick",
  };

  const isSelected = selectedItems.some((p) => p.id === item.id);

  return (
    <div
      className={`border-border bg-white hover:bg-border p-2.5 rounded-lg cursor-pointer border transition flex flex-col gap-2 ${attachMode && isSelected && "ring-2 ring-dark-blue bg-dark-blue/20"}`}
      onClick={toggleAttach(item, setSelectedItems)}
      type={item.type}
    >
      <h1 className="font-medium line-clamp-2 text-center leading-tight">
        {item.title}
      </h1>
      <div className="flex justify-between items-center">
        <div className="px-2 py-1 bg-grey text-white w-fit rounded-full text-xs">
          {item.location}
        </div>
        <i className="bx bx-star text-xl" />
      </div>
    </div>
  );
}

export default Patent;
