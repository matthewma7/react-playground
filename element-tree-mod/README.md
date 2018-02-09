# What is this

This is a demo showing a method to modify jsx output at runtime. 
The core logic is inside the [wrap.js](https://github.com/matthewma7/react-playground/blob/master/element-tree-mod/src/wrap.js)

A wrap function that patches the original render() method of a React Component.

Before the patch, the output looks like this.

![Image of element tree](https://github.com/matthewma7/react-playground/blob/master/element-tree-mod/before.png)

After the patch, the output become this.

![Image of element tree](https://github.com/matthewma7/react-playground/blob/master/element-tree-mod/after.png)

# How does it work

React jsx are just a tree of JavaScript object at runtime, so it is easy to manipulate them.

The tree looks like this.

![Image of element tree](https://github.com/matthewma7/react-playground/blob/master/element-tree-mod/element-tree.png)

The code in wrap.js implements an insert method, and it currently append the new element at the end of its parent, but with similar mechanism, we could have insertAfter() and remove()
We could potentially modify the [sizzlejs](https://sizzlejs.com/) to make it work with the element tree to make the usage even easier.

# Setup

This is created with *react-create-app*.
So you could execute *npm install* and *npm start* to start the demo.
