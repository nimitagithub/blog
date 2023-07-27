
import React from 'react';
import '../Web2/Web.css'



const Web = () => {
    return (
        <div className="row bg-body-tertiary" >
            <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body bs-gutter-x-1.5rem;" data-bs-theme="dark">
                <div className="container-fluid mx-4">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand" href="/#">Hidden brand</a>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#" aria-disabled="true">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="/#" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <div className="col-2 border vh-100 " >
                <div className='col  mt-3'>
                    <div className='row justify-content-center '>
                        <img src="https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg" className='img-fluid rounded-circle' style={{ height: 100, width: 130, }} alt='' />
                        <h5 className="small mb-0 text-secondary text-center mt-3">infoData@gmail.com</h5>
                        <text className="small mb-0 text-black text-center ">Trip Organizer</text>
                    </div>
                    <div>
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <a class="nav-link active text-start" aria-current="page" href="/#"><i className="fa-solid fa-inbox fa-1x p-3 text-start " aria-hidden="true" />Reservation</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-start" href="/#"><i className="fa fa-house fa-1x p-3 text-start" aria-hidden="true" />Dashboard</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-start" href="/#"><i className="fa fa-solid fa-credit-card fa-1x p-3 text-start" aria-hidden="true" />Payment</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-start" href="/#"><i className="fa fa-house fa-1x p-3 text-start" aria-hidden="true" />Extras</a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link text-start" href="/#"><i className="fa fa-solid fa-question fa-1x p-3 text-start" aria-hidden="true" />Help</a>
                            </li>

                        </ul>
                    </div>
                </div>

            </div>
            <div className="col-10 border background-color-red ">
                <div className="row ">
                    <div className="col mt-3 mx-2" >
                        <h3 className='text-start mb-0' >Dashboard</h3>
                        <p className='text-start'>Exceltional Worldwide Guides & Adventure Travel</p>
                    </div>
                    <div className="col text-end mt-4 mx-3" >
                        <button type="button" className="btn btn-outline-success p-2 me-2 radius btn-Color"><i className='fa fa-plus'></i>Add on Extra</button>
                        <button type="button" className="btn btn-outline-success p-2 me-2 radius btn-Color"><i className='fa-solid fa-layer-group'></i>Add a Trip</button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-4" >
                        <div className="card bg-primary text-white" style={{ width: '24rem' }} >
                            <ul className="list-group list-group-flush">
                                <div className='row'>
                                    <div className='col p-4 text-start'>
                                        <text>
                                            Your Trips
                                        </text>
                                        <h4>10</h4>
                                    </div>
                                    <div className='col mt-4'>
                                        <i className="fa fa-plane fa-3x" aria-hidden="true" />
                                    </div>

                                </div>
                            </ul>
                            <div className="card-footer text-start">
                                Most Recent
                            </div>
                        </div>
                    </div>
                    <div className="col-4" >
                        <div className="card card bg-success text-white " style={{ width: '24rem' }} >
                            <ul className="list-group list-group-flush">
                                <div className='row'>
                                    <div className='col p-4 text-start'>
                                        <text>
                                            Your Reservation
                                        </text>
                                        <h4>8</h4>
                                    </div>
                                    <div className='col mt-4'>
                                        <i className="fa fa-calendar fa-3x" aria-hidden="true" />
                                    </div>

                                </div>
                            </ul>
                            <div class="card-footer text-start">
                                Most Recent
                            </div>
                        </div>
                    </div>
                    <div className="col-4 " >
                        <div className="card card bg-warning text-white " style={{ width: '24rem' }}  >
                            <ul className="list-group list-group-flush">
                                <div className='row'>
                                    <div className='col p-4 text-start'>
                                        <text>
                                            Total Payments
                                        </text>
                                        <h4>$925.00</h4>
                                    </div>
                                    <div className='col mt-3'>
                                        <i className="fa fa-usd fa-4x" aria-hidden="true" />
                                    </div>

                                </div>
                            </ul>
                            <div class="card-footer text-start">
                                Most Recent
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-4'>
                        {/* first card */}
                        <div className="card" style={{ width: '24rem' }}>
                            <div className="card-header bg-white text-start ">
                                <h6 >Your Trips</h6>
                            </div>
                            <div className='row p-2' >
                                <div className='col-2 mt-2 text-start'>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg" style={{ width: 40, height: 40, borderRadius: 6 }} alt='' />
                                </div>
                                <div className='col text-start'>
                                    <h6 className="small mb-0">Some quick example text to build on the card </h6>
                                    <text className="small mb-0">List groups</text>
                                </div>
                            </div>
                            <div className='row p-2' >
                                <div className='col-2 mt-2 text-start'>
                                    <img src="https://www.enviro.wiki/images/8/8c/Flower.jpg" style={{ width: 40, height: 40, borderRadius: 6 }} alt='' />
                                </div>
                                <div className='col text-start'>
                                    <h6 className="small mb-0">1994 Dnway High-25th class Reunion - junior</h6>
                                    <text className="small mb-0">List groups</text>
                                </div>
                            </div>
                            <div className='row p-2' >
                                <div className='col-2 mt-2 text-start'>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwSuzmpIOfu6H0OgZfhnB6oeoOiARm1xLZoocVsoWF&s" style={{ width: 40, height: 40, borderRadius: 6 }} alt='' />
                                </div>
                                <div className='col text-start'>
                                    <h6 className="small mb-0">Some quick example text to build on the card </h6>
                                    <text className="small mb-0">List groups</text>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className="card" style={{ width: '24rem' }}>
                            <div className="card-header bg-white text-start">
                                <h6 >Your Reservations</h6>
                            </div>
                            <div className='row p-2' >
                                <div className='col-2 mt-2 text-start'>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg" style={{ width: 40, height: 40, borderRadius: 6 }} alt='' />
                                </div>
                                <div className='col text-start'>
                                    <h6 className="small mb-0">Some quick example text to build on the card </h6>
                                    <text className="small mb-0">List groups</text>
                                </div>
                            </div>
                            <div className='row p-2' >
                                <div className='col-2 mt-2 text-start'>
                                    <img src="https://www.enviro.wiki/images/8/8c/Flower.jpg" style={{ width: 40, height: 40, borderRadius: 6 }} alt='' />
                                </div>
                                <div className='col text-start'>
                                    <h6 className="small mb-0">1994 Dnway High-25th class Reunion - junior</h6>
                                    <text className="small mb-0">List groups</text>
                                </div>
                            </div>
                            <div className='row p-2' >
                                <div className='col-2 mt-2 text-start'>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwSuzmpIOfu6H0OgZfhnB6oeoOiARm1xLZoocVsoWF&s" style={{ width: 40, height: 40, borderRadius: 6 }} alt='' />
                                </div>
                                <div className='col text-start'>
                                    <h6 className="small mb-0">Some quick example text to build on the card </h6>
                                    <text className="small mb-0">List groups</text>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div class="card" style={{ width: '24rem' }}>
                            <div className="card-header bg-white text-start">
                                <h6 className='text-start'> Total Payments</h6>
                            </div>
                            <div className='row p-2' >
                                <div className='col-2 mt-2 text-start'>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg" style={{ width: 40, height: 40, borderRadius: 6 }} alt='' />
                                </div>
                                <div className='col text-start'>
                                    <h6 className="small mb-0">Some quick example text to build on the card </h6>
                                    <text className="small mb-0">List groups</text>
                                </div>
                            </div>
                            <div className='row p-2' >
                                <div className='col-2 mt-2 text-start'>
                                    <img src="https://www.enviro.wiki/images/8/8c/Flower.jpg" style={{ width: 40, height: 40, borderRadius: 6 }} alt='' />
                                </div>
                                <div className='col text-start'>
                                    <h6 className="small mb-0">1994 Dnway High-25th class Reunion - junior</h6>
                                    <text className="small mb-0">List groups</text>
                                </div>
                            </div>
                            <div className='row p-2' >
                                <div className='col-2 mt-2 text-start'>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwSuzmpIOfu6H0OgZfhnB6oeoOiARm1xLZoocVsoWF&s" style={{ width: 40, height: 40, borderRadius: 6 }} alt='' />
                                </div>
                                <div className='col text-start'>
                                    <h6 className="small mb-0">Some quick example text to build on the card </h6>
                                    <text className="small mb-0">List groups</text>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Web;

