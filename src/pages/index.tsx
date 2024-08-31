import { lazy } from "react";

export const Products = lazy(() => import("./Products"))
export const Items = lazy(() => import("./Items"))
export const AddBatch = lazy(() => import("./Add-Batch"))

export const Transactions = lazy(() => import("./Transactions"))