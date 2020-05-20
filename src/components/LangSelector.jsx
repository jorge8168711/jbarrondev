import React from 'react';
import { useRouter } from 'next/router';
import AppContext from '../context';
import { locales, languageNames } from '../translations/config';

const LangSelector = () => {
  const router = useRouter();
  const { locale } = React.useContext(AppContext);

  const handleLocaleChange = React.useCallback(
    (e) => {
      const regex = new RegExp(`^/(${locales.join('|')})`);
      router.push(router.pathname, router.asPath.replace(regex, `/${e.target.value}`));
    },
    [router]
  );

  return (
    <>
      <div className='relative px-2 text-right text-white'>
        <select
          value={locale}
          className='relative z-10 px-6 py-2 ml-auto text-xs bg-transparent appearance-none'
          onChange={handleLocaleChange}>
          {locales.map((item) => (
            <option value={item} key={item}>
              {languageNames[item]}
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
  );
};

export default LangSelector;
