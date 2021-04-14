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
        const imageBtn = document.querySelector("#new-image");
        imageBtn.addEventListener("click", () => {
            const dialog = new InputDialog();
            dialog.setLabel("URL");
            dialog.setOncloseListener(() => {
                dialog.removeFrom(document.body);
            });
            dialog.setOnSubmitListener(() => {
                const inputTitle = document.querySelector(".body--title__input");
                const inputValue = document.querySelector(".body--value__input");
                const image = new ImageComponent(inputTitle.value, inputValue.value);
                this.page.addChild(image);
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
                const inputTitle = document.querySelector(".body--title__input");
                const inputValue = document.querySelector(".body--value__input");
                const video = new VideoComponent(inputTitle.value, inputValue.value);
                this.page.addChild(video);
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
                const inputTitle = document.querySelector(".body--title__input");
                const inputValue = document.querySelector(".body--value__input");
                const note = new NoteComponent(inputTitle.value, inputValue.value);
                this.page.addChild(note);
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
                const inputTitle = document.querySelector(".body--title__input");
                const inputValue = document.querySelector(".body--value__input");
                const todo = new TodoComponent(inputTitle.value, inputValue.value);
                this.page.addChild(todo);
                dialog.removeFrom(document.body);
            });
            dialog.attachTo(document.body);
        });
    }
}
new App(document.querySelector(".document"));
//# sourceMappingURL=app.js.map