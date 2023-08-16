import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setToggle } from '../slices/sidebarToggleSlice';

export default function SidebarShadow() {
    const dispatch = useDispatch();
    const toggle = useSelector((state) => state.sidebarToggle.toggle);
    const className = `sidebar-shadow ${toggle ? 'sidebar-shadow-on' : ''}`;
    const toggleChange = () => {
        dispatch(setToggle());
    }
    return (
        <div className={className} onClick={toggleChange}></div>
    )
}
