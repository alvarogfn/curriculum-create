export interface Resume {
  id: string;
  nome: string;
  sobrenome: string;
  email: string;
  nascimento: number;
  sexo?: 'MASCULINO' | 'FEMININO';
  telefone: number;
  cpf: number;
  experiencias: string;
}
