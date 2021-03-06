import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RecipeProvider from './RecipeProvider';
import React from 'react';
import { Helmet } from 'react-helmet';

// routes
import Home from './routes/Home';
import Recipes from './routes/Recipes';
import About from './routes/About';
import Ingredients from './routes/Ingredients';

//components
import RecipePage from './components/RecipePage';

import './App.css';

class App extends React.Component {

  render() {
    return (
      <RecipeProvider>
        <BrowserRouter>
          <Helmet>
            <title>garden of blues</title>
            <meta name="description" content="nancy and semine's garden of blues" />
            <meta name="keywords" content="recipes, honduras, malaysia" />
          </Helmet>
          <Switch>  
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route exact path="/recipes" component={Recipes} />
            <Route exact path="/ingredients" component={Ingredients} />
            <Route path="/:id" component={RecipePage} />
          </Switch>

        </BrowserRouter>
      </RecipeProvider>
    );
  }
}
export default App;
