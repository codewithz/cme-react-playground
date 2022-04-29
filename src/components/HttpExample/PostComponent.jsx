import React, { useState, useEffect } from 'react'
import http from '../services/HttpService'
import config from '../../config.json'
import otherConfig from '../../otherConfig.json'

export default function PostComponent() {

    // const apiEndPoint = 
    const { apiEndPoint } = config

    const apiEndPoint1 = otherConfig.apiEndPoint;

    const abc = config.apiEndPoint;

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

        const promise = http.get(apiEndPoint)
        console.log(promise)

        const result = await promise;
        const { data } = result
        setPosts(data)
        console.log(result)

    }

    const handleAdd = async () => {
        const newPost = { title: 'My Title', body: 'Body for Blog Post' }
        const result = await http.post(apiEndPoint, newPost)
        console.log(result)
        console.log("Status:", result.status)
        console.log("Data:", result.data)
        const addedPost = result.data
        const postsClone = [addedPost, ...posts]
        setPosts(postsClone)
    }

    const handleUpdate = async (post) => {
        try {
            post.title = "Updated Post Title for Post-" + post.id

            const promise = http.put(`${apiEndPoint}/${post.id}`, post)
            const result = await promise;

            const postsClone = [...posts]
            const index = postsClone.indexOf(post)
            postsClone[index] = { ...post }
            setPosts(postsClone)
        }
        catch (error) {
            console.log(error)
            //  Expected Error (404:not found, 400: bad message) -- Client
            // --> Display a specific error message
            if (error.response && error.response.status === 404) {
                alert("This post is already deleted")
            }
        }
    }

    const handleDelete = async (post) => {
        try {
            const promise = http.delete(`${apiEndPoint}/${post.id}`)
            const result = await promise;

            console.log(result)

            const updatedPosts = posts.filter(p => p.id !== post.id)
            setPosts(updatedPosts)
        }
        catch (error) {
            console.log(error)
            //  Expected Error (404:not found, 400: bad message) -- Client
            // --> Display a specific error message
            if (error.response && error.response.status === 404) {
                alert("This post is already deleted")
            }

            // Unexpected Error (Network Down, Server Down, DB Down, Bug) - Server Side Errors
            // --> Log It
            // --> Display a generic message
            // else {
            //     console.log("Logging the error:", error)
            //     alert("Something went wrong!!")
            // }
            // Handled Globally
        }
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
                                    <button
                                        className='btn btn-sm btn-warning m-2'
                                        onClick={() => handleUpdate(post)}
                                    >
                                        Update
                                    </button>
                                </td>
                                <td>
                                    <button className='btn btn-sm btn-danger m-2'
                                        onClick={() => handleDelete(post)}
                                    >
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
