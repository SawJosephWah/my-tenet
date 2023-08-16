import React from 'react'

export default function CourseCard() {
    return (
        <div className="card mb-3 shadow-sm">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-3">
                        <div style={{height:'150px',backgroundColor:"#000",borderRadius:"5px"}}></div>
                    </div>
                    <div className="col-md-9">
                        <div className="d-flex justify-content-between">
                            <div>Introduction to web development</div>
                            <span className="custom-badge-sm bg-primary text-white">5</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
