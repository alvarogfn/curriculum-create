export interface ResumeForm {
  nome: string;
  sobrenome: string;
  email: string;
  nascimento: string | number;
  sexo?: 'MASCULINO' | 'FEMININO';
  telefone: number;
  cpf: number;
  experiencias: string;
}
