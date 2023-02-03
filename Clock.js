import React from "react";
class Clock extends React.Component{
    constructor (props){
        console.log("frist");
        super(props)
        this.state={
            currentTime: new Date().toLocaleTimeString()
        }
    }
 updateTime = () =>{
       this.setState({

     })
    
 }
    componentDidMount(){
        console.log("1234");
        setInterval(()=>{
  this.setState({ currentTime:new Date().toLocaleTimeString()})
        }, 1000)
    }
     render(){
        console.log("second");
        return <div>
            <h1>employee salary component</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header bg-primary text-white">
                                <h3>Time---{this.state.currentTime}</h3>
                            </div>
                            <div className="card-body"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default Clock