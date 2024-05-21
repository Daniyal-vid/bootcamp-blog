import { createClient } from 'appwrite';

const appwrite = createClient({
  endpoint: 'https://cloud.appwrite.io/v1',
  project: '65c09c0332bf34b80842',
  key: '65c09c0332bf34b80842',
});

export default appwrite;
