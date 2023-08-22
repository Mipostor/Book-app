import React from 'react'

export default function Field({label, isDisable, text, change}) {
  return ( <div>
    <label className='block capitalize mb-[2px]'>{label}</label>
    <input
        className={`border w-full h-[2.25rem] px-2 rounded-md ${isDisable ? 'border-red-500 focus:outline-red-500' : 'focus:outline-none'}`}
        onChange= {change}
    />
    {isDisable && (
        <div className='text-sm text-red-500'>
            {text}
        </div>
    )}
</div>

  )
}
