import { Outlet } from "react-router";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Template() {
  return (
    <div className="relative flex flex-row flex-nowrap min-w-[1700px] h-full w-full pt-4 pe-3 gap-2 ">
      <Sidebar />
      <div className="relative bg-gradient-to-b from-secondary/10 to-bgs rounded-2xl border-t border-secondary/10 h-full w-full min-h-[calc(100vh-2rem)] flex flex-col px-10 py-5">
        <Header />
        {<Outlet />}
      </div>
    </div>
  );
}

export default Template;

// bg #0d0d0d
// bg #3e3e3e
// bg #1a1a1a
// primary #e9ff47
// secondary #040415
// white #040415