import { Routes, Route } from "react-router";
import { Bottombar } from "./components/Bottombar";
import { HomePage } from "./features/clicker/pages/HomePage";
import { Topbar } from "./components/Topbar";
import { useClicker, type Clicker } from "./features/clicker/hooks/useClicker";
import { ShopPage } from "./features/shop/pages/ShopPage";

export type ClickerProps = {
  clicker: Readonly<Clicker>;
};

export function App() {
  const clicker = useClicker();

  return (
    <div className="flex min-h-screen scrollbar-gutter-stable flex-col">
      <Topbar />

      <div className="flex w-full flex-1 overflow-y-auto">
        <Routes>
          <Route path="/" element={<HomePage clicker={clicker} />} />
          <Route path="/shop" element={<ShopPage clicker={clicker} />} />
        </Routes>
      </div>

      <Bottombar />
    </div>
  );
}
