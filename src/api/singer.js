import jsonp from 'common/js/jsonp'
import {commonParams,options} from './config'
import axios from 'axios'

export function getSingerList() {
	const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'

	const data = Object.assign({},commonParams,{
	channel:"singer",
	page:'list',
        pagesize:100,
        g_tk:282382789,
        pagenum:1,
        hostUin:0,
        needNewCode:0,
        platform:'yqq',
        key:'all_all_all'
	})

	return jsonp(url,data,options)
}

export function getSingerDetail(singerId) {
        const url ="https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg"

        const data = Object.assign({},commonParams,{
        loginUin:0,
        hostUin:0,
        needNewCode:0,
        songstatus:1,
        num:100,
        order:'listen',
        platform:'yqq',
        singermid:singerId
        })

        return jsonp(url,data,options)
}


export function getMusic(mid) {
        const url = '/api/music'
        
        const data = Object.assign({},commonParams,{
        songmid:mid,
        filename:'C400'+mid+'.m4a',
        guid:1348340548,
        platform:'yqq',
        uin:0,
        cid:205361747,
        loginUin:0,
        hostUin:0,
        format:'json',
        needNewCode:0
        })

        return axios.get(url,{
          params:data
        }).then((res)=>{
           console.log(res.data)
           return Promise.resolve(res.data)
        } )
}