import { Routes, Route } from 'react-router-dom';
import './App.css';

// Import translations
import { useTranslation } from 'react-i18next';

// Import Routes
import { MainRoutes } from './MainRoutes';
import { BlogRoutes } from './BlogRoutes';
import { AuthRoutes } from './AuthRoutes';
import { DashboardRoutes } from './DashboardRoutes';


// Import Components
import Wrapper from './info/Wrapper';
import ScrollTop from './Components/ScrollTop';
import SignupPrompt from './Components/SignupPromt';
import DisclaimerPopup from './Components/DisclaimerPopup';

// Import Tanstack Query
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

function App() {
  const { t } = useTranslation();
  const queryClient = new QueryClient();


  return (
    <QueryClientProvider client={queryClient}>
       <Wrapper>
      {/* <Topbar t={t} /> */}
      <ScrollTop />
<DisclaimerPopup></DisclaimerPopup>
      {/* ⬇️ ২️⃣ এখানে popup কম্পোনেন্ট বসাবে */}
      <SignupPrompt></SignupPrompt>
      <main className="main">
        <Routes>
          <MainRoutes t={t} />
          <BlogRoutes t={t} />
          <AuthRoutes t={t} />
          <DashboardRoutes t={t} />
        </Routes>
      </main>
</Wrapper>
    </QueryClientProvider>
  );
}

export default App;