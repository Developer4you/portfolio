import React from 'react';
import s from './Work.module.css'


function Work() {
    return (
        <div className={s.work}>
            <div className={s.work_imgBox}>
                <img className={s.work_photo} src="logo192.png" alt="work"/>
            </div>
            <div className={s.work_text}>
                <h2>Work</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aut eligendi est excepturi fuga hic,
                    libero nulla quaerat quas reiciendis sed sunt totam vero voluptatem.
                    Natus placeat quidem sint sit ut.</p>
            </div>
        </div>
    );
}

export default Work;
