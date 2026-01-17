import { useRef } from "react";

function PaperModal({ onClose }) {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) onClose();
  };

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 flex justify-center items-center bg-black/20 backdrop-blur-sm p-12 z-50"
    >
      <section className="bg-white w-full h-full rounded-2xl flex">
        <div className="w-1/4 h-full p-5 border-r border-border flex flex-col justify-between">
          <div className="flex flex-col gap-5">
            <div className="px-2.5 py-1 bg-bg border border-border rounded-lg flex flex-col gap-1">
              <div className="flex items-center gap-2.5">
                <i className="text-xl bx bxs-book-add" />
                <p className="font-bold">Nature Cell Biology</p>
              </div>
              <p>
                <b>Published Year:</b> 2019
              </p>
              <div className="flex gap-2.5">
                <p>
                  <b>Citations:</b> 73
                </p>{" "}
                |{" "}
                <p>
                  <b>References:</b> 66
                </p>
              </div>
            </div>
            <div className="p-2.5 h-fit bg-bg border border-border rounded-lg flex flex-wrap gap-2 justify-around text-xs">
              {Array.from({ length: 3 }).map((a) => (
                <button
                  key={a}
                  className="bg-white w-fit py-0.5 px-2 border border-border rounded-full hover:text-white hover:bg-dark-blue cursor-pointer"
                >
                  Kyoko Kawaguchi
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            <button className="bg-dark-blue text-white p-2.5 flex items-center rounded-lg gap-5 font-bold">
              <i className="text-2xl bx bx-message-square-dots" />
              AI Chat
            </button>
            <button className="bg-dark-blue text-white p-2.5 flex items-center rounded-lg gap-5 font-bold">
              <i className="text-2xl bx bx-network-chart" />
              Evaluate
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
              A large pool of actively cycling progenitors orchestrates
              self-renewal and injury repair of an ectodermal appendage
            </h1>
            <div className="border border-border rounded-lg">
              <h2 className="font-bold p-2.5 border-b border-border">
                Abstract
              </h2>
              <p className="p-2.5 text-justify text-xs">
                The Taiwan Society of Cardiology (TSOC) and Taiwan Society of
                Plastic Surgery (TSPS) have collaborated to develop a joint
                consensus for the management of patients with advanced vascular
                wounds. The taskforce comprises experts including preventive
                cardiologists, interventionists, and cardiovascular and plastic
                surgeons. The consensus focuses on addressing the challenges in
                diagnosing, treating, and managing complex wounds; incorporates
                the perfusion evaluation and the advanced vascular wound care
                team; and highlights the importance of cross-disciplinary
                teamwork. The aim of this joint consensus is to manage patients
                with advanced vascular wounds and encourage the adoption of
                these guidelines by healthcare professionals to improve patient
                care and outcomes. The guidelines encompass a range of topics,
                including the definition of advanced vascular wounds, increased
                awareness, team structure, epidemiology, clinical presentation,
                medical treatment, endovascular intervention, vascular surgery,
                infection control, advanced wound management, and evaluation of
                treatment results. It also outlines a detailed protocol for
                assessing patients with lower leg wounds, provides guidance on
                consultation and referral processes, and offers recommendations
                for various wound care devices, dressings, and products. The
                2024 TSOC/TSPS consensus for the management of patients with
                advanced vascular wounds serves as a catalyst for international
                collaboration, promoting knowledge exchange and facilitating
                advancements in the field of advanced vascular wound management.
                By providing a comprehensive and evidence-based approach, this
                consensus aims to contribute to improved patient care and
                outcomes globally.
              </p>
            </div>
          </div>
          <div className="p-2.5 border border-border rounded-xl">
            <h2 className="mx-auto font-bold">Similar Papers</h2>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PaperModal;
