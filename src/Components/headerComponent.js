import styled from "styled-components";

/*header of the app*/
export const Header = styled.div`
  color: white;
  background-color: black;
  display: flex;
  flex-direction: row;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
`;

/*components of the header - Logo and Search Bar*/
export const LogoComponent = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoIcon = styled.img`
  width: 45px;
  height: 45px;
  margin: 10px
`;

export const SearchComponent = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: 10px;
  border-radius: 6px;
  width: 50%;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  margin-left: 15px;
  font-size: 16px;
  font-weight: bold; 
`;
