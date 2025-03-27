// Функція для поділу з урахуванням валюти
function formatValue(value, currencyAlias) {
    if (currencyAlias === 'pln') {
        return (value  / 1000).toFixed(2);  // Для злотих
    }
    if(currencyAlias === 'huf') {
        return (value  / 1000).toFixed(2);  // Для злотих
    }

    if(currencyAlias === 'czk') {
        return (value  / 1000).toFixed(2);  // Для злотих
    }
    if(currencyAlias === 'jpy') {
        return (value  / 1000).toFixed(2);  // Для злотих
    }
    if(currencyAlias === 'cny') {
        return (value  / 1000).toFixed(2);  // Для злотих
    }
    else {
        return (value / 100).toFixed(2); // Для інших валют
    }
}

// Функція для отримання даних через fetch
async function fetchRates(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        return [];
    }
}

// Оновлення значення в контейнері
function updateRate(rateId, rateValue) {
    const element = document.getElementById(rateId);
    if (element) {
        element.textContent = rateValue;
    }
}

// Функція для отримання та оновлення курсів валют
async function getRates() {
    // Отримуємо дані з API
    const goverlaData = await fetchRates('/api/goverla');
    const privatbankData = await fetchRates('/api/privatbank');

    // Обробка даних з goverla
    if (goverlaData && goverlaData.length > 0) {
        goverlaData.forEach(rate => {
            // Отримуємо значення купівлі (bid) та продажу (ask)
            const bid = formatValue(rate.bid.absolute, rate.currency.alias);
            const ask = formatValue(rate.ask.absolute, rate.currency.alias);

            // Оновлюємо елементи на сторінці
            updateRate(`goverla-${rate.currency.alias}-bid`, bid);
            updateRate(`goverla-${rate.currency.alias}-ask`, ask);
        });
    }

    // Обробка даних з privatbank
    if (privatbankData && privatbankData.length > 0) {
        privatbankData.forEach(rate => {
            updateRate(`privatbank-${rate.alias}-bid`, rate.bid.toFixed(2));
            updateRate(`privatbank-${rate.alias}-ask`, rate.ask.toFixed(2));
        });
    }
}

// Виклик функції після завантаження сторінки
window.onload = getRates;
