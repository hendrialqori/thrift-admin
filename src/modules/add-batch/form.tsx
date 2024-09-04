import React from "react";
import useFormError from "#/hooks/use-form-error";

import { Form, FormFieldError, FormItem, FormLabel } from "#/components/ui/form";
import { Input } from "#/components/ui/input";
import { Button } from "#/components/ui/button";

import { ZodError } from "zod";
import { batchFormScheme } from "#/validations/batch-form-scheme"

import * as Utils from "#/lib/utils"
import dayjs from "dayjs"

const initialForm = {
    id: "",
    price: "",
    date: new Date(),
    quantity: 1,
}

export default function BatchForm() {
    const [form, setForm] = React.useState(initialForm)
    const formError = useFormError()

    const retrieveError = formError.retrieve<keyof typeof form>

    function submit(e: React.SyntheticEvent) {
        e.preventDefault()

        formError.clear()

        try {
            const dataValidation = batchFormScheme.parse(form)
            console.log(dataValidation)
        } catch (error) {
            if (error instanceof ZodError) {
                const fieldErrors = error.flatten().fieldErrors
                formError.catches(fieldErrors)
            }
        }
    }

    return (
        <Form onSubmit={submit}>
            <FormItem>
                {(itemId) => (
                    <React.Fragment>
                        <FormLabel htmlFor={itemId}>ID</FormLabel>
                        <Input
                            id={itemId}
                            placeholder="Id of batch"
                            value={form.id}
                            onChange={((e) => setForm((prev) => ({ ...prev, id: e.target.value })))}
                        />
                        <FormFieldError>{retrieveError("id").message}</FormFieldError>
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
            <FormItem>
                {(itemId) => (
                    <React.Fragment>
                        <FormLabel htmlFor={itemId}>Date</FormLabel>
                        <Input
                            id={itemId}
                            type="date"
                            value={dayjs(form.date).format("YYYY-MM-DD")}
                            onChange={(e) => {
                                const date = e.target.valueAsDate!
                                setForm((prev) => ({ ...prev, date }))
                            }}
                        />
                        <FormFieldError>{retrieveError("date").message}</FormFieldError>
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
            <div className="flex justify-end pt-5">
                <Button type="submit">
                    Continue process
                </Button>
            </div>
        </Form >
    )
}
