import { useRef } from "react";

function TrialModal({ onClose }) {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) onClose();
  };

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 flex justify-center items-center bg-black/50 p-12 z-50"
    >
      <section
        className="bg-white w-full h-full rounded-2xl flex"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-1/4 h-full p-5 border-r border-border flex flex-col justify-between">
          <div className="flex flex-col gap-5">
            <div className="px-2.5 py-1 bg-bg border border-border rounded-lg flex justify-center items-center gap-2.5">
              <p>NCT04517786</p>
              <i className="bx bx-link-external" />
            </div>
            <div className="p-2.5 h-fit bg-bg border border-border rounded-lg flex flex-wrap gap-2">
              <div className="flex gap-4">
                <i className="bx bxs-calendar-plus text-2xl" />
                <p>
                  <b>Started: </b> 2021-01-15
                </p>
              </div>
              <div className="flex gap-4">
                <i className="bx bxs-calendar-check text-2xl" />
                <p>
                  <b>Updated: </b> 2023-05-03
                </p>
              </div>
            </div>
            <button className="bg-dark-blue text-white font-bold py-1 rounded-full">
              Generate AI Summary
            </button>
          </div>
          <div className="flex flex-col gap-2.5">
            <button className="bg-dark-blue text-white p-2.5 flex items-center rounded-lg gap-5 font-bold">
              <i className="text-2xl bx bx-message-square-dots" />
              AI Chat
            </button>
            <button className="bg-dark-blue text-white p-2.5 flex items-center rounded-lg gap-5 font-bold">
              <i className="text-2xl bx bx-bookmark" />
              Save
            </button>
            <button className="bg-dark-blue text-white p-2.5 flex items-center rounded-lg gap-5 font-bold">
              <i className="text-2xl bx bx-right-arrow-alt" />
              Move To Editor
            </button>
          </div>
        </div>
        <div className="w-3/4 h-full p-7.5 flex flex-col justify-between">
          <div className="flex flex-col gap-4">
            <h1 className="text-xl font-bold text-center leading-tight">
              MINIject (MINI SO627) in Patients With Open Angle Glaucoma Using
              Single Operator Delivery Tool
            </h1>
            <div className="border border-border rounded-lg">
              <h2 className="font-bold p-2.5 border-b border-border">
                Description
              </h2>
              <p className="p-2.5 text-justify text-xs">
                The study will evaluate the efficacy and safety of MINI SO627
                and IOP (Intra- ocular pressure) lowering effects with or
                without the use of glaucoma medications. The procedure will be a
                stand alone surgery. Patient follow up with several examinations
                up to 24 months after surgery. The primary endpoint is the
                reduction in medicated mean diurnal IOP at 6 months follow up
                compared to medicated diurnal IOP at baseline visit.
              </p>
            </div>
            <div className="p-2 border border-border rounded-lg flex items-center">
              <i className="bx bx-buildings bg-border text-2xl p-2 rounded-lg" />
              <div className="grow text-center">
                <div className="flex flex-col -gap-1">
                  <p className="leading-snug">ORGANIZATION</p>
                  <p className="leading-snug font-bold">iSTAR Medical</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TrialModal;
