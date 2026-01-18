import toggleAttach from "../../utils/attach";

function Guidelines({ attachMode, selectedItems, setSelectedItems }) {
  const item = {
    id: "guideline-",
    type: "guideline",
    name: "Human and animal bites: antimicrobial prescribing",
    date: "04-11-2020",
  };

  const isSelected = selectedItems.some((p) => p.id === item.id);

  return (
    <div
      className={`border-border bg-white hover:bg-border p-2.5 rounded-lg cursor-pointer border transition flex flex-col gap-2 ${attachMode && isSelected && "ring-2 ring-dark-blue bg-dark-blue/20"}`}
      onClick={() => toggleAttach(item, setSelectedItems)}
    >
      <h1 className="font-semibold leading-tight text-center">{item.name}</h1>
      <hr />
      <div className="flex justify-between items-center">
        <p className="text-sm">
          <b>Published:</b> {item.date}
        </p>
        <i className="bx bx-star text-lg" />
      </div>
    </div>
  );
}

export default Guidelines;
