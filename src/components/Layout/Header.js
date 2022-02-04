import { Fragment } from "react";

import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";


const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img
          src="https://204mealprep.com/wp-content/uploads/2021/04/204_Meal_Prep_Hero_Image_1__20210324-1067x600.jpg"
          alt="A table full of delicious meals"
        />
      </div>
    </Fragment>
  );
};

export default Header;
