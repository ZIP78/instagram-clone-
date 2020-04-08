import React from "react";
import Upload from "../upload/upload_container";
import IosAdd from "react-ionicons/lib/IosAdd";

import { Link } from "react-router-dom";

const instagramNavi = () => {
  return (
    <div className="insta-navi-container">
      <div className="insta-navi-items">
        <div className="insta-navi-logo">
          <Link to={"/"}>
            <h1 className="insta-navi-name">Whoopiegram</h1>
          </Link>
        </div>
        <div>
          <IosAdd />
        </div>

        <div className="insta-upload-button">
          <Upload />
        </div>
      </div>
    </div>
  );
};

export default instagramNavi;
