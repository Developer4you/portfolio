import React from 'react';
import s from './Nav.module.css'

function Nav() {
  return (
      <ul className={s.ul}>
        <li><a href="#main">main</a></li>
        <li><a href="#aboutMe">about Me</a></li>
        <li><a href="#works">works</a></li>
        <li><a href="#contacts">contacts</a></li>
      </ul>
  );
}

export default Nav;
