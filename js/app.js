const publicKey = 'a71e2ebcb697b5cfb2bd46f393a513e1';
const privateKey = 'ef4af9b05dcde5a8427fbc18d4d432a6';


const marvel = {
    render: () => {
        const urlAPI = `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${publicKey}&hash=${privateKey}`;
        console.log(urlAPI);
        const container = document.querySelector('#marvel-row');
        let contentHTML = '';
        fetch(urlAPI)
        .then(res=> res.json())
        .then((json) => {
            console.log(json,'RES.JSON')
            for (const hero of json.data.results) {
                let urlHero = hero.urls[0].url;
                contentHTML += `
                <div class="col-md-4">
                    <a href="${urlHero}" target="_blank">
                        <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbail"> </a>
                    <h3 class="tittle">${hero.name}</h3>
                </div> `
            }
            container.innerHTML = contentHTML;
        })
    }
};

marvel.render();

