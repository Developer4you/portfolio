import React from 'react';
import s from './SkillsPage.module.css'
import stylesApp from '../../Container.module.css'
import Skill from './Skill/Skill';


function SkillsPage() {
    return (
        <div className={`${s.skillsPages} ${stylesApp.container}`}>
            <div className={s.skillsPages_text}>
                <h2>My skills </h2>
            </div>
            <div className={s.skillsBox}>
                <Skill icon='HtmlCssIcon.png'/>
                <Skill icon='JS-logo-large-2.png'/>
                <Skill icon='logo192.png'/>
            </div>
        </div>
    );
}

export default SkillsPage;
