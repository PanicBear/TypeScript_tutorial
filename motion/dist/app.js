import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { PageComponent, PageItemComponent } from "./components/page/page.js";
class App {
    constructor(appRoot) {
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);
        const image = new ImageComponent("Image Title", "https://picsum.photos/600/300");
        const video = new VideoComponent("YouTube video player", "https://www.youtube.com/watch?v=N2jgVT9chaQ&t=9s&ab_channel=%ED%95%98%ED%83%80");
        const note = new NoteComponent("Note Title", "Note Body");
        const todo = new TodoComponent("Todo Title", "Todo Item");
        this.page.addChild(image);
        this.page.addChild(video);
        this.page.addChild(note);
        this.page.addChild(todo);
    }
}
new App(document.querySelector(".document"));
//# sourceMappingURL=app.js.map