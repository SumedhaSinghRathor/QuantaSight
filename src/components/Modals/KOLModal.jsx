import { useRef, useState } from "react";

function KOLModal({ onClose }) {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  const infoList = [
    "Related Authors",
    "Info/Metadata",
    "Affiliations",
    "Author Payments",
    "Clinical Trials",
    "News",
  ];

  const infoContentList = [
    "Papers",
    "Journals",
    "Publication Timeline",
    "Additional Details",
  ];

  const [info, setInfo] = useState("Info/Metadata");
  const [infoContent, setContent] = useState("Papers");
  let content;

  switch (infoContent) {
    case "Papers":
      content = (
        <table className="w-full">
          <thead className="bg-bg">
            <tr>
              <th>S.No.</th>
              <th>Title</th>
              <th>Journal</th>
              <th>Year</th>
              <th>Citation</th>
            </tr>
          </thead>
          <tbody className="text-sm text-center">
            {Array.from({ length: 5 }, (_, index) => (
              <tr key={index} className="border-b border-border py-4">
                <td>{index + 1}</td>
                <td>Sample Title {index + 1}</td>
                <td className="font-bold">Sample Title {index + 1}</td>
                <td>202{index}</td>
                <td>{Math.floor(Math.random() * 100)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
      break;

    case "Journals":
      content = (
        <table className="w-full">
          <thead className="bg-bg">
            <tr>
              <th>S.No.</th>
              <th>Title</th>
              <th>Paper Counts</th>
            </tr>
          </thead>
          <tbody className="text-sm text-center">
            {Array.from({ length: 5 }, (_, index) => (
              <tr key={index} className="border-b border-border py-4">
                <td>{index + 1}</td>
                <td>Sample Title {index + 1}</td>
                <td>{Math.floor(Math.random() * 100)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
      break;

    case "Additional Details":
      content = (
        <table>
          <tbody>
            <tr className="text-center border-b border-border">
              <td>Paper Count</td>
              <td>{Math.floor(Math.random() * 100)}</td>
            </tr>
            <tr className="text-center border-b border-border">
              <td>Citation Count</td>
              <td>{Math.floor(Math.random() * 1000)}</td>
            </tr>
            <tr className="text-center border-b border-border">
              <td>H Index</td>
              <td>{Math.floor(Math.random() * 50)}</td>
            </tr>
          </tbody>
        </table>
      );
      break;

    case "Publication Timeline":
      content = "Chart goes here";
      break;

    default:
      content = "ja-pa-nese";
  }

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 flex justify-center items-center bg-black/20 p-12 z-100"
    >
      <section
        className="bg-white w-full h-full rounded-2xl flex flex-col items-center gap-5 p-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="border-b border-border py-1 text-center w-full">
          <h1 className="font-black text-xl">Jimmy Kuang-hsien Hu</h1>
          <h2>San Francisco, California, United States</h2>
        </div>
        <div className="p-2 bg-bg w-fit border border-border rounded-full flex gap-4">
          {infoList.map((i, idx) => (
            <button
              key={idx}
              className={`px-2 py-0.5 font-bold rounded-full ${
                info === i ? "bg-grey text-white" : ""
              }`}
              onClick={() => setInfo(i)}
            >
              {i}
            </button>
          ))}
        </div>
        <div className="w-full flex flex-col gap-4">
          <select
            className="text-xl w-1/5 font-bold focus:outline-none"
            onChange={(e) => setContent(e.target.value)}
          >
            {infoContentList.map((i) => (
              <option key={i}>{i}</option>
            ))}
          </select>
          {content}
        </div>
      </section>
    </div>
  );
}

export default KOLModal;
