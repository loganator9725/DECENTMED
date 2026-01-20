import { Route } from 'react-router-dom';
import PrivateRoute from '../pages/PrivateRoute/PrivateRoute';
import ProviderDashboard from '../Dashboard/ProviderDashboard';
import AdminDashboard from '../Dashboard/AdminDashboard';

export const DashboardRoutes = ({ t }) => (
    <>
        {/* Telehealth Providers Dashboard (for regular users) */}
        <Route path="/provider-dashboard" element={
          <PrivateRoute>
            <ProviderDashboard t={t} />
          </PrivateRoute>
        } />

        {/* Admin Dashboard */}
        <Route path="/admin-dashboard" element={
          <PrivateRoute adminOnly={true}>
            <AdminDashboard t={t} />
          </PrivateRoute>
        } />
    </>
);