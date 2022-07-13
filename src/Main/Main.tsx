import React from 'react';
import s from './Main.module.css'
import stylesApp from '../Container.module.css'
import Greeting from './Greeting/Greeting';
import SkillsPage from './SkillsPage/SkillsPage';
import WorksPage from './WorksPage/WorksPage';
import TeleworkPage from './Telework/TeleworkPage';
import ContactsPage from './Contacts/ContactsPage';

function Main() {
    return (
        <main className= {s.main}>
            <section className={s.section}>
                <Greeting />
            </section>
            <section className={s.section}>
                <SkillsPage />
            </section>
            <section className={s.section}>
                <WorksPage />
            </section>
            <section className={s.section}>
                <TeleworkPage />
            </section>
            <section className={s.section}>
                <ContactsPage />
            </section>


        </main>
    );
}

export default Main;
