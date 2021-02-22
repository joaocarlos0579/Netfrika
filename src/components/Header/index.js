//Monta o cabeçalho pegando a minha foto

import React from 'react';
import './styles.css';

export default ({black})=>{
    return(
        <header className={black ?"black" : ''}>
            <div className="header--logo">
                <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png"/>
            </div>
            <div className="header--user">
                <img src="https://lh3.googleusercontent.com/ogw/ADGmqu9NGmanx8ss68Uz-1ZMIueNGUj4XAPaQ1r2dFu4yKc=s32-c-mo"/>
            </div>
        </header>
    )
}