import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import LayoutUser from "./components/layout/LayoutUser";
import TickitDetail from "./components/pages/user/TickitDetail";
import TickitPay from "./components/pages/user/TickitPay";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutUser />}>
          <Route index element={<Main />} />
          <Route path="tickit" element={<TickitDetail />} />
          <Route path="tickit-pay" element={<TickitPay />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
