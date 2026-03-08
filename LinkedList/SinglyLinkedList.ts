/**
 * A node in a singly linked list. Holds a value and a reference to the next node.
 */
class SinglyNode<T> {
  value: T;
  next: SinglyNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

// Linked List implementation
class SinglyLinkedList<T> {
  private head: SinglyNode<T> | null = null;

  // ---------------- Insertion --------------------
  /** Inserts a new node at the beginning of the list. */
  insertAtHead(value: T): void {
    const newNode = new SinglyNode(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  /** Inserts a new node at the end of the list. */
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

  /** Inserts a new node right after the first node with the given value. */
  insertAfter(value: T, { insertAfter }: { insertAfter: T }): void {
    const newNode = new SinglyNode(value);

    if (!this.head) {
      this.head = newNode;
    }

    let current: SinglyNode<T> | null = this.head;
    while (current) {
      if (current.value === insertAfter) {
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
  /** Updates the first node with oldValue to newValue. Returns true if found. */
  updateNode(oldValue: T, newValue: T): boolean {
    let current = this.head;
    while (current) {
      if (current.value === oldValue) {
        current.value = newValue;
        return true;
      }
      current = current.next;
    }
    return false;
  }

  /** Updates the value at the given index. Returns true if index is valid. */
  updateAtIndex(index: number, value: T): boolean {
    if (index < 0) return false;

    let current = this.head;
    let currentIndex = 0;

    while (current) {
      if (currentIndex === index) {
        current.value = value;
        return true;
      }
      current = current.next;
      currentIndex++;
    }
    return false;
  }

  // ---------------- Deletion --------------------
  /** Removes and returns the first node's value. Returns null if empty. */
  deleteAtHead(): T | null {
    if (!this.head) return null;

    const deletedValue = this.head.value;
    this.head = this.head.next;
    return deletedValue;
  }

  /** Removes and returns the last node's value. Returns null if empty. */
  deleteAtTail(): T | null {
    if (!this.head) return null;

    // If only one node
    if (!this.head.next) {
      const deletedValue = this.head.value;
      this.head = null;
      return deletedValue;
    }

    // Traverse to second-to-last node
    let current = this.head;
    while (current.next && current.next.next) {
      current = current.next;
    }

    const deletedValue = current.next!.value;
    current.next = null;
    return deletedValue;
  }

  /** Removes the first node with the given value. Returns true if found. */
  deleteNode(value: T): boolean {
    if (!this.head) return false;

    // If head needs to be deleted
    if (this.head.value === value) {
      this.head = this.head.next;
      return true;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        current.next = current.next.next;
        return true;
      }
      current = current.next;
    }
    return false;
  }

  /** Removes and returns the value at the given index. Returns null if invalid. */
  deleteAtIndex(index: number): T | null {
    if (index < 0 || !this.head) return null;

    // Delete head
    if (index === 0) {
      return this.deleteAtHead();
    }

    let current = this.head;
    let currentIndex = 0;

    while (current.next) {
      if (currentIndex === index - 1) {
        const deletedValue = current.next.value;
        current.next = current.next.next;
        return deletedValue;
      }
      current = current.next;
      currentIndex++;
    }
    return null;
  }

  // ---------------- Traversal --------------------
  /** Logs all list values to the console (head → tail). */
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
  /** Logs the index of the first node with the given value, or "Node not found!". */
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
