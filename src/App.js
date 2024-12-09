import styles from './App.css';
import data from './data.json';
import { useState } from 'react';

export const App = () => {
 const [steps] = useState(data);
 const [activeIndex, setActiveIndex] = useState(0);

 const isFirstStep = activeIndex === 0;
 const isLastStep = activeIndex === steps.length - 1;

 const handleBack = () => {
  if (!isFirstStep) {
   setActiveIndex(activeIndex - 1);
  }
 };

 const handleNext = () => {
  if (isLastStep) {
   setActiveIndex(0);
  } else {
   setActiveIndex(activeIndex + 1);
  }
 };

 const handleStepClick = (index) => {
  setActiveIndex(index);
 };

 return (
  <div className={styles.container}>
   <div className={styles.card}>
    <h1>Инструкция по готовке пельменей</h1>
    <div className={styles.steps}>
     <div className={styles['steps-content']}>
      {steps[activeIndex].content}
     </div>
     <ul className={styles['steps-list']}>
      {steps.map((step, index) => (
       <li
        key={step.id}
        className={`${styles['steps-item']} ${
         index <= activeIndex ? styles.done : ''
        } ${index === activeIndex ? styles.active : ''}`}
        onClick={() => handleStepClick(index)}
       >
        <button className={styles['steps-item-button']}>
         {index + 1}
        </button>
        Шаг {index + 1}
       </li>
      ))}
     </ul>
     <div className={styles['buttons-container']}>
      <button
       className={styles.button}
       onClick={handleBack}
       disabled={isFirstStep}
      >
       Назад
      </button>
      <button
       className={styles.button}
       onClick={handleNext}
      >
       {isLastStep ? 'Начать сначала' : 'Далее'}
      </button>
     </div>
    </div>
   </div>
  </div>
 );
};