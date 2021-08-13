import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogin } from '../actions/auth.action';
import { obtenerUsuarioPorId, obtenerUsuarios } from '../actions/ffd.action';
import { removeError, setError } from '../actions/ui.action';

export const TestPage = () => {
    const dispatch = useDispatch();
    // const state = useSelector(state => state);
    const { msgError } = useSelector(state => state.ui);

    // ---------------------------------------------------------
    // TODO: ACA VOY: clase 372 sirve para obtener informacion de la API
    // componentes de ejemplo: https://reactjsexample.com/tag/autocomplete/
    // https://reactjsexample.com/customizable-and-responsive-react-sidebar-library-with-dropdown-menus/
    // ---------------------------------------------------------
    const handleLogin = (email) => {
        if (email !== 'test@test.com') {
            dispatch(setError('El correo no corresponde'));
        } else {
            dispatch(removeError());
            dispatch(startLogin('test@test.com', '987654')); 
        }
    }

    const handleUsuarios = (id) => {
        if (id !== '') {
            dispatch(obtenerUsuarioPorId(id));
        } else {
            dispatch(obtenerUsuarios());
        }
    }
    
    return (
        <div>
            <h1>Test Redux</h1>

            <div className="alert alert-primary" role="alert">
                <i className="fas fa-camera"></i> A simple primary alert {msgError && <span>- {msgError}</span>}
            </div>
            
            <div className="mt-4">
                <button type="button" className="btn btn-danger me-2" onClick={() => handleLogin('test22@test.com')}>Error</button>
                <button type="button" className="btn btn-primary me-2" onClick={() => handleLogin('test@test.com')}>Login</button>
            </div>

            <div className="mt-4">
                <button type="button" className="btn btn-primary me-2" onClick={() => handleUsuarios('')}>Obtener Usuarios</button>
                <button type="button" className="btn btn-success me-2" onClick={() => handleUsuarios('2')}>Obtener Usuario por Id</button>
            </div>

        </div>
    )
}
