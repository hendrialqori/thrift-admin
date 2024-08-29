import { lazy } from "react";

export const Product = lazy(() => import("@/pages/product"))
export const Transaction = lazy(() => import("@/pages/transaction"))