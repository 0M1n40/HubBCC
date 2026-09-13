import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { disciplinas } from '../../mocks/disciplinas';
import styles from './CadastrarDisciplina.module.css';

function CadastrarDisciplina() {
  const navigate = useNavigate();
  const [codigo, setCodigo] = useState('');
  const [periodo, setPeriodo] = useState('');
  const [nome, setNome] = useState('');
  const [ementa, setEmenta] = useState('');

  function handleCadastrar() {
    // .push() na variável local do mock, como pede o padrão do projeto para esta fase.
    // Como não há back-end, essa lista volta ao estado inicial se a página for recarregada (F5).
    disciplinas.push({ codigo, periodo, nome, ementa });
    console.log(disciplinas);
    navigate('/disciplinas');
  }

  return (
    <div>
      <header className="topbar">
        <span className="sistema">HubBCC — Sistema de Monitoria</span>
        <span className="perfil">Perfil: Administrador</span>
      </header>

      <nav className="breadcrumb">
        <Link to="/">← Índice</Link> · Prioridade 12
      </nav>

      <main>
        <h1>Cadastrar disciplina</h1>
        <p className="caso-de-uso"> · Ator: Administrador · inclui uma nova disciplina no sistema.</p>

        <div className={styles.painel}>
          <div className={styles.linha}>
            <div>
              <label htmlFor="codigo">Código</label>
              <input id="codigo" placeholder="Ex.: BCC-204" value={codigo} onChange={(e) => setCodigo(e.target.value)} />
            </div>
            <div>
              <label htmlFor="periodo">Período</label>
              <input id="periodo" type="number" placeholder="Ex.: 4" min="1" value={periodo} onChange={(e) => setPeriodo(e.target.value)} />
            </div>
          </div>

          <label htmlFor="nome">Nome da disciplina</label>
          <input id="nome" placeholder="Ex.: Estruturas de Dados" value={nome} onChange={(e) => setNome(e.target.value)} />

          <label htmlFor="ementa">Ementa resumida (opcional)</label>
          <textarea
            id="ementa"
            placeholder="Ex.: listas, pilhas, filas, árvores e grafos"
            value={ementa}
            onChange={(e) => setEmenta(e.target.value)}
          />

          <div className="acoes">
            <button className="botao-primario" type="button" onClick={handleCadastrar}>
              Cadastrar disciplina
            </button>
            <Link className="botao botao-secundario" to="/disciplinas">
              Cancelar
            </Link>
          </div>
        </div>
      </main>

      <footer className="rodape">Protótipo — dados fictícios.</footer>
    </div>
  );
}

export default CadastrarDisciplina;
