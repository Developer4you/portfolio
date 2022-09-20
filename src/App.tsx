import React from 'react';
import s from './App.module.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

function App() {

    return (
        <div className={s.app}>
            <div className={s.wrap}>
                <Header />
                <Main />
                <Footer />
            </div>
        </div>
    );
}

export default App;
