import React from 'react';
import s from './Skill.module.css'

type PropsType = {
    icon:string
}

function Skill({icon}:PropsType) {
    return (
        <div className={s.skill}>
            <div className={s.skill_imgBox}>
                <img className={s.skill_photo} src={icon} alt="Skill"/>
            </div>
            <div className={s.skill_text}>
                <h2>Skill</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aut eligendi est excepturi fuga hic,
                    libero nulla quaerat quas reiciendis sed sunt totam vero voluptatem.
                    Natus placeat quidem sint sit ut.</p>
            </div>
        </div>
    );
}

export default Skill;
