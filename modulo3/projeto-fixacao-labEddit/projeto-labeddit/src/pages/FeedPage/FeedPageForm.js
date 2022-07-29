import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { AddPost } from "../../services/posts";
import useProtectedPage from "../../hooks/useProtectedPage";
import {FeedPageFormContainer} from "./styled"
import { Button, TextField, CircularProgress } from "@mui/material";

const FeedPageForm = ({getPosts}) => {
  useProtectedPage();
  const [form, onChange, clear] = useForm({ title: "", body: "" });
  const [isLoading, setIsLoading] = useState(false)
  const { addPost } = AddPost();
  const navigate = useNavigate();

  const onSubmitForm = (event) => {
    event.preventDefault();
    addPost(form, clear, navigate, setIsLoading, getPosts);
  };

  return (
    <FeedPageFormContainer>
      <form onSubmit={onSubmitForm}>
        <TextField
          name={"title"}
          value={form.title}
          onChange={onChange}
          label={"Título do post"}
          variant={"outlined"}
          fullWidth
          margin="normal"
          required
          type={"text"}
          style={{
            background: "#EDEDED",
          }}
        />
        <TextField
          name={"body"}
          value={form.body}
          onChange={onChange}
          label={"Escreva seu post"}
          variant={"outlined"}
          fullWidth
          margin="normal"
          required
          type={"text"}
          style={{
            background: "#EDEDED",
          }}
        />

        <Button
          type={"submit"}
          fullWidth
          variant="contained"
          margin="normal"
          sx={{
            mt: 2,
            background: "linear-gradient(45deg, #FF6489 20%, #F9B24E 90%)",
          }}
        >
          {isLoading ? (
            <CircularProgress color="inherit" size={24} />
          ) : (
            <>Enviar</>
          )}
        </Button>
      </form>
    </FeedPageFormContainer>
  );
};

export default FeedPageForm;
