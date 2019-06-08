import React, {Component} from "react";
import NavBar from "./components/navbar"
import Jumbotron from "./components/jumbotron"
import Main from "./components/main";
import images from "./images";
import Footer from "./components/footer";

// class App extends Component {
//     // set the counter when an image is clicked
//     state= {
//         score: 0
//     };
//     // increase score on click.
//     increaseScore = () => {
//         this.setState({score: this.state.score +1});

//     };
    

//     // shuffling images to reposition them on the DOM.
//     shuffleImages = (arr) => {
//         var control = arr.length, temp, index;
//         // While there are elements in the array
//     while (control > 0) {
//         // Pick a random index
//                 index = Math.floor(Math.random() * control);
//         // Decrease ctr by 1
//                 control--;
//         // And swap the last element with it
//                 temp = arr[control];
//                 arr[control] = arr[index];
//                 arr[index] = temp;
//             }
//             return arr;
//         };
    
//     render () {
//     return (
//         <div className="container">
//             <NavBar score = {this.state.score}/>
//             <Jumbotron />
//             <div className="row">
//                 <div className="col-ms-12">
//                     {images.map(image => (
//                         <Main key={image.id} src={image.src} id={image.id} onClick= {this.shuffleImages(images)}/>
//                     ))}
//                 </div>
//             </div>
//             <br></br>
//             <Footer />


//         </div>

//     );
// }
// };
// export default App;

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
                        handleIncrement={this.handleIncrement}
                      handleReset={this.handleReset}
                      handleShuffle={this.handleShuffle}
                         />
                    ))}
                </div>
            </div>
            <br></br>
            <Footer />
       </div>
        // <Wrapper>
        //   <Nav
        //     title="The Venture Brother's Clicky Game"
        //     score={this.state.currentScore}
        //     topscore={this.state.topScore}
        //     rightwrong={this.state.rightwrong}
        //   />
  
        //   <Title>
        //     Be wary, do not click on a duplicate. Go Team Venture!
        //   </Title>
  
        //   <Container>
        //     <Row>
        //       {this.state.Images.map(friend => (
        //         <Column size="md-3 sm-6">
        //           <FriendCard
        //             key={friend.id}
        //             handleClick={this.handleClick}
        //             handleIncrement={this.handleIncrement}
        //             handleReset={this.handleReset}
        //             handleShuffle={this.handleShuffle}
        //             id={friend.id}
        //             image={friend.image}
        //           />
        //         </Column>
        //       ))}
        //     </Row>
        //   </Container>
        // </Wrapper>
      );
    }
  }
  
  export default App;
