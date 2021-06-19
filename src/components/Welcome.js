import React from 'react'
import Rectangle from './images/Rectangle.png';
import st from './images/1st.jpg';
import vector from './images/Vector.png'
import car from './images/car.png'
import cal from './images/cal.png'
import Ronal from './images/Ronal.png'
import job from './images/job.png'
import joseph from './images/joseph.png'
import sara from './images/sara.png'
import edu from './images/edu.png'
import thumb from './images/thumb.png'
import leisure from './images/leisure.png'
import Activism from './images/Activism.png'
import MBA from './images/MBA.png'
import Philosophy from './images/Philosophy.png'
import leave from './images/leave.png'
import inputcls from './images/inputcls.png'
import pen from './images/pen.png'
import Union from './images/Union.png';
import fb from './images/fb.png'
import google from './images/google.png'
import smcl from './images/smcl.png'
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login'
import { useState } from 'react';


const Welcome = (props) => {
    const { username, setUsername, setPic } = props
    const [follow, setFollow] = useState(false)
    const [follow2, setFollow2] = useState(false)
    const [follow3, setFollow3] = useState(false)
    const [follow4, setFollow4] = useState(false)

    const responseFacebook = (response) => {
        console.log(response);
        setUsername(response.name);
        setPic(response.picture.data.url)
    }

    const responseGoogle = (response) => {
        console.log(response);
        setUsername(response.profileObj.name);
        setPic(response.profileObj.imageUrl)
    }
    console.log(username);
    return (
        <>
            <section>
                <div className="container-lg p-4 d-none d-md-block ">
                    <div className="row justify-content-between">
                        <div className="col-md-7 col-lg-6 px-0">
                            <ul className="head nav">
                                <li className="nav-item">
                                    <a className="nav-link text-secondary " href="#">All Posts(32)</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-secondary" href="#">Article</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-secondary" href="#">Event</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-secondary" href="#">Education</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-secondary" href="#">Job</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-5 offset-lg-2 col-lg-4 ">
                            <div className="text-right">
                                <button className="btn post dropdown-toggle border" type="button">
                                    Write a Post
                                </button>
                                {username == null ? (
                                    <button className="btn btn-primary ml-2">
                                        <i>
                                            <img src={vector} />
                                        </i>
                                        Join Group
                                    </button>
                                ) : (
                                    <button className="btn btn-white border ml-2">
                                        <i className='mr-1'>
                                            <img src={leave} />
                                        </i>
                                        Leave Group
                                    </button>
                                )}

                            </div>
                        </div>
                    </div>
                    <hr className="m-0" />

                </div>
                <div className="container-sm d-sm-flex d-md-none d-flex p-4 align-items-center justify-content-between filter">
                    <h5 className="m-0 d-inline-block">Posts(368)</h5>
                    <button className="btn border dropdown-toggle" type="button">
                        Filter: All
                    </button>
                </div>
            </section>

            <section>
                <div className="container px-0 px-md-3">
                    <div className="row rounded">
                        <div className="col-12 col-md-7">
                            <div className="card">
                                <div className="card-header p-0">
                                    <img src={st} width="100%" height="220px" />
                                </div>
                                <div className="card-body pb-0">
                                    <div className="card-title d-flex align-items-end">
                                        <i>✍️</i>
                                        <h6 className="mb-0 ml-1">Article</h6>
                                    </div>
                                    <div className="d-flex">
                                        <div className="ttext">
                                            <h5 className="card-title">What if famous brands had regular fonts? Meet RegulaBrands!
                                            </h5>
                                        </div>
                                        <div className="ml-auto ">
                                            <a className="text-decoration-none dot" href="#" role="button"
                                                id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                                                aria-expanded="false">
                                                ...
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item" href="#">Edit</a>
                                                <a className="dropdown-item" href="#">Report</a>
                                                <a className="dropdown-item" href="#">Option 3</a>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="card-text">
                                        I’ve worked in UX for the better part of a decade. From now on, I plan to rei…
                                    </p>
                                </div>
                                <div className="card-footer border-0 bg-white">
                                    <div className="row align-items-center">
                                        <i>
                                            <img src={Rectangle} alt="" />
                                        </i>
                                        <div className="col-6 col-md-9">
                                            <div className="row">
                                                <div className="col-12 col-md-8">
                                                    <h6 className=" m-0">Sarthak Kamra</h6>
                                                </div>
                                                <div className="col-12 col-md-4">
                                                    <i className="far fa-eye d-none d-md-inline-block"></i>
                                                    1.4k views
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <button className="btn mx-2">
                                                <i className="fas fa-share-alt"></i>
                                                <small className="d-md-none">&nbsp;&nbsp;Share</small>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card my-2">
                                <div className="card-header p-0">
                                    <img src={edu} width="100%" height="220px" />
                                </div>
                                <div className="card-body pb-0">
                                    <div className="card-title d-flex align-items-end">
                                        <i>🔬️</i>
                                        <h6 className="mb-0 ml-1">Education</h6>
                                    </div>
                                    <div className="d-flex">
                                        <div className="ttext">
                                            <h5 className="card-title ">
                                                Tax Benefits for Investment under National Pension Scheme launched by Government
                                            </h5>
                                        </div>

                                        <div className="ml-auto ">
                                            <a className="text-decoration-none dot" href="#" role="button"
                                                id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                                                aria-expanded="false">
                                                ...
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item" href="#">Edit</a>
                                                <a className="dropdown-item" href="#">Report</a>
                                                <a className="dropdown-item" href="#">Option 3</a>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="card-text">
                                        I’ve worked in UX for the better part of a decade. From now on, I plan to rei…
                                    </p>
                                </div>
                                <div className="card-footer border-0 bg-white">
                                    <div className="row align-items-center">
                                        <i>
                                            <img src={sara} alt="" />
                                        </i>
                                        <div className="col-6 col-md-9">
                                            <div className="row">
                                                <div className="col-12 col-md-8">
                                                    <h6 className=" m-0">Sarah West</h6>
                                                </div>
                                                <div className="col-12 col-md-4">
                                                    <i className="far fa-eye d-none d-md-inline-block"></i>
                                                    1.4k views
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <button className="btn mx-2">
                                                <i className="fas fa-share-alt"></i>
                                                <small className="d-md-none">&nbsp;&nbsp;Share</small>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card my-2">
                                <div className="card-header p-0">
                                    <img src={car} width="100%" height="220px" />
                                </div>
                                <div className="card-body pb-0">
                                    <div className="card-title d-flex align-items-end">
                                        <i>🗓️</i>
                                        <h6 className="mb-0 ml-1">Meetup</h6>
                                    </div>
                                    <div className="d-flex">
                                        <div className="ttext">
                                            <h5 className="card-title">Finance &amp; Investment Elite Social Mixer @Lujiazui</h5>
                                        </div>
                                        <div className="ml-auto ">
                                            <a className="text-decoration-none dot" href="#" role="button"
                                                id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                                                aria-expanded="false">
                                                ...
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item" href="#">Edit</a>
                                                <a className="dropdown-item" href="#">Report</a>
                                                <a className="dropdown-item" href="#">Option 3</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex info align-items-center ">
                                        <div className="cal">
                                            <i>
                                                <img src={cal} alt="" />
                                            </i>
                                            <small className="ml-1 pl">Fri, 12 Oct, 2018</small>
                                        </div>
                                        <div className="loc pl ml-4">
                                            <i className="bi bi-geo-alt"></i>
                                            <small>Ahmedabad, India</small>
                                        </div>
                                    </div>
                                    <div className="my-2">
                                        <button className="btn btn-lg btn-block border visit">Visit Website</button>
                                    </div>
                                </div>
                                <div className="card-footer border-0 bg-white">
                                    <div className="row align-items-center">
                                        <i>
                                            <img src={Ronal} alt="" />
                                        </i>
                                        <div className="col-6 col-md-9">
                                            <div className="row">
                                                <div className="col-12 col-md-8">
                                                    <h6 className=" m-0">Ronal Jones</h6>
                                                </div>
                                                <div className="col-12 col-md-4">
                                                    <i className="far fa-eye d-none d-md-inline-block"></i>
                                                    1.4k views
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <button className="btn mx-2">
                                                <i className="fas fa-share-alt"></i>
                                                <small className="d-md-none">&nbsp;&nbsp;Share</small>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card my-2">
                                <div className="card-body pb-0">
                                    <div className="card-title d-flex align-items-end">
                                        <i>💼️</i>
                                        <h6 className="mb-0 ml-1">Job</h6>
                                    </div>
                                    <div className="d-flex">
                                        <div className="ttext">
                                            <h5 className="card-title">Software Developer - II
                                            </h5>
                                        </div>
                                        <div className="ml-auto ">
                                            <a className="text-decoration-none dot" href="#" role="button"
                                                id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                                                aria-expanded="false">
                                                ...
                                            </a>
                                            <div className="dropdown-menu pull-right" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item" href="#">Edit</a>
                                                <a className="dropdown-item" href="#">Report</a>
                                                <a className="dropdown-item" href="#">Option 3</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex info align-items-center ">
                                        <div className="cal">
                                            <i>
                                                <img src={job} alt="" />
                                            </i>
                                            <small className="ml-1 d-none d-md-inline-block pl">Innovaccer Analytics Private Ltd.</small>
                                            <small className="ml-1 d-md-none pl">Innovaccer Analytic...</small>
                                        </div>
                                        <div className="loc pl ml-4">
                                            <i className="bi bi-geo-alt"></i>
                                            <small>Noida, India</small>
                                        </div>
                                    </div>
                                    <div className="my-2">
                                        <button className="btn btn-lg btn-block border job">Apply on Timesjobs</button>
                                    </div>
                                </div>
                                <div className="card-footer border-0 bg-white">
                                    <div className="row align-items-center">
                                        <i>
                                            <img src={joseph} alt="" />
                                        </i>
                                        <div className="col-6 col-md-9">
                                            <div className="row text-left">
                                                <div className="col-12 col-md-8">
                                                    <h6 className=" m-0">Joseph Gray</h6>
                                                </div>
                                                <div className="col-12 col-md-4">
                                                    <i className="far fa-eye d-none d-md-inline-block"></i>
                                                    1.4k views
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <button className="btn mx-2">
                                                <i className="fas fa-share-alt"></i>
                                                <small className="d-md-none">&nbsp;&nbsp;Share</small>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="offset-md-1 col-md-4 d-none d-md-block">
                            <div className="card border-0">
                                <div className="card-header border-0 d-flex bg-white">
                                    <div>
                                        <i className="bi bi-geo-alt mr-2"></i>
                                        {username == null ? (
                                            <small>Noida, India</small>
                                        ) : (
                                            <input type="text" className="loc" placeholder="Enter your location" />
                                        )}

                                    </div>
                                    {username == null ? (
                                        <div className="ml-auto">
                                            <i className="fas fa-pen"></i>
                                        </div>
                                    ) : (
                                        <div className="ml-auto">
                                            <i>
                                                <img src={inputcls} />
                                            </i>
                                        </div>
                                    )}



                                </div>
                                <hr className="m-0 head-hr" />
                                <div className="card-body border-0 d-flex exclamation">
                                    <i className="bi bi-exclamation-circle"></i>
                                    <p className="text-muted ml-1">Your location will help us serve better and extend a personalised
                                        experience.</p>
                                </div>
                            </div>
                            {username && (
                                <div>
                                    <div className="d-flex align-items-center">
                                        <i className="mb-2">
                                            <img src={thumb} alt="" />
                                        </i>
                                        <h6 className="text-uppercase m-0">
                                            Rcommended Groups
                                        </h6>
                                    </div>

                                    <div className="row align-items-center my-4">
                                        <div className="col-5 d-flex align-items-center">
                                            <i><img src={leisure} alt="" /></i>
                                            <h6 className="m-0 ml-1">Leisure</h6>
                                        </div>
                                        <div className="offset-3 col-4">
                                            <button onClick={() => setFollow(!follow)} className={`btn border rounded-pill follow ${follow ? 'bg-dark text-white' : ''}`}>
                                                {follow ? 'Followed' : 'Follow'}
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row align-items-center my-4">
                                        <div className="col-5 d-flex align-items-center">
                                            <i><img src={Activism} alt="" /></i>
                                            <h6 className="m-0 ml-1">Activism</h6>
                                        </div>
                                        <div className="offset-3 col-4">
                                            <button onClick={() => setFollow2(!follow2)} className={`btn border rounded-pill follow ${follow2 ? 'bg-dark text-white' : ''}`}>
                                                {follow2 ? 'Followed' : 'Follow'}
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row align-items-center my-4">
                                        <div className="col-5 d-flex align-items-center">
                                            <i><img src={MBA} alt="" /></i>
                                            <h6 className="m-0 ml-1">MBA</h6>
                                        </div>
                                        <div className="offset-3 col-4">
                                            <button onClick={() => setFollow3(!follow3)} className={`btn border rounded-pill follow ${follow3 ? 'bg-dark text-white' : ''}`}>
                                                {follow3 ? 'Followed' : 'Follow'}
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row align-items-center my-4">
                                        <div className="col-5 d-flex align-items-center">
                                            <i><img src={Philosophy} alt="" /></i>
                                            <h6 className="m-0 ml-1">Philosophy</h6>
                                        </div>
                                        <div className="offset-3 col-4">
                                            <button onClick={() => setFollow4(!follow4)} className={`btn border rounded-pill follow ${follow4 ? 'bg-dark text-white' : ''}`}>
                                                {follow4 ? 'Followed' : 'Follow'}
                                            </button>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <a className="text-decoration-none" href="#">See More...</a>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </section>
            <div className=" d-md-none pen ">
                <i>
                    <a href="#mobisignupmodal" data-toggle="modal">
                        <img src={pen} alt="" />
                    </a>
                </i>
            </div>
            <div className="modal mobi fade ups" id="mobisignupmodal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header border-0  p-3">
                            <h5 className="modal-title font-weight-bold">Create Account</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">
                                    <i><img src={smcl} alt="" /></i>
                                </span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <form>
                                        <div className="form-row ">
                                            <div className="form-group first col-6 m-0 p-0">
                                                <input type="text" className="form-control py-3" id="inputEmail4"
                                                    placeholder="First Name" />
                                            </div>
                                            <div className="form-group last col-6 m-0 p-0">
                                                <input type="text" className="form-control py-3" id="inputPassword4"
                                                    placeholder="Last Name" />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-12 m-0 px-0">
                                                <input type="email" className="form-control py-3" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-12 m-0 px-0 pass">
                                                <i className="bi bi-eye eye-sm"></i>
                                                <input type="password" className="form-control py-3" placeholder="Password" />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-12 m-0 px-0">
                                                <input type="password" className="form-control py-3" placeholder="Confirm Password" />
                                            </div>
                                        </div>
                                        <div className="d-flex mt-3 align-items-center">
                                            <button className="btn btn-primary rounded-pill">Create Account</button>
                                            <h6 className="ml-auto ul">or, <a className="text-dark" href="#mobiloginmodal" data-dismiss="modal"
                                                data-toggle="modal"> Sign In</a></h6>
                                        </div>
                                        <div className="form-row mt-3 mb-2" data-dismiss="modal">
                                            <FacebookLogin
                                                cssClass="btn btn-block-fb-sm border ml-1"
                                                appId="234876708448329"
                                                autoLoad={true}
                                                fields="name,email,picture"
                                                icon={<i><img className="mr-2" src={fb} alt="" /></i>}
                                                callback={responseFacebook}
                                                textButton="Sign up with Facebook"

                                            />
                                        </div>
                                        <div data-dismiss="modal">
                                            <GoogleLogin
                                                clientId="580866490900-kdmlonghgevodnvsjpa2r8iafi9fqib4.apps.googleusercontent.com"
                                                render={(renderProps) => (
                                                    <button className="btn btn-block border" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                                        <i><img className="mr-2" src={google} alt="" /></i>
                                                        Sign up with Google
                                                    </button>
                                                )}
                                                buttonText="Sign up with Google"
                                                onSuccess={responseGoogle}
                                                onFailure={responseGoogle}
                                                cookiePolicy={'single_host_origin'}
                                            />
                                        </div>
                                        <div className="mt-3 text-center">
                                            <p>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal mobisign fade ups" id="mobiloginmodal" tabIndex="-1" role="dialog"
                aria-hidden="true">
                <div className="modal-dialog " role="document">
                    <div className="modal-content pb-5">
                        <div className="modal-header border-0  p-3">
                            <h5 className="modal-title font-weight-bold">Welcome back!</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">
                                    <i><img src={smcl} alt="" /></i>
                                </span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <form>
                                        <div className="form-row">
                                            <div className="form-group col-12 m-0 px-0">
                                                <input type="email" className="form-control py-3" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-12 m-0 px-0 pass">
                                                <i className="bi bi-eye eye-sm"></i>
                                                <input type="password" className="form-control py-3" placeholder="Password" />
                                            </div>
                                        </div>
                                        <div className="d-flex mt-3 align-items-center">
                                            <button className="btn btn-primary rounded-pill px-4">Sign In</button>
                                            <h6 className="ml-auto ul">or, <a className="text-dark" href="#mobisignupmodal" data-dismiss="modal"
                                                data-toggle="modal">Create Account</a></h6>
                                        </div>
                                        <div className="form-row mt-3 mb-2" data-dismiss="modal">
                                            <FacebookLogin
                                                cssClass="btn btn-block-fb-sm border ml-1"
                                                appId="234876708448329"
                                                autoLoad={true}
                                                fields="name,email,picture"
                                                icon={<i><img className="mr-2" src={fb} alt="" /></i>}
                                                callback={responseFacebook}
                                                textButton="Sign in with Facebook"

                                            />
                                        </div>
                                        <div data-dismiss="modal">
                                            <GoogleLogin
                                                clientId="580866490900-kdmlonghgevodnvsjpa2r8iafi9fqib4.apps.googleusercontent.com"
                                                render={(renderProps) => (
                                                    <button className="btn btn-block border" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                                        <i><img className="mr-2" src={google} alt="" /></i>
                                                        Sign in with Google
                                                    </button>
                                                )}
                                                buttonText="Sign up with Google"
                                                onSuccess={responseGoogle}
                                                onFailure={responseGoogle}
                                                cookiePolicy={'single_host_origin'}
                                            />
                                        </div>
                                        <div className="mt-3 text-center">
                                            <p className="font-weight-bold">Forgot Password?</p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Welcome
