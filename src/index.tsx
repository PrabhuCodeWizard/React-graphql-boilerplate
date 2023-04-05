import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  from,
  HttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import ReactDOM from 'react-dom/client';
import { App }  from './pages';
import reportWebVitals from './reportWebVitals';
import { ToastContainer } from 'react-toastify';
import { HelmetProvider } from 'react-helmet-async';
// config
import { config } from './config/config';
// interface
import { IDefaultOptions } from './interfaces/AppInterface';
// style
import './styles/index.scss';


// http link
const httpLink = new HttpLink({ uri: config.backend_url });

const defaultOptions: IDefaultOptions = {
  watchQuery: {
    fetchPolicy: 'cache-and-network',
    errorPolicy: 'none',
  },
  query: {
    fetchPolicy: 'cache-and-network',
    errorPolicy: 'all',
  },
};

const setAuthorizationLink = setContext(async (request: any, previousContext: any) => {
  // if you have a cached value return immediately
  let _accessToken: any = localStorage.getItem('_accesstoken') || '';

  if (_accessToken) {
    const jwtPayload = JSON.parse(window.atob(_accessToken.split('.')[1]));
    const isExpired = Date.now() >= jwtPayload.exp * 1000;

    if (isExpired) {
      // call a function to get new token
      // _accessToken = await getNewAccessToken();
    }
  }

  return _buildAuthHeader(_accessToken);
});

const _buildAuthHeader = (token: string) => {
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
};

const unauthenticatedErrorLink = onError(({ graphQLErrors, operation, forward }: any) => {
  if (graphQLErrors && graphQLErrors.length) {

    if (graphQLErrors[0]?.extensions?.response?.message === 'Unauthorized') {
      // Unauthorized
      // call the logout function
    }

    // token expired. Refetch token using refresh token
    if (graphQLErrors[0]?.extensions?.response?.message === 'ACCESS_TOKEN_EXPIRED') {
      console.warn('Refreshing token and trying again.');
      // Automatically refresh user session if jwt token expired or else same session will return.
      // Reference link => https://docs.amplify.aws/lib/auth/manageusers/q/platform/js/#retrieve-current-session
    }
  }
});


const client = new ApolloClient({
  link: from([setAuthorizationLink, unauthenticatedErrorLink, httpLink]),
  cache: new InMemoryCache({
    addTypename: false,
  }),
  defaultOptions,
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <HelmetProvider>
    <ApolloProvider client={client}>
      <ToastContainer
        pauseOnHover
      />
      <App />
    </ApolloProvider>
  </HelmetProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
