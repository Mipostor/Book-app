import React, { useState } from 'react'

export default function IndexPage() {
  const [FormBook, setFormBook] = useState(null)

  return (
    <div className='container mx-auto'>
      <div>
        <label htmlFor="title" className='block'>Judul Buku</label>
        <input 
          id='title'
          name='title'
          className='border'
          onChange={(e) => {
            setFormBook(e.target.value)
          }}
        />
      </div>
      <div>
        {FormBook}
      </div>
    </div>
  )
}
