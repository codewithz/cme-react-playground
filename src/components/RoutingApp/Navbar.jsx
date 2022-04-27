import React from 'react'

export default function Navbar() {
    return (
        // <ul>
        //     <li>
        //         <a href="/">Home</a>
        //     </li>
        //     <li>
        //         <a href="/products">Products</a>
        //     </li>
        //     <li>
        //         <a href="/posts/2022/10">Post</a>
        //     </li>
        //     <li>
        //         <a href="/admin">Admin</a>
        //     </li>
        // </ul>

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">CME Group</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/products">Products</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/posts/2022/08">Posts</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/admin">Admin</a>
                    </li>


                </ul>
            </div>
        </nav>
    )
}
