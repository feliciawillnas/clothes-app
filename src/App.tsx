import { CSSProperties } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div style={rootStyle}>
      <Sidebar />
      <main style={mainStyle}>
        <Outlet />
      </main>
    </div>
  );
}

const rootStyle: CSSProperties = {
  display: 'flex',
  minHeight: '100%',
};

const mainStyle: CSSProperties = {
  flex: 1,
  padding: '1rem',
};

export default App;
