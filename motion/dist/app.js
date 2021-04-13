import { InputDialog } from "./components/dialog/dialog.js";
import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { PageComponent, PageItemComponent, } from "./components/page/page.js";
class App {
    constructor(appRoot) {
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);
        const image = new ImageComponent("Image Title", "https://picsum.photos/600/300");
        this.page.addChild(image);
        const video = new VideoComponent("YouTube video player", "https://www.youtube.com/watch?v=N2jgVT9chaQ&t=9s&ab_channel=%ED%95%98%ED%83%80");
        this.page.addChild(video);
        const note = new NoteComponent("Note Title", "Note Body");
        this.page.addChild(note);
        const todo = new TodoComponent("Todo Title", "Todo Item");
        this.page.addChild(todo);
        const imageBtn = document.querySelector("#new-image");
        imageBtn.addEventListener("click", () => {
            const dialog = new InputDialog();
            dialog.setLabel("URL");
            dialog.setOncloseListener(() => {
                dialog.removeFrom(document.body);
            });
            dialog.setOnSubmitListener(() => {
                dialog.removeFrom(document.body);
            });
            dialog.attachTo(document.body);
        });
        const videoBtn = document.querySelector("#new-video");
        videoBtn.addEventListener("click", () => {
            const dialog = new InputDialog();
            dialog.setLabel("URL");
            dialog.setOncloseListener(() => {
                dialog.removeFrom(document.body);
            });
            dialog.setOnSubmitListener(() => {
                dialog.removeFrom(document.body);
            });
            dialog.attachTo(document.body);
        });
        const noteBtn = document.querySelector("#new-note");
        noteBtn.addEventListener("click", () => {
            const dialog = new InputDialog();
            dialog.setLabel("Body");
            dialog.setOncloseListener(() => {
                dialog.removeFrom(document.body);
            });
            dialog.setOnSubmitListener(() => {
                dialog.removeFrom(document.body);
            });
            dialog.attachTo(document.body);
        });
        const todoBtn = document.querySelector("#new-todo");
        todoBtn.addEventListener("click", () => {
            const dialog = new InputDialog();
            dialog.setLabel("Body");
            dialog.setOncloseListener(() => {
                dialog.removeFrom(document.body);
            });
            dialog.setOnSubmitListener(() => {
                dialog.removeFrom(document.body);
            });
            dialog.attachTo(document.body);
        });
    }
}
new App(document.querySelector(".document"));
//# sourceMappingURL=app.js.map