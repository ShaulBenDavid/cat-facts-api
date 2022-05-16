import styled from 'styled-components';

export const StyledButton = styled.button`
 padding: 10px 40px;
 border-radius: 3px;
 font-size: 20px;
 color: #FFF;
 text-decoration: none;
 background-color: #fd0a54;
 border: none;
 border-bottom: 5px solid #f57576;
 text-shadow: 0px -2px #f57576;
 -webkit-transition: all 0.1s;
 transition: all 0.1s;

 &:hover {
 -webkit-transform: translate(0px,5px);
 -ms-transform: translate(0px,5px);
 transform: translate(0px,5px);
 border-bottom: 1px solid #fd0a54;
 }

`;