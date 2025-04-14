import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

export default function DefaultLayout() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <div className="sm:px-20 px-8">
        <Outlet />
      </div>
    </main>
  );
}
