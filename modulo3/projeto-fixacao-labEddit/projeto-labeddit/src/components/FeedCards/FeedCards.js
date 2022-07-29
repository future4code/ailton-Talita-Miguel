import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import { PostCardContainer } from "./styled";
import ReplyPostForm from "./ReplyPostForm";
import { votePost, DeleteVotePost } from "../../services/votePost";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const PostCards = ({ post, getPosts }) => {
  const { deleteVote } = DeleteVotePost();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const onClickVote = (id, choice) => {
    votePost(id, choice, getPosts);
  };

  const onClickDeleteVote = (id) => {
    deleteVote(id, getPosts);
  };

  return (
    <PostCardContainer>
      <Card
        sx={{
          width: "330px",
          minHeight: 200,
          mb: 2,
        }}
      >
        <CardHeader
          avatar={
            <Avatar
              sx={{
                background: "linear-gradient(45deg, #FF6489 20%, #F9B24E 90%)",
              }}
              aria-label="recipe"
            >
              {post.username.substr(0, 1).toUpperCase()}
            </Avatar>
          }
          title={`Enviado por: ${post.username}`}
          subheader={post.title}
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
            {post.body}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          {post.userVote === 1 ? (
            <IconButton
              aria-label="Number Votes"
              onClick={() => onClickDeleteVote(post.id)}
            >
              <ThumbUpOffAltIcon color="primary" />
            </IconButton>
          ) : (
            <IconButton
              aria-label="Number Votes"
              onClick={() => onClickVote(post.id, 1)}
            >
              <ThumbUpOffAltIcon />
            </IconButton>
          )}

          <Typography sx={{ fontSize: 22 }} color="text.secondary">
            {post.voteSum === null ? 0 : post.voteSum}
          </Typography>

          {post.userVote === -1 ? (
            <IconButton
              aria-label="Number Votes"
              onClick={() => onClickDeleteVote(post.id)}
            >
              <ThumbDownOffAltIcon color="primary" />
            </IconButton>
          ) : (
            <IconButton
              aria-label="Number Votes"
              onClick={() => onClickVote(post.id, -1)}
            >
              <ThumbDownOffAltIcon />
            </IconButton>
          )}

          <IconButton aria-label="Chat">
            <ChatBubbleOutlineRoundedIcon />
            {post.commentCount === null ? 0 : post.commentCount}
          </IconButton>

          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <ReplyPostForm post={post} getPosts={getPosts}/>
          </CardContent>
        </Collapse>
      </Card>
    </PostCardContainer>
  );
};

export default PostCards;
