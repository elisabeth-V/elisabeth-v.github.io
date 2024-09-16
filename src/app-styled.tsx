//for styled compenent and variables accross the app
import styled from 'styled-components'

interface linkProps {
  $isPrimaryColor?: boolean;
  $isSecondaryColor?: boolean;
  $isPrimary?: boolean;
  className?: string | undefined | any, 
  children?: string | number | boolean | undefined, 
  currentPage?:string | number, 
  firstpage?:string | number, 
}

// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.div`
  padding: 0 5vw 5vw;
`;

export const StyledBlockCta = styled.span<linkProps>`
  background-color: ${props => props.$isSecondaryColor ? "var(--secondary-color)" : "var(--main-font-color)"};
  color: ${props => props.$isSecondaryColor ? "var(--main-font-color)" : "#fff"};
  padding:14px 20px;
  display:block;
  font-weight:600;
  border-radius:3px;
`;

export const StyledNavLink =  styled.span<linkProps>`
  color: ${props => props.$isPrimary ? "var(--secondary-color)" : "var(--main-font-color)"};
  font-weight:300;
  padding:0.4vw;
  margin:0 1vw;
  transition:all 0.25s ease-in-out;
  font-size: 14px;
  position:relative;
  &:after{
    content:".";
  }
  &:before{
    content:"";
    background:var(--main-font-color);
    position:absolute;
    left: 0;
    top: 0;
    z-index:-1;
    width:100%;
    height:100%;
    transition: transform 0.5s ease 0s, transform-origin 0s ease 0s;
    transform: scaleX(0);
    transform-origin: right center;
  }
  &:hover{
    color:#fff;
    &:before{
      transform: scaleX(1);
      transform-origin: left center;
    }
  }
`;

export const InternaLink = styled.span<linkProps>`
  padding:5px;
  color:#212121;
  background: ${props => props.$isPrimary ? "#727272" : "#c8c8c8"};
  display: ${props => props.firstpage === 0 ? "none" : ""};
`;

const Link = (props : linkProps) => (
  <a className={props.className} href={`/content-page?page=${props.currentPage}`}>
    {props.children}
  </a>
);

export const StyledLink = styled(Link)`
  color: #BF4F74;
  font-weight: bold;
`;
