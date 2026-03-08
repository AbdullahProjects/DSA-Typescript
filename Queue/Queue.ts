/**
 * Internal node for the Queue. Holds a value and a reference to the next node.
 */
class QueueNode<T> {
  value: T;
  next: QueueNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

// Queue implementation
class Queue<T> {
  private front: QueueNode<T> | null = null;
  private rear: QueueNode<T> | null = null;
  private size: number = 0;

  /** Adds an element to the end of the queue. */
  enqueue(value: T) {
    const newQueueNode = new QueueNode(value);

    if (this.isEmpty()) {
      this.front = newQueueNode;
      this.rear = newQueueNode;
    } else {
      this.rear!.next = newQueueNode;
      this.rear = newQueueNode;
    }
    this.size++;
  }

  /** Removes and returns the first element. Returns null if empty. */
  dequeue(): T | null {
    if (this.isEmpty()) return null;

    const removedNode = this.front;
    this.front = this.front!.next;
    if (this.front === null) {
      this.rear = null;
    }
    this.size--;
    return removedNode!.value;
  }

  /** Returns the first element without removing it. Returns null if empty. */
  peek(): T | null {
    if (this.isEmpty()) {
      return null;
    }
    return this.front!.value;
  }

  /** Returns true if the queue has no elements. */
  isEmpty() {
    return this.size === 0;
  }

  /** Returns the number of elements in the queue. */
  getSize() {
    return this.size;
  }

  /** Removes all elements from the queue. */
  clear() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  /** Logs the queue elements to the console (front → rear). */
  print() {
    let current = this.front;
    const elements = [];
    while (current) {
      elements.push(current.value);
      current = current.next;
    }
    console.log(elements.join(" -> "));
  }
}

const queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.print();
queue.dequeue();
queue.print();
