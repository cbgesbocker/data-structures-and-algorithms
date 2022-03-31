import java.util.*;
import java.io.*;

class Node {
    Node left;
    Node right;
    int data;
    
    Node(int data) {
        this.data = data;
        left = null;
        right = null;
    }
}

class Solution {

	/*
    class Node 
    	int data;
    	Node left;
    	Node right;
	*/
	public static Node lca(Node root, int v1, int v2) {
        return Solution.getLeastCommonAnscestor(root, v1, v2);
    }
    
    public static Node getLeastCommonAnscestor(Node root, int v1, int v2) {
        Node leastCommonAnscestorNode = root;
        double leastCommonAnscestor = Double.POSITIVE_INFINITY;
        List<Node> anscestors = Solution.getAnscestors(root, v1, v2);
        for (Node n : anscestors) {
            if (Solution.isChild(n, v1) && Solution.isChild(n, v2)) {
                leastCommonAnscestor = Math.min(n.data, leastCommonAnscestor);
                if (leastCommonAnscestor == n.data) {
                    leastCommonAnscestorNode = n;
                }
            }
        }
        return leastCommonAnscestorNode;
    }
    
    public static Boolean isChild(Node root, int val) {
        boolean found = false;
        List<Node> queue = new ArrayList<Node>();
        queue.add(root);
        
        while (queue.size() > 0) {
            Node node = queue.remove(queue.size() - 1);
            if (node.data == val) {
                found = true;
                break;
            }
            if (node.left != null) {
                queue.add(node.left);
            }
            if (node.right != null) {
                queue.add(node.right);
            }
        }
        return found;
    }
    
    public static List<Node> getAnscestors(Node root, int v1, int v2) {
        List<Node> anscestors = new ArrayList<Node>();
        List<Node> queue = new ArrayList<Node>();
        
        queue.add(root);
        
        boolean foundLeft = false;
        boolean foundRight = false;
        
        while (queue.size() > 0) {
            Node node = queue.remove(0);
            anscestors.add(node);
            if (node.data == v1) {
                foundLeft = true;
            }
            if (node.data == v2) {
                foundRight = true;
            }
            if (foundRight && foundLeft) {
                break;
            }
            if (node.left != null) {
                queue.add(node.left);
            }
            if (node.right != null) {
                queue.add(node.right);
            }
        }
        if (!foundLeft && !foundRight) {
            throw new Error("Did not find target nodes");
        }
        return anscestors;
    }

	public static Node insert(Node root, int data) {
        if(root == null) {
            return new Node(data);
        } else {
            Node cur;
            if(data <= root.data) {
                cur = insert(root.left, data);
                root.left = cur;
            } else {
                cur = insert(root.right, data);
                root.right = cur;
            }
            return root;
        }
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int t = scan.nextInt();
        Node root = null;
        while(t-- > 0) {
            int data = scan.nextInt();
            root = insert(root, data);
        }
      	int v1 = scan.nextInt();
      	int v2 = scan.nextInt();
        scan.close();
        Node ans = lca(root,v1,v2);
        System.out.println(ans.data);
    }	
}