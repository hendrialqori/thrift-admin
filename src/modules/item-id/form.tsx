import React from "react";
import { Form, FormItem, FormLabel, FormFieldError, FormFielDescription } from "#/components/ui/form";
import { Input } from "#/components/ui/input";

export default function ItemForm() {
    return (
        <Form className="col-span-3">
            <FormItem>
                {(itemId) => (
                    <React.Fragment>
                        <FormLabel htmlFor={itemId}>Size</FormLabel>
                        <Input id={itemId} placeholder="size product" />
                        <FormFielDescription>This field for input username.</FormFielDescription>
                        <FormFieldError hasError>This form is require</FormFieldError>
                    </React.Fragment>
                )}
            </FormItem>
        </Form>
    )
}