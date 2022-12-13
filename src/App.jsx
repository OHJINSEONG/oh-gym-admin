import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import MembersPage from './pages/MembersPage';
import ProductRegisterPage from './pages/ProductRegisterPage';
import ProductsPage from './pages/ProductsPage';
import WorkerManagePage from './pages/WorkerManagePage';
import WorkersPage from './pages/WorkersPage';
import GlobalStyle from './styles/GlobalStyle';

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/members" element={<MembersPage />} />
          <Route path="/workers" element={<WorkersPage />} />
          <Route path="/workers/:workerId" element={<WorkerManagePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/register" element={<ProductRegisterPage />} />
        </Routes>
      </div>
    </div>
  );
}
