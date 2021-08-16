import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import es from "date-fns/locale/es";
import moment from 'moment';
import { filtrosBusqueda, obtenerRanking, obtenerSummary } from '../actions/ffd.action';
import { cargando } from '../actions/respose.action';
import { ToastComponent } from './Toast.component';

// configura a español el datepicker
registerLocale('es', es);

export const NavbarComponent = () => {
    const dispatch = useDispatch();
    const { operations, validDates, search } = useSelector(state => state.ffd);
    const { ok } = useSelector(state => state.response);
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    useEffect(() => {
        dispatch(obtenerSummary(search));
        dispatch(obtenerRanking(search));
        setDateRange([moment(validDates.minDate).toDate(), moment(validDates.maxDate).toDate()]);
    }, [dispatch, search, validDates.minDate, validDates.maxDate]);

    const handleInputChange = (event) => {
        const { target } = event;
        search[target.name] = target.value;
        dispatchSearch(search);
    }

    const handleDateRange = (dates) => {
        if (dates[0] && dates[1]) {
            const start = moment(dates[0]).format('YYYY-MM-DD');
            const end = moment(dates[1]).format('YYYY-MM-DD');

            search.start = start;
            search.end = end;
            dispatchSearch(search);
        }
    }

    const dispatchSearch = (search) => {
        dispatch(cargando());
        dispatch(filtrosBusqueda(search));
        dispatch(obtenerSummary(search));
        dispatch(obtenerRanking(search));
    }

    return (
        <div className="d-flex justify-content-between align-items-center navbar__container">
            <div className="d-flex">
                <div className="row g-3">
                    <div className="col-12 col-sm-6">
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
                    <div className="col-12 col-sm-6">
                        <label htmlFor="txtRange" className="form-label">Fecha</label>
                        <DatePicker
                            id="txtRange"
                            selectsRange={true}
                            startDate={startDate}
                            endDate={endDate}
                            minDate={moment(validDates.minDate).toDate()}
                            maxDate={moment(validDates.maxDate).toDate()}
                            locale="es"
                            onChange={(dates) => {
                                setDateRange(dates);
                                handleDateRange(dates);
                            }}
                            dateFormat="dd/MM"
                            className="form-control"
                        />
                    </div>
                </div>
            </div>
            <div>
                <i className="fas fa-user fa-lg"></i>
            </div>
            {
                (ok) && (
                    <ToastComponent title="Vista actualizada" appearance="success" />
                )
            }
        </div>
    )
}
