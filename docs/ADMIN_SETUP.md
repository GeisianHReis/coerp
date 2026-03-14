# Configuração de Ambiente - Admin COERP

Este documento explica como configurar as variáveis de ambiente para o painel administrativo.

## 🔧 Configuração Local (Desenvolvimento)

1. **Copie o template de ambiente:**
   ```bash
   cp .env.example .env.local
   ```

2. **Configure as variáveis no arquivo `.env.local`:**
   ```env
   # DatoCMS - Tokens de API
   VITE_DATO_API_TOKEN=seu_token_de_leitura
   VITE_DATO_MANAGEMENT_TOKEN=seu_token_de_escrita
   
   # Admin - Credenciais de acesso
   VITE_ADMIN_USER=seu_usuario_admin
   VITE_ADMIN_PASSWORD=sua_senha_forte
   
   # Ambiente
   VITE_APP_ENV=development
   ```

3. **Obter tokens do DatoCMS:**
   - Acesse seu projeto no DatoCMS
   - Vá em Settings → API Tokens
   - **Token de leitura**: Crie com permissões de "Read-only"
   - **Token de escrita**: Crie com permissões "Full Access" ou específicas para criação

## 🚀 Configuração em Produção

### Vercel / Netlify / Outros Providers

Configure as seguintes variáveis de ambiente no painel do seu provedor:

```env
VITE_DATO_API_TOKEN=token_producao_leitura
VITE_DATO_MANAGEMENT_TOKEN=token_producao_escrita
VITE_ADMIN_USER=usuario_seguro_producao
VITE_ADMIN_PASSWORD=senha_muito_forte_producao
VITE_APP_ENV=production
```

### GitHub Actions (Atual)

Os workflows foram configurados para deploy automático com environment variables.

**📋 Para configuração completa dos secrets no GitHub, consulte:**
- [`docs/GITHUB_SECRETS.md`](./GITHUB_SECRETS.md) - Guia completo de configuração

**Resumo dos Secrets Necessários:**
- `VITE_DATO_API_TOKEN` - Token de leitura DatoCMS
- `VITE_DATO_MANAGEMENT_TOKEN` - Token de escrita DatoCMS  
- `VITE_ADMIN_USER` / `VITE_ADMIN_USER_DEV` - Usuários admin
- `VITE_ADMIN_PASSWORD` / `VITE_ADMIN_PASSWORD_DEV` - Senhas admin
- `VITE_APP_ENV` - Definido automaticamente pelos workflows

### ⚠️ Importantes Considerações de Segurança

1. **Senhas fortes**: Use senhas complexas em produção
2. **Não commitar**: Nunca commite arquivos `.env.local`
3. **Tokens separados**: Use tokens diferentes para dev/prod
4. **Acesso restrito**: Limite acesso ao painel admin
5. **HTTPS obrigatório**: Sempre use HTTPS em produção

## 🔍 Validação de Ambiente

O sistema automaticamente valida as configurações:

- ✅ **Desenvolvimento**: Avisa sobre valores padrão
- ❌ **Produção**: Bloqueia se tokens/senhas não configurados
- 📝 **Logs**: Exibe status das configurações no console

## 🆘 Troubleshooting

### Erro: "Token não configurado"
- Verifique se o arquivo `.env.local` existe
- Confirme se as variáveis estão corretas
- Reinicie o servidor após alterações

### Erro: "Credenciais inválidas"
- Verifique usuário/senha no `.env.local`
- Confirme se não há espaços extras
- Teste com valores padrão primeiro

### Erro de permissão DatoCMS
- Verifique se o token tem permissões corretas
- Teste tokens no GraphQL playground do DatoCMS
- Confirme se o modelo existe e está acessível

## 📁 Estrutura de Arquivos

```
projeto/
├── .env.example          # Template público
├── .env.local           # Configuração local (não commitado)
├── src/utils/env.ts     # Validador de ambiente
└── docs/ADMIN_SETUP.md  # Este arquivo
```

## 🔗 Links Úteis

- [DatoCMS API Tokens](https://www.datocms.com/docs/content-management-api/authentication)
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)
- [Vercel Environment Variables](https://vercel.com/docs/projects/environment-variables)