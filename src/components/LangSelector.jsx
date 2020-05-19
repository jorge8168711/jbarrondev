import React from 'react';
import { Consumer, langs } from '../app-context';

const LangSelector = () => {
  return (
    <Consumer>
      {(app) => (
        <>
          <div className='relative px-2 text-right text-white'>
            <select
              value={app.lang}
              className='relative z-10 px-6 py-2 ml-auto text-xs bg-transparent appearance-none'
              onChange={(e) => app.setLanguage(e.target.value)}>
              {Object.keys(langs).map((item) => (
                <option value={item} key={item}>
                  {langs[item].label}
                </option>
              ))}
            </select>

            <svg className='absolute z-20 w-4 h-4 fill-current Arrow'>
              <use href='/img/icons.svg#expand-more' />
            </svg>
          </div>

          <style jsx>
            {`
              .Arrow {
                top: 50%;
                transform: translateY(-50%);
                right: 0.5em;
              }
            `}
          </style>
        </>
      )}
    </Consumer>
  );
};

export default LangSelector;
