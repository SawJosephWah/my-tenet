import { Badge, Button } from "react-bootstrap";
import { useLogoutMutation, useTestMutation } from '../../slices/usersApiSlices';
import { logout } from '../../slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, Route, useNavigate } from "react-router-dom";
import Loader from "../../components/spinner";
import HomeCard from "./HomeCard";
import AssignmentCard from "./AssignmentCard";
import '../../assets/css/Home.css'
import { useEffect, useState } from "react";
import { setDetailsToggle } from "../../slices/detailsToggleSlice";
import { setHomeCardActive } from "../../slices/homeCardActiveInactive";
const HomeScreen = () => {
    const dispatch = useDispatch();
    const detailsToggle = useSelector((state) => state.detailsToggle.toggle);
    const homeCardActive = useSelector((state) => state.homeCardActive.index);
    const linkClick = (index) => {
        dispatch(setDetailsToggle());
        dispatch(setHomeCardActive(index));
    };
    const detailHide = () => {
        dispatch(setDetailsToggle());
    }

    return <div className="home">
            <div className="left-section">
                <span className="sort-btn"><i className="fa-solid fa-arrow-down-wide-short"></i>Sort</span>
                {Array.from({ length: 10 }, (_, index) => (
                    <Link onClick={() => linkClick(index)} to={`/test/${index}`} key={index} path={`/component/${index}`} style={{ textDecoration: "none" }}>
                        <HomeCard active={homeCardActive == index} />
                    </Link>
                ))}
            </div>
            <div className={`right-section ${detailsToggle ? 'detail-show' : ''}`}>
                <div className="d-md-none mb-2">
                    <i className="fa-solid fa-arrow-left fa-2xl" onClick={detailHide}></i>
                </div>
                <Outlet></Outlet>
            </div>
        </div>;
};
export default HomeScreen;