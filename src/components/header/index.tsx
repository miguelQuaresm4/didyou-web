import { Search } from 'lucide-react';
import style from './header.module.scss'
import { useNavigate } from 'react-router-dom';

export function Header() {
    const navigate = useNavigate();
    const navegaParaSignup = ()=>{
        navigate("/signup");
    };
    const navegaParaSignin = () => {
        navigate("/signin")
    }
    return (
        <header className={style.cabecalho}>
            <h1 className={style.titulo}>DidYou</h1>
            <div className={style.labelSearch}>
                <Search className={style.icon} />
                <input type="search" placeholder="Faça uma pesquisa" />
            </div>
            <div className={style.buttons}>
                <button className={style.buttonPrimary} onClick={navegaParaSignup}>Criar Conta</button>
                <button className={style.buttonSecondary} onClick={navegaParaSignin}>Já tem conta?</button>
            </div>
        </header>
    )
}