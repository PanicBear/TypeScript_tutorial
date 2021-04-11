import { BaseComponent, Component } from "../component.js";

export interface Composable {
  addChild(child: Component): void;
}

type OnCloseListener = () => void;

interface SectionContainer extends Component, Composable {
  setOnCloseListener(listener: OnCloseListener): void;
}

// SectionContainer를 구현하는 모든 클래스 허용
type SectionContainerConstructor = {
  new (): SectionContainer; // 생성자 정의 : 생성자 호출 시 해당 타입을 생성하는 어떤 클래스라도 허용
};

export class PageItemComponent
  extends BaseComponent<HTMLElement>
  implements SectionContainer {
  private closeListener?: OnCloseListener;
  constructor() {
    super(`<li class="page-item">
            <section class="page-item__body">
              <div class="page-item__controls"><button class="close">&times;</button></div>
            </section>
          </li>`);
    const closeBtn = this.element.querySelector(".close")! as HTMLButtonElement;
    closeBtn.onclick = () => {
      this.closeListener && this.closeListener();
    };
  }
  addChild(child: Component) {
    const container = this.element.querySelector(
      ".page-item__body"
    )! as HTMLElement;
    child.attachTo(container);
  }
  setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
  }
}

export class PageComponent
  extends BaseComponent<HTMLUListElement>
  implements Composable {
  constructor(private pageItemConstructor: SectionContainerConstructor) {
    super('<ul class="page"></ul>');
  }
  addChild(section: Component) {
    const item = new this.pageItemConstructor();
    item.addChild(section);
    item.attachTo(this.element, "beforeend");
    item.setOnCloseListener(() => {
      item.removeFrom(this.element);
    });
  }
}
