import { useState } from "react";
import Search from "../components/Search";
import { useContent } from "../context/ContentContext";
import ContentNav from "../components/ContentNav";
import AiChat from "../components/AiChat";
import ResearchPapers from "../components/ContentBlocks/ResearchPapers";
import CompanyInfo from "../components/ContentBlocks/CompanyInfo";
import KOLs from "../components/ContentBlocks/KOLs";
import Patent from "../components/ContentBlocks/Patent";
import Guidelines from "../components/ContentBlocks/Guidelines";
import ClinicalTrials from "../components/ContentBlocks/ClinicalTrials";

function Xtract() {
  const { apollo, webDocs } = useContent();
  const [dropdownToggle, setDropdownToggle] = useState("none");
  const [activeContent, setActiveContent] = useState("Research Papers");
  const [showModal, setShowModal] = useState(false);

  const [selectedItems, setSelectedItems] = useState([]);
  const [attachMode, setAttachMode] = useState(false);

  let contentChoice;

  switch (activeContent) {
    case "Research Papers":
      contentChoice = (
        <ResearchPapers
          showModal={showModal}
          setShowModal={setShowModal}
          attachMode={attachMode}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
      );
      break;

    case "Company Information":
      contentChoice = (
        <CompanyInfo
          showModal={showModal}
          setShowModal={setShowModal}
          attachMode={attachMode}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
      );
      break;

    case "Key Opinion Leaders":
      contentChoice = (
        <KOLs
          showModal={showModal}
          setShowModal={setShowModal}
          attachMode={attachMode}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
      );
      break;

    case "Patents":
      contentChoice = (
        <Patent
          attachMode={attachMode}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
      );
      break;

    case "Guidelines":
      contentChoice = (
        <Guidelines
          attachMode={attachMode}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
      );
      break;

    case "Clinical Trials":
      contentChoice = (
        <ClinicalTrials
          showModal={showModal}
          setShowModal={setShowModal}
          attachMode={attachMode}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
      );
      break;

    default:
      contentChoice = "Invalid";
  }

  return (
    <section className="p-2.5 grid grid-cols-3 gap-2.5 min-h-[90vh]">
      <div className="col-span-2 flex flex-col gap-2.5 items-center">
        <Search />
        {(apollo || webDocs) && (
          <div className="w-full flex flex-col gap-1 bg-border p-1 rounded-lg">
            <div className="flex gap-1">
              {apollo && (
                <button
                  className={`text-center text-lg font-bold w-full rounded-sm ${dropdownToggle === "Apollo" && "bg-white"}`}
                  onClick={() => {
                    dropdownToggle === "Apollo"
                      ? setDropdownToggle("none")
                      : setDropdownToggle("Apollo");
                  }}
                >
                  Apollo
                </button>
              )}
              {webDocs && (
                <button
                  className={`text-center text-lg font-bold w-full rounded-sm ${dropdownToggle === "Web Docs" && "bg-white"}`}
                  onClick={() => {
                    dropdownToggle === "Web Docs"
                      ? setDropdownToggle("none")
                      : setDropdownToggle("Web Docs");
                  }}
                >
                  Web Docs
                </button>
              )}
            </div>
            {dropdownToggle !== "none" && (
              <div
                className="bg-white rounded-lg p-1 text-xs h-40 overflow-y-scroll"
                style={{ scrollbarWidth: "none" }}
              >
                {dropdownToggle === "Apollo" && apollo && (
                  <>
                    <p className="underline">
                      Clinical Summary: Symptoms Associated with Conditions
                      Beginning with "Kol"
                    </p>
                    <br />
                    <p>
                      The provided text refers to several conditions whose names
                      begin with "Kol," requiring clarification to accurately
                      summarize associated symptoms. The excerpts detail
                      symptoms for Fabry Disease (FD) [4], Kikuchi-Fujimoto
                      Disease (KFD) [5], and symptoms reported in unspecified
                      contexts potentially related to "KOLs" (Key Opinion
                      Leaders) [1, 2] and various blood cancers [2]. A direct
                      link between the query ("common symptoms associated Kol")
                      and a specific disease is therefore lacking, limiting the
                      scope of a comprehensive summary.
                    </p>
                    <br />
                    <p>
                      Fabry Disease (FD) Symptoms: Early symptoms include
                      neuropathic and GI pain, corneal verticillata,
                      angiokeratoma, temperature intolerance, fatigue, and
                      audiovisual issues [4]. More severe symptoms reported were
                      neuropathic pain, stomach pain, burning pain, and fatigue,
                      while the most bothersome were stomach pain, breathing
                      difficulty, fatigue, neuropathic pain, and constipation
                      [4]. The frequency and impact of these symptoms are not
                      uniformly established, but a PRO measure is under
                      development to assess patient experience [4].
                    </p>
                    <br />
                    <p>
                      Kikuchi-Fujimoto Disease (KFD) Symptoms: Symptoms can
                      present acutely or gradually over 2-3 weeks [5].
                      Non-specific symptoms such as fever (present in ~35-50% of
                      cases) [5] may precede cutaneous involvement, arthritis,
                      fatigue, and hepatosplenomegaly [5]. Constitutional
                      symptoms like anorexia, weight loss, night sweats, and
                      chills are observed in approximately 86% of cases [5],
                      often associated with extranodal involvement [5].
                      Lymphadenopathy is the most common clinical feature,
                      present in virtually all cases, often unilateral posterior
                      cervical but sometimes generalized (1-20%) [5]. Skin
                      involvement (30-40% of cases) presents variably, including
                      erythematous papules or macules [5].
                    </p>
                    <br />
                    <p>
                      Kikuchi-Fujimoto Disease (KFD) Symptoms: Symptoms can
                      present acutely or gradually over 2-3 weeks [5].
                      Non-specific symptoms such as fever (present in ~35-50% of
                      cases) [5] may precede cutaneous involvement, arthritis,
                      fatigue, and hepatosplenomegaly [5]. Constitutional
                      symptoms like anorexia, weight loss, night sweats, and
                      chills are observed in approximately 86% of cases [5],
                      often associated with extranodal involvement [5].
                      Lymphadenopathy is the most common clinical feature,
                      present in virtually all cases, often unilateral posterior
                      cervical but sometimes generalized (1-20%) [5]. Skin
                      involvement (30-40% of cases) presents variably, including
                      erythematous papules or macules [5].
                    </p>
                    <br />
                    <p>
                      Blood Cancers (Unspecified): A study identified systemic
                      symptoms (extreme fatigue, night sweats, weight loss,
                      pallor) as most common across various blood cancers
                      (myeloma, CLL, acute leukemias, CML, NHL) [2]. Pain was
                      also frequent [2]. More specific symptoms included pallor
                      and bruising/bleeding (acute leukemias), abnormal lumps
                      and abdominal discomfort (CLL and NHL), and bone pain
                      (myeloma) [2]. Additional symptoms like unusual itching,
                      fever, and thirst were also noted [2]. In this study,
                      58.1% of patients with symptoms reported reasons for
                      delaying medical care, most commonly a lack of awareness
                      of symptom seriousness [2].
                    </p>
                    <br />
                    <p>
                      Symptoms Reported by KOLs: In a separate study, KOLs
                      confirmed that while symptom experience varies, all
                      symptoms identified in a targeted search were relevant
                      across patient subgroups (men/women, treated/untreated)
                      [1]. Renal, cardiac, and cerebrovascular complications
                      were deemed uncommon in early disease, while
                      angiokeratomas and corneal verticillata were common but
                      less bothersome than other symptoms [1]. Impacts on
                      productivity, work/school, activity, and health perception
                      were also noted [1].
                    </p>
                    <br />
                    <p>
                      Limitations: This summary synthesizes information from
                      diverse sources, not all specifically referring to a
                      single "Kol"-prefixed condition. The relative frequency
                      and severity of symptoms described may vary depending on
                      the specific underlying condition and its stage. Further
                      investigation is required to definitively address "common
                      symptoms associated with Kol" due to ambiguity in the
                      query.
                    </p>
                  </>
                )}
                {dropdownToggle === "Web Docs" &&
                  webDocs &&
                  Array.from({ length: 10 }).map((idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between border-b border-border py-1 px-2.5"
                    >
                      <div className="flex items-center gap-2">
                        <i className="bx bxs-file-pdf text-lg" />
                        <p className="text-xs">
                          National Eye Institute Glaucoma Booklet
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <i className="bx bxs-info-circle text-lg" />
                        <i className="bx bxs-magic-wand text-lg" />
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        )}
        <div className="w-full text-xl font-bold">{activeContent}</div>
        <div className="w-full grid grid-cols-3 gap-2.5">{contentChoice}</div>
        <ContentNav
          activeContent={activeContent}
          setActiveContent={setActiveContent}
        />
      </div>
      <AiChat
        attachMode={attachMode}
        setAttachMode={setAttachMode}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      />
    </section>
  );
}

export default Xtract;
