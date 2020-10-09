/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import FadeIn from 'react-fade-in';
import ResultsArray from './ResultsArray';

import styles from './Skills.module.scss';
import SkillsResult from '../../components/common/SkillsResult/SkillsResult';
import LoadTime from '../../components/common/LoadTime/LoadTime';

const Skills: React.FC = () => {
  return (
    <div className="page-container">
      <FadeIn delay={200}>
        <LoadTime length={ResultsArray.length} />
      </FadeIn>
      <div className={styles.Flex}>
        <div className="results-container">
          <FadeIn delay={140}>
            {ResultsArray.map((result, i) => {
              return typeof result === 'string' ? (
                <h2 key={i}>{result}</h2>
              ) : (
                  <SkillsResult {...result} key={i} />
                );
            })}
          </FadeIn>
        </div>
      </div>
    </div>
  )
}


export default Skills;
