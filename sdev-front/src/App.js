import React, { useState } from 'react';
import Navbar from './components/Navbar';
import UrlInput from './components/UrlInput';
import History from './components/History';
import Help from './components/Help';
import Account from './components/Account';
import Result from './components/Result';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [result, setResult] = useState(null);

  const showPage = (page) => {
    setCurrentPage(page);
  };

  const showResult = (url, isMalicious) => {
    setResult({ url, isMalicious });
    setCurrentPage('result');
  };

  return (
    <div>
      <Navbar showPage={showPage} />
      {currentPage === 'home' && <UrlInput showResult={showResult} />}
      {currentPage === 'history' && <History />}
      {currentPage === 'help' && <Help />}
      {currentPage === 'account' && <Account />}
      {currentPage === 'result' && <Result result={result} />}
    </div>
  );
}

export default App;
