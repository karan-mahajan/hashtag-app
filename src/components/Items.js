import React from 'react'
import Item from './Item'

const Items = ({ items, changeItems, completedItems, setItems }) => {
    return (
        <>
            {
                items?.map((item) => (
                    < Item key={item.itemId} item={item} changeItems={changeItems} items={items} setItems={setItems} />
                ))
            }
            {
                completedItems?.map((item) => (
                    < Item key={item.itemId} item={item} changeItems={changeItems} items={items} setItems={setItems} />
                ))
            }
        </>
    )
}

export default Items
