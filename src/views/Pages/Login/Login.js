import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card-group mb-0">
                <div className="card p-4">
                  <div className="card-block">
                    <form action="./#/ask_morgan">
                        <div style={{textAlign: 'center'}}>
                            <img src="img/morgan.png" style={{width: '400px'}}/>
                        </div>
                        <h5 style={{backgroundColor: '#20a8d8', color: '#fff', textAlign: 'center', padding: '5px', margin: '15px 0'}}>Single Sign-On</h5>
                        <p className="text-muted"></p>
                        <div className="input-group mb-3">
                          <span className="input-group-addon"><i className="icon-user"></i></span>
                          <input type="text" className="form-control" placeholder="SID"/>
                        </div>
                        <div className="input-group mb-4">
                          <span className="input-group-addon"><i className="icon-lock"></i></span>
                          <input type="password" className="form-control" placeholder="Password"/>
                        </div>
                        <div className="row">
                          <div className="col-6">
                            <button type="submit" className="btn btn-primary px-4">Login</button>
                          </div>
                          <div className="col-6 text-right">
                            <button type="submit" className="btn btn-link px-0">Forgot password?</button>
                          </div>
                        </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
