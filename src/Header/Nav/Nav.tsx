import React from 'react';
import s from './Nav.module.css'

function Nav() {
  return (
      <ul className={s.ul}>
        <li><a href="#">main</a></li>
        <li><a href="#">skills</a></li>
        <li><a href="#">projects</a></li>
        <li><a href="#">contacts</a></li>
      </ul>
  );
}

export default Nav;
