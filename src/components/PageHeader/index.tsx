import React from 'react';
import { Link } from 'react-router-dom';

import backIcon from '../../assets/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';
import './style.css';

interface PagaHeaderProps {
    title: string;
    description?: string;
}

const PageHeader: React.FunctionComponent<PagaHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Volta"/>
                </Link>
                <img src={logoImg} alt="Logo"/>
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>
                { props.description && <p>{props.description}</p> }
                {props.children}
            </div>
        </header>
        
    );
}

export default PageHeader;