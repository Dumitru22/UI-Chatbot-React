import React, { FC } from 'react';
import './ErrorPage.css'

function ErrorPage (props: any){
    return (
        <div className='container'>
            <div className='error'>{props.errorName}</div> 
            <div className="status"><b>{props.status}</b></div>
        </div>
    )
}

export default ErrorPage;
