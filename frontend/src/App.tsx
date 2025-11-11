import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import StudentsPage from './pages/StudentsPage';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import CareersPage from './pages/CareersPage';
import NewStudentPage from './pages/NewStudentPage'; 
import DashboardPage from './pages/DashboardPage';
import CountryPage from './pages/CountryPage';
import LocalidadesPage from './pages/LocalidadesPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Rutas públicas */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />

          {/* Dashboard accesible por cualquier usuario autenticado */}
          <Route element={<ProtectedRoute allowedRoles={['ADMIN', 'PERSONAL', 'DOCENTE']} />}>
            <Route path="/dashboard" element={<DashboardPage />} />
          </Route>

          {/* ADMIN y PERSONAL */}
          <Route element={<ProtectedRoute allowedRoles={['ADMIN', 'PERSONAL']} />}>
            <Route path="/students" element={<StudentsPage />} />
            <Route path="/students/new" element={<NewStudentPage />} />
          </Route>

          {/* Solo ADMIN */}
          <Route element={<ProtectedRoute allowedRoles={['ADMIN']} />}>
            <Route path="/careers" element={<CareersPage />} />
          </Route>
          <Route element={<ProtectedRoute allowedRoles={['ADMIN']} />}>
            <Route path="/paises" element={<CountryPage />} />
          </Route>
          <Route element={<ProtectedRoute allowedRoles={['ADMIN', 'PERSONAL']} />}>
            <Route path="/localidades" element={<LocalidadesPage />} />
          </Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
