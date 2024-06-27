import React from 'react';
import Css from './careersFacility.module.css';
import {CareersTypes} from '@/types/careersTypes'

import Button from '@/app/(components)/button/button'

export default function CareersFacility(props:CareersTypes) {
  return (
    <div>
      <div className={Css.facility}>
        <div className={Css.heading}>
          <h1><b>{props.heading}</b></h1>
          <p>{props.paragraph}</p>
        </div>
        <Button btnHeading="Apply" />
      </div>
    </div>
  );
}
