import React from "react";
//import CardMedia from "@mui/material/CardMedia";
//import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
//import { PostCardContainer, PostCardContent } from "./styled";

const PostCards = (props) => {
  return (
    <Typography align={"center"}>{props.title}</Typography>
  //   <PostCardContainer>
  //   <CardActionArea style={{ width: 300 }}>
  //     <PostCardContent>
  //     </PostCardContent>
  //   </CardActionArea>
  // </PostCardContainer>
  );
};

export default PostCards;
