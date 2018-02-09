import React from 'react';
import { wrap, isArray } from 'lodash';
import ButtonsComponent from './ButtonsComponent';

var insert = (elementTree, target, element) => {
    if (!elementTree.props || !elementTree.props.children) {
        return elementTree;
    }
    if (elementTree === target) {
        element._store.validated = true;
        let children = isArray(elementTree.props.children) ? elementTree.props.children : [elementTree.props.children];
        let newElement = React.cloneElement(target, target.props, [...children, element]);
        newElement._store.validated = true;
        return newElement;
    } else {
        var changed = false;
        var children = [];
        var result;
        if (isArray(elementTree.props.children)) {
            for (var childElementTree of elementTree.props.children) {
                result = insert(childElementTree, target, element);
                children.push(result);
                if (result !== childElementTree) {
                    changed = true;
                }
            }
            if (changed) {
                let newElement = React.cloneElement(elementTree, elementTree.props, children);
                newElement._store.validated = true;
                return newElement;
            } else {
                return elementTree;
            }
        } else {
            result = insert(elementTree.props.children, target, element);
            if (result !== elementTree.props.children) {
                let newElement = React.cloneElement(elementTree, elementTree.props, result);
                newElement._store.validated = true;
                return newElement;
            } else {
                return elementTree;
            }
        }
    }
}

ButtonsComponent.prototype.render = wrap(ButtonsComponent.prototype.render, function (render) {
    var elementTree = render();
    console.log(elementTree);
    // elementTree, is root from the render()
    // the elementTree.props.children, in this case, is the btn-group div
    elementTree = insert(elementTree, elementTree.props.children, <button type='button' key='new' className='btn btn-primary'>New Button</button>);
    elementTree = insert(elementTree, elementTree, <p>New Paragraph</p>);
    console.log(elementTree);
    return elementTree;
})
