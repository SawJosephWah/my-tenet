import React, { useState } from 'react'
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import DateTimePicker from 'react-datetime-picker';
import { useSelector } from 'react-redux';

export default function TeacherHomeDetails() {
    const teacherHomeDetails = useSelector((state) => state.teacherHome.teacherHomeDetails);
    const [date, setDate] = useState(new Date());
    const [value, onChange] = useState(new Date());
    return (
        teacherHomeDetails &&
        (
            <>
                <div className="d-flex justify-content-between align-items-center">
                    <div></div>
                    <button className="btn btn-primary">Start</button>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-9">
                        <div className="detail-title">{teacherHomeDetails.name}</div>
                        <div className="row align-items-center user-card my-4">
                            <div className="col-2">
                                <div className="user-card-icon">
                                    <i className="fa-solid fa-user text-primary"></i>
                                </div>
                            </div>
                            <div className="col-10">
                                <div className="user-card-name">Ann Mar</div>
                                <p className="p-0 m-0 user-card-paragraph">Introduction to Web Development</p>
                            </div>
                        </div>

                        <p className="">{teacherHomeDetails.description}r</p>

                    </div>
                    <div style={{ height: "70px" }}></div>
                    <div className="row">
                        <div className="col-md-6">
                            <DateTimePicker onChange={onChange} value={value} onFocus={() => { console.log('asf') }} />
                        </div>
                    </div>

                </div>
            </>
        )
    )

}
