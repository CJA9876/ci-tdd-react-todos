import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoItem from './TodoItem';

describe('<TodoItem />', () => {
    const sampleTodo = {
        id: 1,
        text: 'TDD 배우기',
        done: false, // 이게 삭제선이 그어지고 안 그어지고래 아노ㅏ.....
    };
    // const setup = (props = {}) => {
    //     const utils = render(<TodoItem todo={sampleTodo} {...props} />);
    //     const { getByText } = utils;
    //     const todo = sampleTodo;
    //     const span = getByText(todo.text);
    //     const button = getByText('삭제');
    //     return {
    //         ...utils,
    //         input,
    //         button,
    //     };
    // };
    const setup = (props = {}) => {
        const utils = render(<TodoItem todo={sampleTodo} {...props} />);
        const { getByText } = utils;
        const todo = sampleTodo;
        const span = getByText(todo.text);
        const button = getByText('삭제');
        return {
            ...utils,
            span,
            button,
        };
    };
    it('has span and button', () => {
        const { span, button } = setup();
        expect(span).toBeTruthy();
        expect(button).toBeTruthy();
    });

    it('shows line-through on span when done is true', () => {
        const { span } = setup({ todo:{...sampleTodo, done: true} }); // 할일 완료
        expect(span).toHaveStyle('text-decoration: line-through;'); // 선 있고
    });

    it('shows line-through on span when done is false', () => {
        const { span } = setup({ todo:{...sampleTodo, done: false} }); // 할일 완료 ㄴㄴ
        expect(span).not.toHaveStyle('text-decoration: line-through;'); // 선 없어
    });
//텍스트(todo: text)를 클릭하면 텍스트에 삭제선이 그어져야 하고, 우측에 삭제버튼을 누르면 해당 항목이 사라져야합니다. span 태그 클릭 이벤트 확인
    it('calls onToggle', () => {
        const onToggle = jest.fn();
        const { span } = setup({ onToggle });
        fireEvent.click(span);
        expect(onToggle).toBeCalledWith(sampleTodo.id); // 현재 id: 1
    });
    it('calls onRemove', () => {
        const onRemove = jest.fn();
        const { button } = setup({ onRemove }); // 삭제 버튼 눌렀냐?
        fireEvent.click(button);
        expect(onRemove).toBeCalledWith(sampleTodo.id); // 현재 id: 1
    });
});