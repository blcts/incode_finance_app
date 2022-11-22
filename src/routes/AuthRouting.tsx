import { RouteObject } from "react-router-dom"
import { AccountCreated } from "../components/Auth/AccountCreated"
import { SignIn } from "../components/Auth/SignIn"
import { SignUp } from "../components/Auth/SignUp"

export const authRouting: RouteObject[] = [
  { path: '/', element: <SignIn /> },
  { path: 'authorization', element: <SignUp /> },
  { path: '/accountCreated', element: <AccountCreated /> },
  { path: '/*', element: <SignIn /> }
];