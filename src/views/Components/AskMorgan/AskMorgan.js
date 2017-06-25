import React, { Component } from 'react';
import $ from 'jQuery';

const relatedTopicStyle = {
    borderRadius: '50%',
    color: '#ffffff',
    width: '150px',
    height: '150px',
    backgroundColor: 'rgb(85, 119, 157)',
    fontSize: '16px',
    fontWeight: 900,
    textAlign: 'center',
    display: 'inline-block',
    margin: '10px'
};

const relatedTopicSpanStyle = {
    display: 'inline-block',
    verticalAlign: 'middle',
    lineHeight: '140px'
};

class AskMorgan extends Component {
  constructor(props) {
      super(props);
      this.state = {
          value: '',
          show: false
      };
      this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
      this.setState({value: event.target.value});
      this.setState({show: this.state.value.length >5});
  }
  render() {
      let answer = this.state.show ? (<div className="row">
          <div className="col-md-8 offset-md-2" style={{textAlign: 'left'}}>
              <div className="card">
                <div className="card-header">
                Answered by: Ho Song Yan
                </div>
                <div className="card-block">
                  1. Install CF API<br />
                  2. Open a CMD Prompt and ensure that you can run -cf version<br />
                  3. Use your SSO to access CloudFoundy<br />
                    &nbsp;&nbsp;a. cf api http://api.apps.dev.jpmchase.net<br />
                    &nbsp;&nbsp;b. cf login -u [your-SID]<br />
                  4.Write the Manifest.yml<br />
                  5. cf push<br />
                </div>

              </div>
              <div className="card">
                <div className="card-header">
                Answered by: Keefe Tan
                </div>
                <div className="card-block">
                  1. Open CMD and build JAR using MVN CLEAN PACKAGE<br />
                  2. Prepare Manifest.yml<br />
                  3. cf push<br />

                </div>

              </div>
          </div>
      </div>) : (<div></div>);
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="offset-md-2 col-md-8">
            <div className="card" style={{border: 0}}>
              <div className="card-block">
                <img src="img/ask_morgan.png" style={{width: '100%'}}/>
                <form className="form-inline row justify-content-md-center" style={{margin: '30px 30px'}} action="/#/find_morgan">
                  <input type="text" className="form-control col col-lg-2" id="ask_morgan_input" placeholder="Ask Morgan anything" value={this.state.value} onKeyUp={this.handleChange} id="textInput" />
                  <button type="submit" className="btn btn-primary col-md-auto">Connect</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {answer}
      </div>
    )
  }
}

export default AskMorgan;
