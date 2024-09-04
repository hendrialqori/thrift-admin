import React from "react";
import { Form, FormFieldError, FormItem, FormLabel } from "#/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "#/components/ui/select";
import { CgSpinner } from "react-icons/cg";
import { Input } from "#/components/ui/input";

import useFormError from "#/hooks/use-form-error";
import dayjs from "dayjs";
import { useToggle } from "usehooks-ts";

import { PAYMENT_METHOD } from "#/constant";
import * as Utils from "#/lib/utils"

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
    const [active, toggle] = useToggle()
    const formError = useFormError()

    const retrieveError = formError.retrieve<keyof typeof form>

    function selectOption({ customer_name, phone }: Pick<typeof form, "customer_name" | "phone">) {
        return () => {
            setForm((prev) => ({
                ...prev,
                customer_name,
                phone: Utils.phoneFormat(phone)
            }))
            toggle()
        }
    }

    function submit(e: React.SyntheticEvent) {
        e.preventDefault()

        formError.clear()

        try {

        } catch (error) {

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
                        <FormLabel htmlFor={itemId}>Customer name</FormLabel>
                        <div className="relative">
                            <Input
                                id={itemId}
                                placeholder="Customer name"
                                onFocus={toggle}
                                // onBlur={toggle}
                                value={form.customer_name}
                                onChange={(e) => setForm((prev) => ({ ...prev, customer_name: e.target.value }))}
                            />
                            <span className="absolute right-2 top-1/2 -translate-y-1/2">
                                <CgSpinner className="animate-spin text-2xl" />
                            </span>
                            <Options isShow={active} onChange={selectOption} />
                        </div>
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
        </Form >
    )
}


function Options({ isShow, onChange }:
    { isShow: boolean, onChange(params: Pick<typeof initialForm, "customer_name" | "phone">): () => void }) {

    if (!isShow) return null
    return (
        <div ref={(ref) => {
            if (ref) {
                const height = ref?.getBoundingClientRect().height
                ref!.style.bottom = -(height + 5) + "px"
            }
        }}
            className="absolute -bottom-44 shadow-md w-1/2 rounded-lg bg-white border z-50 p-2 space-y-2"
        >
            <div
                className="hover:bg-background text-[0.8rem] space-y-1 p-2 rounded-md"
                role="button"
                onClick={onChange({ customer_name: "Hendri Alqori", phone: "6289111121112" })}
            >
                <p>Hendri Alqori</p>
                <p>{Utils.phoneFormat("6289111121112")}</p>
                <p>South Jakarta, DKI Jakarta</p>
            </div>
            <div className="hover:bg-background text-[0.8rem] space-y-1 p-2 rounded-md" role="button">
                <p>Hendri</p>
                <p>{Utils.phoneFormat("6289111121112")}</p>
                <p>Bandung</p>
            </div>
        </div>
    )
}