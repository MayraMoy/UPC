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

// NUEVOS
import CursadaList from './pages/cursadas/CursadaList';
import CursadaForm from './pages/cursadas/CursadaForm';

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

          {/* Solo ADMIN — Carreras */}
          <Route element={<ProtectedRoute allowedRoles={['ADMIN']} />}>
            <Route path="/careers" element={<CareersPage />} />
          </Route>

          {/* Solo ADMIN — Países */}
          <Route element={<ProtectedRoute allowedRoles={['ADMIN']} />}>
            <Route path="/paises" element={<CountryPage />} />
          </Route>

          {/* ADMIN y PERSONAL — Localidades */}
          <Route element={<ProtectedRoute allowedRoles={['ADMIN', 'PERSONAL']} />}>
            <Route path="/localidades" element={<LocalidadesPage />} />
          </Route>

          {/* ADMIN, PERSONAL y DOCENTE — Cursadas */}
          <Route element={<ProtectedRoute allowedRoles={['ADMIN', 'PERSONAL', 'DOCENTE']} />}>
            {/* Listado */}
            <Route path="/cursadas" element={<CursadaList />} />

            {/* Nueva cursada */}
            <Route path="/cursadas/new" element={<CursadaForm />} />

            {/* Editar cursada */}
            <Route path="/cursadas/edit/:id" element={<CursadaForm />} />
          </Route>

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
