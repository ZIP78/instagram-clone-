import React from 'react'
import Upload from "../upload/upload_container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";



const instagramNavi = () => {

    return (
      <div className="insta-navi-container">
        <div className="insta-navi-items">
          <div className="insta-navi-logo">
            <Link to={'/'}>
              <FontAwesomeIcon className="insta-navi-box" icon={faInstagram} />
              <div className="line-between-logo"></div>
              <h1 className="insta-navi-name">Whoopiegram</h1>
            </Link>
          </div>
          <div className="insta-upload-button">
            <Upload />
          </div>
        </div>
      </div>
    );
}

export default instagramNavi