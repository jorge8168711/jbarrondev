/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

export const langs = {
  es: {
    label: 'Español',
    metaDescription:
      'Front-end developer, padre de familia y amante de la ilustraciónn y los videojuegos.',
    about: {
      title: 'Acerca de mi',
      content: (
        <>
          <p className='mb-4'>
            Hola mi nombre es Jorge y soy desarrollador{' '}
            <strong className='text-yellow'>Front-end</strong>. Trabajo como desarrollador de manera
            profesional en el desarrollo de aplicaciones y sitios Web desde hace más de 4 años.
            Comencé mi carrera como desarrollador solamente como un hobby debido a que siempre me
            intereso la programación y la tecnología en general por lo que en cuanto tuve la
            oportunidad me enfoque en aprender todo lo que pude acerca del tema.
          </p>
          <p className='mb-4'>
            Afortunadamente con el tiempo se me dio la oportunidad de trabajar como desarrollador
            Web. Esta oportunidad me abrió el camino para convertir todo lo que había aprendido en
            una profesión que hasta ahora me ha permitido aprender muchísimo y especializarme en
            tecnologías enfocadas en el desarrollo frontend.
          </p>

          <p className='mb-4'>
            A lo largo de mi carrera como desarrollador he estado cargo de diferentes actividades
            como las siguientes:
          </p>
          <ul className='pl-6 list-disc list-inside'>
            <li className='mb-4'>
              <strong className='fw-bold'>Maquetación: </strong>He estado a cargo de maquetar sitios
              web responsive, aplicaciones web o plantillas para los diferentes clientes de correo
              electrónico utilizando tecnologías como
              <strong className='text-yellow'> HTML </strong> y
              <strong className='text-yellow'> CSS</strong>, durante mis inicios solamente maquetaba
              y tocaba un poco <strong className='text-yellow'>JavaScript</strong> pero con el
              tiempo mis skills mejoraron y me permitieron ser totalmente responsable del desarrollo
              <strong className='text-yellow'> Front-end</strong> de los proyectos.
            </li>
            <li className='mb-4'>
              <strong className='fw-bold'>Skinning: </strong>
              He participado en proyectos en los que solamente he estado a cargo del código{' '}
              <strong className='text-yellow'>CSS</strong>, utilizando diferentes preprocesadores
              como
              <strong className='text-yellow'> SASS </strong> o{' '}
              <strong className='text-yellow'>PostCSS</strong>.
            </li>
            <li className='mb-4'>
              <strong className='fw-bold'>Optimización y creación de assets: </strong>
              Mi experiencia como diseñador me ha facilitado la comunicación con los diseñadores que
              he trabajado y me ha permitido realizar grandes optimizaciones en la creación e
              implementación de assets.
            </li>
            <li className='mb-4'>Desarrollo web con React.</li>
            <li className='mb-4'>Desarrollo web con Angular.</li>
          </ul>
        </>
      )
    },
    projects: {
      title: 'Proyectos'
    },
    contact: {
      title: 'Contacto'
    },
    websiteAbout: {
      title: 'Acerca de este sitio'
    }
  },
  en: {
    label: 'English',
    metaDescription:
      'Front-end developer, padre de familia y amante de la ilustraciónn y los videojuegos.',
    about: {
      title: 'About me',
      content: (
        <>
          <p className='mb-4'>
            Hello my name is Jorge and I&apos;m a <strong className='text-yellow'>Front-end</strong>{' '}
            developer. I have been developing professionally for more than 4 years. I started my
            career as a developer only as a hobby because I always had an interest in programming
            and technology, so as soon as I had the a chance I decided to focus on learn everything
            I could about it.
          </p>
          <p className='mb-4'>
            Eventually I had the opportunity to work as a Web developer, this opportunity gave me
            the chance to turn everything I had learned into a profession that has allowed me to
            learn a lot and specialize in <strong className='text-yellow'>Front-end</strong>{' '}
            technologies.
          </p>

          <p className='mb-4'>
            Throughout my career as developer I have been in charge of different activities such as
            the following:
          </p>
          <ul className='pl-6 list-disc list-inside'>
            <li className='mb-4'>
              <strong className='fw-bold'>Layout: </strong> I&apos;ve been in charge of the layout
              for responsive websites, web applications and email templates for the different email
              clients with technologies such as <strong className='text-yellow'>CSS </strong> and{' '}
              <strong className='text-yellow'>HTML5</strong>, during my beginnings I was only
              responsible for creating layouts and some times a little of{' '}
              <strong className='text-yellow'>JavaScript</strong> but eventually my skills improved
              and allowed me to work on the projects by my own.
            </li>
            <li className='mb-4'>
              <strong className='fw-bold'>Skinning: </strong>I have participated in projects in
              which I have only been in charge of the <strong className='text-yellow'>CSS</strong>{' '}
              code, using different preprocessors such as{' '}
              <strong className='text-yellow'>SASS</strong> or{' '}
              <strong className='text-yellow'>PostCSS</strong>.
            </li>
            <li className='mb-4'>
              <strong className='fw-bold'>Assets optimization and creation: </strong>
              My experience as designer has made my communication easier with the designers I have
              worked with, and has allowed me to make great optimizations in the assets creation and
              implementation.
            </li>
            <li className='mb-4'>Web development with React.</li>
            <li className='mb-4'>Web development with Angular.</li>
          </ul>
        </>
      )
    },
    projects: {
      title: 'Projects'
    },
    contact: {
      title: 'Contact'
    },
    websiteAbout: {
      title: 'About this website'
    }
  }
};

const AppContext = React.createContext({
  lang: 'es',
  translations: langs.es,
  setLanguage: () => null
});

export const { Provider, Consumer } = AppContext;
