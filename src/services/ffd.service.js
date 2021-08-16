import axios from 'axios';

const apiFFD = axios.create({
    baseURL: 'https://pg.gausscontrol.com:8020/ffd'
});

export const getOperations = () => {
    return apiFFD.get(`/operations`);
}

export const getValidDates = () => {
    return apiFFD.get(`/validDates`);
}

export const getDetailSummary = (search) => {
    const {operation, start, end} = search; 
    const params = {};

    if (operation !== '') { params.operation = operation; }
    if (start !== '') { params.start = start; }
    if (end !== '') { params.end = end; }

    return apiFFD.get(`/detail/summary`, { params });
}

export const getDetailRanking = (search) => {
    const {operation, start, end} = search; 
    const params = {};

    if (operation !== '') { params.operation = operation; }
    if (start !== '') { params.start = start; }
    if (end !== '') { params.end = end; }

    return apiFFD.get(`/detail/ranking`, { params });
}
