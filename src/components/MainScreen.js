import React from 'react'

const MainScreen = () => {
    return (
        <div className='main-screen'>
            <div className='coordinates'>
                <span className='value longitude'>49*59`07.18``</span>
                <span className='direction'>N</span>
            </div>
            <div className='coordinates'>
                <span className='value latitude'>008*42`18.10``</span>
                <span className='direction'>W</span>
            </div>
        </div>
    )
}

export default MainScreen
