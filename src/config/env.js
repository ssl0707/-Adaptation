/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 *
 */

let baseUrl = 'http://guanwang.xingyao100.com/api';
let qrcodeUrl = 'http://guanwang.xingyao100.com'
let videoUrl = 'http://guanwang.xingyao100.com/videos/'
let routerMode = 'hash';
let imgBaseUrl = '';

if (process.env.NODE_ENV == 'development') {
  imgBaseUrl = '/img/';
} else if (process.env.NODE_ENV == 'production') {
  // baseUrl = 'http://jzfp.anhui.erqi.xingyao100.com/api';
  // imgBaseUrl = 'http://jzfp.anhui.xingyao100.com/img/';
  baseUrl = '/api';
  imgBaseUrl = '/img/';
}

export {
  baseUrl,
  routerMode,
  imgBaseUrl,
  qrcodeUrl,
  videoUrl
}
