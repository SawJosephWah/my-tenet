import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../slices/usersApiSlices';
import { logout } from '../slices/authSlice';
import { setToggle } from '../slices/sidebarToggleSlice';
import '../assets/css/SideBar.css'
import supabase from '../supabase/setUp';
import { setDetailsToggle } from '../slices/detailsToggleSlice';
import { setMenuActive } from '../slices/menuActiveInactive';

export default function SideBar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [logoutApi, { isLoading }] = useLogoutMutation();
    const toggle = useSelector((state) => state.sidebarToggle.toggle);
    const menuActive = useSelector((state) => state.menuActive.index);
    const user = useSelector((state) => state.auth);

    const sidebarClassName = `sidebar ${toggle ? 'sidebar-on' : ''}`;
    const logoutHandler = async () => {
        try {
            const { error } = await supabase.auth.signOut();
            if (error) {
                console.log(error);

            } else {
                dispatch(logout());
                dispatch(setToggle());
                navigate('/login');
            }

        } catch (err) {
            console.error(err);
        }
    };
    const toggleChange = () => {
        dispatch(setToggle());
    }

    const menus = [
        {
            "name": "Home",
            "link": "/",
            "icon": "fa-solid fa-list-check me-2"
        },
        {
            "name": "My Courses",
            "link": "/courses",
            "icon": "fa-solid fa-square-minus me-2"
        },
        {
            "name": "Explore",
            "link": "/explore",
            "icon": "fa-regular fa-compass me-2"
        },
        {
            "name": "Teacher Home",
            "link": "/teacher",
            "icon": "fa-solid fa-list-check me-2"
        },
        {
            "name": "Teacher Batch",
            "link": "/teacher-batch",
            "icon": "fa-solid fa-square-minus me-2"
        }
    ];
    const handleMenuClick = (index) => {
        dispatch(setMenuActive(index));
        toggleChange();
    };
    return (
        <div className={sidebarClassName}>
            <div className="sidebar-header">
                <div className="d-flex justify-content-between align-items-center p-3">
                    <h3 className="m-0">TENET</h3>
                    <i className="fa-solid fa-xmark fa-xl d-lg-none" onClick={toggleChange}></i>
                </div>

            </div>
            <div className="sidebar-body list-group">
                {menus.map((menu, index) => (
                    <Link
                        to={menu.link}
                        className={`list-group-item ${menuActive === index ? "list-group-item-active" : ""}`}
                        key={index}
                        onClick={() => handleMenuClick(index)}>
                            <div className="d-flex align-items-center">
                            <i className={menu.icon}></i><span>{menu.name}</span>
                            </div>
                        
                    </Link>
                ))}
            </div>
            <div className="sidebar-footer">
                {user.userInfo.user_metadata.user_name && <div className="d-flex align-items-center">
                    <div className="user-card-icon me-3">
                        <i className="fa-solid fa-user text-dark"></i>
                    </div>
                    <span>{user.userInfo.user_metadata.user_name || ''}</span>
                </div>}
                <button style={{ width: "100%" }} onClick={logoutHandler} className="btn btn-block btn-primary mt-3">
                    Logout
                </button>
            </div>
        </div>
    )
}
