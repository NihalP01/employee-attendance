import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Attendance from './pages/Attendance';
import Layout from './layout/Layout';

import './App.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="/attendance" element={<Attendance />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
