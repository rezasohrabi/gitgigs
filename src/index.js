const component = () => {
    const button = document.createElement('button');
    button.innerText = _.join(['hello', 'world'], ' ');

    return button;
}

document.body.appendChild(component())