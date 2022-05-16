import React from "react";
import * as S from "./style";

const FactViewer = ({ fact }) => {
    return (
        <S.FactContainer>
            <S.StyledParagraph>{fact}</S.StyledParagraph>
        </S.FactContainer>
    );
}

export default FactViewer;