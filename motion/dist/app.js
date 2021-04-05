"use strict";
class PageComponent {
    constructor() { }
    addSection(input, target) {
        const DIV = document.createElement("div");
        DIV.append(input);
        target.appendChild(DIV);
    }
}
let section = new PageComponent();
section.addSection("This is PageCompnent", document.querySelector(".components"));
//# sourceMappingURL=app.js.map