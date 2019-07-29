import React from 'react';
import './index.css';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        ingredients: [
          {name: 'Kaiser Bun', color: 'saddlebrown'},
          {name: 'Sesame Bun', color: 'sandybrown'},
          {name: 'Gluten Free Bun', color: 'peru'},
          {name: 'Lettuce Wrap', color: 'olivedrab'},
          {name: 'Beef Patty', color: '#3F250B'},
          {name: 'Soy Patty', color: '#3F250B'},
          {name: 'Black Bean Patty', color: '#3F250B'},
          {name: 'Chicken Patty', color: 'burlywood'},
          {name: 'Lettuce', color: 'lawngreen'},
          {name: 'Tomato', color: 'tomato'},
          {name: 'Bacon', color: 'maroon'},
          {name: 'Onion', color: 'lightyellow'}
        ],
        selectedIngredients: []
      }
      this.handleIngredientsChange = this.handleIngredientsChange.bind(this);
    }

    handleIngredientsChange(e) {
      e.preventDefault();
      const stack = e.target.value;
      var food = this.state.selectedIngredients;
      console.log(stack);
      food.push(stack)
      this.setState({
        selectedIngredients: food
      })
    }
    // handleClearIngredients(e) {
    //   e.preventDefault();
      
    // }

    render() {
        return (
          <>
            <h3>Burger ingredients list</h3>
            <ul>
              {this.state.ingredients.map((ingredient, i) => <li key={i} onClick={this.handleIngredientsChange}>{ingredient.name}</li>)}
            </ul>
            <hr/>
            <h3>Current burger ingredients</h3>
            <ul>
              {this.state.selectedIngredients}
            </ul>
          </>
        );
      }
};

export default App;