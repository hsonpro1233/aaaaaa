import React from 'react'
import {GiEarthAfricaEurope} from 'react-icons/gi'
import '../Css/Head.css'

const Head = () => {
    return (

        <div className='head'>
            <div className='logo'>
                <GiEarthAfricaEurope className='icon' />
                <div className='text'>PHPB</div>
            </div>
            <div className='dash'></div>
            <div className='text'>asdfg</div>
            <div className='dash'></div>
            <div className='version_name'>AKBA-SOPT-12</div>
        </div>

    )
}

export default Head
