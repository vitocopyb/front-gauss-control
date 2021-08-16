import React from 'react';
import { useSelector } from 'react-redux';
import { BarComponent } from './Bar.component';
import { CircleComponent } from './Circle.component';

export const SummaryComponent = () => {
    const { detailSummary } = useSelector(state => state.ffd);

    return (
        <div>
            <div className="row mb-4">
                <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                    <div className="me-4">
                        <CircleComponent detailSummary={detailSummary}/>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-8 col-xl-9 d-flex flex-column justify-content-end">
                    <div className="mt-4 bar__container">
                        <BarComponent detailSummary={detailSummary} />
                    </div>
                </div>
            </div>

            <div className="mb-4">
                <div className="main__text-help">
                    * Rechazo: Se refiere a la(s) ocasion(es) en que uno o varios individuos fueron
                    evaluados como NO APTOS para trabajar a través del cálculo de FITNESS FOR DUTY.
                </div>
                <hr className="m-0" />
            </div>
        </div>
    )
}
