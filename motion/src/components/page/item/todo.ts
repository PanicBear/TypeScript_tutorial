import { BaseComponent } from "../../component.js";

export class TodoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, todo: string) {
    super(`<section class="todo">
            <h2 class="todo__title"></h2>
            <input class="todo__checkbox" type="checkbox"></input>
          </section>`);

    // 사용자에게 받은 데이터는 innerHTML에서 수정하지 말고,
    // 필요한 부분만 찾아서 수정하는 것이 안전(XSS 위험)
    const titleElement = this.element.querySelector(
      ".todo__title"
    )! as HTMLHeadingElement;
    titleElement.textContent = title;
    const todoElement = this.element.querySelector(
      ".todo__checkbox"
    )! as HTMLInputElement;
    todoElement.insertAdjacentText("afterend", todo);
  }
}
