import React from 'react'
import Link from 'next/link'

import Button from '../button/button'
import css from './navbar.module.css'


export default function Navbar() {
    return (
        <div className={css.navbar}>
            <div className={css.heading}>
                <h1><Link href="/" >scoot</Link></h1> 
                <ul>
                    <li><b><Link href="/about">About</Link></b></li>
                    <li><b><Link href="/locations">Location</Link></b></li>
                    <li><b><Link href="/careers">Careers</Link></b></li>
                </ul>
            </div>
            <Button btnHeading="Get Scootin"/>
        </div>
    )
}
