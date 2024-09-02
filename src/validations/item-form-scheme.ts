import * as CONST from "#/constant";
import { z } from "zod";

export const itemFormScheme = z.object({
    id: z.string(),
    size: z.enum(CONST.SIZE, {
        errorMap: () => ({ message: "Please select your size" })
    }),
    gender: z.enum(CONST.GENDER, {
        errorMap: () => ({ message: "Please select your gender" })
    }),
    quantity: z.number()
        .min(1, { message: "Requied" }),
    price: z.string()
        .min(1, { message: "Required" })
        .transform((str) => Number(str.replace(/\./g, '')))
})