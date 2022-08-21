import React from 'react'
import Project from './project'

const Projects = () => {
    return (
        <div className='projects'>
            <div className='projects__content'>
                <h2 className='projects__title'>Some Things I’ve Built</h2>

                <ul className='projects__list'>
                    {[1, 2, 4, 5].map(() => <Project />)}
                </ul>
            </div>
        </div>
    )
}

export default Projects