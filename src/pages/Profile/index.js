import React, { useContext } from "react";
import { LoggedInContext } from "../../components/LoggedInContext";

const Profile = props => {
    const { isLoggedIn, logout } = useContext(LoggedInContext);
    return (
        <div>
            Am I logged in?
            {isLoggedIn ? (
                <div>
                    Yes
                    <button
                        onClick={() => {
                            logout();
                        }}
                    >
                        Log Out
                    </button>
                </div>
            ) : (
                <div>
                    No
                    <button onClick={() => props.history.push("/login")}>
                        Log In
                    </button>
                </div>
            )}
        </div>
    );
};

export default Profile;
