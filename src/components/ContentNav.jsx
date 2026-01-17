import { useContent } from "../context/ContentContext";

function ContentNav({ activeContent, setActiveContent }) {
  const { selectedContent } = useContent();
  const display = [
    {
      text: "Research Papers",
      icon: <i className="text-lg bx bx-book-open" />,
    },
    {
      text: "Guidelines",
      icon: <i className="text-lg bx bx-list-ul" />,
    },
    {
      text: "Key Opinion Leaders",
      icon: <i className="text-lg bx bx-user" />,
    },
    {
      text: "Clinical Trials",
      icon: <i className="text-lg bx bxs-clinic" />,
    },
    {
      text: "Patents",
      icon: <i className="text-lg bx bxs-like" />,
    },
    {
      text: "Company Information",
      icon: <i className="text-lg bx bxs-building" />,
    },
  ];

  function contentToggle(c) {
    setActiveContent(c);
  }

  return (
    <div className="absolute bottom-2.5 border border-border min-w-150 mx-auto bg-white p-2 rounded-full flex justify-between text-xs">
      {selectedContent.map((c) => {
        const item = display.find((d) => d.text === c);
        return (
          <button
            key={c}
            className={`px-3 py-1 rounded-full flex items-center gap-2 cursor-pointer ${
              activeContent === c
                ? "bg-dark-blue text-white"
                : "bg-white text-dark-blue"
            }`}
            onClick={() => contentToggle(c)}
          >
            {item ? item.icon : null}{" "}
            <span className={activeContent === c ? "" : "hidden"}>{c}</span>
          </button>
        );
      })}
    </div>
  );
}

export default ContentNav;
