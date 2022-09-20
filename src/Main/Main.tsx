import React from 'react';
import s from './Main.module.css'
import Greeting from './Greeting/Greeting';
import WorksPage from './WorksPage/WorksPage';
import TeleworkPage from './Telework/TeleworkPage';
import ContactsPage from './Contacts/ContactsPage';
import AboutMe from './AboutMe/AboutMe';

function Main(props:any) {
    return (
        <main className={s.main}>
            <section className={s.section}>
                    <Greeting />
            </section>
            <section className={s.section}>
                <AboutMe />
            </section>
            <section >
                <WorksPage/>
            </section>
            <section className={s.section}>
                <TeleworkPage/>
            </section>
            <section className={s.section}>
                <ContactsPage/>
            </section>


        </main>
    );
}

export default Main;
