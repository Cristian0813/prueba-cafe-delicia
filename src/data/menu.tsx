export interface MenuItems {
  id: string;
  text: string;
  route: string;
  current: string;
}

const menuNavegacion: MenuItems[] = [
  {
    id: 'Inicio',
    text: 'Inicio',
    route: '/',
    current: 'false',
  },
  {
    id: 'contacto',
    text: 'contacto',
    route: '/home/contacto',
    current: 'false',
  },
  
];


export default menuNavegacion;
