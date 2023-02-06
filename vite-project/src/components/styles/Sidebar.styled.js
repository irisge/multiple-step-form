import styled from 'styled-components';

export const StyledSidebar = styled.div`
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 48%;
    top: 4.8%;
    position: fixed;
    left: 26%;
    right: 26%;
  }

  img {
    min-width: 100%;
  }

  NavLink,a {
    border: solid 1px white;
    border-radius: 50%;
    color: #fff;
    font-weight: 700;
    font-size: 0.875rem;
    padding: 0.438rem 0.688rem;
  }
`;
