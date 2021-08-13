import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filtrosBusqueda, obtenerRanking, obtenerSummary } from '../actions/ffd.action';

export const NavbarComponent = () => {
    const dispatch = useDispatch();
    const { operations, validDates, search } = useSelector(state => state.ffd);

    useEffect(() => {
        dispatch(obtenerSummary(search));
        dispatch(obtenerRanking(search));
    }, [dispatch, search]);

    const handleInputChange = ({target}) => {
        let formValid = true;
        search[target.name] = target.value;

        // valida que la "fecha desde" no sea mayor que "fecha hasta"
        if (target.name === 'start' || target.name === 'end') {
            if (search.start > search.end) {
                formValid = false;
                // ---------------------------------------------------------
                // TODO: agregar SweetAlert
                // ---------------------------------------------------------
                alert('Fecha Desde no puede ser mayor a Fecha Hasta');
            }
        }

        if (formValid) {
            dispatch(filtrosBusqueda(search));
            dispatch(obtenerSummary(search));
            dispatch(obtenerRanking(search));
        }
    }

    return (
        <div className="d-flex justify-content-between align-items-center navbar__container">
            <div className="d-flex">
                <div className="row g-3">
                    <div className="col-md-4">
                        <label htmlFor="selOperations" className="form-label">Operación</label>
                        <select
                            id="selOperations"
                            name="operation"
                            className="form-select"
                            value={search.operation}
                            onChange={handleInputChange}
                        >
                            <option value="">Todos</option>
                            {
                                operations.map((operation, index) => (
                                    <option key={`operation-${index}`} value={operation}>{operation}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="txtStart" className="form-label">Fecha Desde</label>
                        <input
                            type="date"
                            id="txtStart"
                            name="start"
                            className="form-control"
                            value={search.start}
                            min={validDates.minDate}
                            max={validDates.maxDate}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="txtEnd" className="form-label">Fecha Hasta</label>
                        <input
                            type="date"
                            id="txtEnd"
                            name="end"
                            className="form-control"
                            value={search.end}
                            min={validDates.minDate}
                            max={validDates.maxDate}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
            </div>
            <div>
                <i className="fas fa-user fa-lg"></i>
            </div>
        </div>
    )
}
