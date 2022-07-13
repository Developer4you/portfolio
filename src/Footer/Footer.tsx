import React from 'react';
import s from './Footer.module.css'
import styles from '../Container.module.css'

function Footer() {
    return (
        <footer className= {`${s.footer} ${styles.container}`}>
            <div className={s.footer_text}>
                <h4>Andrei Averkin</h4>
            </div>
            <div className={s.wrap}>
                <div className={s.box}></div>
                <div className={s.box}></div>
                <div className={s.box}></div>
                <div className={s.box}></div>
            </div>
            <div className={s.footer_text}>
                <h4>@ 2022</h4>
            </div>
        </footer>
    );
}

export default Footer;
