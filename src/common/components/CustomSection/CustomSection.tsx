import React, {ReactNode} from 'react'
import s from './section.module.css'

type PropsType = {
    title: string
    children: ReactNode
}

export const CustomSection: React.FC<PropsType> = ({children, title}) => {

    return (
        <div className={s.customSection}>
            <div className={s.sectionTitle}>
                <h2>{title}</h2>
            </div>
            {children}
        </div>
    )
}