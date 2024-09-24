import React from 'react'
import './Thank.css'
import { Link } from 'react-router-dom'

export default function Thanku() {
    return (
        <div class="main-content">
            <p class="main-content__body" data-lead-id="main-content-body">
                Thank for shopping,
                <br />
                <Link to="/" className='btn btn-primary'>Continue shopping</Link>
            </p>
        </div>
    )
}
