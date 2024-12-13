import { useEffect, useState } from "react";
import { filmesMock, IFilme } from "../../mocks/filme.mock";
import style from './home.module.scss';

export function Home() {
    const [filmes, setFilmes] = useState<IFilme[]>();

    useEffect(() => {
        setFilmes(filmesMock)
    }, [])

    return (
        <main>
            <div>
                {filmes?.map(filme => (
                    <section key={filme.id}>
                        <h3>{filme.titulo}</h3>
                        <span>{filme.sinopse}</span>
                        <h4>{filme.diretor}</h4>
                    </section>
                ))}
            </div>

            <div>
                {filmes?.map(filme => (
                    <section key={filme.id}>
                        <h3>{filme.titulo}</h3>
                        <span>{filme.sinopse}</span>
                        <h4>{filme.diretor}</h4>
                    </section>
                ))}
            </div>
        </main>
    )
}