// Mock (banco de dados local) das sessões de monitoria.
// Cada objeto representa uma entidade "Sessão" diferente, usada em telas distintas.

export const agendamentoAtual = {
  disciplina: 'Estruturas de Dados',
  monitor: 'Geovanne.G.',
  diaSemana: 'quarta-feira',
  data: '10/09',
  horario: '19h00',
};

export const novasSessoesDisponiveis = [
  'Quarta, 17/09 — 19h00 (5 vagas)',
  'Sexta, 19/09 — 14h00 (2 vagas)',
  'Quinta, 18/09 — 16h00 (1 vaga)',
];

export const sessaoParaEditar = {
  disciplina: 'Estruturas de Dados',
  data: '2026-09-10',
  horario: '19:00',
  vagas: 5,
};

export const sessaoParaCancelar = {
  disciplina: 'Engenharia de Software',
  data: 'Quinta, 12/09 — 16h00',
  alunosAgendados: 4,
};

export const sessaoDaAula = {
  disciplina: 'Estruturas de Dados',
  data: 'Qua, 03/09, 19h00',
  alunosMatriculados: ['Geovanne G. Souza', 'Cleberson Mendes', 'Temiston Klei(faltou)'],
};
