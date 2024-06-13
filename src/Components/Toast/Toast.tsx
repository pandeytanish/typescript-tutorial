import { Component } from 'react'
import './Toast.css'
interface props { }

interface State {
  openCard: boolean,
  openSucess: boolean,
  openFail: boolean
}

export default class Toast extends Component<props, State> {
  constructor(props: props) {
    super(props)
    this.state = {
      openCard: false,
      openSucess: false,
      openFail: false
    }
  }
  openBox = () => {
    this.setState({ openCard: true });
  };

  handleConfirm = () => {
    console.log("Confirm")
    this.setState({ openSucess: true });

    setTimeout(() => {
      this.setState({ openSucess: false });
    }, 3000);
  };

  handleCancel = () => {
    console.log("Failed")
    this.setState({ openFail: true });

    setTimeout(() => {
      this.setState({ openFail: false });
    }, 3000);
  };
  
  render() {
    return (
      <>
        <div className="container">
          {this.state.openSucess && (
            <div className="sucessMessageBox">SucessFull</div>
          )}
                    {this.state.openFail && (
            <div className="failMessageBox">Error Message</div>
          )}
          <div className="main">
            <h1>Toast</h1>
            <p>Notification Message or a piece of information displayed above the page content</p>
            <button className='open-btn' onClick={this.openBox}>open</button>
            {this.state.openCard && (
              <div className="card">
                <h4>Toast Title</h4>
                <p>Long Details to go here after the title long details go here after the title</p>
                <button className='confirm-btn' onClick={this.handleConfirm}>Confirm</button>
                <button className='cancel-btn' onClick={this.handleCancel}>Cancel</button>
              </div>
            )}

          </div>
        </div>
      </>
    )
  }
}
