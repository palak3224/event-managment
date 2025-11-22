import { Outlet } from 'react-router-dom';
import Footer from "./component/Footer"
import PremiumNavbar from "./component/Navbar"
import ScrollToTop from "./components/ScrollToTop"


const App = () => {
  return (
    <div>
      <ScrollToTop />
      <PremiumNavbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App

