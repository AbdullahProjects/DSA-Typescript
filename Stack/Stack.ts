/**
 * Internal node for the Stack. Holds a value and a reference to the next node.
 */
class StackNode<T> {
  value: T;
  next: StackNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

// Stack implementation
class Stack<T> {
  private top: StackNode<T> | null = null;
  private size: number = 0;

  /** Adds a new element on top of the stack. */
  push(value: T): void {
    const newStackNode = new StackNode(value);
    newStackNode.next = this.top;
    this.top = newStackNode;
    this.size++;
  }

  /** Removes and returns the top element. Returns null if empty. */
  pop(): T | null {
    if (this.isEmpty()) {
      console.log("Stack is Empty!");
      return null;
    }

    const poppedValue = this.top!.value;
    this.top = this.top!.next;
    this.size--;
    return poppedValue;
  }

  /** Returns true if the stack has no elements. */
  isEmpty(): boolean {
    return this.size === 0;
  }

  /** Returns the number of elements in the stack. */
  getSize(): number {
    return this.size;
  }

  /** Logs the stack elements to the console (top → bottom). */
  printStack() {
    let current = this.top;
    let stackValues = [];

    while (current) {
      stackValues.push(current.value);
      current = current.next;
    }

    console.log(stackValues.join(" -> "));
  }
}

const stack = new Stack<string>();
stack.push("Abdullah");
stack.push("Haider");
stack.push("Bilal");
console.log(
  `Stack size is ${stack.getSize()}, having elements ${stack.printStack()}`,
);
console.log(`Stack is empty? ${stack.isEmpty()}`);
console.log(stack.pop());
stack.printStack();
