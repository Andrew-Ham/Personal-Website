import "./MainImg2Styles.css"

import React, {Component} from 'react'


/*
Before we had an arrow function which looked like 
const MainImg2 = () => ....
however this doesn't let us use props and we want to use props since different pages have different headings and text!
So instead of an arrow function we will use class that extends component. And class does not use arrow function
*/
class MainImg2 extends Component {
    render() {
        return (
            <div className="main-img">
                <div className="heading">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.subheading}</p>
                </div>
            </div>
          )
        }
    }


export default MainImg2