# Configuração de Secrets no GitHub Actions

Este documento explica como configurar as variáveis de ambiente (secrets) no GitHub para os deploys automáticos.

## 🔐 Secrets Necessários

Configure os seguintes secrets no repositório GitHub:

### 1. DatoCMS API Tokens
```
VITE_DATO_API_TOKEN=token_de_leitura_datocms
VITE_DATO_MANAGEMENT_TOKEN=token_de_escrita_datocms
```

### 2. Admin Credentials - Produção (branch master)
```
VITE_ADMIN_USER=usuario_admin_producao
VITE_ADMIN_PASSWORD=senha_forte_producao
```

### 3. Admin Credentials - Desenvolvimento (branch develop)
```
VITE_ADMIN_USER_DEV=usuario_admin_dev
VITE_ADMIN_PASSWORD_DEV=senha_dev
```

### 4. YouTube API (já existentes)
```
VITE_YOUTUBE_CHANNEL_ID=seu_channel_id
VITE_YOUTUBE_BASE_URL=https://www.googleapis.com/youtube/v3
VITE_YOUTUBE_API_KEY=sua_api_key
```

### 5. FTP Deploy (já existentes)
```
FTP_HOST=seu_host_ftp
FTP_USERNAME=seu_usuario_ftp
FTP_PASSWORD=sua_senha_ftp
```

## 📋 Como Configurar no GitHub

1. **Acesse o repositório no GitHub**
2. **Vá em Settings → Secrets and variables → Actions**
3. **Clique em "New repository secret"**
4. **Adicione cada secret individualmente:**
   - Name: Nome da variável (ex: `VITE_ADMIN_USER`)
   - Secret: Valor da variável (ex: `admin_producao`)

## 🌐 Diferenças por Ambiente

### **Produção (branch: master)**
- Deploy para: `public_html/`
- Ambiente: `production`
- Credenciais: `VITE_ADMIN_USER` e `VITE_ADMIN_PASSWORD`
- Validação rigorosa de variáveis obrigatórias

### **Desenvolvimento (branch: develop)**
- Deploy para: `novo.igrejacoerp.com.br/`
- Ambiente: `development`
- Credenciais: `VITE_ADMIN_USER_DEV` e `VITE_ADMIN_PASSWORD_DEV`
- Validação flexível para testes

## ⚠️ Considerações de Segurança

1. **Senhas diferentes**: Use credenciais diferentes para dev/prod
2. **Tokens separados**: Considere tokens DatoCMS diferentes por ambiente
3. **Acesso restrito**: Limite quem pode ver/editar secrets
4. **Rotação**: Atualize tokens periodicamente
5. **Logs**: Secrets nunca aparecem nos logs do GitHub Actions

## 🔧 Workflow Triggers

- **Deploy Produção**: Push na branch `master`
- **Deploy Desenvolvimento**: Push na branch `develop`

## 📝 Exemplo de Configuração Completa

### Secrets no GitHub:
```
# DatoCMS
VITE_DATO_API_TOKEN=abc123...
VITE_DATO_MANAGEMENT_TOKEN=def456...

# Admin Produção
VITE_ADMIN_USER=coerp_admin
VITE_ADMIN_PASSWORD=Senha@Forte123!

# Admin Desenvolvimento  
VITE_ADMIN_USER_DEV=admin_dev
VITE_ADMIN_PASSWORD_DEV=dev123

# YouTube (existentes)
VITE_YOUTUBE_CHANNEL_ID=UCxxxxx
VITE_YOUTUBE_BASE_URL=https://www.googleapis.com/youtube/v3
VITE_YOUTUBE_API_KEY=AIzaxxxxx

# FTP (existentes)
FTP_HOST=ftp.seuhost.com
FTP_USERNAME=usuario@dominio.com
FTP_PASSWORD=senha_ftp
```

## 🆘 Troubleshooting

### Build falha com "variável não definida"
- Verifique se todos os secrets estão configurados
- Confirme que os nomes estão exatos (case-sensitive)
- Rerun do workflow após adicionar secrets

### Admin não consegue logar após deploy
- Verifique credenciais nos secrets
- Confirme se está usando as corretas para o ambiente
- Teste localmente com as mesmas credenciais

### Tokens DatoCMS não funcionam
- Verifique permissões dos tokens no DatoCMS
- Confirme se tokens não expiraram
- Teste tokens no GraphQL playground

## 📚 Links Úteis

- [GitHub Actions Secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)
- [DatoCMS API Tokens](https://www.datocms.com/docs/content-management-api/authentication)