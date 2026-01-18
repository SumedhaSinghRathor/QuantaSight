import { useRef, useState } from "react";

function CompanyModal({ onClose }) {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  const [visual, setVisual] = useState("Trials By Year");
  const charts = [
    "Trials By Year",
    "Trials By Phase",
    "Trials By Status",
    "Phase Timeline",
  ];

  const infoList = ["Payments", "Clinical Trials", "Company Pipeline"];
  const [info, setInfo] = useState("Payments");
  let content;

  switch (info) {
    case "Payments":
      content = (
        <>
          <h1 className="text-xl w-full font-bold">
            Top 10 recipients with amount
          </h1>
          <table className="w-full">
            <thead className="bg-bg">
              <tr>
                <th>S.No.</th>
                <th>Author Name</th>
                <th>Date of Payment</th>
                <th>Total Amount</th>
              </tr>
            </thead>
            <tbody className="text-sm text-center">
              {Array.from({ length: 5 }, (_, index) => (
                <tr key={index} className="border-b border-border py-4">
                  <td>{index + 1}</td>
                  <td>Sample Title {index + 1}</td>
                  <td>
                    {Math.floor(Math.random() * 30 + 1)}/
                    {Math.floor(Math.random() * 12)}/202{index}
                  </td>
                  <td>${Math.round(Math.random() * 10000, 2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      );
      break;

    case "Clinical Trials":
      content = (
        <div className="w-full border border-border rounded-lg">
          <div className="p-2.5 flex justify-between text-sm font-semibold border-b border-border">
            <div className="flex gap-2">
              {charts.map((c) => (
                <button
                  key={c}
                  className={`px-2 rounded-full ${
                    visual === c ? "text-white bg-grey" : "bg-border text-grey"
                  }`}
                  onClick={() => setVisual(c)}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <button className="bg-border text-grey px-2 rounded-full">
                Filter Trials
              </button>
              <button className="bg-grey text-white px-2 rounded-full">
                Table
              </button>
            </div>
          </div>
          <div className="p-2.5 flex gap-2.5">
            <div className="grow border border-border">A CHART GOES HERE</div>
            <div className="border border-border p-1.5 rounded flex flex-col gap-2.5 text-sm">
              <h2 className="font-bold text-xl">{visual} Analysis</h2>
              <div className="text-center p-1 border border-border rounded">
                <p>TOTAL YEARS ACTIVE:</p>
                <p className="font-bold">31 (1985-2025)</p>
              </div>
              <div className="text-center p-1 border border-border rounded">
                <p>AVERAGE PER YEAR:</p>
                <p className="font-bold">53</p>
              </div>
              <div className="text-center p-1 border border-border rounded">
                <p>MOST ACTIVE YEAR:</p>
                <p className="font-bold">2007 (147 trials)</p>
              </div>
              <div className="text-center p-1 border border-border rounded">
                <p>TOTAL TRIALS:</p>
                <p className="font-bold">1643/1643 Studies</p>
              </div>
            </div>
          </div>
        </div>
      );
      break;

    case "Company Pipeline":
      content = (
        <div className="w-full grid grid-cols-4 gap-2.5">
          {Array.from({ length: 7 }).map((idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-2.5 p-2.5 bg-white hover:bg-bg border border-border rounded-lg"
            >
              <h1 className="text-xl font-bold">Atezolizumab</h1>
              <div className="font-bold text-sm flex gap-2">
                <p className="bg-bg border border-border rounded-full px-2">
                  Status: Phase 3
                </p>
                <p className="bg-bg border border-border rounded-full px-2">
                  Branch: Oncology
                </p>
              </div>
              <p className="text-xs text-center">
                Previously untreated metastatic triple-negative breast cancer
                (IMpassion130)
              </p>
            </div>
          ))}
        </div>
      );
      break;

    default:
      content = "What you doing here?? You're not supposed to be here";
  }

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 flex justify-center items-center bg-black/50 p-12 z-100"
    >
      <section
        className="bg-white w-full h-full rounded-2xl flex flex-col items-center gap-5 p-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="border-b border-border py-1 text-center w-full">
          <h1 className="font-black text-xl">Genetech, Inc.</h1>
          <h2>California, United States</h2>
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
        {content}
      </section>
    </div>
  );
}

export default CompanyModal;
