// app start point

import { Component } from "./components/component.js";
import { InputDialog } from "./components/dialog/dialog.js";
import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import {
  Composable,
  PageComponent,
  PageItemComponent,
} from "./components/page/page.js";

class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent); // 전달된 아이템을 생성시켜, 확장성을 높인다
    this.page.attachTo(appRoot);

    const imageBtn = document.querySelector("#new-image")! as HTMLButtonElement;
    imageBtn.addEventListener("click", () => {
      const dialog = new InputDialog();
      dialog.setLabel("URL");
      dialog.setOncloseListener(() => {
        dialog.removeFrom(document.body);
      });
      dialog.setOnSubmitListener(() => {
        const inputTitle = document.querySelector(
          ".body--title__input"
        ) as HTMLInputElement;
        const inputValue = document.querySelector(
          ".body--value__input"
        ) as HTMLInputElement;
        const image = new ImageComponent(inputTitle.value!, inputValue.value!);
        this.page.addChild(image);
        dialog.removeFrom(document.body);
      });
      dialog.attachTo(document.body);
    });

    const videoBtn = document.querySelector("#new-video")! as HTMLButtonElement;
    videoBtn.addEventListener("click", () => {
      const dialog = new InputDialog();
      dialog.setLabel("URL");
      dialog.setOncloseListener(() => {
        dialog.removeFrom(document.body);
      });
      dialog.setOnSubmitListener(() => {
        const inputTitle = document.querySelector(
          ".body--title__input"
        ) as HTMLInputElement;
        const inputValue = document.querySelector(
          ".body--value__input"
        ) as HTMLInputElement;
        const video = new VideoComponent(inputTitle.value!, inputValue.value!);
        this.page.addChild(video);
        dialog.removeFrom(document.body);
      });
      dialog.attachTo(document.body);
    });

    const noteBtn = document.querySelector("#new-note")! as HTMLButtonElement;
    noteBtn.addEventListener("click", () => {
      const dialog = new InputDialog();
      dialog.setLabel("Body");
      dialog.setOncloseListener(() => {
        dialog.removeFrom(document.body);
      });
      dialog.setOnSubmitListener(() => {
        const inputTitle = document.querySelector(
          ".body--title__input"
        ) as HTMLInputElement;
        const inputValue = document.querySelector(
          ".body--value__input"
        ) as HTMLInputElement;
        const note = new NoteComponent(inputTitle.value!, inputValue.value!);
        this.page.addChild(note);
        dialog.removeFrom(document.body);
      });
      dialog.attachTo(document.body);
    });

    const todoBtn = document.querySelector("#new-todo")! as HTMLButtonElement;
    todoBtn.addEventListener("click", () => {
      const dialog = new InputDialog();
      dialog.setLabel("Body");
      dialog.setOncloseListener(() => {
        dialog.removeFrom(document.body);
      });
      dialog.setOnSubmitListener(() => {
        const inputTitle = document.querySelector(
          ".body--title__input"
        ) as HTMLInputElement;
        const inputValue = document.querySelector(
          ".body--value__input"
        ) as HTMLInputElement;
        const todo = new TodoComponent(inputTitle.value!, inputValue.value!);
        this.page.addChild(todo);
        dialog.removeFrom(document.body);
      });
      dialog.attachTo(document.body);
    });
  }
}

new App(document.querySelector(".document")!); // 동적으로 입력되는 값이 아닌, 개발 시 지정된 값일 경우에만 타입 assertion 사용
