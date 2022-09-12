import React from "react";
import {ErrorPageContainer, ErrorImage} from './styled'
import Typography from '@mui/material/Typography'
import error from "../../assets/image/error.jpg"

const ErrorPage = () => {
  return (
    <ErrorPageContainer>
      <Typography color={'primary'} variant={'h4'} align={'center'}>Error 404 - Página não encontrada</Typography>
      <ErrorImage src={error} />
    </ErrorPageContainer>
  )
}

export default ErrorPage