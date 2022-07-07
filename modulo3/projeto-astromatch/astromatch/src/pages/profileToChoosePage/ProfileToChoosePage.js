import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import {
  ChooseContainer,
  HeartImg,
  NoImg,
  ProfileContainer,
  Section,
  Info,
  PersonImg,
  TrashImg
} from "./styled";
import Trash from "../../assets/img/trash.png"
import Heart from "../../assets/img/heart.png";
import No from "../../assets/img/no.png";

const ProfileToChoose = ({ clearList }) => {
  const [person, setPerson] = useState({});

  useEffect(() => {
    ProfileToChoose();
  }, []);

  const ProfileToChoose = () => {
    axios
      .get(`${BASE_URL}/person`)
      .then((response) => {
        setPerson(response.data.profile);
      })
      .catch((error) => {
        console.log("personInfos:", error.message);
      });
  };

  const choosePerson = (choice) => {
    const id = person.id;
    const body = {
      id: id,
      choice: choice,
    };

    axios
      .post(`${BASE_URL}/choose-person`, body)
      .then((response) => {
        if (response.data.isMatch) {
          alert("Deu match!");
        }
        ProfileToChoose();
      })
      .catch((error) => {
        console.log("match:", error.message);
      });
  };

  return (
    <ProfileContainer>
      <Section>
        <PersonImg src={person.photo} alt={person.photo_alt} />
        <Info>
          <p>
            {person.name}, {person.age}
          </p>
          <p>{person.bio}</p>

          <ChooseContainer>
            <HeartImg
              src={Heart}
              alt="Heart"
              onClick={() => choosePerson(true)}
            />

            <NoImg
              src={No}
              alt="No Heart"
              onClick={() => choosePerson(false)}
            />

            <TrashImg src={Trash} alt="Trash" onClick={clearList}/>
          </ChooseContainer>
        </Info>
      </Section>
    </ProfileContainer>
  );
};

export default ProfileToChoose;
