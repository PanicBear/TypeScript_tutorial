export class PageComponent {
  private element: HTMLUListElement;
  constructor() {
    this.element = document.createElement("ul");
    this.element.setAttribute("class", "page");
    this.element.textContent = "This is PageComponent";
  }

  attachTo(
    parent: HTMLElement,
    position: InsertPosition = "afterbegin" /* 미입력 시 기본값 설정 */
  ) {
    parent.insertAdjacentElement(position, this.element);
  }
}
