import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import OverviewSection from './components/OverviewSection'
import AnalyticsSection from './components/AnalyticsSection'
import Scheduler from './components/Scheduler'
import AdvisorForm from './components/AdvisorForm'
import VisitorGate from './components/VisitorGate'
import Footer from './components/Footer'
import ErrorBoundary from './components/ErrorBoundary'
import AdminPanel from './AdminPanel'
import AdminLogin from './components/AdminLogin'
import AdminGuard from './components/AdminGuard'
import TermsPage from './pages/TermsPage'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Disclaimer from './pages/Disclaimer'
import SafetyEthics from './pages/SafetyEthics'
import AdvisorTerms from './pages/AdvisorTerms'
import Contact from './pages/Contact'
import CookieNotice from "./components/CookieNotice";
// Wrapper for scrolling to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const HomePage = () => (
  <>
    <HeroSection />
    <OverviewSection />
    <AnalyticsSection />
    <Scheduler />
  </>
)

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ScrollToTop />
        <div className="font-sans text-white bg-solace-bg min-h-screen flex flex-col">
          <VisitorGate />
          <Navbar />

          <div className="flex-grow">
            <Routes>
              {/* Home route shows the main landing sections including Scheduler */}
              <Route path="/" element={<HomePage />} />

              {/* Advisor route shows the Advisor enrollment form */}
              <Route path="/advisor" element={<AdvisorForm />} />

              {/* Admin Login */}
              <Route path="/admin-login" element={<AdminLogin />} />

              {/* Protected Admin Dashboard */}
              <Route path="/admin" element={
                <AdminGuard>
                  <AdminPanel />
                </AdminGuard>
              } />

              {/* Keep other utility pages accessible */}
              <Route path="/advisor-terms" element={<AdvisorTerms />} />
              <Route path="/terms-and-conditions" element={<TermsPage />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="/safety" element={<SafetyEthics />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <CookieNotice />
          <Footer />
          
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
