import React from 'react';

class HackBnB extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img src="./header.png" alt="Static listings header"></img>
        <div className="section">
          <div className="left-col">
            <div id="description-service"></div>
            <div id="reviews-service"></div>
            <div id="neighborhood"></div>
          </div>
        </div>
        <script src="/lib/react.development.js"></script>
        <script src="/lib/react-dom.development.js"></script>
        <script src="http://18.219.35.229:80/bundle.js"></script>
        <script src="http://18.222.4.195:80/app-description.bundle.js"></script>
        <script src="http://localhost:3006/bundle.js"></script>
     </div>
    );
  }
}

export default HackBnB;
