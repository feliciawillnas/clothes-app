import { CSSProperties } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div style={rootStyle}>
      <Header />
      <Outlet />
    </div>
  );
}

const rootStyle: CSSProperties = {
  display: "flex",
  minHeight: "100%",
};

const mainStyle: CSSProperties = {
  flex: 1,
  padding: "1rem",
};

export default App;
