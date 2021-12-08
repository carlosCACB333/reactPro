import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SideBar from "../components/navigations/SideBar";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="d-flex">
        <SideBar />
        <div>
          <Routes>
            <Route path="home" element={<h1>Home</h1>} />
            <Route path="users" element={<h1>users</h1>} />
            <Route path="about" element={<h1>about</h1>} />
            <Route path="/*" element={<Navigate to="home" replace />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Navigation;
