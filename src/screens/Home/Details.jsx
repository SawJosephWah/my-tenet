import React from 'react'


export default function Details() {
    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <div></div>
                <button className="btn btn-primary">Finish</button>
            </div>
            <hr></hr>
            <div className="row">
                <div className="col-md-9">
                    <div className="detail-title">Simple alarm clock in Javascript</div>
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
                    <p className="detail-paragraph">Build an app with javascript functionalities
                        <br />Must be responsive
                        <br />Ok you get the point
                    </p>
                    <span className="custom-badge-sm bg-danger text-white my-2">Deadline: Tomorrow at 10:30</span>
                    <div className="file-upload">
                        <div className="text-center">
                            <i className="fa-solid fa-upload"></i>
                            <br></br>
                            Drag and drop your file here
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
