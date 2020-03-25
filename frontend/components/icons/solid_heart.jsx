import React from "react";
import IosHeart from "react-ionicons/lib/IosHeart";

class solidHeart extends React.Component {

    render() {
        return (
          <div class="insta-interactive-icons">
            <button>
              <IosHeartOutline
                // onClick={this.like}
                // fill={this.state.heartColor}
                className="heart-icon"
              />
            </button>
          </div>
        );
    }
}

export default solidHeart