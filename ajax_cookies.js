/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-04-13 15:34:11
 * @version $Id$
 */

function ajax() {
    //<![CDATA[
    this.pURI = null;
    this.pMethod = "GET";
    this.pDate = null;
    this.pAsyn = true;
    //]]>
}
//创建xmlhttp对象,判断浏览器版本是否支持
ajax.prototype.xmlhttp = function () {
    var xmlhttp = null;
    if (window.ActiveXObject) {
        var arrayActive = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.5.0", "Msxml2.XMLHTTP.4.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP", "Microsoft.XMLHTTP"];
        for (var i = 0; i < arrayActive.length; i++) {
            try {
                xmlhttp = new ActiveXObject(arrayActive[i]);
                break;
            } catch (e) {
                continue;
            }
        }
    } else if (window.XMLHttpRequest) {
        try {
            xmlhttp = new XMLHttpRequest();
            if (xmlhttp.overrideMimeType) { xmlhttp.overrideMimeType("text/xml"); }
        } catch (e) {
            xmlhttp = null;
        }
    } else {
        xmlhttp = null;
    }
    return xmlhttp;
}
//发出请求并返回字符串
ajax.prototype.Request = function (callback) {
    try {
        var oXmlhttp = this.xmlhttp();
        if (oXmlhttp == null || this.pURI == null || this.pURI == "") return;
        this.pMethod = this.pMethod.toUpperCase();
        if (this.pMethod == "GET") {
            oXmlhttp.open(this.pMethod, this.pURI + "?" + this.pDate, this.pAsyn);
            oXmlhttp.setRequestHeader("Content-Type", "text/html;charset=utf-8");
        } else {
            oXmlhttp.open(this.pMethod, this.pURI, this.pAsyn);
            oXmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        }
        oXmlhttp.onreadystatechange = function () {
            if (oXmlhttp.readyState == 4) {//alert(oXmlhttp.getallresponseheaders);
                if (oXmlhttp.status == 200) {
                    callback(oXmlhttp);
                    oXmlhttp = null;
                }
            }
        }
        oXmlhttp.send(this.pMethod == "POST" ? this.pDate : null);
        //return;
    } catch (e) {
        return;
    }
}

function jsgetCookie(name)//取cookies函数
{
    var res = "";
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null)
        res = unescape(arr[2]);
    return res;
}

function jsSetCookie(name, value, second)//三个参数  cookie名， cookie值， cookie过期时间（秒） 
{
    var exp = new Date();    //new Date("December 31, 9998");
    exp.setTime(exp.getTime() + second * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}