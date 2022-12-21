import { lazy } from "react";

export const SideNav = lazy(() => import("./SideNav"));
export const Login = lazy(() => import("./Login"));
export const SignUp = lazy(() => import("./SignUp"));
export const FileView = lazy(
  () => import("./SideNav/FolderProps/FileProps/FileView")
);
export const PageNotFound = lazy(() => import("./PageNotFound"));
