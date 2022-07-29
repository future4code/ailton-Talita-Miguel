import React, { useState } from "react";
import { InputsContainer } from "./styled";
import useForm from "../../hooks/useForm";
import { ReplyPost } from "../../services/replyPost";
import { Button, TextField, CircularProgress } from "@mui/material";

const ReplyPostForm = ({ post, getPosts }) => {
  const [form, onChange, clear] = useForm({ body: "" });
  const [isLoading, setIsLoading] = useState(false)
  const { replyPost } = ReplyPost();

  const onSubmitForm = (event) => {
    event.preventDefault();
    replyPost(form, post.id, setIsLoading, clear, getPosts);
  };

  return (
    <InputsContainer>
      <form onSubmit={onSubmitForm}>
        <TextField
          name={"body"}
          value={form.body}
          onChange={onChange}
          label={"Adicionar comentário"}
          variant={"outlined"}
          fullWidth
          margin="normal"
          required
          type={"text"}
          sx={{
            background: "#EDEDED",
          }}
        />

        <Button
          type={"submit"}
          fullWidth
          variant="contained"
          sx={{
            background: "linear-gradient(45deg, #FF6489 20%, #F9B24E 90%)",
          }}
        >
          {isLoading ? (
            <CircularProgress color="inherit" size={24} />
          ) : (
            <>Responder</>
          )}
        </Button>
      </form>
    </InputsContainer>
  );
};

export default ReplyPostForm;
