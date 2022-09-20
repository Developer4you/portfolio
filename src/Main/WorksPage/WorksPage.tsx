import React from 'react';
import s from './WorksPage.module.css'
import stylesApp from '../../Container.module.css'
import Work from './Works/Work';


function WorksPage() {
    return (
        <div id="works" className={`${s.worksPages} ${stylesApp.container}`}>
            <div className={s.worksPages_text}>
                <h2>My works </h2>
            </div>
            <div className={s.worksBox}>
                <Work />
                <Work />
            </div>
        </div>
    );
}

export default WorksPage;
