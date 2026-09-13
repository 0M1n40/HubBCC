import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { sessaoParaCancelar } from '../../mocks/sessoes';
import styles from './CancelarSessao.module.css';

function CancelarSessao() {
  const navigate = useNavigate();
  const [motivo, setMotivo] = useState('');

  function handleConfirmar() {
    console.log({ motivo });
    navigate('/sessoes');
  }

  return (
    <div>
      <header className="topbar">
        <span className="sistema">HubBCC — Sistema de Monitoria</span>
        <span className="perfil">Perfil: Monitor</span>
      </header>

      <nav className="breadcrumb">
        <Link to="/">← Índice</Link> · Prioridade 11 · vindo de{' '}
        <Link to="/sessoes">Consultar sessão</Link>
      </nav>

      <main>
        <h1>Cancelar sessão</h1>
        <p className="caso-de-uso">· Ator: Monitor · cancela uma sessão de monitoria criada.</p>

        <div className={styles.alerta}>
          Alunos já agendados nesta sessão serão notificados e seus agendamentos cancelados.
        </div>

        <div className={styles.painel}>
          <p><strong>Disciplina:</strong> {sessaoParaCancelar.disciplina}</p>
          <p><strong>Data:</strong> {sessaoParaCancelar.data}</p>
          <p><strong>Alunos agendados:</strong> {sessaoParaCancelar.alunosAgendados}</p>

          <label htmlFor="motivo">Motivo do cancelamento</label>
          <textarea
            id="motivo"
            placeholder="Ex.: imprevisto de agenda do monitor"
            value={motivo}
            onChange={(e) => setMotivo(e.target.value)}
          />

          <div className="acoes">
            <button className="botao-perigo" type="button" onClick={handleConfirmar}>
              Confirmar cancelamento
            </button>
            <Link className="botao botao-secundario" to="/sessoes">
              Voltar
            </Link>
          </div>
        </div>
      </main>

      <footer className="rodape">Protótipo — dados fictícios.</footer>
    </div>
  );
}

export default CancelarSessao;
