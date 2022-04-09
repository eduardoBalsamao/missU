import React, {useContext} from 'react'
import { AuthContext } from '../../context/AuthContext'
import {Navigate, Outlet} from 'react-router-dom';


export const PrivateRoute = ({component, ...rest}: any) => {
    const user = useContext(AuthContext)

    if(!user){
        return <Navigate to="/landing" />
    }
    
    return (
        <Outlet />
    )
}