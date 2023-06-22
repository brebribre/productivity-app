import React from 'react';
import Icon from './icon'

export default function About(){
    return (
        <div>
            <p className = "text-gray-400 text-sm mr-6">
            Have feature requests, or an issue to report? 
            Feel free to write me an email or contact me on Linkedin!
            </p>
            <p className = "text-gray-400 text-sm mt-4">Don&apos;t forget to check out my other works in my <a className = "text-blue-400 underline" href="https://portfolio-brebribre.vercel.app/" target="_blank">personal website</a> also!</p>
            <p className ="mt-4 text-blue-300 text-sm"><span className = "mr-1">&#9993;</span> alvinbryan78@gmail.com</p>
            <div className = "flex mt-5">
                <div className = "flex-initial mr-4">
                    <Icon src="linkedin.svg" url = "https://www.linkedin.com/in/bryan-alvin-b652581b7/"/>
                </div>
                <div className = "flex-initial">
                    <Icon src="github.svg" url = "https://github.com/brebribre"/>
                </div>
            </div>
            
        </div>
    )
}