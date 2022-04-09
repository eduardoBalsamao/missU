
import {Route, Routes} from 'react-router-dom';
import {Landing, Login, Home, Register} from '../pages'
import {Header, PrivateRoute} from '../shared/components'

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
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<div><Header /> <Home /></div>} />
      </Route>

    </Routes>
  );
};
