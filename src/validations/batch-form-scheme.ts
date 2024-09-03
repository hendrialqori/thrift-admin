import dayjs from "dayjs";
import { z } from "zod";

export const batchFormScheme = z.object({
    id: z.string()
        .min(1, { message: "Requied" }),
    price: z.string()
        .min(1, { message: "Required" })
        .transform((str) => Number(str.replace(/\./g, ''))),

    date: z.date({
        required_error: "Please select a date and time",
        invalid_type_error: "That's not a date!",
    })
    .transform((date) => dayjs(date).format("YYYY-MM-DD")),
    quantity: z.number()
        .min(1, { message: "Requied" }),
})