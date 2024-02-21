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

export interface MenuVineta {
  id: string;
  title: string;
  route: string;
}

const navegacionVineta: MenuVineta[] = [
  {
    id: 'conocenos',
    title: 'conocenos',
    route: '#conocenos',
  },
  {
    id: 'cafe',
    title: 'cafe',
    route: '#cafe',
  },
  {
    id: 'panaderia',
    title: 'panaderia',
    route: '#panaderia',
  },
  {
    id: 'bistro',
    title: 'bistro',
    route: '#bistro',
  },
  {
    id: 'testimonio',
    title: 'testimonio',
    route: '#testimonio',
  },
  {
    id: 'historia',
    title: 'historia',
    route: '#historia',
  },
];
