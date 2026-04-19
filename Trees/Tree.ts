// Tree Node Structure
class TreeNode<T> {
  value: T;
  children: TreeNode<T>[];

  constructor(value: T) {
    this.value = value;
    this.children = [];
  }
}

// Tree Structure
class Tree<T> {
  root: TreeNode<T> | null = null;

  create(data: T): void {
    this.root = new TreeNode(data);
  }

  insert(): void {
    if (!this.root) {
      console.log("Tree is empty. Please create the tree first.");
    }
  }
}
