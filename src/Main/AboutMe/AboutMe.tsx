import {HashRouter, Link, Route, Routes} from 'react-router-dom'
import s from './about.module.css';
import {CustomSection} from '../../common/components/CustomSection/CustomSection';
import AboutInf from './AboutInf/AboutInf';
import AboutEducation from './AboutEducation/AboutEducation';
import AboutSkills from './AboutSkills/AboutSkills';

function AboutMe() {
    return (

        <div id="aboutMe" className={s.aboutMain}>
            <HashRouter>
                <CustomSection title="About Me">
                    <div className={s.navbar}>
                        <nav className={s.navbar}>
                            <Link to="/">About</Link>
                            <Link to="/Education">Education</Link>
                            <Link to="/Skills">Skills</Link>
                        </nav>
                    </div>
                    <Routes>
                        <Route path="/" element={<AboutInf />} />
                        <Route path="/Education" element={<AboutEducation />} />
                        <Route path="/Skills" element={<AboutSkills />} />
                    </Routes>
                </CustomSection>
            </HashRouter>
        </div>

    )
}

export default AboutMe;