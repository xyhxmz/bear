import jsonp from 'common/js/jsonp'
import {commonParams,options} from './config'
import axios from 'axios'

export function getRecommend() {
	const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

	const data = Object.assign({}, commonParams,{
		platfrom: 'h5',
		uin:0,
		needNewCode:1
	})
    
	return jsonp(url,data,options)
}

// export function getDiscList() {
//   const url = '/api/getDiscList'
  
//   const data = Object.assign({}, commonParams, {
//     platform: 'yqq',
//     hostUin: 0,
//     loginUin:0,
//     sortId: 5,
//     needNewCode: 0,
//     notice:0,
//     g_tk:5381,
//     callback: Math.random(),
//     categoryId: 10000000,
//     jsonpCallback: Math.random(),
//     format: 'jsonp'
//   })

//   return axios.get(url, {
//     params: data
//   }).then((res) => {
//     return Promise.resolve(res.data)
//   })
// }