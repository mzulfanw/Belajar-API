// Ambil Button Random

const randomButton = document.getElementById('random-jokes');

randomButton.addEventListener('click', function () {
    // get loading items 
    // get box jokes
    const boxJokes = document.querySelector('.box-jokes');
    const loadingItem = document.querySelector('.animation');

    randomButton.style.display = 'none';
    loadingItem.style.display = 'block';


    setTimeout(function () {

        loadingItem.style.display = 'none';
        boxJokes.style.display = 'block';

        randomButton.style.display = 'block';
        fetch('https://api.chucknorris.io/jokes/random')
            .then(response => response.json())
            .then(response => {
                const randomJoke = response;
                const string = `  <img src="${randomJoke.icon_url}" alt="icon-url" style="display: block; margin: 0 auto" >
                            <q style = "margin-top: 20px ; font-size: 20px">${randomJoke.value}</q>
                           
                `;

                console.log(randomJoke)

                const randomJokeContainer = document.querySelector('.box-jokes');
                randomJokeContainer.innerHTML = string;
            })


    }, 4000)
});

