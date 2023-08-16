import React from 'react'
import { setToggle } from '../slices/sidebarToggleSlice'
import { useDispatch } from 'react-redux';

export default function ContentHeader() {
    const dispatch = useDispatch();
    const toggle = () => {
        dispatch(setToggle());
    }
    return (
        <div className="container-fluid content-header d-lg-none py-2">
            <button className="btn btn-dark" onClick={toggle}><i className="fa-solid fa-bars"></i></button>
        </div>
    )
}
