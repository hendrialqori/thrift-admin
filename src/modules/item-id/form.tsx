import React from "react";

import { Form, FormItem, FormLabel, FormFieldError } from "#/components/ui/form";
import { Input } from "#/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "#/components/ui/select";
import { Button } from "#/components/ui/button";

import { TbPencil } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";

import { ZodError } from "zod"
import { itemFormScheme } from "#/validations/item-form-scheme"

import { type FormErrors } from "#/@types/global";
import { GENDER, IS_UPDATE_ITEM_PARAMS, SIZE } from "#/constant";
import * as Utils from "#/lib/utils"
import { useSearchParams } from "react-router-dom";

const initialForm = {
    id: "",
    size: "",
    gender: "",
    quantity: 1,
    price: "",
    qrCode: ""
}

export default function ItemForm() {
    let [form, setForm] = React.useState(initialForm)
    let [formErrors, setFormErrors] = React.useState({} as FormErrors)
    const [searchParams, setSearchParams] = useSearchParams()

    const isUpdate = JSON.parse(searchParams.get(IS_UPDATE_ITEM_PARAMS)!)

    // cencel/close update form
    function closeUpdate() {
        setSearchParams(prev => {
            prev.set(IS_UPDATE_ITEM_PARAMS, "false")
            return prev
        })
    }

    // submit form actions
    function submit(e: React.SyntheticEvent) {
        e.preventDefault()
        try {
            const dataValidation = itemFormScheme.parse(form)
            console.log(dataValidation)

        } catch (error) {
            if (error instanceof ZodError) {
                const fieldErrors = error.flatten().fieldErrors
                setFormErrors(fieldErrors as unknown as FormErrors)
            }
        }
    }

    // error handlers return isError & message
    function error(field: keyof Omit<typeof form, "id" | "qrCode">) {
        const fieldError = formErrors[field]
        return {
            isError: !!fieldError,
            message: fieldError?.join(", ")
        }
    }

    return (
        <Form onSubmit={submit} className="col-span-3">
            <FormItem>
                {(itemId) => (
                    // ID item field
                    <React.Fragment>
                        <FormLabel htmlFor={itemId}>ID</FormLabel>
                        <p className="text-sm select-none font-medium">SFX-1234-555</p>
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
                            disabled={!isUpdate}
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
                        <FormFieldError hasError={error("size").isError}>{error("size").message}</FormFieldError>
                    </React.Fragment>
                )}
            </FormItem>
            <FormItem>
                {(itemId) => (
                    // Gender item field
                    <React.Fragment>
                        <FormLabel htmlFor={itemId}>Gender</FormLabel>
                        <Select
                            value={form.gender}
                            onValueChange={(gender) => setForm(prev => ({ ...prev, gender }))}
                            disabled={!isUpdate}
                        >
                            <SelectTrigger className="" data-active={Boolean(form.gender)}>
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
                        <FormFieldError hasError={error("gender").isError}>
                            {error("gender").message}
                        </FormFieldError>
                    </React.Fragment>
                )}
            </FormItem>
            <FormItem>
                {(itemId) => (
                    // Quantity item field
                    <React.Fragment>
                        <FormLabel htmlFor={itemId}>Quantity</FormLabel>
                        <Input
                            id={itemId}
                            type="number"
                            value={form.quantity}
                            onChange={(e) => setForm(prev => ({ ...prev, quantity: e.target.valueAsNumber }))}
                            placeholder="Quantity"
                            disabled={!isUpdate}
                        />
                        <FormFieldError hasError={error("quantity").isError}>
                            {error("quantity").message}
                        </FormFieldError>
                    </React.Fragment>
                )}
            </FormItem>
            <FormItem>
                {(itemId) => (
                    // Price item field
                    <React.Fragment>
                        <FormLabel htmlFor={itemId}>Price</FormLabel>
                        <Input
                            id={itemId}
                            value={form.price}
                            onChange={(e) => {
                                // get input value
                                const value = e.target.value
                                // sanitize from chars
                                const sanitize = Utils.sanitized(value)
                                // format into indonesia number format 
                                const priceFormat = String(Utils.numberFormat(sanitize))

                                setForm(prev => ({ ...prev, price: priceFormat }))
                            }}

                            placeholder="Rp."
                            disabled={!isUpdate}
                        />
                        <FormFieldError hasError={error("price").isError}>
                            {error("price").message}
                        </FormFieldError>
                    </React.Fragment>
                )}
            </FormItem>
            {isUpdate && (
                <div className="flex justify-end pt-3 gap-3">
                    <Button
                        variant="secondary"
                        type="reset"
                        onClick={() => {
                            closeUpdate()
                            setFormErrors({})
                        }}
                    >
                        <div className="flex items-center gap-x-3">
                            <IoMdClose className="text-xl" />
                            <span>Cencel</span>
                        </div>
                    </Button>
                    <Button type="submit">
                        <div className="flex items-center gap-x-3">
                            <TbPencil className="text-xl" />
                            <span>Update</span>
                        </div>
                    </Button>
                </div>
            )}
        </Form>
    )
}