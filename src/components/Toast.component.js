import React, { useEffect } from 'react';
import { useToasts } from 'react-toast-notifications';

export const ToastComponent = (props) => {
    const { title, appearance} = props;
    const { addToast } = useToasts();

    useEffect(() => {
        addToast(title, {
            appearance,
            autoDismissTimeout: 2500,
            autoDismiss: true
        });
    }, [addToast, title, appearance]);

    return (
        <>
        </>
    )
}
