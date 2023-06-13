import { ROLES } from './tipos_avanzados/enum';

interface Usuario {
  id: string | number;
  nombre: string;
  correo: string;
  departamento: string;
  rol: ROLES;
  fecha_de_creacion: string;
  fecha_de_modificacion: string;
}
//Para omitir algunos tipos ↓
interface AltaDeUsuario
  extends Omit<Usuario, 'id' | 'fecha_de_creacion' | 'fecha_de_modificacion'> {
  password: string;
}
//Para escojer con cual trabajar
interface AltaDeUsuario2
  extends Pick<Usuario, 'correo' | 'departamento' | 'rol'> {
  password: string;
}

const nuevo_usuario: AltaDeUsuario = {
  nombre: 'Pepe',
  correo: 'correo@gmail.com',
  departamento: 'IT',
  rol: ROLES.ADMINISTRADOR,
  password: 'asdasdasd',
};

const nuevo_usuario2: AltaDeUsuario = {
  nombre: 'Pepe',
  correo: 'correo@gmail.com',
  departamento: 'IT',
  rol: ROLES.ADMINISTRADOR,
  password: 'asdasdasd',
};

console.log(nuevo_usuario);
