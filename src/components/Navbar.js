import React from 'react';
import Union from './images/Union.png';
import fb from './images/fb.png'
import google from './images/google.png'
import side from './images/side.png'
import close from './images/close.png'
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login'
const Navbar = (props) => {

    const { username, pic, setUsername, setPic } = props

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

    return (
        <>
            <nav className="navbar fixed-top d-none d-md-flex bg-white navbar-light justify-content-around navsty mb-1">
                <a href="#" className="navbar-brand d-flex align-items-start">
                    <span className="A">A</span>
                    <span className="A">T</span>
                    <span className="A">G</span>
                    <span className="A">.</span>
                    <span className="R">W</span>
                    <span className="O pt-0">
                        <img src={Union} height="15px" alt="" />
                    </span>
                    <span className="R">R</span>
                    <span className="R">L</span>
                    <span className="R">D</span>
                </a>

                <div className="input-search">
                    <i className="fas fa-search search"></i>
                    <input type="search" className="form-control form-control-md rounded-pill" id="search-box" style={{ width: '360px' }}
                        placeholder="Search for your favourite groups in ATG" />
                </div>


                {username == null && pic == null ? (
                    <div>
                        <p className="mt-2 account">Create account
                            <a href="#signupmodal" data-toggle="modal" className="dropdown-toggle ml-1">It's free!</a>
                        </p>
                    </div>
                ) : (
                    <div className="d-flex align-items-center">
                        <i>
                            <img className="rounded-circle" src={pic} alt="" width="36px" height="36px" />
                        </i>
                        <p className="m-0 ml-1">{username}</p>

                    </div>
                )}


            </nav>
            <div className="w-100 d-md-none upper py-4">
                <div className="ml-3 d-inline">
                    <i className="fas fa-arrow-left text-light"></i>
                </div>
                <div className="leave mr-4">
                    <button className="btn border-light text-light">
                        {username == null && pic == null ? 'Join Group' : 'Leave Group'}

                    </button>
                </div>
            </div>
            <div className="main-banner d-flex flex-column justify-content-end">

                <div className="p-4 ">
                    <div className="text ml-5">
                        <h4 className="text-white">Computer Engineering</h4>
                    </div>
                    <div className="para ml-5">
                        <p className="text-white">142,765 Computer Engineers follow this</p>
                    </div>
                </div>
            </div>
            <div className="modal desk fade ups" id="signupmodal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xxl" role="document">
                    <div className="modal-content">
                        <div className="modal-header desk p-2">
                            <p className="modal-title text-success m-auto" id="exampleModalLongTitle">
                                Let's learn, share &amp; inspire each other with our passion for computer engineering. Sign up now
                                🤘🏼
                            </p>
                            <button type="button" className="close modal-cl" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">
                                    <img src={close} alt="" />
                                </span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <h4>Create Account</h4>
                                    <form>
                                        <div className="form-row ">
                                            <div className="form-group first col-6 m-0 p-0">
                                                <input type="text" className="form-control" id="inputEmail4"
                                                    placeholder="First Name" />
                                            </div>
                                            <div className="form-group last col-6 m-0 p-0">
                                                <input type="text" className="form-control" id="inputPassword4"
                                                    placeholder="Last Name" />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-12 m-0 px-0">
                                                <input type="email" className="form-control" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-12 m-0 px-0 pass">
                                                <i className="bi bi-eye eye-sm"></i>
                                                <input type="password" className="form-control" placeholder="Password" />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-12 m-0 px-0">
                                                <input type="password" className="form-control" placeholder="Confirm Password" />
                                            </div>
                                        </div>
                                        <div className="form-row mt-3">
                                            <button className="btn btn-primary btn-block rounded-pill">Create Account</button>
                                        </div>
                                        <div className="form-row mt-3 mb-2" data-dismiss="modal">
                                            <FacebookLogin
                                                cssClass="btn btn-block-fb border ml-1"
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
                                    </form>
                                </div>
                                <div className="offset-md-1 col-md-5 d-none d-md-block">
                                    <p className="create">Already have an account? <a href="#loginmodal" data-dismiss="modal"
                                        data-toggle="modal" className="text-decoration-none"> Sign In</a>
                                    </p>
                                    <img src={side} alt="" />
                                    <p className="text-muted sign mt-3">By signing up, you agree to our Terms &amp; conditions, Privacy
                                        policy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal desk fade ups" id="loginmodal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xxl" role="document">
                    <div className="modal-content">
                        <div className="modal-header desk p-2">
                            <p className="modal-title text-success m-auto" id="exampleModalLongTitle">
                                Let's learn, share &amp; inspire each other with our passion for computer engineering. Sign up now
                                🤘🏼
                            </p>
                            <button type="button" className="close modal-cl" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">
                                    <img src={close} alt="" />
                                </span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <h4>Sign In</h4>
                                    <form>
                                        <div className="form-row">
                                            <div className="form-group col-12 m-0 px-0">
                                                <input type="email" className="form-control" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-12 m-0 px-0 pass">
                                                <i className="bi bi-eye"></i>
                                                <input type="password" className="form-control" placeholder="Password" />
                                            </div>
                                        </div>
                                        <div className="form-row mt-3">
                                            <button className="btn btn-primary btn-block rounded-pill">Sign In</button>
                                        </div>
                                        <div className="form-row mt-3 mb-2" data-dismiss="modal">
                                            <FacebookLogin
                                                cssClass="btn btn-block-fb border ml-1"
                                                appId="234876708448329"
                                                autoLoad={true}
                                                fields="name,email,picture"
                                                icon={<i><img className="mr-2" src={fb} alt="" /></i>}
                                                callback={responseFacebook}
                                                textButton="Sign In with Facebook"

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

                                        <div className="text-center mt-3">
                                            <h6>Forgot Password?</h6>
                                        </div>
                                    </form>
                                </div>
                                <div className="offset-md-1 col-md-5 d-none d-md-block">
                                    <p className="create">Don't have an account yet? <a href="#signupmodal" data-dismiss="modal"
                                        data-toggle="modal" className="text-decoration-none">Create new
                                        for free!</a></p>
                                    <img src={side} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar
