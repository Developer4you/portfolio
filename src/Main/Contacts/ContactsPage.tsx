import React from 'react';
import s from './ContactsPage.module.css'
import stylesApp from '../../Container.module.css'

function ContactsPage() {
    return (
        <div className={`${s.contactsPages} ${stylesApp.container}`}>
            <div className={s.contactsPages_text}>
                <h2>My contacts </h2>
            </div>
            <form className={s.form} action="">
                <input type="tel"/>
                <input type="email"/>
                <textarea/>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default ContactsPage;