import clsx from "clsx"
import { twMerge } from "tw-merge"

export const cn = clsx

export const merge = twMerge

export const sanitizedNonDigits = (value: string) => {
    const regex = /[^0-9DMY/]/g
    return value.replace(regex, "")
}

export const phoneFormat = (value: string) => {
    const regex = /(\d{3})(\d{4})(\d)/
    return value.replace(regex, '$1-$2-$3')
}

export const numberFormat = (value: string) => {
    return new Intl.NumberFormat("id-ID").format(Number(value))
}