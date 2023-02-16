import { Route, Routes } from 'react-router-dom';
import { Reset } from 'styled-reset';

import Header from './components/Header';
import ChattingListPage from './pages/ChattingListPage';
import ChattingPage from './pages/ChattingPage';
import HomePage from './pages/HomePage';
import LockerImformationPage from './pages/LockerImformationPage';
import LockersPage from './pages/LockersPage';
import MemberImformationPage from './pages/MemberImformationPage';
import MembersPage from './pages/MembersPage';
import ProductRegisterPage from './pages/ProductRegisterPage';
import ProductsPage from './pages/ProductsPage';
import SalesPage from './pages/SalesPage';
import WorkerImformationPage from './pages/WorkerImformationPage';
import WorkerSchedulesManagePage from './pages/WorkerSchedulesManagePage';
import WorkersPage from './pages/WorkersPage';
import GlobalStyle from './styles/GlobalStyle';

export default function App() {
  return (
    <div>
      <Reset />
      <GlobalStyle />
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/members" element={<MembersPage />} />
          <Route path="/members/:memberId" element={<MemberImformationPage />} /> */}
          <Route path="/workers" element={<WorkersPage />} />
          <Route path="/workers/:workerId" element={<WorkerImformationPage />} />
          <Route path="/workers/:workerId/members" element={<MembersPage />} />
          <Route path="/workers/:workerId/members/:memberId" element={<MemberImformationPage />} />
          <Route path="/workers/:workerId/chats" element={<ChattingListPage />} />
          <Route path="/workers/:workerId/chats/:chatId" element={<ChattingPage />} />
          <Route path="/schedules" element={<WorkerSchedulesManagePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/register" element={<ProductRegisterPage />} />
          <Route path="/lockers" element={<LockersPage />} />
          <Route path="/lockers/:lockerId" element={<LockerImformationPage />} />
          <Route path="/sales" element={<SalesPage />} />
        </Routes>
      </div>
    </div>
  );
}
