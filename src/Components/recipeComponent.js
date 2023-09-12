import styled from "styled-components";

export const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-shadow: 0 3px 10px 0 #aaa;
  width: 225px;
`;

export const CoverImg = styled.img`
 height: auto;
`;

export const RecipeName = styled.span`
  font-weight: bold;
  font-size:18px;
  color: black;
  margin: 10px auto;
`;

export const IngredientsButton = styled.span`
  font-size:18px;
  color: green;
  margin-bottom: 12px;
  border: solid 1px green;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 4px;
  text-align: center;
`;

export const SeeFullRecipeButton = styled.span`
  font-size:18px;
  color: red;
  border: solid 1px red;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 4px;
  text-align: center;
`;