interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

type Head = {
  index: number;
  value: string;
  head: Head;
};

class StackImpl implements Stack {
  size: number = 0;
  private head: Head;
  push(value: string): void {
    let obj = {
      index: this.size++,
      value,
      head: this.head,
    };
    this.setHead(obj);
  }
  pop(): string {
    let value = "";
    console.log(`this.size = ${this.size}`);
    if (this.size--) {
      value = this.head.value;
      this.head = this.head.head;
    } else {
      value = "no element";
    }
    return value;
  }
  private setHead(head?: Head) {
    this.head = head ? head : this.head.head;
  }
}

const stack = new StackImpl();
stack.push("1");
stack.push("2");
stack.push("3");
stack.push("4");
stack.push("5");
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
stack.push("1");
stack.push("2");
stack.push("3");
stack.push("4");
stack.push("5");
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
