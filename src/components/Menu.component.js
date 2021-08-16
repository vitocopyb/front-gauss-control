import React from 'react';
import logo from '../assets/img/logo-gauss-control.png';

export const MenuComponent = () => {
    return (
        <div className="d-none d-md-block menu__container">
            {/* LOGO */}
            <div className="d-flex justify-content-center mt-3">
                <img src={logo} alt="logo" className="menu__logo" />
            </div>

            {/* MENU-ITEMS */}
            <div className="mt-4">
                <div className="menu__item menu__item-bg-active">
                    <div className="d-flex justify-content-between align-items-center ">
                        <div>
                            <i className="far fa-thumbs-up fa-lg me-3"></i>
                            <span className="text__active">Fitness for duty</span>
                        </div>
                        <i className="fas fa-caret-right mt-1"></i>
                    </div>
                    <div className="menu__sub-item">Resumen</div>
                    <div className="menu__sub-item text__active">Detalle</div>
                    <div className="menu__sub-item">Personas</div>
                    <div className="menu__sub-item">Resultados</div>
                </div>
                <div className="d-flex justify-content-between align-items-center menu__item">
                    <div>
                        <i className="fas fa-cog fa-lg me-3"></i>
                        <span>Gestión de datos</span>
                    </div>
                    <i className="fas fa-caret-right mt-1"></i>
                </div>
            </div>
        </div>
    )
}
