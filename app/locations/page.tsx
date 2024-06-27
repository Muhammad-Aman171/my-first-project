import React from 'react'
import Image from 'next/image'
import Css from './location.module.css'
import Bubbles from '../(components)/bubbles/bubbles'
import Bitmapimg14 from '@/public/assets/Bitmap 14.png'
import Button from '../(components)/button/button'


export default function Locatios() {
  return (
    <div>
      <div className={Css.locationHeader}>
        <h1>Locations</h1>
        <Bubbles/>
      </div>
      <Image
        src = {Bitmapimg14}
        alt="bitmapimg 14 does not show"
        id={Css.bitmapimg14}
      />
      <div className={Css.contactCard}>
        <h1><b>Your City Not Listed?</b></h1>
        <p>If you’d like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches based on demand. Feel free to message us by clicking the link or messaging us on social.</p>
        <Button btnHeading="Message Us"/>
      </div>
    </div>
  )
}
