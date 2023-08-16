import React, { useEffect, useState } from 'react'
import '../../assets/css/TeacherHome.css';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import HomeCard from '../../components/common/HomeCard';
import { setDetailsToggle } from '../../slices/detailsToggleSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setTeacherHomeCardActive, setTeacherHomeCardToggle, setTeacherHomeDetails } from '../../slices/teacherHome';
import axios from 'axios';
import apiService from '../../components/common/ApiService';
export default function TeacherHome() {
    const dispatch = useDispatch();
    const detailsToggle = useSelector((state) => state.teacherHome.toggle);
    const teacherHomeCardActive = useSelector((state) => state.teacherHome.index);
    const navigate = useNavigate();

    const [taskTypes, setTaskTypes] = useState([{ name: "All" }]);
    const [taskType, setTaskType] = useState(null);
    const [tasks, setTasks] = useState([]);
    const defaultTaskType = {

    }

    const linkClick = (payload) => {
        dispatch(setTeacherHomeCardToggle());
        dispatch(setTeacherHomeCardActive(payload.id));
        dispatch(setTeacherHomeDetails(payload));
        navigate(`/teacher/details`);

    };
    const detailHide = () => {
        dispatch(setTeacherHomeCardToggle());
    }

    useEffect(() => {
        fetchTaskTypes();
        fetchTasks(null);
    }, [])

    const fetchTaskTypes = async () => {
        try {
            const response = await axios.get('/api/task-type');
            const data = response.data;
            if (data.status) {
                if (data.data.length > 0) {
                    setTaskTypes([{ name: "All" }, ...data.data]);
                    setTaskType({ name: "All" });
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleTaskClick = (taskId) => {
        const task = taskTypes.find(task => task.id === taskId);
        if (task) {
            console.log('asdfs');
            setTaskType(task);
            fetchTasks(task);
            dispatch(setTeacherHomeDetails(null));
        }
    };

    const fetchTasks = async (task) => {
        try {
            const requestBody = {
                limit: 10,
                order: "desc",
                page: 1,
                task_type: task ? task.id : null
            };
            const taskRes = await apiService.post('/api/tasks', requestBody);
            const tasks = taskRes.data;
            if (tasks.status) {
                setTasks(tasks.data);
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="home">
            <div className="left-section">
                <div className="input-group flex-nowrap mb-2">
                    <span className="input-group-text" id="addon-wrapping"><i className="fa-solid fa-magnifying-glass"></i></span>
                    <input type="text" className="form-control" aria-label="Username" placeholder="Search for task" aria-describedby="addon-wrapping" />
                </div>
                <div className="dropdown">
                    <a className="btn btn-secondary dropdown-toggle sort-btn" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fa-solid fa-arrow-down-wide-short me-2"></i>
                        {taskType ? taskType.name : ""}
                    </a>
                    <ul className="dropdown-menu sort-dropdown-menu" aria-labelledby="dropdownMenuLink">
                        {taskTypes.map((taskType, index) => (
                            <li key={index}>
                                <a className="dropdown-item" onClick={() => handleTaskClick(taskType.id)}>
                                    {taskType.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                {tasks.map((task, index) => (
                    <HomeCard key={index} active={teacherHomeCardActive === task.id} task={task} onClick={linkClick} />
                ))}
            </div>
            <div className={`right-section ${detailsToggle ? 'detail-show' : ''}`}>
                <div className="d-md-none mb-2">
                    <i className="fa-solid fa-arrow-left fa-2xl" onClick={detailHide}></i>
                </div>
                <Outlet></Outlet>
            </div>
        </div>
    )
}


