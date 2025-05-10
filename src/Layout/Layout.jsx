import { Outlet } from 'react-router-dom';
import Header from '../Header/Headers.jsx';
// import Footer from './Footer';

const Layout = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
    {/* <Footer /> */}
  </>
);

export default Layout;
