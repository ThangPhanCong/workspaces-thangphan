import React, { Component } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
    var Tokenizer = require('node-vntokenizer');
    var token = new Tokenizer();
var StopwordsFilter = require('node-stopwords-filter');
var f = new StopwordsFilter();
f.setLanguage('vi');

 
 var input = "my name is occho i am a "
 console.log(f.filter(input));
class App extends Component {
  constructor(props) {
    super(props);
    this.state ={titles: []};
    this.notify = this.notify.bind(this)
  }

   notify = () => {
    toast.success("Bạn đã chon 10 tin để phân cụm !", {
      position: toast.POSITION.TOP_RIGHT
    })};
  
  componentDidMount() {
    fetch('http://127.0.0.1:8080/')
    .then(results => results.json())
    .then(data => {
      let title = data.map((pic, index) => {
        return (
          <div key={index}>
            <ul className='title'>
             <li><input type="checkbox" 
             onClick={this.notify}/>
             {pic.title} </li>
              {console.log(token.tokenize(pic.title))} 
            </ul>
          </div>
        );
      })
      this.setState({
        titles: title
      })
    })
  }
  render() {
    return (
      <div>
      <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
        />
        <div className="header">Nhóm 7 Phân cụm tin tức trực tuyến bằng thuật toán phân cụm phân cấp</div>
        <div className="titles">{this.state.titles}</div>
      </div>
    );
  }
}

export default App;
