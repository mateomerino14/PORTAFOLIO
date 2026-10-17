import ArchitectureDiagram from './ArchitectureDiagram';
import {TIMELINE} from '../../data/timeline';

const internship = TIMELINE.find((entry) => entry.architecture);

export default {
  title: 'UI/ArchitectureDiagram',
  component: ArchitectureDiagram,
  parameters: {
    docs: {
      description: {
        component: 'Diagrama de contenedores al estilo del modelo C4: personas, contenedores del sistema y servicios externos, conectados de arriba hacia abajo.',
      },
    },
  },
  decorators: [(Story) => <div className="w-[28rem]"><Story /></div>],
  args: internship.architecture,
};

export const Default = {};
