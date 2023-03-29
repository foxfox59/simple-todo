import { queryByTestId } from '@testing-library/react'
import { render, screen, fireEvent } from '@testing-library/react'

import { TodoItem } from './TodoItem'

describe("TodoItem", () => 
{
    test('Testing for correct title rendering', () =>
    {
        render(<TodoItem/>);
        const item = screen.queryByTestId('todo-title');
        expect(item.innerHTML).toMatch(item.title);
    });

    test('Testing for remove click handler', () =>
    {
        const onRemoveMock=jest.fn();

        render(<TodoItem onClick={onRemoveMock()} />);

        fireEvent.click(screen.queryByTestId('remove-todo-btn'));
        expect(onRemoveMock).toHaveBeenCalled();
    });


});