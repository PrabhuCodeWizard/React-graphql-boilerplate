/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */
import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
// https://www.npmjs.com/package/react-intl
import { IntlProvider } from 'react-intl';
import messages from '../utils/messages';

// Routes
// import PrivateRoute from '../routes/PrivateRoute';
import PublicRoute from '../routes/PublicRoute';

// Dashboard Components
import Home from './Home';
import Login from './Login';
import NotFound from './NotFound';

// Layouts
import DashboardLayout from '../layouts/Dashboard';
import AuthLayout from '../layouts/Auth';

export function App() {
  const locale = 'en';

  return (
    <IntlProvider locale={locale} messages={messages[locale]} defaultLocale={'en'}>
      <Router>
        <Helmet titleTemplate="Acclaim Products - %s" defaultTitle="Acclaim Products">
          <meta name="description" content="Acclaim Products by Sopheon" />
        </Helmet>
        <Routes>
          <Route index element={<Navigate to="/signin" replace />} />
          <Route
            path="/signin"
            element={
              <PublicRoute>
                <AuthLayout component={Login} />
              </PublicRoute>
            }
          />
     
          <Route
            path="/home"
            element={
              <PublicRoute>
                <DashboardLayout component={Home} />
              </PublicRoute>
            }
          />

          {/* <Route
            path="/home"
            element={
              <PrivateRoute>
                <DashboardLayout component={Home} />
              </PrivateRoute>
            }
          /> */}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </IntlProvider>
  );
}
