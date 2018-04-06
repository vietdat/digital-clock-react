import React from 'react';

class Table extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    // Conditionally load a component:
    return (
      <div id="clock">
        <Eight type={0}/>
        <Eight type={1}/>
        <Eight type={2}/>
        <Eight type={3}/>
        <Eight type={4}/>
        <Eight type={5}/>
      </div>
    );
  }
}

function getTime() {
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();
  return {
    hFirst: h === 0 ? 0: Math.floor(h/10),
    hSecond: h === 0 ? 0: h%10,
    mFirst: m === 0 ? 0: Math.floor(m/10),
    mSecond: m === 0 ? 0: m%10,
    sFirst: s === 0 ? 0: Math.floor(s/10),
    sSecond: s === 0 ? 0: s%10,
  }
}

function setStyleLine(line1, line2, line3, line4, line5, line6, line7) {
  return {
    line1: line1,
    line2: line2,
    line3: line3,
    line4: line4,
    line5: line5,
    line6: line6,
    line7: line7
  };
}

function setStyleElement(number) {
  let style;
  switch(number){
    case 0:
      style = setStyleLine(true, true, true, 'none', true, true, true);
      break;
    case 1:
      style = setStyleLine('none', 'none', true, 'none', 'none', true, 'none');
      break;
    case 2:
      style = setStyleLine(true, 'none', true, true, true, 'none', true);
      break;
    case 3:
      style = setStyleLine(true, 'none', true, true, 'none', true, true);
      break;
    case 4:
      style = setStyleLine('none', true, true, true, 'none', true, 'none');
      break;
    case 5:
      style = setStyleLine(true, true, 'none', true, 'none', true, true);
      break;
    case 6:
      style = setStyleLine(true, true, 'none', true, true, true, true);
      break;
    case 7:
      style = setStyleLine(true, 'none', true, 'none', 'none', true, 'none');
      break;
    case 8:
      style = setStyleLine(true, true, true, true, true, true, true);
      break;
    case 9:
      style = setStyleLine(true, true, true, true, 'none', true, true);
      break;
    default:
      break;
  }

  return style;
}

class Eight extends React.Component {
  constructor() {
    super();
    this.state = {
      line1: '',
      line2: '',
      line3: '',
      line4: '',
      line5: '',
      line6: '',
      line7: '',
      line8: '',
      line9: ''
    };
  }
  
  updateTime = () => {
    let data = getTime();
    switch(this.props.type){
      case 0:
        this.setState(setStyleElement(data.hFirst));
        break;
      case 1:
        this.setState(setStyleElement(data.hSecond));
        break;
      case 2:
        this.setState(setStyleElement(data.mFirst));
        break;
      case 3:
        this.setState(setStyleElement(data.mSecond));
        break;
      case 4:
        this.setState(setStyleElement(data.sFirst));
        break;
      case 5:
        this.setState(setStyleElement(data.sSecond));
        break;
      default:
        break;
    }

    return;
  };
  
  
  componentDidMount() {
    this.intervalId = setInterval(this.updateTime.bind(this), 1000);
  }


  render() {
    return (
      <div class = "eight"> 
        <div>
                 
          <div class="line1 row" style = {{display: this.state.line1}}></div>
        </div>
        
        <div class="mid">
          <div>
            <div class="arrow-up-left" style = {{display: this.state.line2}}></div>   
            <div class="line2 col left" style = {{display: this.state.line2}}></div>
          </div>
          <div>
            <div class="arrow-up-left" style = {{display: this.state.line3}}></div>   
            <div class="line3 col right" style = {{display: this.state.line3}}></div>
          </div>
          
         
        </div>
        <div class="line4 row" style = {{display: this.state.line4}}></div>
        <div class="mid">
          <div class="line5 col left" style = {{display: this.state.line5}}></div>
          <div class="line6 col right" style = {{display: this.state.line6}}></div>
        </div>
        <div class="line7 row" style = {{display: this.state.line7}}></div>
      </div>
    );
  }
}

export default Table;