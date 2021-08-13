import { types } from './types';

const initialState = {
    // TODO: ELIMINAR DESPUES DE TERMINAR PRUEBA
    users: [],
    currentUser: {},
    //
    operations: [],
    validDates: {},
    detailSummary: {},
    detailRanking: [],
    search: {
        operation: '',
        start: '',
        end: ''
    }
}

export const ffdReducer = (state = initialState, action) => {
    switch (action.type) {
        // TODO: ELIMINAR DESPUES DE TERMINAR PRUEBA
        case types.ffdObtenerUsuarios:
            return {
                ...state,
                users: action.payload
            }
        case types.ffdObtenerUsuarioPorId:
            return {
                ...state,
                currentUser: action.payload
            }
        //
        case types.ffd_carga_inicial:
            return {
                ...state,
                operations: action.payload.operations,
                validDates: action.payload.validDates,
                search: {
                    operation: '',
                    start: action.payload.validDates.minDate,
                    end: action.payload.validDates.maxDate,
                }
            }
        case types.ffd_obtener_summary:
            return {
                ...state,
                detailSummary: action.payload
            }
        case types.ffd_obtener_ranking:
            return {
                ...state,
                detailRanking: action.payload
            }
        case types.ffd_filtros_busqueda:
            return {
                ...state,
                search: action.payload
            }
        default:
            return state;
    }
}
