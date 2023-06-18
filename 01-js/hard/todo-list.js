/*

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor() {
    this.toDos = [];
  }

  add(toDo) {
    this.toDos.push(toDo);
  }

  remove(indexOfToDo) {
    if (indexOfToDo >= 0 && indexOfToDo < this.toDos.length) {
      this.toDos.splice(indexOfToDo, 1);
    }
  }

  update(index, updatedToDo) {
    if (index >= 0 && index < this.toDos.length) {
      this.toDos[index] = updatedToDo;
    }
  }

  getAll() {
    return this.toDos;
  }

  get(indexOfToDo) {
    if (indexOfToDo >= 0 && indexOfToDo < this.toDos.length) {
      return this.toDos[indexOfToDo];
    }
    return null;
  }

  clear() {
    this.toDos = [];
  }
}

module.exports = Todo;
