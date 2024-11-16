import React from 'react'
import Image from 'next/image'

import Css from './aboutCard.module.css'
import {aboutCardProps} from '@/types/aboutTypes'




export default function AboutCard(props:aboutCardProps) {
  return (
    <div className={Css.card}>
      <Image
        src={props.src}
        alt="Bitmapimg 8 does not show"
        id={Css.bitmapimg8}
      />
      <div className={Css.count}>
        <h1>{props.count}</h1>
      </div>
      <div className={Css.heading}>
        <h1>{props.heading}</h1>
      </div>
      <div className={Css.paragraph}>
        <p>{props.paragraph}</p>
      </div>

    </div>
  )
}
