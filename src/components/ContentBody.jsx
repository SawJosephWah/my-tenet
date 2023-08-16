import React from 'react'
import { Route, Routes, Outlet } from 'react-router-dom'

export default function ContentBody() {
    return (
        <div className="content-body">
            <Outlet></Outlet>
        </div>
    )
}
