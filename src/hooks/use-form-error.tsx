import React from "react";
import { FormErrors } from "#/@types/global";

export default function useFormError() {
    let [formErrors, setFormErrors] = React.useState({} as FormErrors)

    // error handlers return isError & message
    function retrieve<T extends String>(fieldKey: T) {
        const fieldError = formErrors[fieldKey as unknown as string]
        return {
            message: fieldError?.join(", ")
        }
    }

    function catches(errors: FormErrors) { setFormErrors(errors) }

    function clear() { setFormErrors({}) }

    return { retrieve, catches, clear }
}