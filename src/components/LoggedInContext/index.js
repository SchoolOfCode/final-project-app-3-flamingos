import React, { useState, useEffect, createContext } from "react";
const LoggedInContext = createContext();

const LoggedInProvider = props => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setIsLoggedIn(Boolean(localStorage.getItem("token")));
    }, []);

    return (
        <LoggedInContext.Provider
            value={{
                isLoggedIn,
                logout: () => {
                    localStorage.removeItem("token");
                    setIsLoggedIn(false);
                },
                login: () => {
                    setIsLoggedIn(true);
                }
            }}
        >
            {console.log({ context: isLoggedIn })}
            {props.children}
        </LoggedInContext.Provider>
    );
};

export { LoggedInContext, LoggedInProvider };
