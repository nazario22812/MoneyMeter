async function convertCurrency() {
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const resultField = document.getElementById("wynik");

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount!");
        return;
    }

    try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        const data = await response.json();

        if (!data.rates[toCurrency]) {
            alert("Currency not supported!");
            return;
        }

        const rate = data.rates[toCurrency];
        const convertedAmount = (amount * rate).toFixed(2);

        resultField.value = `${convertedAmount} ${toCurrency}`;
    } catch (error) {
        alert("Error fetching exchange rate. Please try again later.");
        console.error(error);
    }
}
