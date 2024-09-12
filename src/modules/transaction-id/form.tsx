import React from "react";
import { Form, FormFieldError, FormItem, FormLabel } from "#/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "#/components/ui/select";
import { Input } from "#/components/ui/input";
import { Button } from "#/components/ui/button";
import { FaCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { FiTrash } from "react-icons/fi";

import useFormError from "#/hooks/use-form-error";
import dayjs from "dayjs";

import { IS_UPDATE_TRANSACTION_PARAMS, PAYMENT_METHOD } from "#/constant";
import * as Utils from "#/lib/utils"
import { ZodError } from "zod";
import { transactionFormScheme } from "#/validations/transaction-form-scheme"
import { useSearchParams } from "react-router-dom";

const initialForm = {
    id: "",
    customer_name: "",
    date: new Date(),
    phone: "",
    receipt_number: "",
    payment_method: ""
}

export default function TransactionForm() {
    const [form, setForm] = React.useState(initialForm)
    const [searchParams, setSearchParams] = useSearchParams()
    const formError = useFormError()

    const retrieveError = formError.retrieve<keyof typeof form>

    const isUpdate = JSON.parse(searchParams.get(IS_UPDATE_TRANSACTION_PARAMS)!)

    // cencel/close update form
    function closeUpdate() {
        setSearchParams(prev => {
            prev.set(IS_UPDATE_TRANSACTION_PARAMS, "false")
            return prev
        })
    }

    function submit(e: React.SyntheticEvent) {
        e.preventDefault()

        formError.clear()

        try {
            const dataValidation = transactionFormScheme.parse(form)
        } catch (error) {
            if (error instanceof ZodError) {
                const fieldErrors = error.flatten().fieldErrors
                formError.catches(fieldErrors)
            }
        }

    }

    return (
        <Form onSubmit={submit} className="col-span-4 xl:col-span-3">
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
                    <React.Fragment>
                        <FormLabel htmlFor={itemId}>Customer name</FormLabel>
                        <Input
                            id={itemId}
                            placeholder="Customer name"
                            value={form.customer_name}
                            onChange={(e) => setForm((prev) => ({ ...prev, customer_name: e.target.value }))}
                        />
                        <FormFieldError>{retrieveError("customer_name").message}</FormFieldError>
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
                        <FormLabel htmlFor={itemId}>Phone</FormLabel>
                        <Input
                            id={itemId}
                            value={form.phone}
                            onChange={(e) => {
                                const value = e.target.value
                                const sanitize = Utils.sanitizedNonDigits(value)
                                const phone = Utils.phoneFormat(sanitize)
                                setForm((prev) => ({ ...prev, phone }))
                            }}
                        />
                        <FormFieldError>{retrieveError("phone").message}</FormFieldError>
                    </React.Fragment>
                )}
            </FormItem>
            <FormItem>
                {(itemId) => (
                    <React.Fragment>
                        <FormLabel htmlFor={itemId}>Receipt number</FormLabel>
                        <Input
                            id={itemId}
                            value={form.receipt_number}
                            onChange={(e) => {
                                const receipt_number = e.target.value!
                                setForm((prev) => ({ ...prev, receipt_number }))
                            }}
                        />
                        <FormFieldError>{retrieveError("receipt_number").message}</FormFieldError>
                    </React.Fragment>
                )}
            </FormItem>
            <FormItem>
                {(itemId) => (
                    <React.Fragment>
                        <FormLabel htmlFor={itemId}>Payment method</FormLabel>
                        <Select
                            value={form.payment_method}
                            onValueChange={(payment_method) => setForm(prev => ({ ...prev, payment_method }))}
                        >
                            <SelectTrigger data-active={Boolean(form.payment_method)}>
                                <SelectValue placeholder="Select payment method" />
                            </SelectTrigger>
                            <SelectContent>
                                {PAYMENT_METHOD.map((payment, i) => (
                                    <SelectItem key={i} value={payment}>{payment}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <FormFieldError>{retrieveError("payment_method").message}</FormFieldError>
                    </React.Fragment>
                )}
            </FormItem>
            {isUpdate && (
                <div className="flex justify-end pt-3 gap-5">
                    <Button variant="desctruction" type="button">
                    <div className="flex items-center gap-x-2">
                        <FiTrash className="text-lg"/>
                        <span>Delete</span>
                    </div>
                    </Button>
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
        </Form >
    )
}

