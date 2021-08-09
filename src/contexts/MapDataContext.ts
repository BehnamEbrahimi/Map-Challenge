import { createContext } from "react";
import { MarkerInfo } from "../types/MarkerInfo";

export default createContext<{
  [key: string]: MarkerInfo;
}>({});
