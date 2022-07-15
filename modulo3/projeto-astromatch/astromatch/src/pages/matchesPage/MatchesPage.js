import React, { useEffect } from "react";
import Trash from "../../assets/img/trash.png";
import { MatchesContainer, Section, Info, PersonImg, TrashImg } from "./styled";

function MatchesPage({ clearList, getMatches, listPersonMatches }) {
  useEffect(() => {
    getMatches();
  }, []);

  const personMatches = listPersonMatches?.map((person, index) => {
    return (
      <Section key={index}>
        <PersonImg src={person.photo} alt="Person" />
        <Info>
          <p>
            {person.name}, {person.age}
          </p>
          <p>{person.bio}</p>
        </Info>
      </Section>
    );
  });

  return (
    <MatchesContainer>
      {personMatches}
      <TrashImg src={Trash} alt="Trash" onClick={clearList} />
    </MatchesContainer>
  );
}

export default MatchesPage;
