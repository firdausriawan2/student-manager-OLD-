//import react router dom
import { Routes, Route } from "react-router-dom";

import ScanSiswa from "../views/ScanSiswa";
import Home from "../views/Home";
// import Test from "../views/Test";
import Profile from "../views/Profile";
function RoutesIndex() {
  return (
    <Routes>
      {/* route "/" */}
      <Route path="/" element={<Home />} />

      {/* route "/scan" */}
      <Route path="/scan" element={<ScanSiswa />} />

      {/* route "/posts" */}
      <Route path="/profile" element={<Profile />} />

      {/* route "/posts" */}
      <Route path="/posts" element={<ScanSiswa />} />

      {/* route "/posts/create" */}
      <Route path="/posts/create" element={<ScanSiswa />} />

      {/* route "/posts/edit/:id" */}
      <Route path="/posts/edit/:id" element={<ScanSiswa />} />
    </Routes>
  );
}

export default RoutesIndex;
