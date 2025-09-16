const nomes = ["Juca", "Jumenterson", "Osvaldo", "Roberto", "Rogério", "Carlos"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)
