import React from 'react'
import '../components/Page.css'

const Page = () => {
    return (
        <>
            <div className='container'>
                <div className='card'>
                    <div className='img-box'>
                        <img alt='' src='/images/pic1.jpeg' />
                    </div>
                    <div className='card-body'>
                        <h4 className='card-title'>John Doe</h4>
                        <p className='card-text'>Some example text.</p>
                    </div>
                </div>
                <div className='card'>
                    <div className='img-box'>
                        <img alt='' src='/images/download.jpeg' />
                    </div>
                    <div className='card-body'>
                        <h4 className='card-title'>John Doe</h4>
                        <p className='card-text'>Some example text.</p>
                    </div>
                </div>
                <div className='card'>
                    <div className='img-box'>
                    <img alt='' src='/images/pic.jpeg' />
                    </div>
                    <div className='card-body'>
                        <h4 className='card-title'>John Doe</h4>
                        <p className='card-text'>Some example text.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page;




