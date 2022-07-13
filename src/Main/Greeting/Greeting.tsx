import React from 'react';
import s from './Greeting.module.css'
import stylesApp from '../../Container.module.css'


function Greeting() {
    return (
        <div className={s.wrapp}>
            <div className={`${s.greeting} ${stylesApp.container}`}>
                <div className={s.block}></div>
                <div className={s.greeting_text}>
                    <div className={s.text_box}>
                        <h1>Hello! <br/>I'm <span className={s.myName}>Andrey</span> Averkin</h1>
                        <hr/>
                        <h2>front-end developer</h2>
                        <hr/>

                        {/*<div className={s.absolute}>*/}
                        {/*    Trulialia*/}
                        {/*</div>*/}
                    </div>
                    <div className={s.iconsBlock}>
                        <img className={s.htmlCss} src="HtmlCssIcon.png" alt="html&css"/>
                        <img className={s.js} src="JS-logo-large-2.png" alt="js"/>
                        <img className={s.react} src="logo192.png" alt="react"/>
                    </div>
                </div>

                    <img className={s.greeting_photo} src="myPhoto2.png" alt="My photo"/>

            </div>
        </div>
    );
}

export default Greeting;
