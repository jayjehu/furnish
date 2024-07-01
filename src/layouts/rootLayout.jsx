import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { Outlet } from 'react-router-dom';


const RootLayout = () => {
  return(
   <>
  <Navbar/>
  <Outlet/>
  <Footer/>
    </>
  );
  
}

export default RootLayout