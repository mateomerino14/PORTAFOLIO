/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ['../src/components/ui/**/*.stories.@(js|jsx)', '../src/features/**/*.stories.@(js|jsx)'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-docs'],
  framework: '@storybook/react-vite',
};

export default config;
