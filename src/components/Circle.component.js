import React from 'react';

export const CircleComponent = (props) => {
    const { detailSummary } = props;
    const { rejectedIndicator, evolution } = detailSummary;

    // asigna color segun el status
    const cssCircleBg = rejectedIndicator?.status.toLowerCase() || '';
    const cssCircleBorder = `${rejectedIndicator?.status.toLowerCase()}__border` || '';

    // asigna color segun la evolucion
    const cssTextColor = evolution?.meaning.toLowerCase() || '';

    // asigna direccion de la evolucion
    let directionArrow = '';
    if (evolution?.trend) {
        switch (evolution?.trend.toLowerCase()) {
            case 'increase':
                directionArrow = 'fa-arrow-up';
                break;
            case 'decrease':
                directionArrow = 'fa-arrow-down';
                break;
            case 'same':
                directionArrow = 'fa-arrows-alt-h';
                break;
            default:
                break;
        }
    }

    return (
        <div>
            <span className={`arrow__evolution ${cssTextColor}__text`}>
                <i className={`fas ${directionArrow}`}></i> {evolution?.difference}%
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
    )
}
