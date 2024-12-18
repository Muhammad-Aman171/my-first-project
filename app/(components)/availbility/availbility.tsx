import React from 'react'
import Image from 'next/image'

import Css from './availbility.module.css'
import { Availbilityprops } from '@/types/availbilityTypes'





export default function Availbility(props: Availbilityprops) {
    const { imgsrc = defaultImage, heading2, paragraph } = props;
    
    return (
        <div>
            <div className={Css.locate}>
                <div className={Css.mobileimg}>
                    <Image
                        src={props.imgsrc}
                        alt='Combined shape img does not show'
                        id={Css.mobileimg}
                    />
                </div>
                <h2><b>{props.heading2}</b></h2>
                <p>{props.paragraph}</p>
            </div>
        </div>
    )
}
