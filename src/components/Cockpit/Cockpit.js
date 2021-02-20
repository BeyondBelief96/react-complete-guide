import React, { useEffect, useRef } from 'react';
import styles from './Cockpit.css';

const cockpit = (props) => {
  const toggleButtonRef = useRef(null);

  useEffect(() => {
    toggleButtonRef.current.click();
    return () => {
      console.log('Cleanup Work');
    };
  }, []);
  const assignedClasses = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = styles.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(styles.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(styles.Bold);
  }

  return (
    <div className={styles.Cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        ref={toggleButtonRef}
        className={btnClass}
        onClick={props.clicked}
      >
        Toggle Persons
      </button>
      <button onClick={props.login}>Log In</button>
    </div>
  );
};

export default React.memo(cockpit);
