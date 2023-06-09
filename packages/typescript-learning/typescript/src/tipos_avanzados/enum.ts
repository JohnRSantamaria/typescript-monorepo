//Enum
/*No permitiran configurar un set de opcines */
export enum ROLES {
  ADMINISTRADOR = 'administrador',
  OPERADOR = 'operador',
  VENDEDOR = 'vendedor',
}

//Alias
export type Usuario = {
  correo: string;
  roles: ROLES;
};

let user: Usuario = {
  correo: 'email@gmail.com',
  roles: ROLES.ADMINISTRADOR,
};
