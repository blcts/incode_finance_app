import React from 'react'
import { useLocation } from 'react-router-dom';
import { SuccessLayout } from './SuccessLayout';

export const AccountCreated: React.FC = () => {
  const location = useLocation();
  const username = location.state && location.state.username;

  return (
    <SuccessLayout
      text="Your account successfully created"
      button="Let`s Start"
      path="/"
      username={username}
    />
  )
}
