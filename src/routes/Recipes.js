import React from 'react';
import RecipeContext from '../RecipeContext';
import RecipeCard from '../components/RecipeCard';
import Nav from '../components/Nav';

class Recipes extends React.Component{

  render() {
  	return ( 
      <div>
      <Nav location="recipes"></Nav>
  		<div className="pageContainer">
  		<h1>recipe index</h1>
        <RecipeContext.Consumer>
          {data => { 
            return (
              data.recipes.map((recipe, i) => {
              // Return the element. Also pass key
                return (<RecipeCard key={i} index={i} recipe={recipe} />)
              })
              )
          }}
        </RecipeContext.Consumer>
      	</div>
      </div>
  		 );
	}


}

export default Recipes;