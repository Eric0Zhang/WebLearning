const list = document.createElement('ul');
const info = document.createElement('p');
const html = document.querySelector('html');

// 字符集必须用UTF8才能正常使用中文，用GB2312没用。
info.textContent = '这是一个动态列表。点击列表添加一列，点击已存在的一列修改内容。';

document.body.appendChild(info);
document.body.appendChild(list);

list.onclick = function () {
  const listItem = document.createElement('li');
  const listContent = prompt('您要创建的条目内容是什么?');
  listItem.textContent = listContent;
  list.appendChild(listItem);

  listItem.onclick = function (e) {
    e.stopPropagation();
    const listContent = prompt('您要将条目内容改成什么？');
    this.textContent = listContent;
  }
}