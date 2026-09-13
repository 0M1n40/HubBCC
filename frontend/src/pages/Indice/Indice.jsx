import { Link } from 'react-router-dom';

const links = [
  { to: '/agendamentos', texto: '06 - Consultar agendamento' },
  { to: '/agendamentos/reagendar', texto: '07 - Reagendar agendamento' },
  { to: '/agendamentos/cancelar', texto: '08 - Cancelar agendamento' },
  { to: '/aulas/registrar', texto: '09 - Registrar aula' },
  { to: '/sessoes/alterar', texto: '10 - Alterar sessão' },
  { to: '/sessoes/cancelar', texto: '11 - Cancelar sessão' },
  { to: '/disciplinas/cadastrar', texto: '12 - Cadastrar disciplina' },
];

function Indice() {
  return (
    <div>
      <header className="topbar">
        <span className="sistema">HubBCC — Sistema de Monitoria</span>
        <span className="perfil">Índice</span>
      </header>

      <main>
        <h1>Telas do protótipo</h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '16px' }}>
          {links.map((l) => (
            <Link key={l.to} to={l.to}>
              {l.texto}
            </Link>
          ))}
        </div>
      </main>

      <footer className="rodape">Protótipo — dados fictícios.</footer>
    </div>
  );
}

export default Indice;
