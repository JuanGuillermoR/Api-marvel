/*const publicKey = 'a71e2ebcb697b5cfb2bd46f393a513e1';
const privateKey = '04c8252ca25c4e42271ba017d5847a9a9a4c0529';
const hash = md5( privateKey + publicKey); // Utilizando la función md5 para generar el hash

console.log( hash); // Imprime el hash generado*/

const marvel = {
    render: () => {
        /*const urlAPI = `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${publicKey}&hash=${hash}`;*/
        const urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=a71e2ebcb697b5cfb2bd46f393a513e1&hash=ef4af9b05dcde5a8427fbc18d4d432a6';
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

