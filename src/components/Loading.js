import React from 'react'
import loading from './loading.gif'

const Loading = () => {
    return (
        <>
            <img src={loading} alt="Loading..." style={{width: '200px', display: 'block', margin: 'auto'}}/>
        </>
    )
}
export  default Loading;