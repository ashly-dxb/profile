import React, {Component} from 'react';

class WorkExperience extends Component {
    render() {
      return (
              <div className="ContentData">
                    <h3>Contact Me</h3>

                    <div className="ContentInside">
                        <div className="row">
                          <div className="leftList">Mobile</div>
                          <div className="rightList">+971 - 50 857 0803</div>
                        </div>

                        <div className="row">
                          <div className="leftList">Email</div>
                          <div className="rightList"><a className="custLink" href="mailto:ashlythomas@gmail.com">ashlythomas@gmail.com</a></div>
                        </div>

                        <div className="row">
                          <div className="leftList">LinkedIn</div>
                          <div className="rightList"><a className="custLink" target="blank" href="https://linkedin.com/in/ashly1">https://linkedin.com/in/ashly1</a></div>
                        </div>
                    </div>
              </div>
            );
    }
}
  
export default WorkExperience;