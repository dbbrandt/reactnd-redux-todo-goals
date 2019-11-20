import React from 'react';

function List(props) {
  return (
    <ul>
      {props.items.map(item => (
        <li key={item.id}>
                <span
                  style={{
                    textDecoration: item.complete ? "line-through" : "none"
                  }}
                  onClick={() => props.toggle && props.toggle(item.id)}
                >
                  {item.name}
                  <button onClick={() => props.remove(item)}>X</button>
                </span>
        </li>
      ))}
    </ul>
  );
}

export default List;
