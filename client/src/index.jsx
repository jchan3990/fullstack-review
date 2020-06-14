import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
    this.search = this.search.bind(this);
    this.getRepos = this.getRepos.bind(this);
  }

  componentDidMount() {
    this.getRepos();
  }

  getRepos() {
    axios.get('/repos')
      .then(result => {
        this.setState({repos: result.data});
        console.log(this.state.repos);
        console.log('SUCCESS: Repos fetched');
      })
      .catch(err => {console.log('FAIL: Could not get repos.')})
  }

  search (term) {
    console.log(`${term} was searched`);
    axios.post('/repos', {name: term})
      .then(res => {console.log('Client Post SUCCESS');})
      .catch(err => {console.log('Client Post FAIL')})
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));