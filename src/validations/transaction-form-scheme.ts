import { PAYMENT_METHOD } from "#/constant"
import z from "zod"

export const transactionFormScheme = z.object({
    id: z.string()
        .min(1, { message: "Required" }),
    customer_name: z.string()
        .min(1, { message: "Required" })
        .max(50, { message: "Max 50 characters" }),
    date: z.date({
        required_error: "Please select a date and time",
        invalid_type_error: "That's not a date!",
    }),
    phone: z.string()
        .min(1, { message: "Required" })
        .max(20, { message: "Maximum" })
        .transform((phone) =>
            phone.replace(/\-/g, "")),
    receipt_number: z.string()
        .min(1, { message: "Required" })
        .max(100, { message: "Max 100 characters" }),
    payment_method: z.enum(PAYMENT_METHOD, {
        errorMap: () => ({ message: "Please select your payment method" })
    })
})