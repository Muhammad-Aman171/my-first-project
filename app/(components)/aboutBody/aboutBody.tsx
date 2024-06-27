import React from 'react'
import Css from './aboutBody.module.css'
import { aboutBodyprops } from '@/types/aboutTypes'


export default function aboutBody(props: aboutBodyprops) {
    return (
        <div className={Css.aboutBody}>
            <div className={Css.aboutHeading}>
                <h1>{props.Heading}</h1>
                <p> {props.Paragraph} </p>
            </div >
        </div>
    )
}
