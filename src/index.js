import _ from 'lodash'
import runArrayMethods from './js-methods/array'

runArrayMethods();
function component() {
    const button = document.createElement('button');
    button.textContent = _.join(['hello', 'world'], ' ');

    return button;
}

document.body.appendChild(component())