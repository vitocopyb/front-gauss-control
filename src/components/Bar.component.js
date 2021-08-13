import React from 'react';
import { cloneObject } from '../shared/utils';

export const BarComponent = (props) => {
    const { detailSummary } = props;
    const { distribution } = detailSummary;

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
    return (
        <div>
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
    )
}
