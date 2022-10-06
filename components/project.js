/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Project = () => {
    return (
        <div className='project'>
            <img alt='' className='project__img' src='https://img.freepik.com/free-vector/startup-life-concept-illustration_114360-1068.jpg?w=1380&t=st=1661123242~exp=1661123842~hmac=a5c37a03cbf73a24b4f1b0b65126d88b75bb9c786c18da7f3bc07d37a41e4955' />
            <div className='project__content'>
                <h1 className='project__title'>Portafolio</h1>
                <div className='project__tags-container'>
                    <p className='project__year'>2022</p>
                    <p className='project__tags'>React  Next.js  Verce  Sass</p>
                </div>
                <p className='project__description'>Led the full design process on a multi million dollar domain for a fintech company that is redefining the world of payments</p>
            </div>
        </div>
    )
}

export default Project