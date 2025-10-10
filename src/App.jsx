import { Outlet } from 'react-router-dom';
import Footer from "./component/Footer"
import PremiumNavbar from "./component/Navbar"


const App = () => {
  return (
    <div>
      <PremiumNavbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App

