import React, { useState } from 'react'

export default function FormBook() {
    const [JudulForm, setJudulForm] = useState(null)
    const [KontenForm, setKontenForm] = useState(null)

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
                                className={`border w-full h-[2.25rem] px-2 rounded-md ${!JudulForm ? 'border-red-500 focus:outline-red-500' : 'focus:outline-none'}`}
                                onChange={(e) => {
                                    setJudulForm(e.target.value)
                                }}
                            />
                            {!JudulForm &&(
                                <div className='text-sm text-red-500'>
                                    Field ini tidak boleh kososng!
                                </div>
                            )}
                        </div>
                    </div>

                    <div className='px-6 py-4'>
                        <div>
                            <label className='block capitalize mb-[2px]'>konten</label>
                            <input
                                className={`border w-full h-[2.25rem] px-2 rounded-md ${!KontenForm ? 'border-red-500 focus:outline-red-500' : 'focus:outline-none'}`}
                                onChange={(e) => {
                                    setKontenForm(e.target.value)
                                }}
                            />
                            {!KontenForm && (
                                <div className='text-sm text-red-500'>
                                    Field ini tidak boleh kososng!
                                </div>
                            )}
                        </div>
                    </div>

                    <div className='px-6 py-4 flex'>
                        <button
                            disabled={!(JudulForm && KontenForm)}
                            className={`rounded-lg text-white h-[2.25rem] px-[.5rem] ml-auto pb-[3px] ${!(JudulForm && KontenForm) ? 'bg-gray-400' : 'bg-sky-500'}`}
                        >Simpan</button>
                    </div>
                </div>
            </form>
        </div>
    </>)
}