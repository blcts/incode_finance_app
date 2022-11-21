import React from 'react'
import { SuccessLayout } from './SuccessLayout';

export const AccountCreated: React.FC= () => {
  return (
    <SuccessLayout
      text="Your account successfully created"
      button="Let`s Start"
    />
  )
}
