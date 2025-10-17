import { useState } from 'react';
import { datoApi } from '../../../cms/Dato/apiClient';
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

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (user === USER && pass === PASS) {
      setLogged(true);
      setError('');
    } else {
      setError('Usuário ou senha inválidos');
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
    </AdminLayout>
  );
}
