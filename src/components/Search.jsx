import { Link } from "react-router-dom";
import { useContent } from "../context/ContentContext";

function Search({ showFilters, setShowFilters }) {
  const { apollo, setApollo, webDocs, setWebDocs } = useContent();

  return (
    <div className="w-full border border-border p-2.5 bg-white rounded-lg flex flex-col gap-2.5">
      <div className="w-full flex relative">
        <input
          placeholder="Search QS-Extract for Articles, Guidelines, Patents, Leaders, Clinical Trials & Companies"
          className="focus:outline-none h-fit w-full overflow-x-scroll text-wrap"
        />
      </div>
      <div className="flex justify-between">
        <div className="text-grey flex gap-2">
          <button
            className={`py-0.5 px-2 rounded-sm flex items-center gap-1 cursor-pointer ${
              showFilters ? "bg-grey text-border" : "bg-border"
            }`}
            onClick={() => setShowFilters(!showFilters)}
          >
            <i className="bx bx-cog" />
            Filters
          </button>
          <button
            className={`py-0.5 px-2 rounded-sm flex items-center gap-1 cursor-pointer ${
              apollo ? "bg-grey text-border" : "bg-border"
            }`}
            onClick={() => setApollo(!apollo)}
          >
            Apollo
          </button>
          <button
            className={`py-0.5 px-2 rounded-sm flex items-center gap-1 cursor-pointer ${
              webDocs ? "bg-grey text-border" : "bg-border"
            }`}
            onClick={() => setWebDocs(!webDocs)}
          >
            <i className="bx bx-globe" />
            Web Docs
          </button>
        </div>
        <div>
          <Link
            to="/xtract"
            className="py-0.5 px-2 bg-dark-blue text-white flex items-center gap-1 rounded-sm"
          >
            <i className="bx bx-search" />
            Go
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Search;
