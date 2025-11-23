import { createContext } from "react";
import type { RequestFormContextType } from "@/data/types";

export const RequestFormContext = createContext<RequestFormContextType | undefined>(undefined);
