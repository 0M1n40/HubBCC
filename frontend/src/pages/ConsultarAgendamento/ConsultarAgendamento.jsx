import { useState } from 'react';
import { Link } from 'react-router-dom';
import { agendamentos as agendamentosIniciais } from '../../mocks/agendamentos';
import styles from './ConsultarAgendamento.module.css';

function ConsultarAgendamento() {
  // useState com valor inicial vindo do mock: variável local que simula os dados do "banco".
  const [agendamentos] = useState(agendamentosIniciais);

  return (
    <div>
      <header className="topbar">
        <span className="sistema">HubBCC — Sistema de Monitoria</span>
        <span className="perfil">Perfil: Aluno</span>
      </header>

      <nav className="breadcrumb">
        <Link to="/">← Índice</Link> · Prioridade 6
      </nav>

      <main>
        <h1>Consultar agendamento</h1>
        <p className="caso-de-uso"> · Ator: Aluno · acompanha os agendamentos realizados.</p>

        <div className={styles.painel}>
          <table className={styles.tabela}>
            <tbody>
              <tr>
                <th>Disciplina</th>
                <th>Monitor</th>
                <th>Data</th>
                <th>Status</th>
                <th></th>
              </tr>
              {agendamentos.map((item) => (
                <tr key={item.id}>
                  <td>{item.disciplina}</td>
                  <td>{item.monitor}</td>
                  <td>{item.data}</td>
                  <td>
                    <span className={`${styles.badge} ${styles[item.statusClasse]}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className={styles.tabelaAcoes}>
                    {item.podeAlterar && (
                      <>
                        <Link to="/agendamentos/reagendar">Reagendar</Link>
                        <Link to="/agendamentos/cancelar">Cancelar</Link>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <footer className="rodape">Protótipo — dados fictícios.</footer>
    </div>
  );
}

export default ConsultarAgendamento;
