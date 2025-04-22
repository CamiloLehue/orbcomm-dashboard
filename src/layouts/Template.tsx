import { Outlet } from "react-router";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Template() {
  return (
    <div className="relative flex flex-row flex-nowrap min-w-[1700px] h-full w-full pt-4 pe-3 gap-2 ">
      <Sidebar />
      <div className="relative bg-gradient-to-b from-[#323030] to-[#292c2d9f] rounded-2xl h-full w-full min-h-[calc(100vh-2rem)] flex flex-col px-10 py-5">
        <Header />
        {<Outlet />}
      </div>
    </div>
  );
}

export default Template;

// #aab0b3 -- gray
// #c41a01 -- red
