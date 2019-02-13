import Todo from './todo';

describe('Todo', function() {
  let todo;
  beforeEach(() => (todo = new Todo()));

  it('should contain no items when created', function() {
    expect(todo.getItems()).toEqual([]);
  });

  it('should be able to add new Item', function() {
    todo.add({ text: 'Do this first' });

    expect(todo.getItems()).toEqual([{ id: 1, text: 'Do this first' }]);
  });

  it('should be able to add multiple items', function() {
    todo.add({ text: 'Do this first' });
    todo.add({ text: 'Do this second' });

    expect(todo.getItems()).toEqual([{ id: 1, text: 'Do this first' }, { id: 2, text: 'Do this second' }]);
  });

  it('should be able to remove an item', function() {
    todo.add({ text: 'Do this first' });
    todo.add({ text: 'Do this second' });
    todo.add({ text: 'Do this third' });

    todo.remove(2);

    expect(todo.getItems()).toEqual([{ id: 1, text: 'Do this first' }, { id: 3, text: 'Do this third' }]);
  });
});
