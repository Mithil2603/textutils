import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import logoImg from './images/apple-touch-icon.png'

// props are shorthand of Properties

// Here this will be displayed by default, sometimes we might forget that we have added props but did not passed props then this will be displayed instead
export default function NavBar(props, { title = 'TextUtils', aboutText = 'About TextUtils' }) {
    return (
        <>
            {/* <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}> */}
            <nav className={`navbar navbar-expand-lg bg-dark navbar-dark`}>
                <div className="container-fluid">
                    {/* Here instead of title you can also use {props.title} */}
                    <div className="contain d-flex align-items-center gap-3">
                        <img src={logoImg} alt="mainlogo" className='mainlogo'/>
                        <Link className="navbar-brand" to="/">{title}</Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                {/* Here instead of aboutText you can also use {props.aboutText} */}
                                <Link className="nav-link" to="/about">{aboutText}</Link>
                            </li>
                        </ul>
                        {/* <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}> */}
                        <div className={`form-check form-switch text-light`}>
                            <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode==='dark'?'Light':'Dark'} Mode</label>
                        </div>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
        </>
    )
}

// We are specifying the prop types like it must be string, number, object, etc.
NavBar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}