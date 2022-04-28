import React from 'react'
import Sidebar from './Sidebar';
import { Route } from 'react-router-dom'
import AdminPosts from './AdminPosts';
import Users from './Users';

export default function Dashboard() {
    return (
        <div>
            <h1>Admin Dashboard</h1>
            <Sidebar />
            <div>
                <Route path="/admin/post" component={AdminPosts} />
                <Route path="/admin/user" component={Users} />
            </div>
        </div>
    )
}
