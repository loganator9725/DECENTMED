import { Route } from 'react-router-dom';
import ChooseProviderTier from '../pages/SignUp/ChooseProviderTier';
import SignUp from '../pages/SignUp/SignUp';
import SignIn from '../pages/Login/SignIn';
import PublicSignUp from '../pages/SignUp/PublicSignup';
import SignupOptions from '../pages/SignupOptions';
import StripePayment from '../pages/StripePayment/StripePayment';
import PrivateRoute from '../pages/PrivateRoute/PrivateRoute';

export const AuthRoutes = ({ t }) => (
    <>
        <Route path="/choose-provider-tier" element={<ChooseProviderTier />} />
        <Route path="/stripepay" element={<PrivateRoute><StripePayment t={t} /></PrivateRoute>} />
        <Route path="/signup" element={<SignupOptions />} />
        <Route path="/signup/public" element={<PublicSignUp t={t} />} />
        <Route path="/signup/provider" element={<SignUp t={t} />} />
        <Route path="/provider" element={<SignUp t={t} />} />
        <Route path="/signin" element={<SignIn t={t} />} />
    </>
);