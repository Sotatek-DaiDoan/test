import { RouteProps } from 'react-router'

export type RouteComponent = React.FC<
  RouteProps & { Component: React.ComponentType<any> }
>

export type CommonOneLevelStringObject = { [key: string]: string | undefined }

export type ApiResponseWrapper<T> = {
  statusCode: number
  data: T
  _metadata: {
    limit: number
    page: number
    timestamp: string
    totalDocs: number
    totalPages: number
  }
  message: string
  success: boolean
  validatorErrors: [string]
}
