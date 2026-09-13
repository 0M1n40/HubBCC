import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { agendamentoAtual, novasSessoesDisponiveis } from '../../mocks/sessoes';
import styles from './ReagendarAgendamento.module.css';

function ReagendarAgendamento() {
  const navigate = useNavigate();
  const [novaSessao, setNovaSessao] = useState('');
  const [motivo, setMotivo] = useState('');

  function handleConfirmar() {
    // Sem back-end: só mostramos no console e voltamos pra lista, como pede o protótipo.
    console.log({ novaSessao, motivo });
    navigate('/agendamentos');
  }

  return (
    <div>
      <header className="topbar">
        <span className="sistema">HubBCC — Sistema de Monitoria</span>
        <span className="perfil">Perfil: Aluno</span>
      </header>

      <nav className="breadcrumb">
        <Link to="/">← Índice</Link> · Prioridade 7 · vindo de{' '}
        <Link to="/agendamentos">Consultar agendamento</Link>
      </nav>

      <main>
        <h1>Reagendar agendamento</h1>
        <p className="caso-de-uso">
          {' '}
          · Ator: Aluno · altera o horário ou sessão de um agendamento já existente.
        </p>

        <div className={styles.painel}>
          <p>
            <strong>Agendamento atual:</strong> {agendamentoAtual.disciplina} —{' '}
            {agendamentoAtual.monitor} — {agendamentoAtual.diaSemana}, {agendamentoAtual.data},{' '}
            {agendamentoAtual.horario}
          </p>

          <label htmlFor="nova-sessao">Nova sessão disponível</label>
          <select id="nova-sessao" value={novaSessao} onChange={(e) => setNovaSessao(e.target.value)}>
            <option value="">Selecione...</option>
            {novasSessoesDisponiveis.map((sessao) => (
              <option key={sessao}>{sessao}</option>
            ))}
          </select>

          <label htmlFor="motivo">Motivo do reagendamento (opcional)</label>
          <textarea
            id="motivo"
            placeholder="Ex.: conflito de horário com outra disciplina"
            value={motivo}
            onChange={(e) => setMotivo(e.target.value)}
          />

          <div className="acoes">
            <button className="botao-primario" type="button" onClick={handleConfirmar}>
              Confirmar novo horário
            </button>
            <Link className="botao botao-secundario" to="/agendamentos">
              Voltar sem alterar
            </Link>
          </div>
        </div>
      </main>

      <footer className="rodape">Protótipo — dados fictícios.</footer>
    </div>
  );
}

export default ReagendarAgendamento;
