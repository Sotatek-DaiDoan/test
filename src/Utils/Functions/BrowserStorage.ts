export default class StorageUtils {
  static setItem(key: string, value: string) {
    try {
      window?.localStorage?.setItem(key, value)
    } catch (error) {}
  }

  static getItem(key: string, defaultValue: string) {
    try {
      const result = window?.localStorage?.getItem(key)
      if (result === null || result === undefined) return defaultValue
      return result
    } catch (error) {}
  }

  static setToken(value = '') {
    StorageUtils.setItem('accessToken', value)
  }

  static getToken() {
    return StorageUtils.getItem('accessToken', '')
  }
}
