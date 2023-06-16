import React from 'react';
import Timer from './Timer'
import Controls from './Controls'

export default function App(){
    return (
    <div className="bg-wrapper bg-no-repeat bg-center bg-fixed bg-cover bg-[url('/images/bg1.jpeg')]">
      <div className = "bg-black h-screen w-full bg-opacity-20 flex flex-col items-center justify-center">

        <Timer />
      </div>
    </div>
    )
}

