// 该文件是项目中公用的类型定义文件


//定义 AxiosRequestConfig 接口类型

export interface AxiosRequestConfig {
  url: string       //url 为请求的地址，必选属性
  //method?: string //method 是请求的 HTTP 方法
  data?: any        //data 是 post、patch 等类型请求的数据，放到 request body 中的
  params?: any      //params 是 get、head 等类型请求的数据，拼接到 url 的 query string 中的
  method?:Method
}


//定义字符串字面量类型 Method，确保让 method 只能传入合法的字符串

export type Method = 'get' | 'GET'
  | 'delete' | 'Delete'
  | 'head' | 'HEAD'
  | 'options' | 'OPTIONS'
  | 'post' | 'POST'
  | 'put' | 'PUT'
  | 'patch' | 'PATCH'