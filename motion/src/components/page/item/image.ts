export class ImageComponent {
  private readonly element: HTMLElement;
  constructor(title: string, url: string) {
    const template = document.createElement("template");
    template.innerHTML = `
    <section class="image">
  <div class="image__holder">
    <img src="" alt="" class="image__thumbnail" />
    <p class="image__title"></p>
  </div>
</section>
    `;
    this.element = template.content.firstElementChild! as HTMLElement;


    // 사용자에게 받은 데이터는 innerHTML에서 수정하지 말고,
    // 필요한 부분만 찾아서 수정하는 것이 안전(XSS 위험)
    const imageElement = this.element.querySelector(
      ".image__thumbnail"
    )! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = title;

    const titleElement = this.element.querySelector(
      ".image__title"
    )! as HTMLParagraphElement;
    titleElement.textContent = title;
  }
  attachTo(
    parent: HTMLElement,
    position: InsertPosition = "afterbegin" /* 미입력 시 기본값 설정 */
  ) {
    parent.insertAdjacentElement(position, this.element);
  }
}
