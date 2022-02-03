
import React from "react";
import './Tweet.scss';
import userLogo from "../../../src/user-img.svg"

const Tweet = () => {
    return (
        <div className="tweet">
        <div className="tweet__header">
            <div className="tweet__header__user">
            <img
                src={userLogo}
                alt="User"
            />
            <span>@user</span>
            </div>
            <div className="tweet__header__date">
            <span>1 day ago</span>
            </div>
        </div>
        <div className="tweet__content">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt, nisi vitae congue egestas, nisi nulla aliquet lacus, vitae
            commodo nisl enim eu nisi.
            </p>
        </div>
        </div>
    );
}

export default Tweet;