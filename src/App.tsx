import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import BecomeConsultantForm from './modules/consultant/pages/BecomeConsultant/BecomeConsultantForm';
import LandingPage from './modules/consultant/pages/LandingPage';
// import ConsultantVerificationInPerson from './modules/consultant/pages/Verification/InPerson/ConsultantVerificationInPerson';

// pages import
import Expertise from './modules/consultant/pages/SidebarItems/Expertise';
import Layout from './modules/consultant/layout/Layout';
import ConsultDesk from './modules/consultant/pages/SidebarItems/ConsultantDesk';
import Sessions from './modules/consultant/pages/SidebarItems/Sessions';
import Masterclass from './modules/consultant/pages/SidebarItems/Masterclass';
import Resources from './modules/consultant/pages/SidebarItems/Resources';
import Community from "./modules/consultant/pages/SidebarItems/Community"
import Calendar from './modules/consultant/pages/SidebarItems/Calender';
import Payments from './modules/consultant/pages/SidebarItems/Payments';
import Subscription from './modules/consultant/pages/SidebarItems/Subscription';
import Reviews from './modules/consultant/pages/SidebarItems/Reviews';
import ReferEarn from './modules/consultant/pages/SidebarItems/ReferEarn';
import BusinessProfile from './modules/consultant/pages/SidebarItems/BusinessProfile';
import Profile from './modules/consultant/pages/SidebarItems/Profile';


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path="/consultant" element={<ConsultDesk />} />
          <Route path="/consultant/expertise" element={<Expertise />} />
          <Route path="/consultant/sessions" element={<Sessions />} />
          <Route path='/consultant/masterclass' element={<Masterclass />} />
          <Route path='/consultant/resources' element={<Resources />} />
          <Route path='/consultant/community' element={<Community />} />
          <Route path='/consultant/calendar' element={<Calendar />} />
          <Route path='/consultant/payments' element={<Payments />} />
          <Route path='/consultant/subscription' element={<Subscription />} />
          <Route path='/consultant/reviews' element={<Reviews />} />
          <Route path='/consultant/refer' element={<ReferEarn />} />
          <Route path='/consultant/business-profile' element={<BusinessProfile />} />
          <Route path="/consultant/profile/*" element={<Profile />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
