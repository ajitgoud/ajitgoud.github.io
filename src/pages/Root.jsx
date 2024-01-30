import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";
export default function RootLayout() {
  return (
    <div className="h-screen flex flex-col font-montserrat">
      <Navigation/>
      <main className="flex-1 ">
        <Outlet />
      </main>
    </div>
  );
}
