import { Outlet } from "react-router";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Template() {
  return (
    <div className="relative flex flex-row flex-nowrap min-w-[1700px] h-full w-full pe-3 gap-2 overflow-hidden">
      <Sidebar />
      <div className="relative z-10 bg-gradient-to-tl from-bgp  to-bgt backdrop-blur-3xl rounded-2xl border-t border-bgbp h-full w-full min-h-[calc(100vh-2rem)] flex flex-col ">
        {/* <div className="absolute left-0 top-0 h-[1000px] w-[1000px] bg-danger/5 rounded-full blur-3xl "></div> */}
        {/* <div className="absolute left-0 top-0 h-[500px] w-[500px] bg-danger/40 rounded-full blur-3xl "></div> */}
        {/* <div className="absolute -right-20 bottom-0 h-[900px] w-[900px] bg-sky/40 rounded-full blur-3xl "></div> */}
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