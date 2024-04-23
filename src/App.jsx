import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo.js'
import InputBox from './components/Input.jsx'

export const App = () => {
  const [amount, setAmount] = useState(0)
  const [fromData, setFromData] = useState('usd')
  const [toData, setToData] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(fromData)

  const fromOptions = Object.keys(currencyInfo)

  const swap = () => {
    setFromData(toData)
    setToData(fromData)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[toData])
  }

  return (
    <div
      className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
      style={{
        backgroundImage: `url('https://cdn.pixabay.com/photo/2017/09/07/08/53/money-2724235_1280.jpg')`,
      }}
    >
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form
            onSubmit={e => {
              e.preventDefault()
              convert()
            }}
          >
            <div className='w-full mb-1'>
              <InputBox
                label='From'
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={currency => setFromData(currency)}
                selectCurrency={fromData}
                onAmountChange={amount => setAmount(amount)}
              />
            </div>
            <div className='relative w-full h-0.5'>
              <button
                type='button'
                onClick={swap}
                className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
              >
                swap
              </button>
            </div>
            <div className='w-full mt-1 mb-4'>
              <InputBox
                label='To'
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={currency => setToData(currency)}
                selectCurrency={toData}
                onAmountChange={amount => setConvertedAmount(amount)}
              />
            </div>
            <button
              type='submit'
              className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
            >
              Convert {fromData.toUpperCase()} to {toData.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
