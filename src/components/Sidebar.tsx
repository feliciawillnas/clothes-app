import { CSSProperties } from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <aside style={rootStyle}>
      <h1 style={h1Style}>Fakebooks</h1>
      <nav>
        <ul style={ulStyle}>
          <li>
            <NavLink to="/" style={linkStyle}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="accounts" style={linkStyle}>
              Accounts
            </NavLink>
          </li>
          <li>
            <NavLink to="sales" style={linkStyle}>
              Sales
            </NavLink>
          </li>
          <li>
            <NavLink to="expenses" style={linkStyle}>
              Expenses
            </NavLink>
          </li>
          <li>
            <NavLink to="reports" style={linkStyle}>
              Reports
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

const rootStyle: CSSProperties = {
  background: '#F5F5F5',
  padding: '1rem',
  borderRight: '1px solid #BBB',
};

const h1Style: CSSProperties = {
  margin: '0 0 1rem',
  color: '#7D7',
};

const ulStyle: CSSProperties = {
  margin: 0,
  padding: 0,
  listStyleType: 'none',
};

const linkStyle: ReactRouterCSS = (props) => ({
  display: 'block',
  borderRadius: '0.3rem',
  padding: '0.3rem 0.5rem',
  color: 'black',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '0.8rem',
  background: props.isActive ? 'lightgrey' : 'inherit',
});

interface ReactRouterLinkProps {
  isActive: boolean;
  isPending: boolean;
}
type ReactRouterCSS = (props: ReactRouterLinkProps) => CSSProperties;

export default Sidebar;
