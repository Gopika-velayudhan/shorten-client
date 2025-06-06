import React, { useState } from 'react';

const RedirectUrlForm = () => {
  const [shortUrl, setShortUrl] = useState('');

  const handleRedirect = () => {
    if (!shortUrl) return;


    const shortId = shortUrl.split('/').pop(); 

    window.open(`http://localhost:3005/${shortId}`, '_blank');
  };

  return (
    <div>
      <h2>Redirect to Original URL</h2>
      <input
        type="text"
        placeholder="Enter short ID or full short URL"
        value={shortUrl}
        onChange={(e) => setShortUrl(e.target.value)}
        style={{ width: '300px', marginRight: '1rem' }}
      />
      <button onClick={handleRedirect}>Go</button>
    </div>
  );
};

export default RedirectUrlForm;
