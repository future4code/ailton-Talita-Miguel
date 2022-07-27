export const goToLoginPage = (navigate) => {
  navigate("/login")
}

export const goToFeedPage = (navigate) => {
  navigate("/")
}

export const goToPostPage = (navigate) => {
  navigate("/post")
}

export const goToSignupPage = (navigate) => {
  navigate("/signUp")
}

export const goToErrorPage = (navigate) => {
  navigate("/errorPage")
}

export const goBack = (navigate) => {
  navigate(-1);
};