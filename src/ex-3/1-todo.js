class Todo {
  nextId = 0;
  items = {};

  getItems = () => Object.values(this.items);

  add(item) {
    const id = ++this.nextId;
    const itemToAdd = { ...item, id };
    this.items[id] = itemToAdd;
  }

  remove(id) {
    const { [id]: item, ...items } = this.items;
    this.items = items;
  }
}

export default Todo;
