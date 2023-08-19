import Button from '@/components/Button'
import React, { useState } from 'react'

export default function FormBook() {
    const [FormBook, setFormBook] = useState({})

    return (<>
        <div className='max-w-xl mt-[4rem] mx-auto'>
            <form>
                <div className='border rounded bg-white shadow-lg'>
                    <div className='px-6 pt-4'>
                        <div className='text-xl'>Form Buku</div>
                    </div>

                    <div className='px-6 py-4'>
                        <div>
                            <label className='block capitalize mb-[2px]'>judul</label>
                            <input
                                className={`border w-full h-[2.25rem] px-2 rounded-md ${!(FormBook.title) ? 'border-red-500 focus:outline-red-500' : 'focus:outline-none'}`}
                                onChange={(e) => {
                                    setFormBook((prev) => {
                                        return {
                                            ...prev,
                                            title: e.target.value
                                        }
                                    })
                                }}
                            />
                            {!(FormBook.title) && (
                                <div className='text-sm text-red-500'>
                                    Field ini tidak boleh kososng!
                                </div>
                            )}
                        </div>
                    </div>

                    <div className='px-6 py-4'>
                        <div>
                            <label className='block capitalize mb-[2px]'>content</label>
                            <input
                                className={`border w-full h-[2.25rem] px-2 rounded-md ${!(FormBook.content) ? 'border-red-500 focus:outline-red-500' : 'focus:outline-none'}`}
                                onChange={(e) => {
                                    setFormBook((prev) => {
                                        return {
                                            ...prev,
                                            content: e.target.value
                                        }
                                    })
                                }}
                            />
                            {!(FormBook.content) && (
                                <div className='text-sm text-red-500'>
                                    Field ini tidak boleh kososng!
                                </div>
                            )}
                        </div>
                    </div>

                    <div className='px-6 py-4 flex'>
                        <Button 
                            isDisabled={!(FormBook.title && FormBook.content)}
                            text={'Save'}
                        />
                    </div>
                </div>
            </form>
        </div>
    </>)
}