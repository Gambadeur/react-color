import React from 'react';
import ListItem from './../ListItem/ListItem.js';


const ListColor = (props) =>
        <ul className="listColor"> {
          props.colors.map( (item, i) =>
            <ListItem 
            key={i}
            id={item.id} 
            color={item.color} 
            name={item.name}
            changeColor={props.changeColor} 
            />
          )
        }
        </ul>;

export default ListColor;