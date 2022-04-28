import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div>
            <ul>
                <li><Link to="/admin/post">Admin Posts</Link></li>
                <li><Link to="/admin/user">Admin User</Link></li>

            </ul>
        </div>
    )
}
