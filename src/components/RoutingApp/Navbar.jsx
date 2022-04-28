import React from 'react'
import { Link } from 'react-router-dom'


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
            <Link className="navbar-brand" to="/">CME Group</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/products">Products</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/posts/2022/08">Posts</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/admin">Admin</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/counter">Counter</Link>
                    </li>


                </ul>
            </div>
        </nav>
    )
}
