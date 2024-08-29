import { cva, type VariantProps } from "class-variance-authority";

const baseClass = ""

const buttonVariant = cva([], {
    variants: {
        intent: {
            primary: "",
            secondary: ""
        }
    }
})