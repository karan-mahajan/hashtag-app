import { React, useState } from 'react';
import Linkify from 'linkifyjs/react';
import * as linkify from 'linkifyjs';
import hashtag from 'linkifyjs/plugins/hashtag';

hashtag(linkify);


const Item = ({ item, changeItems, items, setItems }) => {
    const [selectedHash, setSelectedHash] = useState([]);
    const createLinks = (content) => {
        const linkifyOptions =
        {
            onClick: (event) => {
                // console.log(selectedHash);
                // const value = [...selectedHash, event.target.hash];
                // console.log(value);
                func1(event.target.hash);
                // const filteredTasks = items?.filter((item) => {
                //     item.text.includes();
                // });
                // setItems(filteredTasks);
                // console.log(value);
            }
        }
        return <Linkify options={{ attributes: linkifyOptions }}>{content}</Linkify>;
    }

    const func1 = (hash) => {
        const hashTags = [...selectedHash];
        hashTags.push(hash);
        setSelectedHash(hashTags);
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
