import {AboutContentBox} from '../AboutContentsBox/AboutContentsBox';
import photo from './Iam.jpg'
import s from '../about.module.css'

function AboutInf() {
    return (
        <AboutContentBox>
            <img src={photo} alt="I am"/>
            <p className={s.text}>
                My goal is to help people by creating cool apps in a team of like-minded people.
                Thanks to perseverance and curiosity, I am constantly developing and learning every day.
            </p>
            <p className={s.text}>
                My goal is to help people by creating cool apps in a team of like-minded people.
                Thanks to perseverance and curiosity, I am constantly developing and learning every day.
            </p>
        </AboutContentBox>
    )
}

export default AboutInf;