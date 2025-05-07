import { Outlet } from "react-router";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Template() {
  return (
    <div className="relative flex flex-row flex-nowrap min-w-[1700px] h-full w-full pt-4 pe-3 gap-2 overflow-hidden ">
      <Sidebar />
      <div className="relative z-10 bg-gradient-to-b from-bgb to-bgp backdrop-blur-3xl rounded-2xl border-t border-bgbp h-full w-full min-h-[calc(100vh-2rem)] flex flex-col  pt-2">
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