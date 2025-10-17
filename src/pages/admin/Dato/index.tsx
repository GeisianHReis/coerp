import { useState } from 'react';
import { datoApi, ProgramacaoFerrazItem } from '../../../cms/Dato/apiClient';
import { AdminLayout } from '../AdminLayout';
import { envConfig } from '../../../utils/env';
import {
  PageHeader,
  ContentCard,
  FormGroup,
  CheckboxGroup,
  ButtonGroup,
  Button,
  Alert,
  LoginContainer,
  LoginCard,
  EventsList,
  EventItem,
  EventInfo,
  EventActions,
} from '../styles';

// Credenciais de login vindas de variáveis de ambiente
const USER = envConfig.adminUser;
const PASS = envConfig.adminPassword;

export default function AdminDatoPage() {
  // Todos os hooks no topo!
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const [evento, setEvento] = useState('');
  const [horario, setHorario] = useState('');
  const [informacoes, setInformacoes] = useState('');
  const [mes, setMes] = useState<number | ''>('');
  const [destaque, setDestaque] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [fail, setFail] = useState('');
  const [eventos, setEventos] = useState<ProgramacaoFerrazItem[]>([]);
  const [loadingEventos, setLoadingEventos] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (user === USER && pass === PASS) {
      setLogged(true);
      setError('');
      loadEventos(); // Carregar eventos após login
    } else {
      setError('Usuário ou senha inválidos');
    }
  }

  async function loadEventos() {
    setLoadingEventos(true);
    try {
      const eventosData = await datoApi.getAllProgramacaoFerraz();
      setEventos(eventosData);
      setFail(''); // Limpar erros anteriores
    } catch (error: any) {
      console.error('[Admin] Erro ao carregar eventos:', error);
      setFail(`Erro ao carregar eventos: ${error.message}`);
      setEventos([]); // Limpar lista em caso de erro
    } finally {
      setLoadingEventos(false);
    }
  }

  async function handleDelete(eventoId: string, eventoNome: string) {
    const confirmDelete = confirm(`Tem certeza que deseja excluir o evento "${eventoNome}"?`);
    if (!confirmDelete) return;

    setDeletingId(eventoId);
    try {
      await datoApi.deleteProgramacaoFerraz(eventoId);
      setSuccess(`Evento "${eventoNome}" excluído com sucesso!`);
      // Recarregar lista após exclusão
      await loadEventos();
    } catch (error: any) {
      setFail(`Erro ao excluir evento: ${error.message}`);
    } finally {
      setDeletingId(null);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setFail('');
    try {
      const resp = await datoApi.createProgramacaoFerraz({
        evento,
        horario,
        informacoes,
        mes: mes === '' ? undefined : Number(mes),
        destaque,
      });
      setSuccess(`Programação criada com sucesso! ID: ${resp.id}`);
      setEvento('');
      setHorario('');
      setInformacoes('');
      setMes('');
      setDestaque(false);
      // Recarregar lista após criação
      await loadEventos();
    } catch (err: any) {
      setFail('Erro ao enviar: ' + (err?.message || 'Erro desconhecido'));
    } finally {
      setLoading(false);
    }
  }

  if (!logged) {
    return (
      <LoginContainer>
        <LoginCard>
          <h2>🔐 Login Admin</h2>
          <p>Acesse o painel de administração do DatoCMS</p>
          <form onSubmit={handleLogin}>
            <FormGroup>
              <label>Usuário:</label>
              <input 
                value={user} 
                onChange={e => setUser(e.target.value)} 
                required 
                placeholder="Digite seu usuário"
              />
            </FormGroup>
            <FormGroup>
              <label>Senha:</label>
              <input 
                type="password" 
                value={pass} 
                onChange={e => setPass(e.target.value)} 
                required 
                placeholder="Digite sua senha"
              />
            </FormGroup>
            {error && <Alert type="error">{error}</Alert>}
            <ButtonGroup>
              <Button type="submit" style={{ width: '100%' }}>
                🚀 Entrar
              </Button>
            </ButtonGroup>
          </form>
        </LoginCard>
      </LoginContainer>
    );
  }

  return (
    <AdminLayout currentPage="eventos">
      <PageHeader>
        <h1>📅 Gerenciar Eventos</h1>
        <p>Adicione novos eventos e programações para a unidade Ferraz</p>
      </PageHeader>

      <ContentCard>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <label>📝 Nome do Evento *</label>
            <input 
              value={evento} 
              onChange={e => setEvento(e.target.value)} 
              required 
              placeholder="Ex: Culto Jovem, Reunião de Oração..."
            />
          </FormGroup>

          <FormGroup>
            <label>🕐 Horário *</label>
            <input 
              value={horario} 
              onChange={e => setHorario(e.target.value)} 
              required 
              placeholder="Ex: 19:00, Domingo às 18h..."
            />
          </FormGroup>

          <FormGroup>
            <label>ℹ️ Informações Adicionais</label>
            <textarea 
              value={informacoes} 
              onChange={e => setInformacoes(e.target.value)} 
              placeholder="Detalhes sobre o evento, local, observações..."
              rows={3}
            />
          </FormGroup>

          <FormGroup>
            <label>📅 Mês (1-12)</label>
            <input 
              type="number" 
              min={1} 
              max={12} 
              value={mes} 
              onChange={e => setMes(e.target.value === '' ? '' : Number(e.target.value))} 
              placeholder="Ex: 10 para Outubro"
            />
          </FormGroup>

          <FormGroup>
            <CheckboxGroup>
              <input 
                type="checkbox" 
                id="destaque"
                checked={destaque} 
                onChange={e => setDestaque(e.target.checked)} 
              />
              <label htmlFor="destaque">⭐ Destacar evento na página inicial</label>
            </CheckboxGroup>
          </FormGroup>

          {success && <Alert type="success">✅ {success}</Alert>}
          {fail && <Alert type="error">❌ {fail}</Alert>}

          <ButtonGroup>
            <Button type="submit" disabled={loading}>
              {loading ? '⏳ Enviando...' : '💾 Criar Evento'}
            </Button>
            <Button 
              type="button" 
              variant="secondary"
              onClick={() => {
                setEvento('');
                setHorario('');
                setInformacoes('');
                setMes('');
                setDestaque(false);
                setSuccess('');
                setFail('');
              }}
            >
              🔄 Limpar Formulário
            </Button>
          </ButtonGroup>
        </form>
      </ContentCard>

      {/* Seção de eventos existentes */}
      <ContentCard>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h3 style={{ margin: 0, color: '#1e3a8a', fontSize: '1.25rem' }}>📋 Eventos Cadastrados</h3>
          <Button 
            variant="secondary" 
            onClick={loadEventos}
            disabled={loadingEventos}
            style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}
          >
            {loadingEventos ? '⏳ Carregando...' : '🔄 Atualizar'}
          </Button>
        </div>

        {loadingEventos ? (
          <Alert type="info">⏳ Carregando eventos...</Alert>
        ) : eventos.length === 0 ? (
          <Alert type="info">📭 Nenhum evento cadastrado ainda.</Alert>
        ) : (
          <EventsList>
            {eventos.map((evento) => (
              <EventItem key={evento.id}>
                <EventInfo>
                  <div className="evento-nome">
                    {evento.destaque && <span className="destaque">⭐</span>}
                    <strong>{evento.evento}</strong>
                  </div>
                  <div className="evento-horario">🕐 {evento.horario}</div>
                  {evento.informacoes && (
                    <div className="evento-info">{evento.informacoes}</div>
                  )}
                  {evento.mes && (
                    <div className="evento-mes">📅 Mês: {evento.mes}</div>
                  )}
                </EventInfo>
                <EventActions>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(evento.id, evento.evento)}
                    disabled={deletingId === evento.id}
                    style={{ fontSize: '0.85rem', padding: '0.5rem 0.75rem' }}
                  >
                    {deletingId === evento.id ? '⏳' : '🗑️ Excluir'}
                  </Button>
                </EventActions>
              </EventItem>
            ))}
          </EventsList>
        )}
      </ContentCard>
    </AdminLayout>
  );
}
