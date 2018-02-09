# How does this work

React jsx are just a tree of JavaScript object at runtime, so it is easy to manipulate them.
The tree looks like this.
![Image of element tree](
https://github.com/matthewma7/react-playground/blob/master/element-tree-mod/element-tree.png)

The code in wrap.js implements an insert method it currently append the new element at the end of its parent, but with similar mechanism, we could have insertAfter() and remove()

# Setup

This is created with react-create-app.
So you could execute *npm install* and *npm start*
