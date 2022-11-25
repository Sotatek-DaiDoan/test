import { useTranslation } from 'react-i18next'

const useLang = () => {
  const { i18n } = useTranslation()
  const changeLanguage = (locales: string) => i18n.changeLanguage(locales)
  return { lang: i18n.language, setLang: changeLanguage }
}

export default useLang
