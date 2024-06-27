import React from 'react'
import Css from './homebody.module.css'
import Button from '../button/button'
import { HomePageProps } from '@/types/availbilityTypes'




export default function HomeBody( props:HomePageProps) {
    return (
        <div>


                <div className={Css.telemetry}>
                    <h1>
                        {props.h1Heading}
                    </h1>
                    <p> {props.paragraph} </p>
                    <Button btnHeading={props.btnHeading} />
                </div>


        </div>
    )
}
