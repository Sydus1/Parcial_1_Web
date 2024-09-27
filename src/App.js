import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RobotList from './components/RobotList';
import RobotDetail from './components/RobotDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <div style={{ textAlign: 'right', marginBottom: '20px' }}>
          <button
            onClick={() => changeLanguage('es')}
            style={{ marginRight: '10px', padding: '5px 10px', border: 'none', background: '#007bff', color: '#fff' }}
          >
            ES
          </button>
          <button
            onClick={() => changeLanguage('en')}
            style={{ padding: '5px 10px', border: 'none', background: '#007bff', color: '#fff' }}
          >
            EN
          </button>
        </div>

        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/robots" element={<RobotList />} />
          <Route path="/robot/:id" element={<RobotDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
