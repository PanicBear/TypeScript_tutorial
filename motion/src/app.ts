type ComponentInput = {
  title: string;
  URL?: string;
  Body?: string;
};

class PageComponent {
  constructor() {}
  addSection(input: string, target: Element) {
    const DIV = document.createElement("div");
    DIV.append(input);
    target.appendChild(DIV);
  }
}

let section = new PageComponent();
section.addSection(
  "This is PageCompnent",
  document.querySelector(".components") as Element
);
