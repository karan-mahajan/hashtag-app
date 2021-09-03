import React from 'react'
import Item from './Item'

const Items = ({ items, changeItems, completedItems, setItems }) => {
    return (
        <>
            {
                items?.map((item) => (
                    < Item key={item.itemId} item={item} changeItems={changeItems} items={items} />
                ))
            }
            {
                completedItems?.map((item) => (
                    < Item key={item.itemId} item={item} changeItems={changeItems} items={items} />
                ))
            }
        </>
    )
}

export default Items
