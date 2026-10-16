const elements = new Map();

export const labelRegistry = {
  register: (id) => (element) => {
    if (element) {
      elements.set(id, element);
    }
    else {
      elements.delete(id);
    }
  },
  forEach: (callback) => elements.forEach(callback),
};
