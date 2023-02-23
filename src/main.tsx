import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import App from './App';
import './index.css';
import Accounts from './pages/Accounts';
import Dashboard from './pages/Dashboard';
import Expenses from './pages/Expenses';
import Reports from './pages/Reports';
import Sales from './pages/Sales';
import Customers from './pages/sales/Customers';
import Deposits from './pages/sales/Deposits';
import Invoices from './pages/sales/Invoices';
import Overview from './pages/sales/Overview';
import Subscriptions from './pages/sales/Subscriptions';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="accounts" element={<Accounts />} />
      <Route path="sales" element={<Sales />}>
        <Route index element={<Overview />} />
        <Route path="subscriptions" element={<Subscriptions />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path="customers" element={<Customers />} />
        <Route path="deposits" element={<Deposits />} />
      </Route>
      <Route path="expenses" element={<Expenses />} />
      <Route path="reports" element={<Reports />} />
      <Route path="*" element={<h2>404 not found</h2>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
