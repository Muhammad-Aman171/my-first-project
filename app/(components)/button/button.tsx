import React from 'react'
import { ButtonProps } from '@/types/availbilityTypes'
import css from './button.module.css'

export default function Button(props:ButtonProps) {
  return (
    <div className={css.btn}>
        <button><b>{props.btnHeading}</b></button>
    </div>
  )
}
