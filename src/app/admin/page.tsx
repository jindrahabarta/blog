'use client'
import useFetchCollection from '../_utils/useFetchCollection'

import {
    CollectionReference,
    DocumentData,
    deleteDoc,
    doc,
} from 'firebase/firestore'
import useDb from '../_utils/useDb'

const Admin = () => {
    const db = useDb()
    const { data: blogs, loaded, error } = useFetchCollection('blogs')

    const handleDelete = async (id: any) => {
        await deleteDoc(doc(db, 'blogs', id))
    }

    return (
        <main className="flex flex-col gap-2 items-center pt-10">
            <h1 className="font-bold">Admin page</h1>

            {loaded ? (
                blogs.length > 0 ? (
                    <div className="border-gray-200 shadow-sm shadow-gray-200 bg-white flex flex-col p-4 gap-2 w-96">
                        {blogs.map((blog: any) => (
                            <div
                                className="flex justify-between items-center"
                                key={blog.id}
                            >
                                <div>
                                    <h1>{blog.title}</h1>
                                    <p className=" text-gray-500 text-xs">
                                        {blog.author}
                                    </p>
                                </div>

                                <div
                                    onClick={() => handleDelete(blog.id)}
                                    className="group h-4 w-4 flex flex-col justify-center hover:gap-0 gap-0.5 items-center rounded-lg bg-red-300 hover:bg-red-500 shadow-sm shadow-gray-400 hover:shadow-inner hover:cursor-pointer duration-200"
                                >
                                    <div className=" group-hover:rotate-45 w-3 h-0.5 rounded-md bg-black duration-200"></div>
                                    <div className="group-hover:-rotate-45 w-3 h-0.5 rounded-md bg-black duration-500"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>There is no blog</p>
                )
            ) : (
                <p>Loading...</p>
            )}
        </main>
    )
}

export default Admin
function deletteDoc(arg0: CollectionReference<DocumentData, DocumentData>) {
    throw new Error('Function not implemented.')
}
