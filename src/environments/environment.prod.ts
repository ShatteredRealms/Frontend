const DOMAIN = 'shatteredrealmsonline.com';
const ACCOUNT_API_VERSION = 'v1';
const ACCOUNT_API_BASE_URL = `https://account.${DOMAIN}`;
const ACCOUNT_API_URL = `${ACCOUNT_API_BASE_URL}/${ACCOUNT_API_VERSION}`

export const environment = {
  production: true,
  DOMAIN: DOMAIN,
  ACCOUNT_API_VERSION: ACCOUNT_API_VERSION,
  ACCOUNT_API_BASE_URL: ACCOUNT_API_BASE_URL,
  ACCOUNT_API_URL: ACCOUNT_API_URL,
};
