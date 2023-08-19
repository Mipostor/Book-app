import React from 'react'

export default function Button({isDisabled, text}) {
  return (
        <button
            disabled={isDisabled}
            className={`rounded-lg text-white h-[2.25rem] px-[.5rem] ml-auto pb-[3px] ${isDisabled ? 'bg-gray-400' : 'bg-sky-500'}`}
        >{text}</button>
  )
}
