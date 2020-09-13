(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{223:function(v,_,t){"use strict";t.r(_);var s=t(0),r=Object(s.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"精讲——浏览器缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#精讲——浏览器缓存"}},[v._v("#")]),v._v(" 精讲——浏览器缓存")]),v._v(" "),t("p",[v._v("缓存是性能优化中非常重要的一环，浏览器的缓存机制对开发也是非常重要的知识点。接下来以三个部分来把浏览器的缓存机制说清楚：")]),v._v(" "),t("ul",[t("li",[v._v("缓存分类 和 缓存位置")]),v._v(" "),t("li",[v._v("强缓存")]),v._v(" "),t("li",[v._v("协商缓存")])]),v._v(" "),t("h2",{attrs:{id:"缓存分类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存分类"}},[v._v("#")]),v._v(" 缓存分类")]),v._v(" "),t("p",[v._v("web缓存分为很多种，比如"),t("b",[v._v("数据库缓存、代理服务器缓存、还有我们熟悉的CDN缓存")])]),v._v("\n浏览器向源服务器发起请求的流程如下：\n"),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1ghm0x33ecsj313o06e0ti.jpg",alt:""}})]),v._v(" "),t("p",[t("b",[v._v("浏览器缓存是将文件保存在客户端")]),v._v("，在同一个会话过程中会检查缓存的副本是否足够新，在后退网页时，访问过的资源可以从浏览器缓存中拿出使用。通过减少服务器处理请求的数量，提高性能。")]),v._v(" "),t("h2",{attrs:{id:"缓存位置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存位置"}},[v._v("#")]),v._v(" 缓存位置")]),v._v(" "),t("blockquote",[t("p",[t("strong",[v._v("Memory Cache")]),v._v("：内存缓存 （当前浏览器窗口关闭了，也就是失效了）")]),v._v(" "),t("p",[t("strong",[v._v("Disk Cache")]),v._v("：硬盘缓存")])]),v._v(" "),t("p",[v._v("说到"),t("strong",[v._v("浏览器缓存")]),v._v("的缓存位置，并不是把缓存存在浏览器里，而是浏览器自己建立一些缓存机制，把缓存信息存储到"),t("strong",[v._v("内存条")]),v._v("里（暂时缓存），比如打开某个页面，执行某个js脚本的时候，会在"),t("strong",[v._v("内存条")]),v._v("里，开辟一些栈空间，用于执行代码，当页面关闭后，有的内存就会被释放，有的内存就会造成泄漏问题，不会被释放。")]),v._v(" "),t("p",[v._v("然而，浏览器还会把一些内存信息存到"),t("strong",[v._v("硬盘")]),v._v("里，存到硬盘里的信息，并不会因为断电而丢失掉。")]),v._v(" "),t("h2",{attrs:{id:"缓存检查"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存检查"}},[v._v("#")]),v._v(" 缓存检查")]),v._v(" "),t("h4",{attrs:{id:"浏览器缓存一般在什么时刻被查找并获取呢？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器缓存一般在什么时刻被查找并获取呢？"}},[v._v("#")]),v._v(" 浏览器缓存一般在什么时刻被查找并获取呢？")]),v._v(" "),t("p",[v._v("一般在我们打开浏览器输入一个网页的时候，浏览器并不会立即向服务器发送请求，而是先检查本地是否有缓存，如果有缓存，则直接从缓存中读取；没有缓存时，才向服务器发送请求，拿到最新信息。")]),v._v(" "),t("h3",{attrs:{id:"检查缓存的一些场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#检查缓存的一些场景"}},[v._v("#")]),v._v(" 检查缓存的一些场景")]),v._v(" "),t("ul",[t("li",[v._v("打开网页：查找"),t("strong",[v._v("disk cache")]),v._v("中是否有匹配，如果有则使用，如没有则发送网络请求")]),v._v(" "),t("li",[v._v("普通刷新(F5)：因Tab没关闭，因为"),t("strong",[v._v("memory cache")]),v._v("是可用的，会被优先使用，其次才是"),t("strong",[v._v("disk cache")])]),v._v(" "),t("li",[v._v("强制刷新(Ctrl + F5)：浏览器"),t("strong",[v._v("不使用缓存")]),v._v("，因此发送的请求头部均带有"),t("strong",[v._v("Cache-control: no-cache")]),v._v("，服务器直接返回200和最新内容")])]),v._v(" "),t("h2",{attrs:{id:"强缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#强缓存"}},[v._v("#")]),v._v(" 强缓存")]),v._v(" "),t("p",[v._v("浏览器中的缓存作用分为两种情况，一种是"),t("strong",[v._v("需要发送 HTTP 请求")]),v._v("，一种是"),t("strong",[v._v("不需要发送请求")]),v._v("。")]),v._v(" "),t("p",[v._v("首先是检查强缓存，这个阶段不需要发送 "),t("strong",[v._v("HTTP")]),v._v(" 请求。")]),v._v(" "),t("h3",{attrs:{id:"检查强缓存机制的流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#检查强缓存机制的流程"}},[v._v("#")]),v._v(" 检查强缓存机制的流程")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1gi8xrf8j8vj31ca0tw42n.jpg",alt:"打开网页，第一次校验强缓存流程"}})]),v._v(" "),t("blockquote",[t("p",[v._v("强缓存的执行流程，第一次发送请求的时候，就如图上的"),t("strong",[v._v("5个步骤")]),v._v("，不再详细描述")])]),v._v(" "),t("p",[v._v("上图是打开网页，第一次校验强缓存的流程，那么第二次呢？")]),v._v(" "),t("blockquote",[t("p",[v._v("第二次再请求该页面的时候，会"),t("strong",[v._v("查浏览器缓存的结果和标识")]),v._v("，如果有强缓存的标识，那么直接从"),t("strong",[v._v("浏览器缓存")]),v._v("中读取")])]),v._v(" "),t("p",[v._v("上面便是，完整的强缓存机制。")]),v._v(" "),t("p",[v._v("如何来检查呢？通过相应的字段来进行，但是说起这个字段就有点门道了。")]),v._v(" "),t("p",[v._v("在 "),t("strong",[v._v("HTTP/1. 0")]),v._v(" 和 "),t("strong",[v._v("HTTP/1. 1")]),v._v(" 当中，这个字段是不一样的。")]),v._v(" "),t("blockquote",[t("p",[v._v("在 "),t("strong",[v._v("HTTP/1. 0")]),v._v(" 时期，使用的是"),t("b",[v._v("Expires")]),v._v("，而 "),t("strong",[v._v("HTTP/1. 1")]),v._v(" 使用的是"),t("b",[v._v("Cache-Control")]),v._v("。")])]),v._v(" "),t("p",[v._v("让我们首先来看看"),t("strong",[v._v("Expires")]),v._v("。")]),v._v(" "),t("h3",{attrs:{id:"expires"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#expires"}},[v._v("#")]),v._v(" Expires")]),v._v(" "),t("p",[t("strong",[v._v("Expires")]),v._v(" 即"),t("b",[v._v("过期时间")]),v._v("，存在于服务端返回的响应头中，告诉浏览器在这个过期时间 "),t("strong",[v._v("之前")]),v._v(" 可以直接从浏览器的缓存里面获取数据，无需再次请求。比如下面这样:")]),v._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[v._v("Expires"),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v(":")]),v._v(" Wed"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(",")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[v._v("22")]),v._v(" Nov "),t("span",{pre:!0,attrs:{class:"token number"}},[v._v("2019")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[v._v("08")]),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v(":")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[v._v("41")]),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v(":")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[v._v("00")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[v._v("GMT")]),v._v("\n")])])]),t("p",[v._v("表示资源在2019年11月22号8点41分过期，过期了就得向服务端发请求。"),t("br"),t("br"),v._v("\n这个方式看上去没什么问题，合情合理，但其实潜藏了一个坑，那就是"),t("b",[t("strong",[v._v("服务器的时间和浏览器的时间可能并不一致")])]),v._v("，那服务器返回的这个过期时间可能就是 "),t("strong",[v._v("不准确")]),v._v(" 的。因此这种方式很快在后来的HTTP1. 1版本中被抛弃了。")]),v._v(" "),t("h3",{attrs:{id:"cache-control"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cache-control"}},[v._v("#")]),v._v(" Cache-Control")]),v._v(" "),t("p",[v._v("在HTTP1. 1中，采用了一个非常关键的字段： "),t("strong",[v._v("Cache-Control")]),v._v(" 。这个字段也是存在于服务端返回的响应头中。"),t("br"),t("br"),v._v("\n它和 "),t("strong",[v._v("Expires")]),v._v(" 本质的不同在于它并没有采用具体的 "),t("strong",[v._v("过期时间点")]),v._v(" 这个方式，而是采用 "),t("strong",[v._v("过期时长")]),v._v(" 来控制缓存，对应的字段是max-age。比如这个例子:")]),v._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[v._v("代表这个响应返回后在 "),t("span",{pre:!0,attrs:{class:"token number"}},[v._v("3600")]),v._v(" 秒， 也就是一个小时之内可以直接使用缓存\nCache "),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("-")]),v._v(" Control"),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v(":")]),v._v(" max "),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("-")]),v._v(" age "),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[v._v("3600")]),v._v("\n")])])]),t("p",[v._v("如果你觉得它只有max-age一个属性的话，那就大错特错了。")]),v._v(" "),t("p",[v._v("它其实可以组合非常多的指令，完成更多场景的缓存判断, 将一些关键的属性列举如下: ")]),v._v(" "),t("br"),v._v(" "),t("p",[t("b",[v._v("max-age(单位为s)")]),v._v("： "),t("strong",[v._v("指定设置缓存最大的有效时间，定义的时时间长短")]),v._v(" 。当浏览器向服务器发送请求后，在max-age这段时间里浏览器就不会在向服务器发送请求了。优先于 "),t("strong",[v._v("Expires")]),v._v(" "),t("br"),t("br"),v._v(" "),t("b",[v._v("public 指定响应会被缓存，并且在多用户间共享")]),v._v("： "),t("strong",[v._v("客户端")]),v._v(" 和 "),t("strong",[v._v("代理服务器")]),v._v(" 都可以缓存。因为一个请求可能要经过不同的 "),t("strong",[v._v("代理服务器")]),v._v(" 最后才到达目标服务器，那么结果就是不仅仅浏览器可以缓存数据，中间的任何代理节点都可以进行缓存。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1ghm1wl7mqaj30f1084t9g.jpg",alt:""}}),v._v(" "),t("br"),t("br"),v._v(" "),t("b",[v._v("private")]),v._v("：这种情况就是只有浏览器能缓存了，中间的代理服务器不能缓存。\n"),t("br"),t("br"),v._v(" "),t("b",[v._v("no-cache")]),v._v("：跳过当前的 "),t("strong",[v._v("强缓存")]),v._v(" ，强制发送 "),t("strong",[v._v("HTTP")]),v._v(" 请求，即直接进入 "),t("strong",[v._v("协商缓存")]),v._v(" 的阶段。\n"),t("br"),t("br"),v._v(" "),t("b",[v._v("no-store")]),v._v("：禁止一切缓存（这才是响应不被缓存的意思）。\n"),t("br"),t("br"),v._v(" "),t("b",[v._v("s-maxage（只用于共享缓存，如CDN缓存）")]),v._v("：这和 "),t("strong",[v._v("max-age")]),v._v(" 长得比较像，但是区别在于s-maxage是针对 "),t("strong",[v._v("代理服务器")]),v._v(" 的缓存时间。比如，当x-maxage=60时，即使更新了CDN的内容，浏览器也不会请求。\n"),t("br"),t("br")]),v._v(" "),t("blockquote",[t("p",[v._v("值得注意的是：\n当"),t("B",[v._v("Expires")]),v._v("和"),t("b",[v._v("Cache-Control")]),v._v("同时存在的时候，"),t("strong",[v._v("Cache-Control")]),v._v("会优先考虑。")],1)]),v._v(" "),t("h3",{attrs:{id:"强缓存的特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#强缓存的特点"}},[v._v("#")]),v._v(" 强缓存的特点")]),v._v(" "),t("p",[v._v("服务器设定了一些"),t("strong",[v._v("资源(静态资源/css/js/图片...)"),t("strong",[v._v("的“强缓存机制”，在浏览器缓存的有效期内，我们除了")]),v._v("强制清缓存刷新")]),v._v("外，正常加载页面，都是从"),t("strong",[v._v("强缓存")]),v._v("中获取数据，而不是从服务器获取。")]),v._v(" "),t("h3",{attrs:{id:"强缓存的优势与弊端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#强缓存的优势与弊端"}},[v._v("#")]),v._v(" 强缓存的优势与弊端")]),v._v(" "),t("blockquote",[t("p",[v._v("强缓存的优势：")]),v._v(" "),t("p",[t("strong",[v._v("减少对服务器的请求次数，加载资源更快，页面渲染速度更快")])])]),v._v(" "),t("blockquote",[t("p",[v._v("强缓存的弊端：")]),v._v(" "),t("p",[v._v("​\t"),t("strong",[v._v("当我们的资源在服务器更新了，但是本地还是有缓存的，这样导致客户端无法及时获取最新的资源")])])]),v._v(" "),t("blockquote",[t("p",[v._v("避免强缓存带来的缺陷：")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("首页HTML")]),v._v("不做缓存，每一次发布资源的时候，内容有更新（资源文件名字不一样，例如webpack 在名字上设置 "),t("strong",[v._v("HASH")]),v._v("），这样页面请求的资源文件也就变了，客户端没有新文件的缓存，就从服务器获取了")]),v._v(" "),t("li",[v._v("哪怕文件名不变，只要在请求资源文件的后面加一个"),t("strong",[v._v("时间戳")]),v._v("也是可以的，时间戳不同，从"),t("strong",[v._v("服务器重新获取资源")])]),v._v(" "),t("li",[v._v("不做强缓存的设置，基于协商缓存实现（"),t("strong",[v._v("真实项目中，往往 两者同时 设置")]),v._v("）")])])]),v._v(" "),t("p",[v._v("当然，还存在一种情况，当资源缓存时间超时了，也就是 "),t("strong",[v._v("强缓存失效")]),v._v(" 了，接下来怎么办？没错，这样就进入到第二级屏障——协商缓存了。")]),v._v(" "),t("h2",{attrs:{id:"协商缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存"}},[v._v("#")]),v._v(" 协商缓存")]),v._v(" "),t("p",[v._v("强缓存失效之后，浏览器在请求头中携带相应的 "),t("strong",[v._v("缓存tag")]),v._v(" 来向服务器 "),t("strong",[v._v("发请求")]),v._v(" ，由服务器根据这个tag，来决定是否使用缓存。"),t("br")]),v._v(" "),t("p",[v._v("在 "),t("strong",[v._v("HTTP/1. 0")]),v._v(" 和 "),t("strong",[v._v("HTTP/1. 1")]),v._v(" 当中，这个字段是不一样的。")]),v._v(" "),t("blockquote",[t("p",[v._v("在 "),t("strong",[v._v("HTTP/1. 0")]),v._v(" 时期，使用的是"),t("b",[v._v("Last-Modifed")]),v._v("，而 "),t("strong",[v._v("HTTP/1. 1")]),v._v(" 使用的是"),t("b",[v._v("Etag")]),v._v("。")])]),v._v(" "),t("h3",{attrs:{id:"检查协商缓存机制的流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#检查协商缓存机制的流程"}},[v._v("#")]),v._v(" 检查协商缓存机制的流程")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1gi8z39pev4j30wk0q8wjc.jpg",alt:"检查协商缓存机制的流程"}})]),v._v(" "),t("blockquote",[t("p",[v._v("协商缓存流程 "),t("strong",[v._v("Last-Modified和If-Modified-Since")])])]),v._v(" "),t("blockquote",[t("ul",[t("li",[v._v("第一次访问资源，服务器返回资源的同时，响应头中设置"),t("strong",[v._v("Last-Modified")]),v._v("（服务器上的最后修改时间）, 浏览器接收后，缓存文件和响应头；")]),v._v(" "),t("li",[v._v("下一次请求这个资源，浏览器检测到有"),t("strong",[v._v("Last-Modified")]),v._v("，于是添加"),t("strong",[v._v("If-Modified-Since")]),v._v("请求头，值就是"),t("strong",[v._v("Last-Modified")]),v._v("中的值；")]),v._v(" "),t("li",[v._v("服务器再次收到这个资源请求，会根据 "),t("strong",[v._v("If-Modified-Since")]),v._v(" 中的值与服务器中这个资源的最后修改时间对比，如果没有变化，返回304和空的响应体，直接从缓存读取，如果"),t("strong",[v._v("If-Modified-Since")]),v._v("的时间小于服务器中这个资源的最后修改时间，说明文件有更新，于是返回新的资源文件和200；")])])]),v._v(" "),t("p",[v._v("但是"),t("strong",[v._v("Last-Modified 只能以秒计时")]),v._v("，如果在不可感知的时间内修改完成文件，那么服务端会认为资源还是命中了，不会返回正确的资源；")]),v._v(" "),t("blockquote",[t("p",[v._v("协商缓存流程 "),t("strong",[v._v("ETag和If-None-Match")])])]),v._v(" "),t("blockquote",[t("ul",[t("li",[t("strong",[v._v("Etag是服务器响应请求时")]),v._v("，返回当前资源文件的一个唯一标识(由服务器生成)，只要资源有变化，Etag就会重新生成；")]),v._v(" "),t("li",[v._v("下一次加载资源向服务器发送请求时，会将上一次返回的"),t("strong",[v._v("Etag")]),v._v("值放到请求头If-None-Match里，服务器只需要比较客户端传来的"),t("strong",[v._v("If-None-Match")]),v._v("跟自己服务器上该资源的"),t("strong",[v._v("ETag")]),v._v("是否一致，就能很好地判断资源相对客户端而言是否被修改过了。\n"),t("ul",[t("li",[t("strong",[v._v("ETag匹配失败")]),v._v("：服务器返回常规 GET 200的形式，将 最新的资源发给客户端")]),v._v(" "),t("li",[t("strong",[v._v("ETag匹配一致")]),v._v("：返回304，直接读取本地缓存")])])])])]),v._v(" "),t("h3",{attrs:{id:"last-modified"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#last-modified"}},[v._v("#")]),v._v(" Last-Modified")]),v._v(" "),t("p",[v._v("即是 "),t("strong",[v._v("服务器文件的最后修改时间")]),v._v(" 。在浏览器第一次给服务器发送请求后，服务器会在响应头中加上这个字段。"),t("br"),t("br"),v._v("\n当浏览器接收到后，如果再次请求，会在请求头中携带 "),t("strong",[v._v("If-Modified-Since")]),v._v(" 字段，询问 "),t("strong",[v._v("Last-Modifed")]),v._v(" 时间之后资源是否被修改过")]),v._v(" "),t("ul",[t("li",[v._v("如果没有被修改过，则返回状态码304，——使用协商缓存")]),v._v(" "),t("li",[v._v("如果修改过，则再去服务器请求资源，返回码和首次请求的相同为200，资源为服务器最新资源")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1ghm2fmsii9j30au06fdgi.jpg",alt:""}})]),v._v(" "),t("h3",{attrs:{id:"etag"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#etag"}},[v._v("#")]),v._v(" ETag")]),v._v(" "),t("p",[t("strong",[v._v("Etag")]),v._v(" 是服务器根据当前文件的内容，给文件生成的唯一标识，只要里面的内容有改动，这个值就会变。服务器通过 "),t("strong",[v._v("响应头")]),v._v(" 把这个值给浏览器。\n"),t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1ghm2o8u52ej30fu084dgy.jpg",alt:""}})]),v._v(" "),t("h2",{attrs:{id:"两者对比"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#两者对比"}},[v._v("#")]),v._v(" 两者对比")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("在 "),t("strong",[v._v("精确度")]),v._v(" 上， "),t("strong",[v._v("ETag")]),v._v(" 优于 "),t("strong",[v._v("Last-Modified")]),v._v(" 。ETag是按照内容给资源上标识，因为能准确感知资源的变化。而Last-Modified就不一样了，它在一些情况是不能准确感知到资源变化的")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("编辑")]),v._v(" 了资源文件，但是文件内容并没有更改，这样也会造成缓存失效。")]),v._v(" "),t("li",[t("strong",[v._v("Last-Modified")]),v._v(" 能够感知的单位时间是秒，如果文件在1秒内改变了很多次，那么这时候的"),t("strong",[v._v("Last-Modified")]),v._v("并没有体现出修改了。")])])]),v._v(" "),t("li",[t("p",[v._v("在 "),t("strong",[v._v("性能上")]),v._v(" ， "),t("strong",[v._v("Last-Modified")]),v._v(" 优于 "),t("strong",[v._v("ETag")]),v._v(" ，也很简单理解， "),t("strong",[v._v("Last-Modified")]),v._v(" 仅仅是记录一个时间点，而 "),t("strong",[v._v("ETag")]),v._v(" 需要根据文件的具体内容生成哈希值。")])])]),v._v(" "),t("br"),v._v("\n另外，如果两种方式都支持的话，服务器会优先考虑 **ETag** 的。\n"),t("blockquote",[t("p",[v._v("强缓存： "),t("code",[v._v("本地有缓存则不向服务器发送请求")])]),v._v(" "),t("p",[v._v("协商缓存： "),t("code",[v._v("哪怕本地有缓存也需要向服务器发请求")]),v._v(" （"),t("code",[v._v("校验资源文件是否更改")]),v._v("）")]),v._v(" "),t("ul",[t("li",[v._v("有更改，从服务器拿最新的资源 （拿回来后缓存到本地）")]),v._v(" "),t("li",[v._v("没有更改，服务器啥都不返回，客户端再从本地拿缓存信息")])])]),v._v(" "),t("h2",{attrs:{id:"缓存请求的基本流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存请求的基本流程"}},[v._v("#")]),v._v(" 缓存请求的基本流程")]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("基本流程")]),v._v(" "),t("p",[v._v("浏览器在加载资源时，根据请求头中的的 "),t("strong",[v._v("Expires")]),v._v(" 和 "),t("strong",[v._v("Cach-control")]),v._v(" 判断是否命中强缓存：")]),v._v(" "),t("ul",[t("li",[v._v("如果缓存存在(强缓存)，则直接从浏览器中读取缓存，返回状态码"),t("strong",[v._v("304")]),v._v("， "),t("code",[v._v("不会发送请求")]),v._v("到服务器"),t("br"),t("br")]),v._v(" "),t("li",[v._v("如果没有命中强缓存，再向 "),t("strong",[v._v("服务器发送个")]),v._v(" 请求，通过 "),t("strong",[v._v("Last-Modified")]),v._v(" 和 "),t("strong",[v._v("ETag")]),v._v(" 判断资源是否 "),t("strong",[v._v("更新")]),v._v(" 或 "),t("strong",[v._v("被修改")]),v._v(" 过，如果没有被更新，则根据 "),t("strong",[v._v("协商缓存304")]),v._v(" 返回浏览器中的内容。 "),t("br"),t("br")]),v._v(" "),t("li",[v._v("如果前面都没命中，则直接从服务器请求资源回来，返回200状态码")])])]),v._v(" "),t("h2",{attrs:{id:"图解浏览器整个缓存流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#图解浏览器整个缓存流程"}},[v._v("#")]),v._v(" 图解浏览器整个缓存流程")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1gi8zxx3v2yj30o90totbd.jpg",alt:"图解浏览器整个缓存流程"}})]),v._v(" "),t("p",[v._v("综上所述，从浏览器的第一次打开网页，请求资源，检查本地的浏览器的缓存结果和缓存标识，再到强缓存失效后的协商缓存校验。我们一一做了详细的描述，最后附上从用户请求到整个浏览器缓存的过程的流程图。")]),v._v(" "),t("p",[v._v("借鉴："),t("br"),v._v(" "),t("a",{attrs:{href:"https://segmentfault.com/a/1190000008377508",target:"_blank",rel:"noopener noreferrer"}},[v._v("浏览器缓存"),t("OutboundLink")],1),v._v(" "),t("br"),v._v(" "),t("a",{attrs:{href:"http://47.98.159.95/my_blog/perform/001.html#%E5%8D%8F%E5%95%86%E7%BC%93%E5%AD%98",target:"_blank",rel:"noopener noreferrer"}},[v._v("神三元-浏览器缓存"),t("OutboundLink")],1)])])}),[],!1,null,null,null);_.default=r.exports}}]);