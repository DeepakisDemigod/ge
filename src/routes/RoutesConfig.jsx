import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

/* Suspense Fallback Spinner */
import { HashLoader } from 'react-spinners';

/* Navbar, Footer and NotFound Components */
const Navbar = lazy(() => import('../components/Navbar.jsx'));
const Footer = lazy(() => import('../components/Footer.jsx'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound.jsx'));

// Import lazy-loaded components
const Home = lazy(() => import('../pages/home/Home'));
const Html = lazy(() => import('../pages/html/Html'));
const Web = lazy(() => import('../pages/web/Web'));
const Static = lazy(() => import('../pages/Laboratory/templates/Static.jsx'));
const ReactJS = lazy(() => import('../pages/Laboratory/templates/ReactJS.jsx'));
const Vanilla = lazy(() => import('../pages/Laboratory/templates/Vanilla.jsx'));
const Node = lazy(() => import('../pages/Laboratory/templates/Node.jsx'));

const RoutesConfig = () => {
  const paths = {
    home: '/',
    web: '/web',
    html: '/html',
    static: '/lab/static',
    react: '/lab/react',
    vanilla: '/lab/vanilla',
    node: '/lab/node',
    notFound: '/*'
  };

  return (
    <>
      <Navbar />
      <Suspense
        fallback={
          <div className='flex justify-center items-center h-screen'>
            <HashLoader color='#3b82f6' />
          </div>
        }
      >
        <Routes>
          <Route
            path={paths.home}
            element={<Home />}
          />
          <Route
            path={paths.web}
            element={<Web />}
          />
          <Route
            path={paths.html}
            element={<Html />}
          />
          <Route
            path={paths.static}
            element={<Static />}
          />
          <Route
            path={paths.react}
            element={<ReactJS />}
          />
          <Route
            path={paths.vanilla}
            element={<Vanilla />}
          />
          <Route
            path={paths.node}
            element={<Node />}
          />
          <Route
            path={paths.notFound}
            element={<NotFound />}
          />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

export default RoutesConfig;
