// Mock (banco de dados local) dos agendamentos do aluno.
// Em uma versão futura com back-end, isso viria de uma requisição à API.
export const agendamentos = [
  {
    id: 1,
    disciplina: 'Estruturas de Dados',
    monitor: 'Samuel T.',
    data: 'Qua, 10/09 — 19h00',
    status: 'Confirmado',
    statusClasse: 'badgePendente',
    podeAlterar: true,
  },
  {
    id: 2,
    disciplina: 'Álgebra Linear II',
    monitor: 'Mina I.',
    data: 'Sex, 12/09 — 14h00',
    status: 'Confirmado',
    statusClasse: 'badgePendente',
    podeAlterar: true,
  },
  {
    id: 3,
    disciplina: 'Banco de Dados',
    monitor: 'Marina S.',
    data: 'Ter, 02/09 — 10h00',
    status: 'Realizado',
    statusClasse: 'badgeOk',
    podeAlterar: false,
  },
];
