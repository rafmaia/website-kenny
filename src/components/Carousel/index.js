import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HorizontalCarousel from "./HorizontalCarousel";


const Icon = styled(Link)`
margin-left: 40px;
margin-top: 32px;
margin-bottom: 32px;
text-decoration: none;
color: #f4e8de;
font-weight: 700;
font-size: 24px;
padding: 20x;

@media screen and (max-width: 480px) {
  margin-left: 16px;
  margin-top: 8px;
}
`;

const CarouselWrapper = styled.div`
height: 100%;
display: grid;
flex-direction: column;
justify-content: left;
`;

const CarouselContainer = styled.div`
min-height: 700px;
position: static;
bottom: 0;
left: 0;
right: 0;
top: 0;
z-index: 0;
overflow: hidden;
background: linear-gradient(
  108deg,
  #bf8d58 0%,
  #e4a96a 100%
);
`;

const CarouselContent = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
padding: 20px;
`;


export default function CarouselKenny() {
  return (
    <>
    <CarouselContainer>
    <CarouselWrapper> 
    <Icon to='/'>KENNY HAYES</Icon>
    <CarouselContent>
    <HorizontalCarousel />
    </CarouselContent>    
    </CarouselWrapper>  
    </CarouselContainer>
    </>
  );
}