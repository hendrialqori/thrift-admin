import React from "react";
import { Form, FormItem, FormLabel } from "#/components/ui/form";
import { Input } from "#/components/ui/input";

export default function BatchForm() {

    return (
        <Form>
            <FormItem>
                {(itemId) => (
                    <React.Fragment>
                        <FormLabel htmlFor={itemId}>ID</FormLabel>
                        <Input id={itemId} placeholder="Id of batch" />
                    </React.Fragment>
                )}
            </FormItem>
            <FormItem>
                {(itemId) => (
                    <React.Fragment>
                        <FormLabel htmlFor={itemId}>Price</FormLabel>
                        <Input id={itemId} placeholder="Rp." />
                    </React.Fragment>
                )}
            </FormItem>
            <FormItem>
                {(itemId) => (
                    <React.Fragment>
                        <FormLabel htmlFor={itemId}>Date</FormLabel>
                        <Input id={itemId} type="date" />
                    </React.Fragment>
                )}
            </FormItem>
            <FormItem>
                {(itemId) => (
                    <React.Fragment>
                        <FormLabel htmlFor={itemId}>Quantity</FormLabel>
                        <Input id={itemId} type="number" />
                    </React.Fragment>
                )}
            </FormItem>
        </Form >
    )
}