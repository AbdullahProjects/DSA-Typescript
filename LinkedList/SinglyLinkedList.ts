class SinglyNode<T> {
  value: T;
  next: SinglyNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList<T> {
  private head: SinglyNode<T> | null = null;

  // ---------------- Insertion --------------------
  insertAtHead(value: T): void {
    const newNode = new SinglyNode(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  insertAtTail(value: T): void {
    const newNode = new SinglyNode(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current: SinglyNode<T> = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  insertAfter(value: T, { insertAfter }: { insertAfter: T }): void {
    const newNode = new SinglyNode(value);

    if (!this.head) {
      this.head = newNode;
    }

    let current: SinglyNode<T> | null = this.head;
    while (current) {
      if (current.value == insertAfter) {
        if (!current.next) {
          this.insertAtTail(value);
          return;
        } else {
          newNode.next = current.next;
          current.next = newNode;
          return;
        }
      }
      current = current.next;
    }
  }

  // ---------------- Updation --------------------

  // ---------------- Deletion --------------------

  // ---------------- Traversal --------------------
  traverseLinkedList() {
    let tempNode = this.head;
    const result: T[] = [];
    while (tempNode) {
      result.push(tempNode.value);
      tempNode = tempNode.next;
    }
    console.log(result);
  }

  // ---------------- Searching --------------------
  searchNode(value: T): void {
    let currentNodeIndex = 0;
    let current = this.head;

    while (current) {
      if (current.value === value) {
        console.log(`${value} exist at node ${currentNodeIndex}`);
        return;
      }
      current = current.next;
      currentNodeIndex++;
    }

    console.log("Node not found!");
  }
}

// Example usage:
const list = new SinglyLinkedList<number>();
list.insertAtHead(10);
list.insertAtHead(20);
list.insertAtHead(30);
list.insertAtTail(50);
list.traverseLinkedList();
list.searchNode(50);
list.insertAfter(25, { insertAfter: 20 });
list.traverseLinkedList();
