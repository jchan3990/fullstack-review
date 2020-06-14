import React from 'react';

var RepoItem = (props) => (
  <div>
    <li>
      {console.log(props)}
      <span>{props.owner}</span>
      <span>{'\t' + props.name}</span>
    </li>
  </div>
)

export default RepoItem;