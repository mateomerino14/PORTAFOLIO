import {fn} from 'storybook/test';
import StackGroup from './StackGroup';
import {STACK_GROUPS} from '../../../data/stack';

export default {
  title: 'Stack/Molecules/StackGroup',
  component: StackGroup,
  parameters: {
    docs: {
      description: {
        component: 'Fila de una categoría del stack con su ícono y sus tecnologías. Muestra las 5 primeras y un botón para ver el resto; si solo quedaría una oculta, las muestra todas. Las que aparecen en algún proyecto se pueden señalar para ver en la escena 3D dónde se usaron.',
      },
    },
  },
  decorators: [(Story) => <div className="w-96"><Story /></div>],
  args: {
    group: STACK_GROUPS[0],
    linkedTechnologies: new Set(['Python', 'JavaScript', 'TypeScript', 'R', 'React', 'Node.js', 'Express']),
    hoveredTech: '',
    onTechEnter: fn(),
    onTechLeave: fn(),
  },
};

export const Languages = {};

export const Backend = {
  args: {group: STACK_GROUPS[2], hoveredTech: 'Express'},
};
