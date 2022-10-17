// import React from "react";

// const TodoItem = ({ todo, onToggle, onRemove }) => {
//     const {id, text, done} = todo;
//     return (
//     <li>
//         <span
//             style={{
//                 textDecoration: done ? 'line-through': 'none'
//             }}
//             onClick={() => onToggle(id)}>{text}</span>
//         <button onClick ={() => onRemove(id)}>삭제</button>
//     </li>);
// };

// export default TodoItem;

import React, { useCallback } from "react";

const TodoItem = ({ todo, onToggle, onRemove }) => {
    const {id, text, done} = todo;
    const toggle = useCallback(() => onToggle(id), [onToggle, id]);
    const remove = useCallback(() => onRemove(id), [onRemove, id]);
    return (
    <li>
        <span
            style={{
                textDecoration: done ? 'line-through': 'none'
            }}
            // onClick={() => onToggle(id)}>{text}</span>
            onClick={toggle}>{text}</span>
        <button onClick ={remove}>삭제</button>
    </li>);
};

export default TodoItem;