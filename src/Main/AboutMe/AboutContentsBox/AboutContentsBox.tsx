import React, {ReactNode} from 'react';
import s from './aboutContentsBox.module.css';

type PropsType = {
    children: ReactNode
}

export const AboutContentBox: React.FC<PropsType> = ({children}) => {

    return (
        <div className={s.box}>
            {children}
        </div>
    )
}