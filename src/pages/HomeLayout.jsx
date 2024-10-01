import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
function HomeLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default HomeLayout;
