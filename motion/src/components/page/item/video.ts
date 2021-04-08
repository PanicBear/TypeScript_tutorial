import { BaseComponent } from "../../component.js";

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="video">
            <iframe class="video__player" width="300" height="200" src="" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h3 class="video__title"></h3>
          </section>`);

    // 사용자에게 받은 데이터는 innerHTML에서 수정하지 말고,
    // 필요한 부분만 찾아서 수정하는 것이 안전(XSS 위험)
    const videoElement = this.element.querySelector(
      ".video__player"
    )! as HTMLIFrameElement;
    videoElement.src = url;
    videoElement.title = title;

    const titleElement = this.element.querySelector(
      ".video__title"
    )! as HTMLHeadingElement;
    titleElement.textContent = title;
  }
}
