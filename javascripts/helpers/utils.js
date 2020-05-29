const printToDom = (id, text) => {
  document.querySelector(id).innerHTML = text;
}

export default { printToDom }
