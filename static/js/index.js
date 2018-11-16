window.onload = function () {
  var box = document.getElementById('box')
  var but = box.getElementsByTagName('div')[0]
  var but1 = but.children[0]
  var but2 = but.children[1]
  var moveUl = box.getElementsByTagName('ul')[0]
  var ulLiarr = moveUl.getElementsByTagName('li')
  var moveOl = box.getElementsByTagName('ol')[0]
  var olLiArr = moveOl.getElementsByTagName('li')
  var imgWidth = ulLiarr[0].offsetWidth
  for (var i = 0; i < olLiArr.length; i++) {
    olLiArr[i].index = i
    olLiArr[i].onmouseover = function () {
      for (var j = 0; j < olLiArr.length; j++) {
        olLiArr[j].className = ''
      }
      this.className = 'now'
      key = circle = this.index
      animate(-this.index * imgWidth, moveUl, 10)
    }
  }
  var timer = setInterval(autoplay, 1000)
  var key = 0
  var circle = 0
  function autoplay () {
    key++
    if (key > olLiArr.length) {
      moveUl.style.left = 0
      key = 1
    }
    animate(-key * imgWidth, moveUl, 10)
    circle++
    if (circle > olLiArr.length - 1) {
      circle = 0
    }
    for (var j = 0; j < olLiArr.length; j++) {
      olLiArr[j].className = ''
    }
    olLiArr[circle].className = 'now'
  }
  box.onmouseover = function () {
    clearInterval(timer)
    but.style.display = 'block'
    but.style.zIndex = '99'
  }
  box.onmouseout = function () {
    timer = setInterval(autoplay, 1000)
    but.style.display = 'none'
  }
  but1.onclick = function () {
    key--
    if (key < 0) {
      moveUl.style.left = -imgWidth * olLiArr.length + 'px'
      key = olLiArr.length - 1
    }
    animate(-key * imgWidth, moveUl, 10)
    circle--
    if (circle < 0) {
      circle = olLiArr.length - 1
    }
    for (var j = 0; j < olLiArr.length; j++) {
      olLiArr[j].className = ''
    }
    olLiArr[circle].className = 'now'
  }
  but2.onclick = function () {
    autoplay()
  }
  function animate (target, ele, speed) {
    clearInterval(ele.timer)
    var speed = target > ele.offsetLeft ? speed : -speed
    ele.timer = setInterval(function () {
      var val = target - ele.offsetLeft
      ele.style.left = ele.offsetLeft + speed + 'px'
      if (Math.abs(val) < Math.abs(speed)) {
        clearInterval(ele.timer)
        ele.style.left = target + 'px'
      }
    }, 15)
  }
}
