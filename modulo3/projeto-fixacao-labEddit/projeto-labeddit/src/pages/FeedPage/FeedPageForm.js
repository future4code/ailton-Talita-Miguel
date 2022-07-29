import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { InputsContainer } from "./styled";
import useForm from "../../hooks/useForm";
import { AddPost } from "../../services/posts";
import useProtectedPage from "../../hooks/useProtectedPage";
import { GlobalContext } from "../../components/Global/GlobalContext";
import { Button, TextField, CircularProgress } from "@mui/material";

const FeedPageForm = () => {
  useProtectedPage();
  const [form, onChange, clear] = useForm({ title: "", body: "" });
  const { isLoading } = useContext(GlobalContext);
  const { addPost } = AddPost();
  const navigate = useNavigate();

  const onSubmitForm = (event) => {
    event.preventDefault();
    addPost(form, clear, navigate);
  };

  return (
    <InputsContainer>
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
    </InputsContainer>
  );
};

export default FeedPageForm;
