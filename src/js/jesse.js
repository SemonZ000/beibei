/* 
* @Author: Marte
* @Date:   2018-08-25 19:35:46
* @Last Modified by:   Marte
* @Last Modified time: 2018-08-25 19:47:04
*/

var value1 = localStorage.getItem("data")
var data = window.eval('('+value1+')')
console.log(data)
var wq =  document.getElementsByClassName('name')[0]
wq.innerHTML = data.name