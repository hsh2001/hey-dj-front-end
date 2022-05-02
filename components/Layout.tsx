import Reset from '../styles/Reset';

import Footer from './Footer';
import Header from './Header';
import { Main } from './Main';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Reset />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
