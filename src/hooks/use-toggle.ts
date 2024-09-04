import React from "react";

export default function useToggle() {
    const [state, setState] = React.useState(false)

    const isShow = state

    function toggle(value?: boolean) {
        setState((prev) => value ?? !prev)
    }

    return { isShow, toggle }
}