import styled from 'styled-components';
import Axios from 'axios';
import {Header, LogoComponent, LogoIcon, SearchComponent, SearchInput} from './Components/headerComponent';
import {RecipeContainer, CoverImg, RecipeName, IngredientsButton, SeeFullRecipeButton} from './Components/recipeComponent';
import { useState } from 'react';
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";

const APP_ID = "d449d4d2";
const APP_KEY = "db25e800deab3463f8f4d4539f6b4aca";

/*body of the app*/
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const RecipeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px;
  gap: 20px;
  flex-wrap:wrap;
  justify-content: space-evenly;
`;

const RecipeComponent = (props) => {

  const [show, setShow] = useState(false);
  const {recipeObj} = props;
  return(
    <>
      <Dialog open = {show}>
        <DialogTitle id="alert-dialog-slide-title">INGREDIENTS:</DialogTitle>
        <DialogContent>
          <table>
            <thead>
              <th>Ingredients</th>
              <th>Weight</th>
            </thead>
            <tbody>
              {recipeObj.ingredients.map((ingredientObj) => (
                <tr>
                  <td>{ingredientObj.text}</td>
                  <td>{ingredientObj.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </DialogContent>
        <DialogActions>
          <IngredientsButton onClick={() => window.open(recipeObj.url)}>See More</IngredientsButton>
          <SeeFullRecipeButton onClick={() => setShow(false)}>Close</SeeFullRecipeButton>
        </DialogActions>
      </Dialog>

      <RecipeContainer>
        <CoverImg src={recipeObj.image} />
        <RecipeName>{recipeObj.label}</RecipeName>
        <IngredientsButton onClick={()=>setShow(true)}>Ingredients</IngredientsButton>
        <SeeFullRecipeButton onClick={()=>window.open(recipeObj.url)}>See complete recipe</SeeFullRecipeButton>
      </RecipeContainer>
    </>
  );
};

function App() {
  const[timeoutId, updateTimeoutId] = useState();
  const[recipeList, updateRecipeList] = useState([]);

  const fetchRecipe = async (searchString) => {
    const response = await Axios.get(`https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    updateRecipeList(response.data.hits);
  };

  const onTextChange = (event) => {
    clearTimeout(timeoutId);
    const timeout = setTimeout(()=>fetchRecipe(event.target.value),500);
    updateTimeoutId(timeout);
  };

  const Placeholder = styled.img`
    height: 200px;
    margin: 100px;
    opacity: 60%;
  `;

  return (
    <Container>
      <Header>
        <LogoComponent>
          <LogoIcon src="/bake.png"/>
          e-Recipe Book
        </LogoComponent>
        <SearchComponent>
          <img src="/search.svg" />
          <SearchInput placeholder='Eg: Cake' onChange={onTextChange}/>
        </SearchComponent>
      </Header>

      <RecipeListContainer>
        {recipeList.length ? ( recipeList.map((recipeObj)=> ( <RecipeComponent recipeObj = {recipeObj.recipe}/> ))) : (<Placeholder src="bake.png"/>)
        }

      </RecipeListContainer>
    </Container>
  );
}

export default App;
