(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{226:function(r,t,e){"use strict";e.r(t);var o=e(0),s=Object(o.a)({},(function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[e("h2",{attrs:{id:"_1、如何实现浏览器内多个标签页之间的通信"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、如何实现浏览器内多个标签页之间的通信"}},[r._v("#")]),r._v(" 1、如何实现浏览器内多个标签页之间的通信?")]),r._v(" "),e("p",[r._v("（1）通信的标签页连接同一个服务器，发送消息到服务器后，服务器推 送消息给所有连接的客户端。"),e("br"),e("br"),r._v("\n（2）使用 SharedWorker （只在 chrome 浏览器实现了），两个页面共享同一个线程，通 过向线程发送数据和接收数据来实现标 签页之间的双向通行。"),e("br"),e("br"),r._v("\n（3）可以调用 localStorage、cookies 等本地存储方式，localStorge 另一个浏览上下文里被 添加、修改或删除时，它都会触发一个 storage 事件，我们通过监听 storage 事件，控制它的值来进行页面信息通信。"),e("br"),e("br"),r._v("\n（4）如果我们能够获得对应标签页的引用，通过 postMessage 方法也是可以实现多个标 签页通信的。"),e("br"),e("br")])])}),[],!1,null,null,null);t.default=s.exports}}]);