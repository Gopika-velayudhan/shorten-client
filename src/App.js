
import React from 'react';
import ShortenUrlForm from './ShortenUrlForm';
import RedirectUrlForm from './OriginalUrlForm';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>URL Shortener</h1>
      <ShortenUrlForm />
      <RedirectUrlForm />
    </div>
  );
}

export default App;
