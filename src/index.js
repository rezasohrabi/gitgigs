import _ from 'lodash'
import runClosureMethods from './js-methods/closures'

runClosureMethods();
function component() {
    const button = document.createElement('button');
    button.textContent = _.join(['hello', 'world'], ' ');

    return button;
}

document.body.appendChild(component())