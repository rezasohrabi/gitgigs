import _ from 'lodash'
import runStringMethods from './js-methods/strings'


runStringMethods();
function component() {
    const button = document.createElement('button');
    button.textContent = _.join(['hello', 'world'], ' ');

    return button;
}

document.body.appendChild(component())