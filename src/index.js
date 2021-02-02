import _ from 'lodash'
function component() {
    const button = document.createElement('button');
    button.textContent = _.join(['hello', 'world'], ' ');

    return button;
}

document.body.appendChild(component())