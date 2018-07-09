import React from "react";
import CharacterBox from "../CharacterBox"
  var points = 0;
  var score = 0;
  var topScore = 0;
  const pictures = [
    {
      name: 1,
      image: "http://www4.pictures.zimbio.com/mp/kHoyq4whJW6l.jpg",
      picked: false
    },
    {
      name: 2,
      image:
        "https://media1.popsugar-assets.com/files/thumbor/MIhqjLVvGMVAFjYfVyw_fJIAZcc/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2012/10/41/4/192/1922283/2946d558095820ca_Lana/i/Lana-Kane-From-Archer.png",
        picked: false
    },
    {
      name: 3,
      image:
        "https://vignette.wikia.nocookie.net/archer/images/4/44/Cheryl_1.jpg/revision/latest?cb=20130221004653",
        picked: false
    },
    {
      name: 4,
      image:
        "https://vignette.wikia.nocookie.net/archer/images/5/5c/Epi-Pam.PNG/revision/latest?cb=20130406084428",
        picked: false
    },
    {
      name: 5,
      image:
        "https://yt3.ggpht.com/a-/ACSszfEXDGGZoZZ9H-xSEASAKYORU62IjLvdx31w2A=s900-mo-c-c0xffffffff-rj-k-no",
        picked: false
    },
    {
      name: 6,
      image:
        "https://imgix.ranker.com/user_node_img/2740/54785274/original/malory-archer-tv-characters-photo-u1?w=280&h=280&fit=crop&crop=faces&q=50&fmt=jpg",
        picked: false
    },
    {
      name: 7,
      image:
        "https://vignette.wikia.nocookie.net/archer/images/6/6a/CyrilDad.png/revision/latest?cb=20110405023434",
        picked: false
    },
    {
      name: 8,
      image:
        "https://vignette.wikia.nocookie.net/archer/images/b/bf/Gillette.png/revision/latest?cb=20110213013032",
        picked: false
    },
    {
      name: 9,
      image:
        "https://vignette.wikia.nocookie.net/archer/images/3/3b/Barry_Dillon.png/revision/latest?cb=20110208043626",
        picked: false
    },
    {
      name: 10,
      image:
        "https://vignette.wikia.nocookie.net/archer/images/e/e8/Ron.JPG/revision/latest?cb=20130210035643",
        picked: false
    },
    {
      name: 11,
      image:
        "https://akns-images.eonline.com/eol_images/Entire_Site/2015624/rs_560x415-150724154942-560-woodhouse-archer.jpg?fit=inside|900:auto&output-quality=90",
      picked: false
    },
    {
      name: 12,
      image:
        "https://vignette.wikia.nocookie.net/archer/images/3/38/Katya.png/revision/latest?cb=20110415122500",
      picked: false
    }
  ];
  const shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  };

class Card extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      user: {
        score: 0
      },
      characters: shuffle(pictures)
    };
}
   checkCard = (index) => {
     console.log("clicked")
    if (this.state.characters[index].picked === false) {
      this.setState({
        characters: shuffle( this.state.characters.map( (character, current) =>  {
            return ( current === index ) ? { ...character, picked:true } : character
        })),
        user: {
          ...this.state.user,
          score: this.state.user.score + 1
      }
  });
} else {
  this.setState({
      characters: shuffle(this.state.characters.map( character => { return { ...character, picked : false } })),
      user: {
          ...this.state.user,
          score: 0
      }
  });
  //and shuffle
}

}

  render() {

    return (
      <div>
                <CharacterBox 
                    characters={this.state.characters} 
                    checkCard={this.checkCard} />
            </div>
    );
  }
}

export default Card;
