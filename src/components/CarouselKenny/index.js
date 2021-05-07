import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import Card from "./Card";
import "./styles.css";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Icon = styled(Link)`
margin-left: 40px;
margin-top: 32px;
margin-bottom: 32px;
text-decoration: none;
color: #f4e8de;
font-weight: 700;
font-size: 32px;
padding: 20x;

@media screen and (max-width: 480px) {
  margin-left: 16px;
  margin-top: 8px;
}
`;

export default function CarouselKenny() {
  const [isShowing, setIsShowing] = useState(false);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 1200, itemsToShow: 1 }
  ];

  return (
    <>  
    <Icon to='/'>KENNY HAYES</Icon>   
    <div className="App">
      <div
        onMouseEnter={() => setIsShowing(true)}
        onMouseLeave={() => setIsShowing(false)}
      >
        <Carousel
          pagination={false}
          showArrows={isShowing}
          breakPoints={breakPoints}
        >
          <Card cardImage="https://live.staticflickr.com/65535/50534448926_e08cda6733_b.jpg" />
          <Card cardImage="https://live.staticflickr.com/65535/50534404211_4c445e30ed_k.jpg"/>
          <Card cardImage="https://live.staticflickr.com/65535/50534557457_d2f7f73734_k.jpg" />
          <Card cardImage="https://live.staticflickr.com/65535/50534557407_3b7927ba2d_b.jpg" />
     </Carousel>
      </div>
    </div>
    </>
  );
}
