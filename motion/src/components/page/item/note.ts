import { BaseComponent } from "../../component.js";

export class NoteComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, body: string) {
    super(`<section class="note dropzone" draggable="true">
            <h2 class="page-item__title note__title"></h2>  
            <p class="note__body"></p>
          </section>`);

    // 사용자에게 받은 데이터는 innerHTML에서 수정하지 말고,
    // 필요한 부분만 찾아서 수정하는 것이 안전(XSS 위험)
    const bodyElement = this.element.querySelector(
      ".note__body"
    )! as HTMLParamElement;
    bodyElement.textContent = body;

    const titleElement = this.element.querySelector(
      ".note__title"
    )! as HTMLHeadingElement;
    titleElement.textContent = title;
  }
}
