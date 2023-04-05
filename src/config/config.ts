const BACKEND_URL: string | undefined = process.env.REACT_APP_BACKEND_URL;
const REGION: string | undefined = process.env.REACT_APP_REGION;
const IDENTIFY_POOL_ID: string | undefined = process.env.REACT_APP_IDENTIFY_POOL_ID;
const USER_POOL_ID: string | undefined = process.env.REACT_APP_USER_POOL_ID;
const CLIENT_ID: string | undefined = process.env.REACT_APP_CLIENT_ID;


export const config = {
  backend_url: String(BACKEND_URL),
  amplifyConfig: {
    aws_project_region: REGION,
    aws_cognito_identity_pool_id: IDENTIFY_POOL_ID,
    aws_cognito_region: REGION,
    aws_user_pools_id: USER_POOL_ID,
    aws_user_pools_web_client_id: CLIENT_ID,
    federationTarget: 'COGNITO_USER_POOLS',
  },
};
