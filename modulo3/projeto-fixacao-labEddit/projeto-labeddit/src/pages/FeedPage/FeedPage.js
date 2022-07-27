import React from "react";
import PostCards from "../../components/PostCards/PostCards";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";

const FeedPage = () => {
  useProtectedPage();
  const posts = useRequestData([], `${BASE_URL}/posts`);
  console.log("aaaa", posts);
  return (
    <div>
      <h1>FeedPage</h1>
      <PostCards title={"Post"} />
    </div>
  );
};

export default FeedPage;
