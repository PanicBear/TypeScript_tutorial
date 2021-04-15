import { BaseComponent } from "../../component.js";

export class ImageComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="image">
            <div class="image__holder">
              <img src="" alt="" class="image__thumbnail" />
            </div>
            <h2 class="page-item__title image__title"></h2>
          </section>`);

    // 사용자에게 받은 데이터는 innerHTML에서 수정하지 말고,
    // 필요한 부분만 찾아서 수정하는 것이 안전(XSS 위험)
    const imageElement = this.element.querySelector(
      ".image__thumbnail"
    )! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = title;

    const titleElement = this.element.querySelector(
      ".image__title"
    )! as HTMLHeadingElement;
    titleElement.textContent = title;
  }
}
