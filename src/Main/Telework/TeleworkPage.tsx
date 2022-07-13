import React from 'react';
import s from './TeleworkPage.module.css'
import stylesApp from '../../Container.module.css'

function TeleworkPage() {
    return (
        <div className={`${s.teleworkPages} ${stylesApp.container}`}>
            <div className={s.worksPages_text}>
                <h2>Considering remote work options </h2>
                <button>Hire me</button>
            </div>
        </div>
    );
}

export default TeleworkPage;
