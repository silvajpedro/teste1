import React from 'react';
import { Link } from 'react-router-dom';
import * as S from '../styles/header';

function Header() {
  return (
    <S.Header>
      <Link to="/">Home</Link>
      <Link to="/projetos">Projetos</Link>
      <Link to="/contato">Contato</Link>
    </S.Header>
  );
}
export default Header;
