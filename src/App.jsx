import React from 'react';
import BlogList from './components/BlogList';
import { createClient } from 'appwrite';


function App() {

const appwrite = createClient({
  endpoint: 'https://cloud.appwrite.io/v1',
  project: '65c09c0332bf34b80842',
  key: '65c09c0332bf34b80842',
});

  return (
    <div>
      <h1>React Blog App</h1>
      {/* <BlogList /> */}
    </div>
  );
}

export default App;
