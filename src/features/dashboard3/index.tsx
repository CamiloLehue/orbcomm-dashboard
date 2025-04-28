import TopBar from "./TopBar";
import LeftBar from "./LeftBar";
import Content from "./Content";

function Dashboard() {
  return (
    <div className="relative h-full w-full flex flex-col justify-start items-start">
      <TopBar />
      <div className="relative min-h-170 h-full w-full flex justify-start items-start gap-5">
        <LeftBar />
        <Content />
      </div>
    </div>
  );
}


export default Dashboard;
