import { Routes, Route } from 'react-router-dom';
import Indice from './pages/Indice/Indice';
import ConsultarAgendamento from './pages/ConsultarAgendamento/ConsultarAgendamento';
import ReagendarAgendamento from './pages/ReagendarAgendamento/ReagendarAgendamento';
import CancelarAgendamento from './pages/CancelarAgendamento/CancelarAgendamento';
import RegistrarAula from './pages/RegistrarAula/RegistrarAula';
import AlterarSessao from './pages/AlterarSessao/AlterarSessao';
import CancelarSessao from './pages/CancelarSessao/CancelarSessao';
import CadastrarDisciplina from './pages/CadastrarDisciplina/CadastrarDisciplina';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Indice />} />
      <Route path="/agendamentos" element={<ConsultarAgendamento />} />
      <Route path="/agendamentos/reagendar" element={<ReagendarAgendamento />} />
      <Route path="/agendamentos/cancelar" element={<CancelarAgendamento />} />
      <Route path="/aulas/registrar" element={<RegistrarAula />} />
      <Route path="/sessoes/alterar" element={<AlterarSessao />} />
      <Route path="/sessoes/cancelar" element={<CancelarSessao />} />
      <Route path="/disciplinas/cadastrar" element={<CadastrarDisciplina />} />
    </Routes>
  );
}

export default App;