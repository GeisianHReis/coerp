// Utilitário para validação de variáveis de ambiente
// ===================================================

interface EnvConfig {
  DATO_API_TOKEN: string;
  DATO_MANAGEMENT_TOKEN: string;
  ADMIN_USER: string;
  ADMIN_PASSWORD: string;
  APP_ENV: string;
}

class EnvironmentValidator {
  private config: EnvConfig;
  private isDev: boolean;

  constructor() {
    this.isDev = import.meta.env.DEV;
    this.config = this.loadConfig();
    this.validate();
  }

  private loadConfig(): EnvConfig {
    return {
      DATO_API_TOKEN: import.meta.env.VITE_DATO_API_TOKEN || '',
      DATO_MANAGEMENT_TOKEN: import.meta.env.VITE_DATO_MANAGEMENT_TOKEN || '',
      ADMIN_USER: import.meta.env.VITE_ADMIN_USER || '',
      ADMIN_PASSWORD: import.meta.env.VITE_ADMIN_PASSWORD || '',
      APP_ENV: import.meta.env.VITE_APP_ENV || 'production',
    };
  }

  private validate(): void {
    const errors: string[] = [];
    const warnings: string[] = [];

    // Validações críticas
    if (!this.config.DATO_API_TOKEN) {
      errors.push('VITE_DATO_API_TOKEN não configurado');
    }

    if (!this.config.DATO_MANAGEMENT_TOKEN) {
      errors.push('VITE_DATO_MANAGEMENT_TOKEN não configurado');
    }

    // Validações de segurança
    if (!this.config.ADMIN_USER || this.config.ADMIN_USER === 'admin') {
      if (this.isDev) {
        warnings.push('VITE_ADMIN_USER usando valor padrão (não recomendado para produção)');
      } else {
        errors.push('VITE_ADMIN_USER deve ser configurado para produção');
      }
    }

    if (!this.config.ADMIN_PASSWORD || this.config.ADMIN_PASSWORD === '1234') {
      if (this.isDev) {
        warnings.push('VITE_ADMIN_PASSWORD usando valor padrão (não recomendado para produção)');
      } else {
        errors.push('VITE_ADMIN_PASSWORD deve ser uma senha forte para produção');
      }
    }

    // Logs de desenvolvimento
    if (this.isDev) {
      if (warnings.length > 0) {
        console.warn('⚠️ [ENV] Avisos de configuração:', warnings);
      }
      console.log('🔧 [ENV] Ambiente:', this.config.APP_ENV);
    }

    // Erros críticos
    if (errors.length > 0) {
      const errorMsg = `❌ [ENV] Configurações obrigatórias faltando:\n${errors.join('\n')}`;
      console.error(errorMsg);
      if (!this.isDev) {
        throw new Error(errorMsg);
      }
    }
  }

  // Getters seguros
  get datoApiToken(): string {
    return this.config.DATO_API_TOKEN;
  }

  get datoManagementToken(): string {
    return this.config.DATO_MANAGEMENT_TOKEN;
  }

  get adminUser(): string {
    return this.config.ADMIN_USER || 'admin';
  }

  get adminPassword(): string {
    return this.config.ADMIN_PASSWORD || '1234';
  }

  get isDevelopment(): boolean {
    return this.isDev;
  }

  get isProduction(): boolean {
    return !this.isDev;
  }
}

// Singleton instance
export const envConfig = new EnvironmentValidator();

// Helper functions
export const getEnvVar = (key: string, defaultValue?: string): string => {
  const value = import.meta.env[key] || defaultValue || '';
  if (!value && envConfig.isProduction) {
    throw new Error(`Variável de ambiente obrigatória não configurada: ${key}`);
  }
  return value;
};

export const isDevelopment = () => envConfig.isDevelopment;
export const isProduction = () => envConfig.isProduction;