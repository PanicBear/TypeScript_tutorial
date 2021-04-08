// app start point

import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { PageComponent } from "./components/page/page.js";

class App {
  private readonly page: PageComponent;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    const image = new ImageComponent(
      "Image Title",
      "https://picsum.photos/600/300"
    );
    image.attachTo(appRoot, "beforeend");

    const video = new VideoComponent(
      "YouTube video player",
      "https://www.youtube.com/embed/N2jgVT9chaQ"
    );
    video.attachTo(appRoot, "beforeend");

    const note = new NoteComponent("Note Title", "Note Body");
    note.attachTo(appRoot, "beforeend");

    const todo = new TodoComponent("Todo Title", "Todo Item");
    todo.attachTo(appRoot, "beforeend");
  }
}

new App(document.querySelector(".document")!); // 동적으로 입력되는 값이 아닌, 개발 시 지정된 값일 경우에만 타입 assertion 사용
