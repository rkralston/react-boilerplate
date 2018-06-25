/**
*
* LinkList
*
*/

import React from 'react';

import Link from '../Link';
import styles from './styles.css';
import IconButton from './../IconButton/index';

function LinkList({ links, topicName, children, startAdd }) {
  const linkNodes = links.map(l => (
    <Link
      key={l.id}
      link={l}
    />
  ));

  return (
    <div className={styles.linkList}>
      <h1>{topicName.toUpperCase()}</h1>
      {linkNodes}
      <IconButton
        icon="plus"
        onClick={() => startAdd(topicName)}
        iconClass={styles.icon}
        buttonClass={styles.button}
      />
      {children}
    </div>
  );
}

LinkList.propTypes = {
  startAdd: React.PropTypes.func.isRequired,
  children: React.PropTypes.element,
  topicName: React.PropTypes.string.isRequired,
  links: React.PropTypes.arrayOf(React.PropTypes.shape({
    description: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired,
  })),
};
export default LinkList;
