import React from 'react';
import { useSelector } from 'react-redux';
import { cloneObject } from '../shared/utils';

export const SummaryComponent = () => {
    const { detailSummary } = useSelector(state => state.ffd);
    const { rejectedIndicator, evolution, distribution } = detailSummary;

    // asigna color segun el status
    const cssCircleBg = rejectedIndicator?.status.toLowerCase() || '';
    const cssCircleBorder = `${rejectedIndicator?.status.toLowerCase()}__border` || '';

    // calcula porcentaje relacionado a la distribucion
    let totalDistribution = 0;
    let cloneDistribution = [];
    if (distribution) {
        cloneDistribution = cloneObject(distribution);
        cloneDistribution.map(item => totalDistribution += item.quantity);
        cloneDistribution.map(item => {
            item.state = item.state.toLowerCase();
            item.percentage = (totalDistribution === 0) ? 0 : Math.round((item.quantity / totalDistribution) * 100);
            return item;
        });
    }

    // ---------------------------------------------------------
    // FIXME: ELIMINAR
    // ---------------------------------------------------------
    console.log('totalDistribution', totalDistribution);
    console.log('distribution', distribution);
    console.log('cloneDistribution', cloneDistribution);

    return (
        <div>
            <div className="d-flex mb-5">
                <div className="me-3">
                    <span className="border__red circle__evolution">
                        <i className="fas fa-arrow-up"></i> {evolution?.difference}%
                    </span>
                    <div className="d-flex flex-column align-items-center me-4 circle__container">
                        <div className={`d-flex justify-content-center align-items-center circle__wrapper ${cssCircleBg} ${cssCircleBorder}`}>
                            <span>{rejectedIndicator?.rate}%</span>
                        </div>
                        <div className="mt-2">
                            Tasa de rechazo FFD del período
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column justify-content-end bar__container">
                    <div className="progress bar__wrapper">
                        {
                            cloneDistribution.map((item) => (
                                <div
                                    key={`progress-${item.state}`}
                                    className={`progress-bar ${item.state}`}
                                    role="progressbar"
                                    style={{ width: `${item.percentage}%` }}
                                    aria-valuenow={item.percentage}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            ))
                        }
                    </div>

                    <div className="mt-2">
                        Distribución resultados de FFD del período
                    </div>
                </div>
            </div>

            {/* TODO: ELIMINAR */}
            {/* <ul>
                {
                    distribution && distribution.map((item) => (
                        <li key={item.state}>{item.state}, {item.quantity}</li>
                    ))
                }
            </ul> */}

            <div className="mb-5">
                <div className="main__text-help">
                    * Rechazo: Se refiere a la(s) ocasion(es) en que uno o varios individuos fueron
                    evaluados como NO APTOS para trabajar a través del cálculo de FITNESS FOR DUTY.
                </div>
                <hr className="m-0" />
            </div>
        </div>
    )
}
