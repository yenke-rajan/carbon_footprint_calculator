

import { Outlet } from 'react-router-dom'; // Outlet for nested routes
import  Header  from './Header';
import Footer from './Footer';



const Layout= () => {
  return (
    <div className="app-container">
    
      <main>
        <Header/>
        

        <Outlet />
       
        <Footer></Footer>
       
    
      </main>
      
    </div>
  );
};

export default Layout;
