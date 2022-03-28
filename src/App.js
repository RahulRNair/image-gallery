import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Listing from "./gallery/listing";
import Details from "./gallery/details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Listing />} />
        <Route path="page/:pagenumber" index element={<Listing />} />
        <Route path="details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
