import React from 'react'
import Css from './about.module.css'
import Image from 'next/image'

import Bubbles from '../(components)/bubbles/bubbles'
import AboutFaqs from '@/app/(components)/aboutFaqs/aboutFaqs';
import AboutBody from '@/app/(components)/aboutBody/aboutBody'
import AboutCard from '@/app/(components)/aboutCard/aboutCard'
import Bitmapimg6 from '@/public/assets/Bitmap 6.png'
import Bitmapimg7 from '@/public/assets/Bitmap 7.png'
import Bitmapimg11 from '@/public/assets/Bitmap 11.png';
import Bitmapimg9 from '@/public/assets/Bitmap 9.png';
import Bitmapimg10 from '@/public/assets/Bitmap 10.png';

export default function About() {
  return (
    <div>
      <div className={Css.aboutHeader}>
        <h1>
          About
        </h1>
           <Bubbles/>
      </div>
      <div className={Css.aboutBody}>
        <AboutBody Heading="Mobility for the digital era" Paragraph="Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips." />
        <Image
          src={Bitmapimg6}
          alt='bitmap6 does not show'
          id={Css.bitmapimg6}
        />
      </div>
      <div className={Css.aboutBody1}>
        <Image
          src={Bitmapimg7}
          alt='bitmap6 does not show'
          id={Css.bitmapimg7}
        />
        <AboutBody Heading="Better urban living" Paragraph="We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride." />
      </div>
      <div className={Css.aboutCard}>
        <div className={Css.aboutHeading}>
          <h1>Our values</h1>
        </div>
        <div className={Css.aboutCards}>
          <AboutCard src={Bitmapimg11} count='01' heading='Our teach' paragraph='We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!' />
          <AboutCard src={Bitmapimg9} count='02' heading='Our integrity' paragraph='We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.' />
          <AboutCard src={Bitmapimg10} count='03' heading='Our community' paragraph='We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.' />
        </div>
      </div>
      <div className={Css.faqs}>
        <h1>FAQs</h1>
        <AboutFaqs/>
      </div>
    </div>
  )
}
