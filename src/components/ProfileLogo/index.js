import React from 'react';
import css from './profileLogo.mobile.css';

const ProfileLogo = () => {

    return(
    <div className="ProfileLogo">
    <svg svg version="1.1" viewBox="0 0 24 24" className={css.profileLogo}>
    <path style="fill:#AB7C94;" d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 
    3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 
    1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z"
    style={{ strokeWidth: "0.08466666" }}
    />
    </svg>
    </div>
    )
}

export default ProfileLogo;

