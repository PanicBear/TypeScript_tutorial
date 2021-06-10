export default class DndHandler<T extends HTMLElement> {
  private dragged: T | null = null;
  constructor() {
    this.setDragListener();
  }

  private setDragListener: () => void = () => {
    /* events fired on the draggable target */
    // document.addEventListener("drag", function (event) {}, false);

    document.addEventListener(
      "dragstart",
      (e: MouseEvent) => {
        const target = e.target as T;
        // store a ref. on the dragged elem
        this.dragged = target;
        // make it half transparent
        target.style.opacity = "0.5";
      },
      false
    );
    document.addEventListener(
      "dragend",
      (e: MouseEvent) => {
        const target = e.target as T;
        // reset the transparency
        target.style.opacity = "";
      },
      false
    );
    /* events fired on the drop targets */
    document.addEventListener(
      "dragover",
      (e) => {
        // prevent default to allow drop
        e.preventDefault();
      },
      false
    );
    document.addEventListener(
      "dragenter",
      (e) => {
        const target = e.target as T;
        // highlight potential drop target when the draggable element enters it
        if (target.classList.contains("dropzone")) {
          target.style.backgroundColor = "purple";
        }
      },
      false
    );
    document.addEventListener(
      "dragleave",
      (e: MouseEvent) => {
        const target = e.target as T;
        // reset background of potential drop target when the draggable element leaves it
        if (target.classList.contains("dropzone")) {
          target.style.backgroundColor = "";
        }
      },
      false
    );
    document.addEventListener(
      "drop",
      (e: MouseEvent) => {
        const target = e.target as T;

        // prevent default action (open as link for some elements)
        e.preventDefault();
        // move dragged elem to the selected drop target
        if (target.classList.contains("dropzone")) {
          target.style.backgroundColor = "";
          let targetParent = target.parentElement;
          let draggedParent = this.dragged?.parentElement;

          targetParent?.insertAdjacentElement("afterbegin", this.dragged!);
          draggedParent?.insertAdjacentElement("afterbegin", target);
        }
      },
      false
    );
  };
}
