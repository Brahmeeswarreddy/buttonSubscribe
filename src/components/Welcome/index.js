// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {subBtn: 'Subscribe'}

  render() {
    const {subBtn} = this.state
    let authBtn
    if (subBtn === 'Subscribe') {
      authBtn = <button>Subscribed</button>
    } else {
      authBtn = <button>Subscribe</button>
    }

    return (
      <div>
        <h1 className="heading">Welcome</h1>
        <p> hello</p>
        <button>Subscribe</button>
      </div>
    )
  }
}
export default Welcome
