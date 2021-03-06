import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';

export default function Footer() {
    return (
        <div className="teste">
            <header>
                <ul>
                    <li><Link to="/">Início</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                    <li><Link to="/pesquisadores">Pesquisadores</Link></li>
                    <li><Link to="/publicacoes">Publicações</Link></li>
                    <li><Link to="/projeto">Projetos</Link></li>
                    <li><Link to="/portifolio">Portfólio</Link></li>
                    <li><Link to="/noticias">Notícias</Link></li>
                    <li><Link to="/editais">Editais</Link></li>
                    <li><Link to="/parceiros">Parceiros</Link></li>
                    <li><Link to="/contato">Contato</Link></li>
                    <li><Link to="/login">Sair</Link></li>
                    <li><Link to="/criarconta">Criar uma conta</Link></li>
                </ul>
            </header>
        </div>
    );
}