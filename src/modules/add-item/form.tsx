import React from "react";
import { useNavigate } from "react-router-dom";
import useFormError from "#/hooks/use-form-error";

import { Form, FormFieldError, FormItem, FormLabel } from "#/components/ui/form";
import { Input } from "#/components/ui/input";
import { Button } from "#/components/ui/button";
import { IoMdArrowForward } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

import { ZodError } from "zod";
import { itemFormScheme } from "#/validations/item-form-scheme";

import * as Utils from "#/lib/utils"
import {
    Select, SelectContent, SelectItem,
    SelectTrigger, SelectValue
} from "#/components/ui/select";
import { GENDER, SIZE } from "#/constant";

type Props = {
    onClose: () => void
}

const initialForm = {
    gender: "",
    quantity: 1,
    size: "",
    price: "",
}


export default function ItemForm({ onClose }: Props) {

    const [form, setForm] = React.useState(initialForm)
    const formError = useFormError()
    const navigate = useNavigate()

    const retrieveError = formError.retrieve<keyof typeof form>

    function submit(e: React.SyntheticEvent) {
        e.preventDefault()

        formError.clear()

        try {
            const dataValidation = itemFormScheme.parse(form)
            console.log(dataValidation)

            navigate("/products/batch/add")
        } catch (error) {
            if (error instanceof ZodError) {
                const fieldErrors = error.flatten().fieldErrors
                formError.catches(fieldErrors)
            }
        }
    }

    return (
        <div className="bg-white rounded-xl w-[400px] px-5 py-4" aria-label="overlay">
            <div className="flex justify-end items-center" onClick={onClose}>
                <button>
                    <IoMdClose className="text-xl" />
                </button>
            </div>
            <Form onSubmit={submit}>
                <FormItem>
                    {(itemId) => (
                        // Gender item field
                        <React.Fragment>
                            <FormLabel htmlFor={itemId}>Gender</FormLabel>
                            <Select
                                value={form.gender}
                                onValueChange={(gender) => setForm(prev => ({ ...prev, gender }))}
                            >
                                <SelectTrigger data-active={Boolean(form.gender)}>
                                    <SelectValue placeholder="Select gender" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectContent>
                                        {GENDER.map((gender, i) => (
                                            <SelectItem key={i} value={gender} className="capitalize">{gender}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </SelectContent>
                            </Select>
                            <FormFieldError>{retrieveError("gender").message}</FormFieldError>
                        </React.Fragment>
                    )}
                </FormItem>
                <FormItem>
                    {(itemId) => (
                        <React.Fragment>
                            <FormLabel htmlFor={itemId}>Quantity</FormLabel>
                            <Input
                                id={itemId}
                                type="number"
                                value={form.quantity}
                                onChange={(e) => setForm((prev) => ({ ...prev, quantity: e.target.valueAsNumber }))}
                            />
                            <FormFieldError>{retrieveError("quantity").message}</FormFieldError>
                        </React.Fragment>
                    )}
                </FormItem>
                <FormItem>
                    {(itemId) => (
                        // Size item field
                        <React.Fragment>
                            <FormLabel htmlFor={itemId}>Size</FormLabel>
                            <Select
                                value={form.size}
                                onValueChange={(size) => setForm(prev => ({ ...prev, size }))}
                            >
                                <SelectTrigger data-active={Boolean(form.size)}>
                                    <SelectValue placeholder="Select size" />
                                </SelectTrigger>
                                <SelectContent>
                                    {SIZE.map((size, i) => (
                                        <SelectItem key={i} value={size}>{size}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormFieldError>{retrieveError("size").message}</FormFieldError>
                        </React.Fragment>
                    )}
                </FormItem>
                <FormItem>
                    {(itemId) => (
                        <React.Fragment>
                            <FormLabel htmlFor={itemId}>Price</FormLabel>
                            <Input
                                id={itemId}
                                placeholder="Rp."
                                value={form.price}
                                onChange={(e) => {
                                    // get input value
                                    const value = e.target.value
                                    // sanitize from chars
                                    const sanitize = Utils.sanitizedNonDigits(value)
                                    // format into indonesia number format 
                                    const priceFormat = String(Utils.numberFormat(sanitize))

                                    setForm(prev => ({ ...prev, price: priceFormat }))
                                }}
                            />
                            <FormFieldError>{retrieveError("price").message}</FormFieldError>
                        </React.Fragment>
                    )}
                </FormItem>
                <div className="flex justify-end pt-5 pb-3">
                    <Button>
                        <div className="flex items-center gap-x-4">
                            <span>Continue process</span>
                            <IoMdArrowForward className="text-xl" />
                        </div>
                    </Button>
                </div>
            </Form >
        </div>
    )
}
