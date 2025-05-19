import { Outlet, useLocation } from "react-router";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import RouteLoader from "../components/ui/RouteLoader";
import { useEffect, useState } from "react";

function Template() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <div>
      {loading && <RouteLoader />}

      <div className="relative flex flex-row flex-nowrap min-w-[1700px] h-full w-full pe-3 overflow-hidden">
        <Sidebar />
        <div className="relative z-10 bg-gradient-to-tl from-bgs  to-bgs h-full w-full min-h-[calc(100vh-6.7rem)] flex flex-col justify-start items-center ">
          <Header />
          <Outlet />
        </div>
      </div>
      <div className="w-full px-2">
        <Footer />
      </div>
    </div>
  );
}

export default Template;