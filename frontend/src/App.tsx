// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import StudentsPage from './pages/StudentsPage';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import CareersPage from './pages/CareersPage';
import NewStudentPage from './pages/NewStudentPage'; 

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Rutas públicas */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />

          {/* Rutas protegidas: ADMIN y PERSONAL */}
          <Route element={<ProtectedRoute allowedRoles={['ADMIN', 'PERSONAL']} />}>
            <Route path="/students" element={<StudentsPage />} />
            <Route path="/students/new" element={<NewStudentPage />} />
          </Route>

          {/* Rutas protegidas: solo ADMIN */}
          <Route element={<ProtectedRoute allowedRoles={['ADMIN']} />}>
            <Route path="/careers" element={<CareersPage />} />
          </Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;