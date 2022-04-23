import React from 'react'
import { Redirect } from 'react-router-dom'

export const PublicRoute = ({isLoggedIn, children}) => {
  return isLoggedIn ? 
  <Redirect to={'/'}></Redirect>
  :
  children

}
