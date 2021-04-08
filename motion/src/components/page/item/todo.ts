import { BaseComponent } from "../../component.js";

export class TodoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, value: string) {
    super(`<section class="todo">
            <h2 class="todo__title"></h2>
            <input class="todo__body" type="checkbox"></input>
          </section>`);

    // 사용자에게 받은 데이터는 innerHTML에서 수정하지 말고,
    // 필요한 부분만 찾아서 수정하는 것이 안전(XSS 위험)
    const bodyElelment = this.element.querySelector(
      ".todo__body"
    )! as HTMLInputElement;
    bodyElelment.textContent = value;

    const titleElement = this.element.querySelector(
      ".todo__title"
    )! as HTMLHeadingElement;
    titleElement.textContent = title;
  }
}
