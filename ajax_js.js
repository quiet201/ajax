/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-04-03 11:28:28
 * @version $Id$
 */
function ajax(url, fnSucc, fnFaild) {
	//1.创建ajax对象
	var oAjax=null;

	if(window.XMLHttpRequest){
		oAjax=new XMLHttpRequest();
	}
	else{
		oAjax=new ActiveXObject("Microsoft.XMLHTTP");
	}

	//2.连接服务器
	//open(方法, url, 是否异步)
	oAjax.open('GET', url, true);

	//3.发送请求
	oAjax.send();

	//4.接收返回
	//OnReadyStateChange
	oAjax.onreadystatechange=function () {
		if(oAjax.readyState==4) {
			if(oAjax.status==200){
				//alert('成功：'+oAjax.responseText);
				fnSucc(oAjax.responseText);
			}
			else {
				if(fnFaild){
					fnFaild();
				}
			}
		}
	};
}
