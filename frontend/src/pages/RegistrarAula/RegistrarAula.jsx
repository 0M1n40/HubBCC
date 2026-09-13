import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { sessaoDaAula } from '../../mocks/sessoes';
import styles from './RegistrarAula.module.css';

function RegistrarAula() {
  const navigate = useNavigate();
  const [presentes, setPresentes] = useState(['Geovanne G. Souza', 'Cleberson Mendes']);
  const [conteudo, setConteudo] = useState('');

  function handlePresentesChange(e) {
    const selecionados = Array.from(e.target.selectedOptions).map((o) => o.value);
    setPresentes(selecionados);
  }

  function handleConcluir() {
    console.log({ presentes, conteudo });
    navigate('/sessoes');
  }

  return (
    <div>
      <header className="topbar">
        <span className="sistema">HubBCC — Sistema de Monitoria</span>
        <span className="perfil">Perfil: Monitor</span>
      </header>

      <nav className="breadcrumb">
        <Link to="/">← Índice</Link> · Prioridade 9 · vindo de{' '}
        <Link to="/sessoes">Consultar sessão</Link>
      </nav>

      <main>
        <h1>Registrar aula</h1>
        <p className="caso-de-uso">
          Caso de uso 9 · Ator: Monitor · registra a realização do atendimento após a monitoria.
        </p>

        <div className={styles.painel}>
          <p>
            <strong>Sessão:</strong> {sessaoDaAula.disciplina} — {sessaoDaAula.data}
          </p>

          <label htmlFor="presentes">Alunos presentes</label>
          <select id="presentes" multiple size={3} value={presentes} onChange={handlePresentesChange}>
            {sessaoDaAula.alunosMatriculados.map((aluno) => (
              <option key={aluno}>{aluno}</option>
            ))}
          </select>

          <label htmlFor="conteudo">Conteúdo abordado</label>
          <textarea
            id="conteudo"
            placeholder="Ex.: listas encadeadas simples e duplas, exercícios de fixação"
            value={conteudo}
            onChange={(e) => setConteudo(e.target.value)}
          />

          <div className="acoes">
            <button className="botao-primario" type="button" onClick={handleConcluir}>
              Concluir registro
            </button>
            <Link className="botao botao-secundario" to="/sessoes">
              Cancelar
            </Link>
          </div>
        </div>
      </main>

      <footer className="rodape">Protótipo — dados fictícios.</footer>
    </div>
  );
}

export default RegistrarAula;
