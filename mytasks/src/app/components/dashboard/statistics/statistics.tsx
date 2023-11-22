import React from 'react';
import StatisticsChart from '../StatisticsChart/StatisticsChart';
import StatisticsPie from '../StatisticsPie/StatisticsPie';
import styles from './Statistics.module.css';

interface StatisticsProps {}

const Statistics: React.FC<StatisticsProps> = () => {
  return (
    <div className={styles.statistics}>
      <div className={styles.container}>
          {/* <div className={styles.chart}> */}
          <StatisticsChart />
          {/* </div> */}
          {/* <div className={styles.pie}> */}
            <StatisticsPie />
          {/* </div> */}
      </div>
    </div>
  );
};

export default Statistics;