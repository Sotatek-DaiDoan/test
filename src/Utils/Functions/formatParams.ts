type Params = {
  [key: string]: string | any
}

export const formatParams = (params: Params) => {
  return new URLSearchParams(params).toString()
};