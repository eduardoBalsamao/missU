
import {Route, Routes} from 'react-router-dom';
import {Landing, Login, Home, Register, Config} from '../pages'
import {Header, PrivateRoute, HeaderConfig} from '../shared/components'

export const AppRoutes = () =>{
  return (
    <Routes>
      <Route path="/landing" element={
        <Landing />
      }
      />
      <Route path="/login" element={
        <Login />
      }
      />
      <Route path="/register" element={
        <Register />
      }
      />
      <Route path="/config" element={
        <div><HeaderConfig />
        <Config /></div>
      }
      />
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<div><Header /> <Home /></div>} />
      </Route>

    </Routes>
  );
};
