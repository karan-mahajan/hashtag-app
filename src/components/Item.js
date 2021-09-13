import { React, useState, useEffect } from 'react';


const Item = ({ item, changeItems, items, setItems }) => {
    const [itemValue, setItemValue] = useState('');
    useEffect(() => {
        let str = item.text;
        let len = str.length;
        let hashFound = 0;
        for (let index = 0; index < len; index++) {
            if (str[index] === '#') {
                if (str[index + 1] !== ' ') {
                    hashFound = 1;
                    str = [str.slice(0, index), "<b>", str.slice(index)].join('');
                    index += 3
                }
            }

            if (hashFound === 1 && str[index] === ' ') {
                console.log(index)
                str = [str.slice(0, index), "</b>", str.slice(index)].join('');
                index += 3
                hashFound = 0;
            }

            len = str.length
        }

        if (hashFound === 1) {
            str = [str.slice(0, len), "</b>", str.slice(len)].join('');
        }
        setItemValue(str);
    }, [item]);
    return (
        <>
            <div className={`item ${item?.progress ? 'completed' : ''}`} onClick={() => changeItems(item.itemId)} dangerouslySetInnerHTML={{ __html: itemValue }}>
            </div>
        </>
    )
}

export default Item
