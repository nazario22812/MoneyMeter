document.addEventListener("DOMContentLoaded", function () {
    // Знаходимо всі елементи криптовалют
    const cryptoItems = document.querySelectorAll(".crypto-item");

    cryptoItems.forEach(item => {
        item.addEventListener("click", function () {
            const cryptoId = this.getAttribute("data-id"); // Отримуємо ID криптовалюти

            // Посилання на API

            const apiUrl = `https://api.coingecko.com/api/v3/simple/price?ids=${cryptoId}&vs_currencies=usd,eur,gbp,chf,cad,aud,pln,huf,czk,jpy,cny&x_cg_demo_api_key=CG-TzTkU2pAcWCDkqASHq5n1MFy`;

            // Отримуємо дані з API
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    console.log(data); // Вивести в консоль для перевірки

                    if (!data[cryptoId]) {
                        console.error("Помилка: API не повернуло даних для", cryptoId);
                        return;
                    }

                    // Оновлення цін в таблиці
                    document.getElementById("usd-price").textContent = data[cryptoId].usd;
                    document.getElementById("eur-price").textContent = data[cryptoId].eur ;
                    document.getElementById("gbp-price").textContent = data[cryptoId].gbp ;
                    document.getElementById("chf-price").textContent = data[cryptoId].chf ;
                    document.getElementById("cad-price").textContent = data[cryptoId].cad ;
                    document.getElementById("aud-price").textContent = data[cryptoId].aud ;
                    document.getElementById("pln-price").textContent = data[cryptoId].pln ;
                    document.getElementById("huf-price").textContent = data[cryptoId].huf ;
                    document.getElementById("czk-price").textContent = data[cryptoId].czk ;
                    document.getElementById("jpy-price").textContent = data[cryptoId].jpy ;
                    document.getElementById("cny-price").textContent = data[cryptoId].cny ;







                })
                .catch(error => console.error("Помилка отримання даних:", error));
        });
    });
});