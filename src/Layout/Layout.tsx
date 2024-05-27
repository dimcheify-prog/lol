import { Outlet } from "react-router-dom";
import css from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={css.root}>
      <div className={css.lots_block}>
        lots block
      </div>
      <aside className={css.sidebar_block}>
        sidebar
      </aside>
      <div className={css.timer_block}>
        timer
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  );
};

export default Layout;