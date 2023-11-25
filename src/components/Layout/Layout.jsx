import { Header, Footer, Loader } from 'components';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
export const Layout = () => (
  <>
    <Header />
    <main>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
    <Footer />
  </>
);
