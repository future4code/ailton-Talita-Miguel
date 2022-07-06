import React, { useEffect, useState } from "react";
import axios from "axios"
import {BASE_URL} from "../../constants/url"
import {HeartImg} from "./styled"
import Heart from "../../assets/img/heart.png"
import NoHeart from "../../assets/img/no-heart.png"

const ProfileToChoose = () => {
  const [person, setPerson] = useState({})


  useEffect(() => {
    ProfileToChoose()
  }, [])

  const ProfileToChoose = () => {
    axios.get(`${BASE_URL}/person`)
    .then ((response) => {
      setPerson(response.data.profile)
    })
    .catch ((error) => {
      console.log('personInfos:', error.message)  
    })
  }


  const choosePerson = (choice) => {
    const id = person.id
    console.log(choice)
    const body = {
      "id": id,
      "choice": choice
    }

    axios.post(`${BASE_URL}/choose-person`, body)
    .then ((response) => {
      if(response.data.isMatch) {
        alert('Deu match!')
      }
      ProfileToChoose()
    })
    .catch ((error) => {
      console.log('match:', error.message)
    })
  }

  return (
    <div>
      <div>
        <img src={person.photo} alt={person.photo_alt}/>
        <p>{person.name}, {person.age}</p>
        <p>{person.bio}</p>
        <HeartImg src={Heart} alt="Heart" onClick={() => choosePerson(true)}/>
        <HeartImg src={NoHeart} alt="No Heart" onClick={() => choosePerson(false)}/>
      </div>
    </div>
  );
}

export default ProfileToChoose;
