import { createContext, useContext, useState } from "react";

const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const [selectedContent, setSelectedContent] = useState([
    "Research Papers",
    "Guidelines",
    "Clinical Trials",
  ]);

  const [apollo, setApollo] = useState(false);
  const [webDocs, setWebDocs] = useState(false);

  return (
    <ContentContext.Provider
      value={{
        selectedContent,
        setSelectedContent,
        apollo,
        setApollo,
        webDocs,
        setWebDocs,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => useContext(ContentContext);
