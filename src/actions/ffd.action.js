import { types } from '../reducers/types';
import { getDetailRanking, getDetailSummary, getOperations, getValidDates } from '../services/ffd.service';
import { showSweetAlertError } from '../shared/utils';
import { responseOk } from './respose.action';

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

            dispatch(setCargaInicial(payload));
        } catch (error) {
            showSweetAlertError({
                title: 'Error',
                text: error.message,
            });
        }
    }
}

export const setCargaInicial = (payload) => {
    return {
        type: types.ffd_carga_inicial,
        payload
    }
}

export const obtenerSummary = (search) => {
    return async (dispatch) => {
        try {
            const resp = await getDetailSummary(search);
            dispatch(setSummary(resp.data.response));
        } catch (error) {
            showSweetAlertError({
                title: 'Error',
                text: error.message,
            });
        }
    }
}

export const setSummary = (response) => {
    return {
        type: types.ffd_obtener_summary,
        payload: response
    }
}

export const obtenerRanking = (search) => {
    return async (dispatch) => {
        try {
            const resp = await getDetailRanking(search);
            dispatch(setRanking(resp.data.response));
            dispatch(responseOk());
        } catch (error) {
            showSweetAlertError({
                title: 'Error',
                text: error.message,
            });
        }
    }
}

export const setRanking = (response) => {
    return {
        type: types.ffd_obtener_ranking,
        payload: response
    }
}

export const filtrosBusqueda = (data) => {
    return {
        type: types.ffd_filtros_busqueda,
        payload: data
    }
}
