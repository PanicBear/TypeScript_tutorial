import { BaseComponent } from "../../component.js";

export class TodoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, todo: string) {
    super(`<section class="todo dropzone" draggable="true">
            <h2 class="page-item__title todo__title"></h2>  
            <input type="checkbox" id="todo-checkbox"/>
            <label for="todo-checkbox" class="todo-label"></label>
          </section>`);

    // 사용자에게 받은 데이터는 innerHTML에서 수정하지 말고,
    // 필요한 부분만 찾아서 수정하는 것이 안전(XSS 위험)
    const titleElement = this.element.querySelector(
      ".todo__title"
    )! as HTMLHeadElement;
    titleElement.textContent = title;
    const todoElement = this.element.querySelector(
      ".todo-label"
    )! as HTMLLabelElement;
    todoElement.textContent = todo;
  }
}
