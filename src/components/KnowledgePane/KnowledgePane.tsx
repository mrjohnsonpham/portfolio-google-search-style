/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import SocialTab from '../common/SocialTab/SocialTab';
import PeopleTab from '../common/PeopleTab/PeopleTab';

import styles from './KnowledgePane.module.scss';

const socials = [
  {
    link: 'https://www.linkedin.com/in/johnsondpham/',
    icon: 'linkedin',
    title: 'LinkedIn',
  },
  {
    link: 'https://github.com/mrjohnsonpham',
    icon: 'github',
    title: 'GitHub',
  },
  {
    link: 'https://www.youtube.com/watch?v=ikyq7o8hVHk',
    icon: 'youtube',
    title: 'YouTube',
  },
  {
    link: 'https://www.instagram.com/phammmmy/',
    icon: 'instagram',
    title: 'Instagram',
  },
];

const people = [
  {
    link:
      'https://www.google.com/search?sa=X&rlz=1C1CHBF_enCA807CA807&biw=2560&bih=1297&sxsrf=ACYBGNQwd6CNGfx2ifxUkv6ERdWlYWlgIA:1577939610639&q=Dwayne+Johnson&stick=H4sIAAAAAAAAAONgFuLUz9U3MDLNMy5QAjMNTdLji7X4AlKLivPzgjNTUssTK4sXsfK5AOm8VAWv_Iw8oMQOVkYAwBuC1DwAAAA&ved=2ahUKEwjWh-CPi-TmAhWEVt8KHS52D0AQxA0wJ3oECBAQSA',
    icon: 'dwayne',
    title: 'Dwayne Johnson',
    description: 'Twin Brother',
  },
  // {
  //   link: 'http://google.com',
  //   icon: 'rocky',
  //   title: 'rocky',
  //   description: 'First Dog',
  // },
  // {
  //   link: 'https://google.com/',
  //   icon: 'chobani',
  //   title: 'chobani',
  //   description: 'Second Dog',
  // },
];

const InfoPanel: React.FC = () => {
  return (
    <div className={styles.Container}>
      <p className={styles.SocialText} />
      <p>
        Johnson &quot;Phamous&quot; Pham is a recent Rutgers Bootcamp Graduate, specializing in <b>Frontend Developer</b> who is{' '}
        <b>currently loving code</b>. He has applied for the position of
        Front-end Developer at <b>your company you're currently recruiting for</b>...
      </p>
      <p>
        <b>Born: </b> July 21st, 1993 (age 27 years),{' '}
        <a
          href="https://en.wikipedia.org/wiki/Shenyang"
          target="_blank"
          rel="noopener noreferrer"
        >
          Union, NJ
        </a>
      </p>
      <p>
        <b>Height: </b> 1.73 m (5 feet 8 and 7/64 inches)*
      </p>
      <p>
        <b>Net Worth: </b> U.S $86.9 Dollars (December 2019)
      </p>
      <p>
        <b>Education: </b>{' '}
        <a
          href="https://bootcamp.rutgers.edu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rutgers Bootcamp
        </a>{' '}
        (2020 - Present)
      </p>
      <p className={styles.Header}>Profiles</p>
      <div className={styles.SocialContainer}>
        {socials.map((obj) => {
          return <SocialTab {...obj} key={obj.icon} />;
        })}
      </div>
      <p className={styles.Header}>People Also Search For</p>
      <div className={styles.SocialContainer}>
        {people.map((obj) => {
          return <PeopleTab {...obj} key={obj.icon} />;
        })}
      </div>
    </div>
  );
};

export default InfoPanel;
