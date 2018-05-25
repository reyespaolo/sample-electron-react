import React from  'react';
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'
const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(igKeys => {
        return(
          <li key={igKeys} >
            <span style={{textTransform:'capitalize'}}>{igKeys}</span>:{props.ingredients[igKeys]}
          </li>
        )
    });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A Delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
      <p>Continue to checkout?</p>
      <Button btnType="Danger" clicked={props.purchasedCancelled}>Cancel</Button>
      <Button btnType="Success" clicked={props.purchasedContinue}>Continue</Button>

    </Aux>
  )

}

export default orderSummary;
