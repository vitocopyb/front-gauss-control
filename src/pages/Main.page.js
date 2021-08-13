import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { obtenerCargaInicial } from '../actions/ffd.action';
import { MenuComponent } from '../components/Menu.component';
import { NavbarComponent } from '../components/Navbar.component';
import { RankingComponent } from '../components/Ranking.component';
import { SummaryComponent } from '../components/Summary.component';

export const MainPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(obtenerCargaInicial());
    }, [dispatch]);

    return (
        <div className="d-flex">
            {/* MENU */}
            <MenuComponent />

            {/* MAIN */}
            <div className="flex-fill d-flex flex-column">
                {/* NAVBAR */}
                <NavbarComponent />

                {/* CONTENIDO */}
                <div className="flex-fill main__container">
                    <SummaryComponent />
                    <RankingComponent />
                </div>
            </div>
        </div>
    )
}
