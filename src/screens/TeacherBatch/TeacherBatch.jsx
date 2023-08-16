import React, { useEffect, useState } from 'react'
import '../../assets/css/TeacherBatch.css'
import TeacherBatchCard from './TeacherBatchCard'
import { useDispatch, useSelector } from 'react-redux'
import { setTeacherCourseTab } from '../../slices/teacherCourse';
import { useTestMutation } from '../../slices/usersApiSlices';
import axios from 'axios';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import apiService from '../../components/common/ApiService';


export default function TeacherBatch() {
    const [test, { isLoading }] = useTestMutation();
    const dispatch = useDispatch();
    const activeTab = useSelector(state => state.teacherCourse.activeTab);
    const user = useSelector((state) => state.auth);
    const [batches, setBatches] = useState([]);
    const [popupData, setPopupData] = useState([]);
    useEffect(() => {

        fetchBatches(1, 10, "desc");
    }, [])

    const handleTabClick = (value) => {
        dispatch(setTeacherCourseTab(value));
    };

    // const fetchBatches = async (page,limit,order) => {
    //     try {
    //         const response = await axios.get(`/api/batch/${page}/${limit}/${order}`, {
    //             headers: {
    //                 Authorization: `Bearer ${user.userInfo.access_token}`
    //             }
    //         });
    //         const data = response.data;
    //         if (data.status) {
    //             setBatches(data.data);
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
    const fetchBatches = async (page, limit, order) => {
        try {
            const response = await apiService.get(`/api/batch/${page}/${limit}/${order}`);
            const data = response.data;
            if (data.status) {
                setBatches(data.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const testApi = async () => {
        const response = await fetch("/api/test", {
            headers: {
                Authorization: `Bearer ${user.userInfo.access_token}`
            }
        });
        // const movies = await response.json();
        // console.log(movies);

    }

    // useEffect(()=>{
    //     console.log(activeTab);
    // })
    return (
        <div className="">
            <div className="content-body-inner">
                <div className="content-body-inner-body">
                    <div className="teacher-batch py-3">
                        <div className="row mb-3">
                            {/* <div className="col-md-4">
                                    <div className={`tab-btn ${activeTab == "1" ? 'tab-btn-active' : ''}`} onClick={() => handleTabClick("1")}>Active Batch</div>
                                </div>
                                <div className="col-md-4">
                                    <div className={`tab-btn ${activeTab == "2" ? 'tab-btn-active' : ''}`} onClick={() => handleTabClick("2")}>Finished Batch</div>
                                </div>
                                <div className="col-md-4">
                                    <div className={`tab-btn ${activeTab == "3" ? 'tab-btn-active' : ''}`} onClick={() => handleTabClick("3")}>Course Managementh</div>
                                </div> */}

                            <div className="col-md-9">
                                <div className="input-group flex-nowrap">
                                    <span className="input-group-text" id="addon-wrapping"><i className="fa-solid fa-magnifying-glass"></i></span>
                                    <input type="text" className="form-control" aria-label="Username" placeholder="Search for batch" aria-describedby="addon-wrapping" />
                                </div>
                            </div>
                            <div className="col-md-3">

                                <Popup
                                    trigger={<button className="btn btn-primary btn-block">Open Popup</button>}
                                    modal
                                    closeOnDocumentClick
                                >
                                    {close => <PopupContent onClose={close} />}
                                </Popup>


                            </div>
                        </div>

                        {batches.map(batch => (
                            <TeacherBatchCard key={batch.id} id={batch.id} batch={batch} />
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}

function PopupContent({ data, onClose }) {
    useEffect(() => {
        console.log('this is pop up');
    })
    return (
        <div className="popup" style={{ width: "100px", borderRadius: "10px", backgroundColor: "red" }}>
            <h2>Popup Content</h2>
            <button onClick={onClose}>Close</button>
            <ul>

            </ul>
        </div>
    );
}
