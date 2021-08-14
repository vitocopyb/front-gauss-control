import { types } from '../reducers/types';
import { getDetailRanking, getDetailSummary, getObtenerUsuarioPorId, getObtenerUsuarios, getOperations, getValidDates } from '../services/ffd.service';
import { showSweetAlertError } from '../shared/utils';

// ---------------------------------------------------------
// FIXME: ELIMINAR despues de terminar la prueba
// ---------------------------------------------------------
export const obtenerUsuarios = () => {
    return async (dispatch) => {
        try {
            const resp = await getObtenerUsuarios();
            dispatch(obtenerUsuariosOK(resp.data.data));
        } catch (error) {
            showSweetAlertError({
                title: 'Error',
                text: error.message,
            });
        }
    }
}

export const obtenerUsuarioPorId = (id) => {
    return async (dispatch) => {
        try {
            const resp = await getObtenerUsuarioPorId(id);
            dispatch(obtenerUsuarioPorIdOK(resp.data.data));
        } catch (error) {
            showSweetAlertError({
                title: 'Error',
                text: error.message,
            });
        }
    }
}

const obtenerUsuariosOK = (data) => {
    return {
        type: types.ffdObtenerUsuarios,
        payload: data
    }
}

const obtenerUsuarioPorIdOK = (data) => {
    return {
        type: types.ffdObtenerUsuarioPorId,
        payload: data
    }
}

//
export const obtenerCargaInicial = () => {
    return async (dispatch) => {
        try {
            const operationsPromise = getOperations();
            const validDatesPromise = getValidDates();

            const resp = await Promise.all([
                operationsPromise,
                validDatesPromise
            ]);

            const payload = {
                operations: resp[0].data.response.operations,
                validDates: resp[1].data.response
            }

            dispatch({
                type: types.ffd_carga_inicial,
                payload
            });
        } catch (error) {
            showSweetAlertError({
                title: 'Error',
                text: error.message,
            });
        }
    }
}

export const obtenerSummary = (search) => {
    return async (dispatch) => {
        try {
            const resp = await getDetailSummary(search);

            dispatch({
                type: types.ffd_obtener_summary,
                payload: resp.data.response
            });
        } catch (error) {
            showSweetAlertError({
                title: 'Error',
                text: error.message,
            });
        }
    }
}

export const obtenerRanking = (search) => {
    return async (dispatch) => {
        try {
            const resp = await getDetailRanking(search);

            dispatch({
                type: types.ffd_obtener_ranking,
                payload: resp.data.response
            });
        } catch (error) {
            showSweetAlertError({
                title: 'Error',
                text: error.message,
            });
        }
    }
}

export const filtrosBusqueda = (data) => {
    return {
        type: types.ffd_filtros_busqueda,
        payload: data
    }
}
