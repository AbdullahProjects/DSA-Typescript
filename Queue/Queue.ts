class QueueNode<T> {
  value: T;
  next: QueueNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class Queue<T> {
  private front: QueueNode<T> | null = null;
  private rear: QueueNode<T> | null = null;
  private size: number = 0;

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

  peek(): T | null {
    if (this.isEmpty()) {
      return null;
    }
    return this.front!.value;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  clear() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

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
