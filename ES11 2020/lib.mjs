export const saudacao = () => {
    let data = new Date().toLocaleDateString();
    return `Ola seja bem vindo, hoje é ${data}`

}

export function getEnderecoByCep(cep) {
    return fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json()
        )
    
}