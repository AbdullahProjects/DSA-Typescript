## Tree

A tree is a **hierarchical** data structure used to organize and represent data in a **parent–child** relationship. It consists of nodes, where the topmost node is called the **root**, and every other node can have one or more **child nodes**.

### Types of Tree

1. **Binary Tree** : A Binary Tree is a type of tree data structure where each node can have a maximum of two child nodes, a left child node and a right child node. This structure is the foundation for more complex tree types like Binay Search Trees and AVL Trees.

2. **Binary Search Tree**: A type of Binary Tree where for each node, the left child node has a lower value, and the right child node has a higher value.

3. **AVL Trees** : A type of Binary Search Tree that self-balances so that for every node, the difference in height between the left and right subtrees is at most one. This balance is maintained through rotations when nodes are inserted or deleted. 


### Terminologies in the Tree Data Structure:

- **Parent Node** : A node that has one or more child nodes directly connected below it.

- **Child Node** : A node that has a parent node directly connected above it. Two types of child: Left child and Right child.

- **Root Node** : The topmost node of a tree that has no parent. Every tree has exactly one root.

- **Leaf Node** : A node that has no children. Also called an **external node** or **terminal node**.

- **Internal Node** : A node that has at least one child (i.e., any node that is not a leaf node, root node can be considered internal node if it has atleast one child).

- **Sibling** : Nodes that share the same parent node.

- **Ancestor** : Any node that lies on the path from the root to a given node (i.e., parent, grandparent, etc.).

- **Descendant** : Any node reachable by repeatedly moving from parent to child (i.e., children, grandchildren, etc.).

- **Level of a Node** : The distance of a node from the root, measured in edges. The root is at level 0 (or level 1, depending on convention).

- **Subtree** : A node and all of its descendants. Every node in a tree is the root of its own subtree. Left subtree or Right subtree.

- **Height of Tree**: The tree height is the maximum number of edges from the root node to a leaf node.

- **Tree Size**: Total number of nodes in whole tree.

- **Neighbor of a Node** : The parent or any direct child of that node — i.e., nodes directly connected by a single edge.

- **Edge**: The link connecting two nodes.


### Basic Operations of Tree Data Structure:

- **Create** : Create a tree data structure.
- **Insert** : Insert data in a tree.
- **Search** : Searches specific data in a tree to check whether it is present or not.
- **Traversal** : Includes 2 types of traversal: Depth-First-Search Traversal and Breadth-First-Search Traversal. 
