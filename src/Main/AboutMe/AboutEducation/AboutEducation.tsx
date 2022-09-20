import {AboutContentBox} from '../AboutContentsBox/AboutContentsBox';
import s from '../about.module.css';
import BelSUT from './BelSUT.jpg';
import certificate from './Сertificate.jpg';
import englishIcon from './b1.jpg';
import rs from './rs.jpg';
import incubator from './incubator.jpg';
import {Link} from 'react-router-dom';

function AboutEducation() {
    return (
        <AboutContentBox>
            <img className={s.image} src={BelSUT} alt="BelSUT"/>
            <p className={s.text}>
                Electrical Engineer (Belarusian State University of Transport)
                Engineer for the Prevention and Elimination of Emergency Situations (Institute of Retraining and
                Advanced Training of the Ministry of Emergency Situations of the Republic of Belarus)
                Head (project manager in construction) (training courses with the issuance of a certificate)
                Specialist in the field of public procurement and procurement at the expense of organizations ‘ own
                funds (training courses, work experience, implementation of international technical assistance
                projects).
            </p>
            <img className={s.image} src={englishIcon} alt="English"/>
            <p className={s.text}>
                Self-study of HTML, CSS using documentation, videos and on the freeCodeCamp website, solving test tasks
                Self-study of Javascript using documentation and videos, solving test tasks
            </p>
            <img className={s.image} src={certificate} alt="Сertificate"/>
            <p className={s.text}>

                Internal courses of Clevertech company from January 2021 to June 2021 with project protection using JS,
                React.
            </p>
            <img className={s.image} src={rs} alt="RS-School"/>
            <p className={s.text}>
                Training at RS-School from September 2021 to February 2022
            </p>
            <img className={s.image} src={incubator} alt="It-incubator"/>
            <p className={s.text}>
                Training in the IT-Incubator from August 2021
            </p>
            {/*<nav className={s.navbar}>*/}
            {/*    <Link to="/">About</Link>*/}
            {/*    <Link to="/Skills">Skills</Link>*/}
            {/*</nav>*/}
        </AboutContentBox>
    )
}

export default AboutEducation;