import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import { Route, Routes } from "react-router-dom";
import Xtract from "./pages/Xtract";
import Atlas from "./pages/Atlas";
import Workroom from "./pages/Workroom";
import Dashboard from "./pages/Dashboard";
import Conferences from "./pages/Conferences";
import News from "./pages/News";
import { ContentProvider } from "./context/ContentContext";

function App() {
  return (
    <>
      <Navbar />
      <ContentProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/xtract" element={<Xtract />} />
          <Route path="/atlas" element={<Atlas />} />
          <Route path="/workroom" element={<Workroom />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/conferences" element={<Conferences />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </ContentProvider>
    </>
  );
}

export default App;
