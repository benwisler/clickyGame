import React from 'react';
import "./Card.css"
// class Card extends React.Component {
//     render() {
//         return (
//             <div className="card">
//             <img className="card-img-top" src=".../100px180/?text=Image cap" alt="Card image cap"/>
//             <div className="card-body">
//                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//             </div>
//             </div>
//         )
//     }
// }
const Card = props => (
    <div
      className="card"
      style={{
        backgroundImage: props.image ? `url("https://media1.popsugar-assets.com/files/thumbor/MIhqjLVvGMVAFjYfVyw_fJIAZcc/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2012/10/41/4/192/1922283/2946d558095820ca_Lana/i/Lana-Kane-From-Archer.png"
        )` : "none"
      }}
    >
      {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}

    </div>
  );

export default Card;