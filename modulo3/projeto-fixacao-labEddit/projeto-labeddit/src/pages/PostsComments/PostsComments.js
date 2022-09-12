import React, { useEffect, useState } from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import axios from "axios";
import Swal from "sweetalert2";
import { BASE_URL } from "../../constants/urls";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CircularProgress from "@mui/material/CircularProgress";
import { PostCommentsContainer, Loading } from "./styled";

const PostsComments = ({ post }) => {
  useProtectedPage();
  const [isLoading, setIsLoading] = useState(false);
  const [comments, setComments] = useState();

  useEffect(() => {
    getPostComments();
  }, []);

  const getPostComments = () => {
    setIsLoading(true);

    axios
      .get(`${BASE_URL}/posts/${post.id}/comments`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setComments(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algo deu errado. Tente novamente mais tarde",
          footer: `Código do erro ${error.response.status}`,
        });
      });
  };

  const postComment = comments?.map((comment) => {
    return (
      <PostCommentsContainer key={comment.id}>
        <Card
          sx={{
            width: "100%",
            minHeight: 180,
            mb: 2,
          }}
        >
          <CardHeader
            avatar={
              <Avatar
                sx={{
                  background:
                    "linear-gradient(45deg, #FF6489 20%, #F9B24E 90%)",
                }}
                aria-label="recipe"
              >
                {comment?.username.substr(0, 1).toUpperCase()}
              </Avatar>
            }
            title={`Enviado por: ${comment?.username}`}
          />
          <CardContent>
            <Typography
              variant="body2"
              sx={{
                fontWeight: "bold",
                overflow: "hidden",
                textOverflow: "ellipsis",
                width: "95%",
              }}
              color="text.secondary"
            >
              Comentário: {comment.body}
            </Typography>
          </CardContent>
        </Card>
      </PostCommentsContainer>
    );
  });

  return (
    <div>
      {!isLoading ? (
        <>{postComment}</>
      ) : (
        <Loading>
          <CircularProgress color="inherit" size={45} />
        </Loading>
      )}
    </div>
  );
};

export default PostsComments;
