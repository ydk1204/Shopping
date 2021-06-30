//JS만을 이용해서 쇼핑 사이트 관리

const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

function onAdd() {
    //1. 사용자가 입력한 텍스트를 받아온다.
    const text = input.value;
    if(text === ''){
        input.focus();
        return;
    }
    //2. 받아온 텍스트를 이용해서 새로운 아이템을 만듬(텍스트 + 삭제 버튼)
    const item = creatItem(text);
    //3. items 컨테이너 안에 새로운 아이템을 추가한다.
    items.appendChild(item);
    //4. 새로 추가된 아이템으로 자동 스크롤링
    item.scrollIntoView({block: 'center'});
    //5. 텍스트를 아이템으로 추가했다면 텍스트 박스에 인풋 내용을 초기화한다.
    input.value = '';
    input.focus();
}

function creatItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');

    const item = document.createElement('div');
    item.setAttribute('class', 'item');

    const name = document.createElement('span');
    name.setAttribute('class', 'item__name');
    name.innerText = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'item__delete');
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteBtn.addEventListener('click', ()=>{
        items.removeChild(itemRow);
    })

    const itemDivider = document.createElement('div');
    itemDivider.setAttribute('class', 'item__divider');

    item.appendChild(name);
    item.appendChild(deleteBtn);

    itemRow.appendChild(item);
    itemRow.appendChild(itemDivider);
    return itemRow;
}

addBtn.addEventListener('click', ()=>{
    onAdd();
})

input.addEventListener('keypress', (event)=>{
    if(event.key === 'Enter') {
        onAdd();
    }
})