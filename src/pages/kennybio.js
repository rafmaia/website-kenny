import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const BioH1 = styled.h1`
 color: #442c23;
 text-align: center;
 margin-left: 0;
 padding: 10px;
 font-size: 42px;
`;

const BioContainer = styled.div`
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

const Icon = styled(Link)`
margin-left: 40px;
margin-top: 32px;
margin-bottom: 32px;
text-decoration: none;
color: #f4e8de;
font-weight: 700;
font-size: 24px;

@media screen and (max-width: 480px) {
  margin-left: 16px;
  margin-top: 8px;
}
`;

const BioP = styled.p`
 color: #442c23;
 background-color: #f4e8de; opacity: 0.7;
 padding: 15px;
 margin-left: 20px;
 margin-right: 20px;
 font-size: 22px;

 @media screen and (max-width: 480px) {
  font-size: 18px;
}  
`;

const BioWrapper = styled.div`
height: 100%;
display: grid;
flex-direction: column;
justify-content: center;

@media screen and (max-width: 400px) {
  height: 80%;
}
`;

const BioContent = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
padding: 20px;

@media screen and (max-width: 480px) {
  padding: 20px;
}
`;

const Break = styled.br`
 justify-content: left;
`

function KennyBio() {
    return (
      <>
       <BioContainer>
          <BioWrapper>
          <Icon to='/'>KENNY HAYES</Icon> 
            <BioContent>  
                <BioH1>Bio</BioH1>
                <BioP>An award-winning singer-songwriter and actor, music director, composer and music teacher, Kenny Hayes is a graduate of the University of Ottawa with a degree in music, theatre and composition (2012). He has acted in both community and professional productions across the city, including A Flea In Her Ear, Skin Flick, tick...tick...BOOM!, A Christmas Story and Ron Fromstein's Henry (Nepean Little Theatre Award: Best Actor In A Leading Role).</BioP>
                <BioP>His music has been featured in the Ottawa stage productions of Barefoot In The Park, Lysistrata, Silent Sky and Daniel MacIvor's Marion Bridge (Armagh Sifton-Price Award: Best Original Song & Score). Kenny resides in Canada's beautiful capital city and is will be coming out with new music very soon!</BioP>
                <BioP>Certifications & Achievements:</BioP>
                <BioP>- University of Ottawa - Honours Bachelor of Arts, Specialization in Music, Theatre & Composition
                <Break />- Royal Conservatory of Music - Piano (Level 8); Music History; Theory Rudiments
                <Break />- Armagh Sifton-Price Award - Best Original Score/Song ('Marion Bridge')
                <Break />- Alcorn Music Studios - Songwriter's Certificate
                <Break />- Capital Critics Circle Award Nomination - Best Actor ('A Flea In Her Ear')
                <Break />- Ottawa Little Theatre President's Medal - Best Actor In A Supporting Role ('Skin Flick')
                <Break />- Nepean Little Theatre Award - Best Leading Actor ('Henry')</BioP> 
              </BioContent>
            </BioWrapper>
        </BioContainer>
        <Footer />
      </>
    );
  };

export default KennyBio;