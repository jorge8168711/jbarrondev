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
      <div className='bg-yellow text-primary'>
        <div className='max-w-screen-lg px-6 mx-auto text-right'>
          <div className='relative inline-block'>
            <select
              value={locale}
              className='relative z-10 px-4 py-0 text-xs font-bold bg-transparent appearance-none focus:outline-none'
              onChange={handleLocaleChange}>
              {locales.map((item) => (
                <option value={item} key={item}>
                  {languageNames[item]}
                </option>
              ))}
            </select>

            <svg className='absolute z-20 w-3 h-3 fill-current Arrow'>
              <use href='/img/icons.svg#expand-more' />
            </svg>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .Arrow {
            top: 50%;
            transform: translateY(-50%);
            pointer-events: none;
            right: 0;
          }
        `}
      </style>
    </>
  );
};

export default LangSelector;
