import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './CancelarAgendamento.module.css';

function CancelarAgendamento() {
  const navigate = useNavigate();
  const [motivo, setMotivo] = useState('');

  function handleConfirmar() {
    console.log({ motivo });
    navigate('/agendamentos');
  }

  return (
    <div>
      <header className="topbar">
        <span className="sistema">HubBCC — Sistema de Monitoria</span>
        <span className="perfil">Perfil: Aluno</span>
      </header>

      <nav className="breadcrumb">
        <Link to="/">← Índice</Link> · Prioridade 8 · vindo de{' '}
        <Link to="/agendamentos">Consultar agendamento</Link>
      </nav>

      <main>
        <h1>Cancelar agendamento</h1>
        <p className="caso-de-uso"> · Ator: Aluno · cancela um agendamento anterior, liberando a vaga.</p>

        <div className={styles.alerta}>
          Esta ação libera a vaga para outros alunos e não pode ser desfeita.
        </div>

        <div className={styles.painel}>
          <p><strong>Disciplina:</strong> Estruturas de Dados</p>
          <p><strong>Monitor:</strong> Geovanne.G.</p>
          <p><strong>Data:</strong> Quarta, 10/09 — 19h00</p>

          <label htmlFor="motivo">Motivo do cancelamento (opcional)</label>
          <textarea
            id="motivo"
            placeholder="Ex.: imprevisto pessoal"
            value={motivo}
            onChange={(e) => setMotivo(e.target.value)}
          />

          <div className="acoes">
            <button className="botao-perigo" type="button" onClick={handleConfirmar}>
              Confirmar cancelamento
            </button>
            <Link className="botao botao-secundario" to="/agendamentos">
              Voltar
            </Link>
          </div>
        </div>
      </main>

      <footer className="rodape">Protótipo — dados fictícios.</footer>
    </div>
  );
}

export default CancelarAgendamento;
