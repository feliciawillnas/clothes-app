import { CSSProperties } from 'react';

function Header() {
  return (
    <header style={rootStyle}>
      <h1>Hello React Router</h1>
    </header>
  );
}

const rootStyle: CSSProperties = {
  background: 'lightblue',
  padding: '0.2rem 1rem',
};

export default Header;
