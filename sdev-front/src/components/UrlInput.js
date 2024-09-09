import React, { useState } from 'react';

function UrlInput({ showResult }) {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const searchUrl = () => {
    if (!url) {
      alert('URL을 입력해주세요.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const isMalicious = Math.random() < 0.5;
      setLoading(false);
      showResult(url, isMalicious);
    }, 2000);
  };

  return (
    <div className="container">
      <h1>AI 기반 악성 URL 탐지기</h1>
      <div className="url-input-container">
        <input 
          type="url" 
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="URL을 입력하세요" 
          required 
        />
        <button onClick={searchUrl} disabled={loading}>검사</button>
      </div>
      {loading && <div className="loading"></div>}
    </div>
  );
}

export default UrlInput;
