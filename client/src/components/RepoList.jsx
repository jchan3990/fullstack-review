import React from 'react';
import RepoItem from './RepoItem.jsx';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <ul>
      {console.log(props)}
      {props.repos.map(repo => (
        <RepoItem owner={repo.repoOwner} name={repo.repoName} />
      ))}
    </ul>
  </div>
)

export default RepoList;