import React from 'react'
import { Link } from 'react-router-dom'

const GPS_GN = () => {
    return (
        <div className='in-screen border'>
            <div className='blocks padding-0-5 margin-01 letter-spacing-1'>
                <div className='block-left border margin-r-2 block-30'>
                    <div className='menu-head margin-b-05'>Use GNSS</div>
                    <div className='block-checks flex-colum'>
                        <div className='check margin-b-05'>
                            <input 
                                type="checkbox" 
                                value='value1'
                                className='ctrl'
                            /> GPS
                        </div>
                        <div className='check margin-b-05'>
                            <input 
                                type="checkbox" 
                                className='ctrl'
                                value='value1'
                            /> GLONASS
                        </div>
                        <div className='check margin-b-05'>
                            <input 
                                type="checkbox" 
                                className='ctrl'
                                value='value1'
                            /> S BAS
                        </div>
                    </div>
                </div>
                <div className='block-right block-65 letter-spacing-2 border padding-05 '>
                    <div className='menu-head margin-b-05'>Use diff.corr.</div>
                    <div className='block-checks flex-colum'>
                        <div className='check margin-b-05'>
                            <input 
                                type="checkbox" 
                                value='value1'
                                className='ctrl'
                            /> from S BAS
                        </div>
                        <div className='check margin-b-05'>
                            <input 
                                type="checkbox" 
                                className='ctrl'
                                value='value1'
                            /> from beacon
                        </div>
                    </div>
                </div>
            </div>
            <div className='in-para in-main padding-05 margin-b-05 padding-r-2 margin-01'>
                <div className='classform'>
                    <span className='form-name ctrl'>Baud rate</span>
                    <select className='form-input select-bold'>
                        <option value="evem">2400</option>
                        <option value="odd">4800</option>
                        <option selected value="none">9600</option>
                    </select>
                </div>
                <div className='classform'>
                    <span className='form-name ctrl'>Parity</span>
                    <select className='form-input select-bold'>
                        <option selected value="evem">Even</option>
                        <option value="odd">Odd</option>
                        <option value="none">none</option>
                    </select>
                </div>
                <div className='classform flex-end margin-t-2 margin-bt-75'>
                    <Link to='/' className='border-0'>
                        ok
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default GPS_GN
