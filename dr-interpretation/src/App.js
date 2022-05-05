import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import DoctorDetailPage from "./pages/DoctorDetailPage";
import { DoctorProvider } from "./context/DoctorContext";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFoundPage";

function App() {
  return (
    <DoctorProvider>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/detail/:_id" element={<DoctorDetailPage />} />
          <Route path="/notFound" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </DoctorProvider>
  );
}

export default App;
