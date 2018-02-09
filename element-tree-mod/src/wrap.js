import React from 'react';
import { wrap, isArray } from 'lodash';
import ButtonsComponent from './ButtonsComponent';

var insert = (elementTree, target, element) => {
    // With this, React won't complain the element needs a key
    // see https://github.com/facebook/react/blob/467b1034ce8af6807e11deb9dfeca4d4e922ed82/packages/react/src/ReactElementValidator.js#L136
    element._store.validated = true;
    if (!elementTree.props || !elementTree.props.children) {
        return elementTree;
    }
    if (elementTree === target) {
        let children = isArray(elementTree.props.children) ? elementTree.props.children : [elementTree.props.children];
        let newElement = React.cloneElement(target, target.props, [...children, element]);
        newElement._store.validated = true;
        return newElement;
    } else {
        if (isArray(elementTree.props.children)) {
            let changed = false;
            let children = [];
            for (var childElementTree of elementTree.props.children) {
                let result = insert(childElementTree, target, element);
                children.push(result);
                if (result !== childElementTree) {
                    changed = true;
                }
            }
            if (changed) {
                let newElement = React.cloneElement(elementTree, elementTree.props, children);
                newElement._store.validated = true;
                return newElement;
            }
        } else {
            let result = insert(elementTree.props.children, target, element);
            if (result !== elementTree.props.children) {
                let newElement = React.cloneElement(elementTree, elementTree.props, result);
                newElement._store.validated = true;
                return newElement;
            }
        }
        return elementTree;
    }
}

ButtonsComponent.prototype.render = wrap(ButtonsComponent.prototype.render, function (render) {
    let elementTree = render();
    console.log(elementTree);
    // elementTree, is root from the render()
    // the elementTree.props.children, in this case, is the btn-group div
    elementTree = insert(elementTree, elementTree.props.children, <button type='button' className='btn btn-primary'>New Button</button>);
    elementTree = insert(elementTree, elementTree, <p>New Paragraph</p>);
    console.log(elementTree);
    return elementTree;
})
