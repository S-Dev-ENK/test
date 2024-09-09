// Result.js
import React from 'react';

function Result({ result }) {
  if (!result) return null;

  const { url, isMalicious } = result;
  const resultText = isMalicious ? 
    '이 URL은 악성으로 의심됩니다. 주의가 필요합니다.' : 
    '이 URL은 안전한 것으로 보입니다.';

  return (
    <div className="container">
      <h2>URL: {url}</h2>
      <p>{resultText}</p>
      <p>분석 시간: {new Date().toLocaleString()}</p>
    </div>
  );
}

export default Result;
