import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from '../../App';

const mockStore = configureStore([]);

describe('App Component', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      todos: [
        { _id: "1", text: "Task 1", completed: false },
        { _id: "2", text: "Task 2", completed: true },
      ],
    });
  });

  test('renders App component with todos', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
  });

  test('should display the correct sections for Remaining and Completed tasks', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByText('Remaining')).toBeInTheDocument();
    expect(screen.getByText('Completed')).toBeInTheDocument();
  });

  test('toggles todo completion status when checkbox is clicked', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const checkbox = screen.getByTestId('checkbox-1');
    fireEvent.click(checkbox);

    const task = screen.getByText('Task 1');
    expect(task).toHaveStyle('text-decoration: line-through');
  });
});
