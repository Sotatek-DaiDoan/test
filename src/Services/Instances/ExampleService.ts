import axiosService, { AxiosService } from './AxiosService'

class ExampleService {
  readonly service: AxiosService
  readonly baseURL: string = `${process.env.NEXT_PUBLIC_BASE_URL_FRONTEND}api/`

  constructor() {
    this.service = axiosService
  }

  getProfile = () => {
    return this.service.getAuth(`${this.baseURL}` as string, {
      params: {
        id: 'test',
      },
    })
  }
}

export default new ExampleService()
