import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { sessaoParaEditar } from '../../mocks/sessoes';
import styles from './AlterarSessao.module.css';

function AlterarSessao() {
  const navigate = useNavigate();
  const [data, setData] = useState(sessaoParaEditar.data);
  const [horario, setHorario] = useState(sessaoParaEditar.horario);
  const [vagas, setVagas] = useState(sessaoParaEditar.vagas);

  function handleSalvar() {
    console.log({ data, horario, vagas });
    navigate('/sessoes');
  }

  return (
    <div>
      <header className="topbar">
        <span className="sistema">HubBCC — Sistema de Monitoria</span>
        <span className="perfil">Perfil: Monitor</span>
      </header>

      <nav className="breadcrumb">
        <Link to="/">← Índice</Link> · Prioridade 10 · vindo de{' '}
        <Link to="/sessoes">Consultar sessão</Link>
      </nav>

      <main>
        <h1>Alterar sessão</h1>
        <p className="caso-de-uso"> · Ator: Monitor · edita data, horário e vagas de uma sessão já criada.</p>

        <div className={styles.painel}>
          <label htmlFor="disciplina">Disciplina</label>
          <input id="disciplina" value={sessaoParaEditar.disciplina} disabled />

          <div className={styles.linha}>
            <div>
              <label htmlFor="data">Data</label>
              <input type="date" id="data" value={data} onChange={(e) => setData(e.target.value)} />
            </div>
            <div>
              <label htmlFor="horario">Horário</label>
              <input type="time" id="horario" value={horario} onChange={(e) => setHorario(e.target.value)} />
            </div>
          </div>

          <label htmlFor="vagas">Quantidade de vagas</label>
          <input type="number" id="vagas" value={vagas} min="1" onChange={(e) => setVagas(e.target.value)} />

          <div className="acoes">
            <button className="botao-primario" type="button" onClick={handleSalvar}>
              Salvar alterações
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

export default AlterarSessao;
