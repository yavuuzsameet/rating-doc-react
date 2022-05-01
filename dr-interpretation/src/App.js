import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import DoctorDetailPage from "./pages/DoctorDetailPage";
import { DoctorProvider } from "./context/DoctorContext";

function App() {
  return (
    <DoctorProvider>
      <BrowserRouter>
        <Routes>
     
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:_id" element={<DoctorDetailPage />} />
        </Routes>
      </BrowserRouter>
    </DoctorProvider>
  );
}

export default App;
