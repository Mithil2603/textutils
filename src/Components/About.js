import React from 'react'
import logoImg from './images/apple-touch-icon.png'

export default function About(props) {
    let myStyle = {
        color: props.mode === 'dark'?'white':'black',
        backgroundColor: props.mode === 'dark'?'black':'white'
    }

    return (
        <>
            <main style={myStyle}>
                <div className="container py-4" style={myStyle}>
                    <header className="pb-3 mb-4 border-bottom d-flex align-items-center justify-content-between my-3 flex-wrap gap-3">
                        <div className="d-flex align-items-center text-body-emphasis text-decoration-none gap-3">
                            <img src={logoImg} alt="mainlogo" className='logo'/>
                            <span className="fs-4">About TextUtils</span>
                        </div>
                    </header>

                    <div className="p-5 mb-4 bg-body-tertiary rounded-3" style={myStyle}>
                        <div className="container-fluid py-5">
                            <h1 className="display-5 fw-bold">Analyse Your Text</h1>
                            <p className="col-md-8 fs-4">TextUtils gives you a way to analyse your text quickly and efficiently. Be it word count, characters count, convert texts to uppercase or lowercase, reverse text and copy.</p>
                        </div>
                    </div>

                    <div className="row align-items-md-stretch">
                        <div className="col-md-6">
                            <div className="h-100 p-5 text-bg-dark rounded-3">
                                <h2>Free to use</h2>
                                <p>TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.</p>
                            </div>
                        </div>
                        <div style={myStyle} className="col-md-6">
                            <div className="h-100 p-5 bg-body-tertiary border rounded-3">
                                <h2>Browser Compatible</h2>
                                <p>This word counter software works in any web browsers such as Chrome, FireFox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.</p>
                            </div>
                        </div>
                    </div>
                    <footer className="pt-3 mt-4 text-body-secondary border-top">
                        © 2024
                    </footer>
                </div>
            </main>
        </>
    )
}
