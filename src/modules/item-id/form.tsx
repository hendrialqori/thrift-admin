import React from "react";

import { Form, FormItem, FormLabel, FormFieldError } from "#/components/ui/form";
import { Input } from "#/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "#/components/ui/select";
import { Button } from "#/components/ui/button";

import { ZodError } from "zod"
import { itemFormScheme } from "#/validations/item-form-scheme"

import { type FormErrors } from "#/@types/global";
import { GENDER, IS_UPDATE_ITEM_PARAMS, SIZE } from "#/constant";
import * as Utils from "#/lib/utils"
import { useSearchParams } from "react-router-dom";
import useFormError from "#/hooks/use-form-error";
import { IoMdClose } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";

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
    const [searchParams, setSearchParams] = useSearchParams()
    const formError = useFormError()

    const isUpdate = JSON.parse(searchParams.get(IS_UPDATE_ITEM_PARAMS)!)

    const retrieveError = formError.retrieve<keyof typeof form>

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

        //intially clear
        formError.clear()

        try {
            const dataValidation = itemFormScheme.parse(form)

        } catch (error) {
            if (error instanceof ZodError) {
                const fieldErrors = error.flatten().fieldErrors
                formError.catches(fieldErrors as unknown as FormErrors)
            }
        }
    }

    return (
        <Form onSubmit={submit} className="col-span-6 md:col-span-4 xl:col-span-3">
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
                        <FormFieldError>{retrieveError("size").message}</FormFieldError>
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
                        <FormFieldError>{retrieveError("gender").message}</FormFieldError>
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
                        <FormFieldError>{retrieveError("quantity").message}</FormFieldError>
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
                                const sanitize = Utils.sanitizedNonDigits(value)
                                // format into indonesia number format 
                                const priceFormat = String(Utils.numberFormat(sanitize))

                                setForm(prev => ({ ...prev, price: priceFormat }))
                            }}

                            placeholder="Rp."
                            disabled={!isUpdate}
                        />
                        <FormFieldError>{retrieveError("price").message}</FormFieldError>
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
                            formError.clear()
                        }}
                    >
                        <div className="flex items-center gap-x-2">
                            <IoMdClose className="text-lg" />
                            <span>Cencel</span>
                        </div>
                    </Button>
                    <Button type="submit">
                        <div className="flex items-center gap-x-2">
                            <FaCheck className="text-lg" />
                            <span>Save changes</span>
                        </div>
                    </Button>
                </div>
            )}
        </Form>
    )
}