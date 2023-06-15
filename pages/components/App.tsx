import React from 'react';
import Timer from './Timer'
import Controls from './Controls'

export default function App(){
    return (
    <div className="relative bg-no-repeat bg-center bg-fixed bg-cover h-screen w-full bg-[url('/images/sakura.jpg')]">
      <div className = "bg-black h-screen w-full bg-opacity-20 flex flex-col items-center justify-center px-8">

        <Timer />
      </div>
    </div>
    )
}

