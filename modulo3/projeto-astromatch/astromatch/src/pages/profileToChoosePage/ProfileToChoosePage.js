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
  TrashImg,
  DivImg
} from "./styled";
import Trash from "../../assets/img/trash.png";
import Heart from "../../assets/img/heart.png";
import No from "../../assets/img/no.png";

const ProfileToChoose = ({ clearList }) => {
  const [person, setPerson] = useState({});
  const [isMatch, setIsMatch] = useState(false)
  const [loading, setLoading] = useState(false)
  const [left, setLeft] = useState("")

  useEffect(() => {
    ProfileToChoose();
  }, []);

  const ProfileToChoose = () => {
    setLoading(true)
    axios
      .get(`${BASE_URL}/person`)
      .then((response) => {
        setLoading(false)
        console.log('aaaa')
        setPerson(response.data.profile);
      })
      .catch((error) => {
        setLoading(false)
        console.log("ProfileToChoose:", error.message);
      });
  };

  const choosePerson = (choice) => {
    const id = person?.id;
    const body = {
      id: id,
      choice: choice,
    };

    axios
      .post(`${BASE_URL}/choose-person`, body)
      .then((response) => {
        if (response.data.isMatch) {
          setIsMatch(false)
          alert("Deu match!");
        }
        ProfileToChoose();
        setIsMatch(false)
      })
      .catch((error) => {
        console.log("choosePerson:", error.message);
      });
  };

  console.log('is---', isMatch)
  return (
    <ProfileContainer>
      {!loading ? (
        <Section>
          <DivImg>
            <PersonImg src={person?.photo} alt={person?.photo_alt} isMatch={isMatch} left={left}/>
          </DivImg>
          <Info>
            <p>
              {person?.name}, {person?.age}
            </p>
            <p>{person?.bio}</p>

            <ChooseContainer>
              <HeartImg
                src={Heart}
                alt="Heart"
                onClick={() => {choosePerson(true)
                  setIsMatch(true)
                  setLeft('left')}}
              />

              <NoImg
                src={No}
                alt="No Heart"
                onClick={() => {choosePerson(false)
                  setIsMatch(true)
                  setLeft('right')}}
              />

              <TrashImg src={Trash} alt="Trash" onClick={clearList} />
            </ChooseContainer>
          </Info>
        </Section>
      ) : (
        <p>Carregando....</p>
      )}
    </ProfileContainer>
  );
};

export default ProfileToChoose;
