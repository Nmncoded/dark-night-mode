import Card from "./Card";
import {useContext} from 'react';
import userContext from "./userContext";

function Cards({isDarkMode}) {
  let value = useContext(userContext);
  // console.log(value);
  return (
    <div className="cards_wrap">
      <Card isDarkMode={value.isDarkMode} />
      <Card isDarkMode={value.isDarkMode} />
      <Card isDarkMode={value.isDarkMode} />
    </div>
  );
}

export default Cards;
