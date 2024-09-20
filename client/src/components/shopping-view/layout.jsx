import { Outlet } from "react-router-dom";
import ShoppingHeader from "./header";

function ShoppingLayout() {
  return (
    <div>
      <div className="flex flex-col bg-inherit overflow-hidden">
        {/* common header */}
        <ShoppingHeader/>
        <main className="flex flex-col w-full">
          <Outlet/>
        </main>
      </div>
    </div>
  );
}

export default ShoppingLayout;
