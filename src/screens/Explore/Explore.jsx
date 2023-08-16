import React from 'react'
import '../../assets/css/Explore.css'
export default function Explore() {
    return (
        <div className="explore">
            <div className="content-body-inner">
                <div className="content-body-inner-title">
                    Explore
                </div>
                <div className="content-body-inner-body">
                    <div className="card explore-container">
                        <div className="card-body">
                            {/* ----------------- search ------------------------*/}
                            <div className="container-fluid search-section-sticky">
                                <div className="mb-3 row search-section">
                                    <div className="col-md-5 p-0"><input type="text" className="form-control text" /></div>
                                    <div className="col-md-2 p-0">
                                        <div className="dropdown search-section-drop-down">
                                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </div></div>
                                    <div className="col-md-2 p-0">
                                        <button className="btn btn-primary btn-block search-section-search-btn">Search</button>
                                    </div>
                                </div>
                            </div>
                            {/* ----------------- card ------------------------*/}
                            <div className="row">
                                <div className="col-md-4 my-2">
                                    <div className="card explore-card">
                                        <div className="card-body">
                                            <div className="explore-card-img"></div>
                                            <div className="instructor">
                                                <div className="instructor-img me-2"></div>
                                                <div className="instructor-name">Ann Mar</div>
                                            </div>
                                            <div className="title">Intorduction to Web Development</div>
                                            <div className="paragraph">
                                                <span className="fw-bold">Skills you'll gain</span> : HTML, CSS, JavaScript, Server
                                            </div>
                                            <div className="ranking mt-4">
                                                <div className="d-flex align-items-center">
                                                    <i className="fa-solid fa-star text-warning me-2"></i>
                                                    <div>
                                                        4.7 (3.4 reviews)
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 my-2">
                                    <div className="card explore-card">
                                        <div className="card-body">
                                            <div className="explore-card-img"></div>
                                            <div className="instructor">
                                                <div className="instructor-img me-2"></div>
                                                <div className="instructor-name">Ann Mar</div>
                                            </div>
                                            <div className="title">Intorduction to Web Development</div>
                                            <div className="paragraph">
                                                <span className="fw-bold">Skills you'll gain</span> : HTML, CSS, JavaScript, Server
                                            </div>
                                            <div className="ranking mt-4">
                                                <div className="d-flex align-items-center">
                                                    <i className="fa-solid fa-star text-warning me-2"></i>
                                                    <div>
                                                        4.7 (3.4 reviews)
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 my-2">
                                    <div className="card explore-card">
                                        <div className="card-body">
                                            <div className="explore-card-img"></div>
                                            <div className="instructor">
                                                <div className="instructor-img me-2"></div>
                                                <div className="instructor-name">Ann Mar</div>
                                            </div>
                                            <div className="title">Intorduction to Web Development</div>
                                            <div className="paragraph">
                                                <span className="fw-bold">Skills you'll gain</span> : HTML, CSS, JavaScript, Server
                                            </div>
                                            <div className="ranking mt-4">
                                                <div className="d-flex align-items-center">
                                                    <i className="fa-solid fa-star text-warning me-2"></i>
                                                    <div>
                                                        4.7 (3.4 reviews)
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 my-2">
                                    <div className="card explore-card">
                                        <div className="card-body">
                                            <div className="explore-card-img"></div>
                                            <div className="instructor">
                                                <div className="instructor-img me-2"></div>
                                                <div className="instructor-name">Ann Mar</div>
                                            </div>
                                            <div className="title">Intorduction to Web Development</div>
                                            <div className="paragraph">
                                                <span className="fw-bold">Skills you'll gain</span> : HTML, CSS, JavaScript, Server
                                            </div>
                                            <div className="ranking mt-4">
                                                <div className="d-flex align-items-center">
                                                    <i className="fa-solid fa-star text-warning me-2"></i>
                                                    <div>
                                                        4.7 (3.4 reviews)
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
