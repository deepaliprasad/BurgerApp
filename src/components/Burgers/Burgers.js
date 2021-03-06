import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';
// import { withRouter } from 'react-router-dom';


const burger = (props) => {
    let transformedIngredient = Object.keys(props.ingredient).map(igKey => {
        return [...Array(props.ingredient[igKey])].map ((_,index ) => {
            return <BurgerIngredient key={igKey + index } types={igKey} />
        })
    }).reduce ((arr, el) => {
        return arr.concat(el);
    }, []);

    if (transformedIngredient.length === 0) {
        transformedIngredient = <p> Please start adding ingredients!</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient types='bread-top' />
            {transformedIngredient}
            <BurgerIngredient types='bread-bottom' />
        </div>
    );
};

export default burger   ;