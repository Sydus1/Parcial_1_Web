import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RobotList from './components/RobotList';
import RobotDetail from './components/RobotDetail';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <Router>
    <div style={{ padding: '20px' }}>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/robots" element={<RobotList />} />
        <Route path="/robot/:id" element={<RobotDetail />} />
      </Routes>
    </div>
  </Router>
);

export default App;
