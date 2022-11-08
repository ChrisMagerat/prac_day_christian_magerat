import React, {useState} from 'react'

export default function PrintWord({word}) {
    const [wordCategories, setWordCategories] = useState(word.categories);
    const LOCAL_STORAGE_KEY2 = "catId";
    const categoryID = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY2));
    const isFound = wordCategories.some(element => element.id === categoryID);
    if (isFound) {
        return (
          <div>
              <h2>{word.name}</h2>
          </div>
        )
    }else{
        return null;
    }
}
