import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

export default function DefaultLayout() {
  return (
    <main className="bg-black h-dvh text-white">
      <Navbar />
      <div className="sm:px-20 px-8">
        <Outlet />
      </div>
    </main>
  );
}
