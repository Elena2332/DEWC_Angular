
import './App.css';
import {  withNamespaces } from 'react-i18next';
import { t } from 'i18next';
import i18n from './i18n';


function App({ t }) {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  return (
    <div>
      <button className='btn btn-link' onClick={ () => changeLanguage('de')}>de</button>
      <button className='btn btn-link' onClick={ () => changeLanguage('en')}>en</button>
      <button className='btn btn-link' onClick={ () => changeLanguage('es')}>es</button>
      <button className='btn btn-link' onClick={ () => changeLanguage('eu')}>eu</button>
      <h1>{t('Welcome to React')}</h1>
    </div>
  );
}

export default withNamespaces()(App);
