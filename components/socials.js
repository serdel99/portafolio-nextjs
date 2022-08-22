import React from 'react'
import Github from "../assets/github.svg"
import Linkedin from "../assets/linkedin.svg"
import Twitter from "../assets/twitter.svg"

const items = [Github, Linkedin, Twitter]


const Socials = () => {
    return (
        <div className='socials'>
            {items.map((Item) => (
                <a className='socials__item' key={""}>
                    <Item />
                </a>
            ))}
        </div>
    )
}

export default Socials