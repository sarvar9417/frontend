import React, { useState, useEffect, useContext } from 'react'
import { useHttp } from '../hooks/http.hook'
import 'react-toastify/dist/ReactToastify.css'
import { AuthContext } from '../context/AuthContext'
import { toast } from 'react-toastify'

toast.configure()
export const AuthPage = () => {
    const auth = useContext(AuthContext)
    const { loading, request, error, clearError } = useHttp()
    const [form, setForm] = useState({
        login: '', password: ''
    })

    const notify = (e) => {
        toast.error(e)
    }

    useEffect(() => {
        if (error) {
            notify(error)
            clearError()
        }
    }, [error, clearError])

    const changeHandlar = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/reseption/register', 'POST', { ...form })
            console.log('Data: ', data);
        } catch (e) {

        }
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/reseption/login', 'POST', { ...form })
            auth.login(data.token, data.reseptionId)
        } catch (e) {

        }
    }

    return (
        <section style={{ backgroundColor: "rgba(0, 234, 255, 0.87)" }}>
            {/*  */}
            <div className="container">
                <div class="main-wrapper login-body">
                    <div class="login-wrapper">
                        <div class="container">
                            <div class="loginbox">
                                <div class="login-left">
                                    <img class="img-fluid" src="assets/img/logo-white.png" alt="Logo" />
                                </div>
                                <div class="login-right">
                                    <div class="login-right-wrap">
                                        <h1>Login</h1>
                                        <p class="account-subtitle">Access to our dashboard</p>

                                        <form action="https://dreamguys.co.in/demo/doccure/admin/index.html">
                                            <div class="form-group">
                                                <input class="form-control" type="text" placeholder="Email" />
                                            </div>
                                            <div class="form-group">
                                                <input class="form-control" type="text" placeholder="Password" />
                                            </div>
                                            <div class="form-group">
                                                <button class="btn btn-primary btn-block" type="submit">Login</button>
                                            </div>
                                        </form>
                                        <div class="text-center forgotpass"><a href="forgot-password.html">Forgot Password?</a></div>
                                        <div class="login-or">
                                            <span class="or-line"></span>
                                            <span class="span-or">or</span>
                                        </div>

                                        <div class="social-login">
                                            <span>Login with</span>
                                            <a href="#" class="facebook"><i class="fa fa-facebook"></i></a><a href="#" class="google"><i class="fa fa-google"></i></a>
                                        </div>


                                        <div class="text-center dont-have">Don’t have an account? <a href="register.html">Register</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  */}

            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card" style={{ borderRadius: "1rem" }}>
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img
                                        src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/img1.jpg"
                                        alt="login form"
                                        className="img-fluid" style={{ borderRadius: "1rem 0 0 1rem" }}
                                    />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black">

                                        <div className="d-flex align-items-center mb-3 pb-1">
                                            <i className="fas fa-cubes fa-2x me-3" style={{ color: "#ff6219" }}></i>
                                            <span className="h1 fw-bold mb-0">Logo</span>
                                        </div>

                                        <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Kirish</h5>

                                        <div className="form-outline mb-4">
                                            <input
                                                onChange={changeHandlar}
                                                name="login"
                                                type="text"
                                                id="login"
                                                className="form-control form-control-lg"
                                            />
                                            <label className="form-label" htmlFor="login">Reseption nomi</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input
                                                onChange={changeHandlar}
                                                name="password"
                                                type="password"
                                                id="password"
                                                className="form-control form-control-lg"
                                            />
                                            <label className="form-label" htmlFor="password">Password</label>
                                        </div>

                                        <div className="pt-1 mb-4">
                                            <button
                                                onClick={loginHandler}
                                                className="btn btn-dark btn-lg btn-block"
                                                type="button"
                                                disabled={loading}
                                            >
                                                Kirish
                                            </button>
                                            <button
                                                onClick={registerHandler}
                                                className="ml-5 btn btn-dark btn-lg btn-block"
                                                type="button"
                                                disabled={loading}
                                            >
                                                Regitratsiya
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
