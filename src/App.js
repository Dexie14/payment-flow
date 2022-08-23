import "./App.css";
import { Routes, Route } from "react-router-dom";
import PaymentLayout from "./Layout/PaymentLayout/PaymentLayout.js";
import Profile from "./Pages/Profile/Profile";
import Billing from "./Pages/Billing/Billing";
import Pay from "./Pages/Pay/Pay";
import Completed from "./Pages/Completed/Completed";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PaymentLayout>
              <Profile />
            </PaymentLayout>
          }
        />
        <Route
          path="/billing"
          element={
            <PaymentLayout>
              <Billing />
            </PaymentLayout>
          }
        />
        <Route
          path="/pay"
          element={
            <PaymentLayout>
              <Pay />
            </PaymentLayout>
          }
        />
        <Route
          path="/completed"
          element={
            <PaymentLayout>
              <Completed />
            </PaymentLayout>
          }
        />
      </Routes>
    </>
  );
};

export default App;
