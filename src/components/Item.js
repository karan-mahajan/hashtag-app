import { React, useState } from 'react';
import Linkify from 'linkifyjs/react';
import * as linkify from 'linkifyjs';
import hashtag from 'linkifyjs/plugins/hashtag';

hashtag(linkify);


const Item = ({ item, changeItems, items, setItems }) => {
    const [hash, setHash] = useState([]);
    const createLinks = (content) => {
        // const linkifyOptions =
        // {
        //     onClick: (event) => {
        //         // console.log(value);
        //     }
        //options={{ attributes: linkifyOptions }}
        // }
        return <Linkify onClick={storeHash}>{content}</Linkify>;
    }

    const storeHash = (e) => {
        e.preventDefault();
        let newValue = [...hash, e.target.hash];
        setHash(newValue);
        console.log(hash);
    }


    return (
        <>
            <div className={`item ${item?.progress ? 'completed' : ''}`} onClick={() => changeItems(item.itemId)}>
                {createLinks(item.text)}
            </div>
        </>
    )
}

export default Item
