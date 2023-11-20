import styled from "@emotion/styled";
import { TextField } from "@mui/material";

export const Wrapper = styled('div')(() => ({
    padding: '0',
    '& .edit-button': { 
        margin: '0px 30px 30px'
    }
}))
export const BoxStyled = styled('div')(() => ({
    width: '50%',
    margin: 'auto'
}))

export const TextFieldStyled = styled(TextField)(() => ({
    '& input': {
        fontSize: '14px'
    }
}))