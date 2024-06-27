import React from 'react'
import css from './bubbles.module.css'

export default function Bubbles() {
  return (
    <div className={css.span}>
        <div className={css.circle}></div>
        <div className={css.circle}></div>
        <div className={css.circle}></div>

    </div>
  )
}
