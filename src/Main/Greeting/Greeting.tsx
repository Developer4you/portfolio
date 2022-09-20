import React from 'react';
import s from './Greeting.module.css'
import stylesApp from '../../Container.module.css'
import mainPhoto from './myPhoto2.png'
import HtmlCssIcon from './HtmlCssIcon.png'
import JS_logo_large from './JS-logo-large-2.png'
import reactlogo from './logo192.png'

function Greeting() {
    return (
        <div id="main" className={s.wrapp}>
            <div className={`${s.greeting} ${stylesApp.container}`}>
                <div className={s.block}> </div>
                <div className={s.greeting_text}>
                    <div className={s.text_box}>
                        <h2>Hello! <br/>I'm <span className={s.myName}>Andrey</span> Averkin</h2>
                        <hr/>
                        <h3>Front-end Developer</h3>
                        <hr/>
                    </div>
                    <div className={s.iconsBlock}>
                        <img className={s.htmlCss} src={HtmlCssIcon} alt="html&css"/>
                        <img className={s.js} src={JS_logo_large} alt="js"/>
                        <img className={s.react} src={reactlogo} alt="react"/>
                    </div>
                </div>

                    <img className={s.greeting_photo} src={mainPhoto} alt="It's me"/>

            </div>
        </div>
    );
}

export default Greeting;
