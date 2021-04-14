import { BaseComponent } from "../../component.js";

export class MediaSectionInput extends BaseComponent<HTMLElement> {
  constructor() {
    super(`<div>
            <form action="" class="form__container">
              <label for="title">Title</label>
              <input type="text" name="" id="title" />
            </form>
            <form action="" class="form__container">
              <label for="url">URL</label>
              <input type="text" name="" id="url" />
            </form>
          </div>`);
  }

  get title(): string {
    const element = this.element.querySelector("#title")! as HTMLInputElement;
    return element.value;
  }

  get url(): string {
    const element = this.element.querySelector("#url")! as HTMLInputElement;
    return element.value;
  }
}
