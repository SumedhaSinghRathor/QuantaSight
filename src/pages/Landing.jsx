import { useState } from "react";
import Search from "../components/Search";
import { useContent } from "../context/ContentContext";

function Landing() {
  const [showFilters, setShowFilters] = useState(false);
  const [error, setError] = useState("");
  const contentOptions = [
    "Research Papers",
    "Guidelines",
    "Clinical Trials",
    "Patents",
    "Company Information",
    "Key Opinion Leaders",
  ];
  const { selectedContent, setSelectedContent } = useContent();

  const toggleContent = (content) => {
    if (selectedContent.includes(content)) {
      setSelectedContent((prev) => prev.filter((c) => c !== content));
      setError("");
    } else if (selectedContent.length < 3) {
      setSelectedContent((prev) => [...prev, content]);
      setError("");
    } else {
      setError("You can select a maximum of 3 content options.");
    }
  };

  return (
    <div className="w-full h-[90vh] flex flex-col items-center justify-center gap-5">
      <h1 className="text-6xl text-dark-blue font-semibold">
        Begin Your Search
      </h1>
      <div className="w-3/4">
        <Search showFilters={showFilters} setShowFilters={setShowFilters} />
      </div>
      {showFilters ? (
        <div className="flex flex-col gap-8 items-center w-3/4">
          <div className="flex justify-between gap-8 w-full">
            <div className="bg-white border border-border p-5 rounded-lg flex flex-col gap-5">
              <h1 className="text-xl font-bold">Keywords</h1>
              <div>
                <p className="text-xs font-bold">contains (and)</p>
                <div className="flex gap-2.5">
                  <input
                    type="text"
                    className="p-1 border border-border text-xs rounded-xs"
                  />
                  <button className="text-grey bg-border rounded-xs py-1 px-3 font-bold">
                    Add
                  </button>
                </div>
              </div>
              <div>
                <p className="text-xs font-bold">does not contain (not)</p>
                <div className="flex gap-2.5">
                  <input
                    type="text"
                    className="p-1 border border-border text-xs rounded-xs"
                  />
                  <button className="text-grey bg-border rounded-xs py-1 px-3 font-bold">
                    Add
                  </button>
                </div>
              </div>
              <div>
                <p className="text-xs font-bold">may contain (or)</p>
                <div className="flex gap-2.5">
                  <input
                    type="text"
                    className="p-1 border border-border text-xs rounded-xs"
                  />
                  <button className="text-grey bg-border rounded-xs py-1 px-3 font-bold">
                    Add
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white border border-border p-5 rounded-lg flex flex-col gap-5">
              <h1 className="text-xl font-bold">Content (select any 3)</h1>
              <div className="text-sm flex flex-wrap gap-2.5">
                {contentOptions.map((c) => (
                  <button
                    className={`px-2.5 py-1 font-bold rounded-full ${
                      selectedContent.includes(c)
                        ? "bg-grey text-border"
                        : "bg-border text-grey"
                    }`}
                    key={c}
                    onClick={() => toggleContent(c)}
                  >
                    {c}
                  </button>
                ))}
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>
            <div className="bg-white border border-border p-5 rounded-lg flex flex-col gap-5">
              <h1 className="text-xl font-bold">Years</h1>
              <div className="w-60 flex items-center justify-between font-bold">
                <p>FROM</p>
                <input type="range" className="accent-grey" />
                <p>TO</p>
              </div>
              <div className="flex font-bold w-full justify-between">
                Sort By:{" "}
                <select className="bg-grey text-white py-0.5 px-4 rounded-full">
                  <option>Relevance</option>
                  <option>Kudos</option>
                </select>
              </div>
            </div>
          </div>
          <button
            className="bg-dark-blue text-white text-xl font-bold px-10 py-2.5 rounded-lg w-fit"
            onClick={() => setShowFilters(false)}
          >
            Apply Filters
          </button>
        </div>
      ) : (
        <div className="border border-border px-2.5 py-1.5 bg-white rounded-lg gap-2.5 text-sm font-bold">
          💡 Tip: Maximize the power of Xtract by exploring
          the 'Filters' section
        </div>
      )}
    </div>
  );
}

export default Landing;
