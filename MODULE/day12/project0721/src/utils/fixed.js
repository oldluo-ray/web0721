// 定义移动端适配的代码

function adapter() {
  // 计算根字体的大小
  //   const fontSize = document.documentElement.clientWidth / 10
  const fontSize = (document.documentElement.clientWidth * 100) / 375
  // 设置给根标签
  document.documentElement.style.fontSize = fontSize + 'px'
}

adapter()
window.onresize = adapter



