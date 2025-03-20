import React from 'react';
import i18next from './src/i18n.js'; // Path to your i18n config
import { I18nextProvider } from 'react-i18next';

export const wrapPageElement = ({ element }) => {
  return (
    <I18nextProvider i18n={i18next}>
      {element}
    </I18nextProvider>
  );
};
