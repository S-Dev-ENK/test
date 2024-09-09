import React from 'react';

function Navbar({ showPage }) {
  return (
    <nav className="navbar">
      <span className="navbar-brand" onClick={() => showPage('home')} style={{ cursor: 'pointer' }}>
        AI 기반 악성 URL 탐지기
      </span>
      <div className="navbar-menu">
        <a href="#" onClick={() => showPage('home')}>홈</a>
        <a href="#" onClick={() => showPage('history')}>검사 내역</a>
        <a href="#" onClick={() => showPage('help')}>도움말</a>
        <a href="#" onClick={() => showPage('account')}>계정</a>
      </div>
    </nav>
  );
}

export default Navbar;
