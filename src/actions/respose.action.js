import { types } from '../reducers/types'

export const cargando = () => {
    return {
        type: types.response_cargando
    }
}

export const responseOk = () => {
    return {
        type: types.response_ok
    }
}
