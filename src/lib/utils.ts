import clsx from "clsx"
import { twMerge } from "tw-merge"

export const cn = clsx

export const merge = twMerge

export const sanitized = (value: string) => {
    const regex = /[^0-9DMY/]/g

    return value.replace(regex, "")
}

export const numberFormat = (value: string) => {
    return new Intl.NumberFormat("id-ID").format(Number(value))
}