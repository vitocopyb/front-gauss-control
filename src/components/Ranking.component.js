import React from 'react';
import { useSelector } from 'react-redux';
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const RankingComponent = () => {
    const { detailRanking = [] } = useSelector(state => state.ffd);

    // colores definidos para el progreso circular
    const cssRate = {
        good: {
            rgba: 'rgba(0, 219, 166, 1)',
            hex: '#06c394'
        },
        fair: {
            rgba: 'rgba(246, 185, 27, 1)',
            hex: '#dfa616'
        },
        bad: {
            rgba: 'rgba(240, 94, 109, 1)',
            hex: '#f05e6d'
        }
    };

    return (
        <div>
            <div className="table__container">
                <div className="fw-bold text-center mb-4">Ranking de personas</div>
                <div className={(detailRanking.length) > 2 ? 'table__overflow': ''}>
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="head__width-ranking">N° Ranking</th>
                                <th>Nombre persona</th>
                                <th className="head__width-tasa">Tasa de rechazos FFD</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                detailRanking.map((item, index) => (
                                    <tr key={`ranking-${index}`}>
                                        <td className="row__ranking" align="center" valign="middle">
                                            <div className="row__ranking-text">{item.ranking}</div>
                                        </td>
                                        <td>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div>
                                                    <div className="fw-bold">{item.name}</div>
                                                    <div>Transportista: {item.carrier}</div>
                                                    <div>Operación: {item.operation}</div>
                                                    <div>Planta: {item.plant}</div>
                                                </div>
                                                <div>
                                                    <i className="fas fa-eye fa-lg row__icon"></i>
                                                </div>
                                            </div>
                                        </td>
                                        <td align="center" valign="middle">
                                            <div className="rate__wrapper">
                                                <CircularProgressbar
                                                    value={item.rejectedIndicator.rate}
                                                    text={`${item.rejectedIndicator.rate}%`}
                                                    styles={buildStyles({
                                                        textSize: '1.5rem',
                                                        pathColor: `${cssRate[item.rejectedIndicator.status.toLowerCase()].rgba}`,
                                                        textColor: `${cssRate[item.rejectedIndicator.status.toLowerCase()].hex}`
                                                    })}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
