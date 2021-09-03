import './App.css';
import Field from './components/Field';
import Header from './components/Header';
import Items from './components/Items';
import { useState, useEffect } from 'react';


function App() {
  //Initialized the State
  const [items, setItems] = useState([]);
  const [itemId, setItemId] = useState(1);
  const [completedItems, setCompletedItems] = useState([]);

  const hashtag = (text) => {
    const repl = text.replace(/#(\w+)/g, '<a href="#">#$1</a>');
    return repl;
  }



  //Adding in the list
  const addItem = (value) => {
    const sessionId = parseInt(sessionStorage.getItem('itemId'));
    sessionId ? sessionStorage.setItem('itemId', sessionId + 1) : sessionStorage.setItem('itemId', itemId);
    let newId = parseInt(sessionStorage.getItem('itemId')) + 1;
    setItemId(newId);
    const addedItem = hashtag(value?.text);
    const hashTags = value?.text?.split("#");
    if (hashTags?.length > 0) {

    }
    const progress = false;
    const newItem = { progress, itemId, text: addedItem, ...value };
    const sortedItems = [...items, newItem].sort((a, b) => b.itemId - a.itemId);
    setItems(sortedItems);
    sessionStorage.setItem('mydata', JSON.stringify(sortedItems));
  }

  //Updated the List cards
  const changeItems = (id) => {
    const completed = items.find((val) => val.itemId === id);
    if (!completed?.progress) {
      const filtered = items.filter((val) => val.itemId !== id);
      const updatedItem = { ...completed, 'progress': true };
      const checkedItems = [...completedItems, updatedItem];
      setCompletedItems(checkedItems);
      setItems(filtered);
      sessionStorage.setItem('mydata', JSON.stringify(filtered));
      sessionStorage.setItem('completed', JSON.stringify(checkedItems));
    }
  }

  //On Render
  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem('mydata'));
    const completedData = JSON.parse(sessionStorage.getItem('completed'));
    !data ? setItems([]) : setItems(data);
    !completedData ? setCompletedItems([]) : setCompletedItems(completedData);
    const lastId = parseInt(sessionStorage.getItem('itemId'));
    lastId ? setItemId(lastId + 1) : setItemId(1);
  }, [])

  return (
    <div className="container">
      <Header setItems={setItems} setItemId={setItemId} setCompletedItems={setCompletedItems} />
      <Field addItem={addItem} />
      {items.length || completedItems.length ? (<Items items={items} changeItems={changeItems} completedItems={completedItems} setItems={setItems} />) : 'No item to Display'}
    </div>
  );
}

export default App;
