import React from "react";
import IosHeartOutline from "react-ionicons/lib/IosHeartOutline";

class outlinedHeart extends React.Component {

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

export default outlinedHeart