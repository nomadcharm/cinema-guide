import { FC, ReactNode} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }): ReactNode => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
