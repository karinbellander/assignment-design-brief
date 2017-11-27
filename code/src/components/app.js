import React from "react"

class App extends React.Component {

  render() {
    return (

  <div>
      <div className="header">
        <div className="header-container">

          <div className="header-list">
            <ul>
              <li id="home">Home</li>
              <li>Technology</li>
              <li>Creativity</li>
              <li>Entrepreneurship</li>
              <li>Self</li>
              <li>Culture</li>
              <li>Digital design</li>
              <li>Popular on Medium</li>
              <li>Politics</li>
              <li>More</li>
            </ul>
          </div>

          <div className="button-header">
            <a href="#" id="button-header">Get started</a>
          </div>

        </div>
      </div>

      <div className="container">

        <div className="container-intro">
          <div className="intro-text">
            <h1>Interesting ideas that set your mind in motion.</h1>
            <p>Hear directly from the people who know it best. From tech to politics
              to creativity and more — whatever your interest, we´ve got you covered.
            </p>
            <div className="button"><a href="#" id="getStarted">Get started</a> <a href="#"id="learnMore">Learn more</a></div>
          </div>
          <div className="intro-image">
            <img src="/images/medium-image.png" alt="Illustration" id="intro-image"/>
          </div>
        </div>


        <div className="container-content">

          <div className="content">
            <div className="content-image"><img src="/images/medium-image.png" alt="" className=""/></div>
            <div className="content-text"></div>
          </div>

          <div className="content">
            <div className="content-image"></div>
            <div className="content-text"></div>
          </div>

          <div className="content">
            <div className="content-image"></div>
            <div className="content-text"></div>
          </div>

          <div className="content">
            <div className="content-image"></div>
            <div className="content-text"></div>
          </div>

        </div>

      </div>

    </div>
    )
  }


}

export default App
