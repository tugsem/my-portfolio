const createTechList = (node, array) => {
  array.forEach((lang) => {
    const li = document.createElement('li');
    li.className = 'lang d-flex';
    li.innerText = lang;
    node.appendChild(li);
    return node;
  });
};

export default createTechList;