import React, { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { ColorContext } from "../../Context/ColorContext";
import LogoDevs from "../../assets/logo/logo.svg";
import userPic from "../../assets/icons/user.svg";


function Home() {
  const { colors } = useContext(ColorContext);
  const { user } = useContext(UserContext);
  // const { img } = tweetData;

  return (
    <div>
      <header className="header">
        {/* <div>
                {user ? 
                <img className={`header_user ${colors}`} src={img} alt="user" /> : <img className={`header_user ${colors}`} src={userPic} alt="general-user" />
                }
            </div> */}
        <span className={`color ${colors}`}>USERNAME</span>
        <img className="header_logo" src={LogoDevs} alt="Devs_United Logo" />
        <h2 className="header_text">
          Devs_<span>United</span>
        </h2>
      </header>
    </div>
  );
}

export default Home;
