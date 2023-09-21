
import React from 'react';
import image8 from '../assets/image8.jpeg';
import image9 from '../assets/image9.jpeg';
import image10 from '../assets/image10.jpeg';


export default function Header() {
  return (
    <div className="container">
      <img src="./logo512.png" />
      <div>
        <h1>Why Me</h1>
        <p>
          Whether article spirits new her covered hastily sitting her.<br></br>
          Money witty books nor son add.Chicken age had evening<br></br>
          believe but proceed pretend mrs.
        </p>
        <p>
          At missed advice my it no sister.Miss told ham dull knew<br></br>
          see she spot near can.Spirit her entire her called.Destract<br></br>
          yet delight written farther his general.
        </p>
        <button>schedule a call</button>
        <h1>Latest Work</h1>
        <div className="latest-work">
            <img src={image8} style={{width:'200px',height:'200px', borderRadius: '10%'}}/>
            <img src={image9} style={{width: '200px', height:'200px', borderRadius: '10%'}} />
            <img src={image10} style={{width: '200px', height: '200PX', borderRadius: '10%'}} />
        </div>
        <a href="#">View All</a>
      </div>
    </div>
  );
}


