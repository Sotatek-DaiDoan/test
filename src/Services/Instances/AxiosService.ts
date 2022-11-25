import axios, { AxiosRequestConfig } from 'axios'
import store from 'Store'

export class AxiosService {
  readonly service

  constructor() {
    // const tokenAccess = StorageUtils.getToken()
    // console.log('tokenAccess', tokenAccess);
    const service = axios.create({
      withCredentials: false,
      responseType: 'json',
      baseURL: process.env.REACT_APP_API_URL || '',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        // Authorization: 'Bearer ' + tokenAccess
      },
    })
    service.interceptors.request.use(this.handleInterceptRequest)
    service.interceptors.response.use(this.handleSuccess, this.handleError)
    this.service = service
  }

  setHeader(name: any, value: any) {
    this.service.defaults.headers.common[name] = value
  }

  removeHeader(name: string) {
    delete this.service.defaults.headers.common[name]
  }

  handleInterceptRequest(config: any) {
    return config
  }

  handleSuccess(response: any) {
    return response
  }

  handleError = (error: any) => {
    if (error.response?.status === 401) {
      // TODO: update logic error request
    }

    throw error
  }

  redirectTo = (document: any, path: string) => {
    document.location = path
  }

  getOptionsAuth = (options?: any) => {
    const customOptions = { ...(options || {}) }
    const tokenAccess = store.getState().example.tokenAccess
    customOptions.headers = customOptions.headers || {}
    customOptions.headers.Authorization = `Bearer ${tokenAccess}`
    return customOptions
  }

  async get<T = any>(endpoint: string, options?: AxiosRequestConfig) {
    return this.service.get<T>(endpoint, options)
  }

  async post<T = any>(
    endpoint: string,
    payload: any,
    options?: AxiosRequestConfig
  ) {
    return this.service.post<T>(endpoint, payload, options)
  }

  async put<T = any>(
    endpoint: string,
    payload: any,
    options?: AxiosRequestConfig
  ) {
    return this.service.put<T>(endpoint, payload, options)
  }

  async patch<T = any>(
    endpoint: string,
    payload: any,
    options?: AxiosRequestConfig
  ) {
    return this.service.patch<T>(endpoint, payload, options)
  }

  async delete<T = any>(endpoint: string, options?: AxiosRequestConfig) {
    return this.service.delete<T>(endpoint, options)
  }

  async getAuth<T = any>(endpoint: string, options?: any) {
    const customOptions = this.getOptionsAuth(options)
    return this.service.get<T>(endpoint, customOptions)
  }

  async postAuth<T = any>(endpoint: string, payload?: any, options?: any) {
    const customOptions = this.getOptionsAuth(options)
    return this.service.post<T>(endpoint, payload, customOptions)
  }

  async putAuth<T = any>(endpoint: string, payload: any, options?: any) {
    const customOptions = this.getOptionsAuth(options)
    return this.service.put<T>(endpoint, payload, customOptions)
  }

  async patchAuth<T = any>(endpoint: string, payload: any, options?: any) {
    const customOptions = this.getOptionsAuth(options)
    return this.service.patch<T>(endpoint, payload, customOptions)
  }

  async deleteAuth<T = any>(endpoint: string, options?: any) {
    const customOptions = this.getOptionsAuth(options)
    return this.service.delete<T>(endpoint, customOptions)
  }
}

export default new AxiosService()
