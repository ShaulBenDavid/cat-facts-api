import { StyledHeader, StyleImage, StyledTitle } from "./style";
import catImage from '../../Assets/catImg.png';
import React from "react";

const Header = () => {
    return (
        <StyledHeader>
            <StyleImage src={catImage} alt="cat-image" />
            <StyledTitle>Facts on Cats</StyledTitle>
        </StyledHeader>
    );
}

export default Header;