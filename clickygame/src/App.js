import React, {Component} from "react";
import NavBar from "./components/navbar"
import Jumbotron from "./components/jumbotron"
import Main from "./components/main";
import images from "./images";
import Footer from "./components/footer";

function shuffleImages(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  class App extends Component {
    // Set this.state
    state = {
      images,
      currentScore: 0,
      topScore: 0,
      rightwrong: "",
      clicked: []
    };
  
    handleClick = id => {
      if (this.state.clicked.indexOf(id) === -1) {
        this.handleIncrement();
        this.setState({ clicked: this.state.clicked.concat(id) });
      } else {
        this.handleReset();
      }
    };
  
    handleIncrement = () => {
      const newScore = this.state.currentScore + 1;
      this.setState({
        currentScore: newScore,
        rightwrong: ""
      });
      if (newScore >= this.state.topScore) {
        this.setState({ topScore: newScore });
      } else if (newScore === 12) {
        this.setState({ rightWrong: "You win!" });
      }
  
      this.handleShuffle();
    };
    handleReset = () => {
      this.setState({
        currentScore: 0,
        topScore: this.state.topScore,
        rightWrong: "You Failed!  Let me drink your tears!",
        clicked: []
      });
      this.handleShuffle();
    };
  
    handleShuffle = () => {
      let shuffledImages = shuffleImages(images);
      this.setState({ Images: shuffledImages });
    };
    
    render() {
      return (
            <div className="container">
            <NavBar score = {this.state.currentScore} topScore={this.state.topScore} status={this.state.rightwrong}/>
            <Jumbotron />
            <div className="row">
                <div className="col-ms-12">
                    {images.map(image => (
                        <Main
                        key={image.id} src={image.src} id={image.id}
                        handleClick={this.handleClick}
                         />
                    ))}
                </div>
            </div>
            <br></br>
            <Footer />
       </div>
      );
    }
  }
  
  export default App;
