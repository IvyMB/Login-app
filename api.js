

fetch('https://www.minhaapi.com.br')
.then(
    (response) => {
        const values = response.json();
    })
    .then((json)=> {console.log(json)})
    .catch((error)=>{
        console.log(error);
    });
    fetch('https://www.meusite.com.br/api', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nome: 'José',
          idade: 28
        })
      });
