import { BaseComponent, Component } from "../component.js";
import { Composable } from "../page/page.js";

type OnCloseListener = () => void;
type OnSubmitListener = () => void;

export class InputDialog
  extends BaseComponent<HTMLElement>
  implements Composable {
  closeListener?: OnCloseListener;
  submitListener?: OnSubmitListener;
  constructor() {
    super(`<dialog class="dialog">
            <div class="dialog__container">
              <button class="close">&times;</button>
              <div id="dialog__body">
                <label class="body--title__label" for="body--title__input">Title</label>
                <input class="body--title__input" type="text">
                <label class="body--value__label" for="body--value__input"></label>
                <input class="body--value__input" type="text">
              </div>
              <button id="dialog__submit">ADD</button>
            </div>
          </dialog>`);
    const closeBtn = this.element.querySelector(".close")! as HTMLElement;
    closeBtn.onclick = () => {
      this.closeListener && this.closeListener(); // 이벤트는 내부적으로 처리하는 것이 아닌, 외부에서 등록받아야
    };
    const submitBtn = this.element.querySelector(
      "#dialog__submit"
    )! as HTMLElement;
    submitBtn.onclick = () => {
      this.submitListener && this.submitListener();
    };
  }

  setOncloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
  }
  setOnSubmitListener(listener: OnSubmitListener) {
    this.submitListener = listener;
  }

  addChild(child: Component): void {
    const body = this.element.querySelector("#dialog__body")! as HTMLElement;
    child.attachTo(body);
  }

  setLabel(label: "URL" | "Body") {
    const DIALOG_VALUE_LABEL = this.element.querySelector(
      ".body--value__label"
    ) as HTMLElement;
    DIALOG_VALUE_LABEL.textContent = label;
  }
}
