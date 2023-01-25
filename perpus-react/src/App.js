import './App.css';
import { Route, Routes } from 'react-router-dom'
import AuthRoute from './routes/AuthRoute';
import Login from './components/Login';
import PrivateRoute from './routes/PrivateRoute';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Routes>
      <Route element={<AuthRoute/>}>
        <Route path='/' element={<Login/>}></Route>
      </Route>

      <Route element={<PrivateRoute />}>
        <Route path='/dashboard' element={<Dashboard />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
