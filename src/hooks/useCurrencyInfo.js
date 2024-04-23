import { useEffect } from 'react'
import { useState } from 'react'

export const useCurrencyInfo = currency => {
  const [data, setData] = useState({})

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then(res => res.json())
      .then(res => {
        console.log(res[currency])
        setData(res[currency])
      })
      .catch(err => console.log(err))
  }, [currency])
  return data
}

export default useCurrencyInfo
