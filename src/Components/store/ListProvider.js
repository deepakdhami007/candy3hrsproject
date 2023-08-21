import React, { useEffect, useState } from "react";
import ListContext from "./list-context";

const ListProvider = (props) => {
  const [itemsArr, setItemsArr] = useState([]);

  const addItemHandler = async (candy) => {
    setItemsArr([...itemsArr, candy]);

    await fetch(
      "https://candy-project3hrs-default-rtdb.firebaseio.com/list.json",
      {
        method: "POST",
        body: JSON.stringify(candy),
        headers: {
          "content-type": "application/json",
        },
      }
    );
  };

  const onRefresh = async () => {
    const response = await fetch("https://candy-project3hrs-default-rtdb.firebaseio.com/list.json");
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    onRefresh();
  }, []);

  const listContext = {
    items: itemsArr,
    addListItem: addItemHandler,
  };

  return (
    <ListContext.Provider value={listContext}>
      {props.children}
    </ListContext.Provider>
  );
};

export default ListProvider;
