import IconList from './IconList';

export default {
  title: 'UI/IconList',
  component: IconList,
  parameters: {
    docs: {
      description: {
        component: 'Lista de elementos con el ícono de su tecnología o tema, para resumir información breve sin dejar el panel solo con texto.',
      },
    },
  },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
  args: {
    items: [
      {icon: 'Algoritmos', title: 'Introducción a la Programación', meta: 'Algoritmos y lógica de programación'},
      {icon: 'Teoría de Grafos', title: 'Teoría de Grafos', meta: 'Laboratorios y corrección de exámenes'},
    ],
  },
};

export const Default = {};
