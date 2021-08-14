import Swal from 'sweetalert2';

export const cloneObject = (obj) => {
    return JSON.parse(JSON.stringify(obj));
}

export const showSweetAlertError = (data) => {
    const {title, text} = data;

    Swal.fire({
        title,
        text,
        icon: 'error'
    });
}


