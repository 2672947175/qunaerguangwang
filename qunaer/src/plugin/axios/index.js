import axios from 'axios';


const server = axios.create({
    //配置后台的地址
    baseURL: 'http://127.0.0.1:7001',
    timeout: 5000 // 请求超时时间
})


// 请求拦截器
server.interceptors.request.use((config)=>{
    // console.log(config)
      return config
  })
  
  // 响应拦截器
  server.interceptors.response.use((response)=>{
    return response.data
  })
  
export default server