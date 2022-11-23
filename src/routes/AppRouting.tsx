import { RouteObject, useRoutes } from "react-router-dom";
import { getToken } from "../redux/fetch";
import { useAppSelector } from "../redux/hooks";
import { authRouting } from "./AuthRouting";
import { sidebarRouting } from "./SidebarRouting";

export const AppRouting = () => {
  const routes: RouteObject[] = [];
  const token = useAppSelector(getToken);

  if (token) {
    routes.push(...sidebarRouting)
  } else {
    routes.push(...authRouting);
  }
  
  const element = useRoutes(routes);

  return <>{ element }</>;
}