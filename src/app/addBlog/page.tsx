'use client'
import React, { useState } from 'react'
import useDb from '../_utils/useDb'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

const AddBlog = () => {
    const db = useDb()
    const [BlogTitle, setBlogTitle] = useState<string>('')
    const [BlogText, setBlogText] = useState<string>('')
    const [BlogAuthor, setBlogAuthor] = useState<string>('')
    const [Show, setShow] = useState(false)

    const Send = (e: any) => {
        e.preventDefault()

        addDoc(collection(db, 'blogs'), {
            createdAt: serverTimestamp(),
            title: BlogTitle,
            text: BlogText,
            author: BlogAuthor,
        })
        setShow(true)
        setTimeout(() => {
            setShow(false)
        }, 2000)

        console.log('added')
        setBlogTitle('')
        setBlogAuthor('')
        setBlogText('')
    }

    return (
        <main className="flex flex-col gap-2 items-center pt-10">
            <h1 className="font-bold">Add blog form</h1>
            <div className="border-gray-200 border shadow-sm shadow-gray-200 bg-white w-96">
                <div className="w-full h-4 bg-red-200"></div>

                <form className=" p-4" onSubmit={Send}>
                    <table className="w-full">
                        <tbody className="flex flex-col gap-2">
                            <tr>
                                <td className="w-fit pr-2">
                                    <label htmlFor="title">Title:</label>
                                </td>
                                <td className="w-full">
                                    <input
                                        onChange={(e) =>
                                            setBlogTitle(e.target.value)
                                        }
                                        className="outline-none border-b w-1/2 border-black focus:w-full focus:border-red-200 duration-200"
                                        max={25}
                                        min={3}
                                        value={BlogTitle}
                                        required
                                        type="text"
                                        id="title"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="w-fit pr-2">
                                    <label htmlFor="author">Author:</label>
                                </td>
                                <td className="w-full">
                                    <input
                                        onChange={(e) =>
                                            setBlogAuthor(e.target.value)
                                        }
                                        className="outline-none border-b w-1/2 border-black focus:w-full focus:border-red-200 duration-200"
                                        max={10}
                                        min={3}
                                        value={BlogAuthor}
                                        required
                                        type="text"
                                        id="author"
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td className="w-fit pr-2 h-full align-top">
                                    <label
                                        className=" self-start"
                                        htmlFor="text"
                                    >
                                        Text:
                                    </label>
                                </td>
                                <td className="w-full">
                                    <textarea
                                        onChange={(e) =>
                                            setBlogText(e.target.value)
                                        }
                                        id="text"
                                        rows={8}
                                        value={BlogText}
                                        required
                                        className="outline-none border-b border-black w-full focus:border-red-200 duration-200"
                                    ></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td className="flex justify-end">
                                    <input
                                        className=" border border-gray-200 shadow-md shadow-gray-200 px-2 hover:shadow-inner duration-200 hover:cursor-pointer"
                                        type="submit"
                                        value="Odeslat"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    {Show && <p className="w-full   text-end">Sent</p>}
                </form>
            </div>
        </main>
    )
}

export default AddBlog
