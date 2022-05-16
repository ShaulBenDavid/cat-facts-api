import React, { Fragment } from "react";
import { StyledButton } from "./style";

const Button = ({ handleSubmit, children }) => {
    return (
        <Fragment>
            <StyledButton onClick={handleSubmit}>{children}</StyledButton>
        </Fragment>
    );
}

export default Button;