import styled from 'styled-components'

interface linkProps {
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

const HoverPrimaryNav  = `
  border:1px solid #212121;
  display:block;
  cursor:pointer;
`;

export const StyledNavLink =  styled.span<linkProps>`
  background: ${props => props.$isPrimary ? "#ceedff" : "#f5f5f5"};
  margin:0 5px;
  padding:5px;
  transition:all 0.25s ease-in-out;
  ${HoverPrimaryNav};
  &:hover{
      background-color:#92ccee;
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
