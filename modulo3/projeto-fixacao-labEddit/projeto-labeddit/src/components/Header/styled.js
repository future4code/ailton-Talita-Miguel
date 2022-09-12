import styled from 'styled-components'
import {Toolbar} from "@mui/material";


export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 428px;
  margin: 0 auto;
`

export const StyledToolBar = styled(Toolbar)`
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 85px;
`