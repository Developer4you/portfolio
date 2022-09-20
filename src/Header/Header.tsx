import React from 'react';
import s from './Header.module.css'
import styles from '../Container.module.css'
import Nav from './Nav/Nav';

function Header() {
    return (
        <header className= {`${s.header} ${styles.container}`}>
            <nav className={s.header_nav}>
                <Nav/>
            </nav>
        </header>
    )
}

export default Header;
