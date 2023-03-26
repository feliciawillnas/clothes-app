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

const rootStyle: CSSProperties = {};

const mainStyle: CSSProperties = {};

export default App;
