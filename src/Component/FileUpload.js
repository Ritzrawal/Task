
import React, {Component} from 'react';
import {storage} from '../firebase';

class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: '',
      progress: 0
    }
    
    this.handleChange = this
      .handleChange
      .bind(this);
      this.handleUpload = this.handleUpload.bind(this);
  }
  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({image}));
    }
  }
  Buttononchange(e){
    if(this.checked){
        e.disabled = false;
    } else {
        e.disabled = true;
    }
    
    }

  Method(e) {
    const re = /[0-9]+/g;
    if (!re.test(e.key)) {
      e.preventDefault();
    }
  }
  
  
  handleUpload = () => {
      const {image} = this.state;
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on('state_changed', 
      (snapshot) => {
        
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState({progress});
      }, 
      (error) => {
          
        console.log(error);
      }, 
    () => {
        
        storage.ref('images').child(image.name).getDownloadURL().then(url => {
            console.log(url);
            this.setState({url});
        })
    });
  }
  render() {
    const style = {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    };
    return (
      <div style={style}>
      <progress value={this.state.progress} max="100"/>
      <br/>
        <input type="file" onChange={this.handleChange}/>
        <button onClick={this.handleUpload}>Upload</button>
        <br/>
        <img src={this.state.url} alt="Uploaded images" height="200" width="400"/>
        <label>DOB
        <input type="date"/>
        </label>
        <br/>
        <label>Designation
        <select>
  <option value="Developer">Developer</option>
  <option value="Jr.Developer">Jr.Developer</option>
  <option selected value="Sr.Developer">Sr.Developer</option>
</select>
</label>
<br/>
        <label>
    Salary:
    <input type="text" onKeyPress={(e) => this.Method(e)}name="name" />
  </label>
  <br/>
        <label>
    FullName:
    <input type="text" name="name" />
  </label>
  <label>I Agree
  <input type="checkbox"onchange="document.getElementById('hello').disabled = !this.checked;" />
  <br/>
  <button  disabled={!this.state.Buttononchange}id="hello"value="send">Submit</button>
  
  </label>
      </div>
    )
  }
}

export default FileUpload;
