import styled from "styled-components";
import { media } from "../../utils";

export const WelcomeCard = styled.div`
  background-color: #fff;
  margin: 30px auto;
  opacity: 0.8;
  //Overriding the style guide card flexbox settings
  max-width: 80% !important;
  flex-direction: row !important;
  padding: 50px 0 !important; //temporary fix to a style guide bug

  align-items: center;
  text-align: center;

  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  button {
    margin-left: 8px;
  }
`;

export const WelcomeLogo = styled.div`
  width: 50%;
  height: 100%;

  img {
    width: 60%;
    display: block;
    margin: 0 auto;
  }
`;

export const WelcomeProfile = styled.div`
  height: 100%;
  text-align: center;
  position: relative;

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }

  h1,
  img {
    margin: 0 10px;
    display: inline-block;
    vertical-align: middle;
  }

  ${media.tablet`
    width: 50%;
    &:after {
      display: block;
      content: "";
      position: absolute;
      height: 100%;
      width: 1px;
      background-color:#D0D0D0;
      top:0;
    }
  `}
`;


export const WelcomeDetail = styled.div`
  padding: 1rem 3.5rem;
  text-align: center;
  align-items: center;
  p,
  li {
    color: #666666;
  }
  ul {
    list-style: disc;
    margin: 0 18px;
  }
`;
