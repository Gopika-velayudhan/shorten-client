
import React, { useState } from 'react';
import axios from 'axios';

const ShortenUrlForm = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3005/shorten', { originalUrl });
      setShortUrl(res.data.shortUrl);
    } catch (err) {
      console.error(err);
      alert('Error shortening URL');
    }
  };

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h2>Shorten URL</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          placeholder="Enter original URL"
          style={{ width: '300px', marginRight: '1rem' }}
        />
        <button type="submit">Shorten</button>
      </form>
      {shortUrl && (
        <p>Short URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a></p>
      )}
    </div>
  );
};

export default ShortenUrlForm;
