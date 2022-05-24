import React from 'react'

export const Footer = () => {
    return (
        <footer className="bg-dark text-light text-center text-lg-start">
            <div className="text-center p-3" >
                © {(new Date().getFullYear())} Copyright:
                <a className="text-light" href="/"> RickyRam.dev</a>
            </div>
            </footer>
    )
}