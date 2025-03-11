const myImage = document.querySelector('img');
//给图片添加点击事件
myImage.onclick = function () {
    const mySrc = myImage.getAttribute('src');
    //判断图片路径，切换图片
    if (mySrc === 'images/image.jpg') {
        myImage.setAttribute('src', 'images/dog.jpg');
    }
    else {
        myImage.setAttribute('src', 'images/image.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
//设置用户名
function setUserName() {
    let myName = prompt('请输入你的名字');
    if (!myName || myName === null) {
        setUserName();
    }
    else {
        localStorage.setItem('name', myName);
        myHeading.textContent = '欢迎你，' + myName;
    }
}
//初始化
if (!localStorage.getItem('name')) {
    setUserName();
}
else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '欢迎你，' + storedName;
}
//点击按钮设置用户名
myButton.onclick = function () {
    setUserName();
}
