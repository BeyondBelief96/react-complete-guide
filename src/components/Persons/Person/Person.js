import React from 'react';
import styles from './Person.css';
import PropTypes from 'prop-types';

const person = (props) => {
  return (
    <div className={styles.Person}>
      {props.isAuth ? <p>authenticated!</p> : <p>Please Log In</p>}
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.nameChanged} value={props.name} />
    </div>
  );
};

person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  nameChanged: PropTypes.func,
};

export default person;
