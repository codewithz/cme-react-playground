import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function PostComponent() {

    const apiEndPoint = 'https://jsonplaceholder.typicode.com/posts'

    const postsList = [
        { id: 1, title: "Title something" },
        { id: 2, title: "Title something" },
        { id: 3, title: "Title something" },
        { id: 4, title: "Title something" },
    ]

    const [posts, setPosts] = useState(postsList)

    useEffect(() => {
        getPosts()
    }, [])

    const getPosts = async () => {

        const promise = axios.get(apiEndPoint)
        console.log(promise)

        const result = await promise;
        const { data } = result
        setPosts(data)
        console.log(result)

    }

    const handleAdd = async () => {
        const newPost = { title: 'My Title', body: 'Body for Blog Post' }
        const result = await axios.post(apiEndPoint, newPost)
        console.log(result)
    }




    return (
        <div>
            <button className='btn btn-primary'
                onClick={handleAdd}
                style={{ marginBottom: 20 }}>
                Add
            </button>

            <table className='table'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map((post) => (
                            <tr key={post.id}>
                                <td>{post.title}</td>
                                <td>
                                    <button className='btn btn-sm btn-warning m-2'>
                                        Update
                                    </button>
                                </td>
                                <td>
                                    <button className='btn btn-sm btn-danger m-2'>
                                        Delete
                                    </button>
                                </td>
                            </tr>

                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
