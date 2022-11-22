import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteObject, useRoutes } from "react-router-dom";
import { setFeaturesLoadingActionCreator } from "../redux/features";
import { RootState } from "../redux/store";
import { authRouting } from "./AuthRouting";
import { sidebarRouting } from "./SidebarRouting";

export const AppRouting = () => {
  const dispatch = useDispatch();
  const routes: RouteObject[] = [];
  const token = useSelector((state: RootState) => state.features.token);

  useEffect(() => {
    dispatch(setFeaturesLoadingActionCreator(true));
  });

  token
    ? routes.push(...sidebarRouting)
    : routes.push(...authRouting);
  
  const element = useRoutes(routes);

  return <>{ element }</>;
}