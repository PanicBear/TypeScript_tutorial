import { BaseComponent } from "../../component.js";

export class TextSectionInput extends BaseComponent<HTMLElement> {
  constructor() {
    super(`<div>
            <form action="" class="form__container">
              <label for="title">Title</label>
              <input type="text" name="" id="title" />
            </form>
            <form action="" class="form__container">
              <label for="body">Body</label>
              <textarea type="text" row="3" id="body"></textarea>
            </form>
          </div>`);
  }

  get title(): string {
    const element = this.element.querySelector("#title")! as HTMLInputElement;
    return element.value;
  }

  get body(): string {
    const element = this.element.querySelector("#body")! as HTMLInputElement;
    return element.value;
  }
}
