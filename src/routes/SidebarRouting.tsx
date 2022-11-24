import { RouteObject } from "react-router-dom";
import { Dashboard } from "../components/App/Dashboard"

export const sidebarRouting: RouteObject[] = [
  { path: '/', element: <Dashboard /> },
  { path: '/dashboard', element: <Dashboard /> },
  // { path: '/analitics', element: <Analitics /> },
  // { path: '/categories', element: <Categories /> },
  // { path: '/settings', element: <Settings /> },
  { path: '/*', element: <Dashboard /> },
    
];