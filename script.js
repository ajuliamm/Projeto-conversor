const button = document.getElementById("button-real")
const select = document.getElementById("currency-select")

const dolar = 5.66
const euro = 6.42
const bitcoin = 263262.46

const convertValue = () => {
  const input = document.getElementById('input-real').value
  const realValueText = document.getElementById('real-value-text')
  const currencyValueText = document.getElementById('currency-value-text')

  realValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(input)

  if (select.value === 'US$ Dólar americano'){
  currencyValueText.innerHTML = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(input / dolar)
  }
  if (select.value === '€ Euro') {
  currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(input / euro)
  }

  if (select.value === 'Bitcoin') {
    currencyValueText.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'BTC',
    }).format(input / bitcoin)
    }
}

changeCurrency = () => {
  const currencyName = document.getElementById("currency-name")
  const currencyImg = document.getElementById("currency-img")

  if (select.value === 'US$ Dólar americano') {
    currencyName.innerHTML = "Dólar americano"
    currencyImg.src = "./assets/estados-unidos (1) 1.svg"
  }

  if (select.value === '€ Euro') {
    currencyName.innerHTML = "Euro"
    currencyImg.src = "./assets/euro.svg"
  }

  if (select.value === 'Bitcoin') {
    currencyName.innerHTML = "Bitcoin"
    currencyImg.src = "./assets/bitcoin.svg"
  }

  convertValue()
}

button.addEventListener("click", convertValue)
select.addEventListener("change", changeCurrency)