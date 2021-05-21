export default class Api {
  static getTodos() {
    return fetch(`https://jsonplaceholder.typicode.com/todos`, {
      method: "GET",
    });
  }
}
