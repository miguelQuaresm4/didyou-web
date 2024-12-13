export interface IFilme {
    id: number;
    titulo: string;
    sinopse: string;
    genero: string;
    ano: number;
    duracao: number;
    diretor: string;
    atores: string
}

export const filmesMock: IFilme[] = [
    {
        id: 1,
        titulo: "A Viagem no Tempo",
        sinopse: "Um cientista inventa uma máquina do tempo, mas ao tentar voltar ao passado, ele acidentalmente altera eventos históricos cruciais.",
        genero: "Ficção Científica",
        ano: 2023,
        duracao: 120,
        diretor: "Carlos Souza",
        atores: "Marcelo Oliveira, Ana Costa, João Lima"
    },
    {
        id: 2,
        titulo: "Amor em Paris",
        sinopse: "Um romance inesperado nasce entre dois turistas que se encontram em Paris durante o verão.",
        genero: "Romance",
        ano: 2022,
        duracao: 105,
        diretor: "Luciana Martins",
        atores: "Fernanda Pereira, Diego Santos"
    },
    {
        id: 3,
        titulo: "Caçada Mortal",
        sinopse: "Em um cenário pós-apocalíptico, um grupo de sobreviventes tenta escapar de uma caçada mortal organizada por um líder tirano.",
        genero: "Ação",
        ano: 2024,
        duracao: 135,
        diretor: "Roberto Garcia",
        atores: "Ricardo Mello, Gabriela Andrade, Felipe Souza"
    },
    {
        id: 4,
        titulo: "O Mistério da Mansão",
        sinopse: "Um detetive é chamado para investigar uma mansão isolada onde estranhos acontecimentos e desaparecimentos estão ocorrendo.",
        genero: "Mistério",
        ano: 2021,
        duracao: 90,
        diretor: "Marcos Almeida",
        atores: "Laura Silva, Henrique Martins, Eduardo Costa"
    },
    {
        id: 5,
        titulo: "Entre as Estrelas",
        sinopse: "Após um desastre cósmico, um astronauta precisa lutar pela sua sobrevivência em um planeta desconhecido.",
        genero: "Aventura",
        ano: 2020,
        duracao: 145,
        diretor: "Felipe Rocha",
        atores: "Tiago Silva, Karla Costa"
    }
];
