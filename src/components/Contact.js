class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isGoing: true,
        numberOfGuests: 2
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }
  
    render() {
      return (
        <div class="row">
            <form class="col s6 offset-s3 custom-card" style={{padding: "20px"}} onSubmit={this.handleSubmit}>
                <h4>Contact</h4>
                <div class="row">
                    <div class="input-field col s12 ">
                      <i class="material-icons prefix">account_circle</i> 
                      <input type="text" value={this.state.value} onChange={this.handleChange} name="Name" class="validate" placeholder="Name"/>
                    </div>
                    <div class="input-field col s12">
                      <i class="material-icons prefix">local_post_office</i> 
                      <input type="email" value={this.state.value} onChange={this.handleChange} name="Email" class="validate" placeholder="Email"/> 
                    </div>
                    <div class="input-field col s12">
                      <i class="material-icons prefix">message</i> 
                      <textarea name="message" placeholder="Message" class="materialize-textarea"></textarea>
                    </div>
                    <center>
                      <button class="btn waves-effect waves-light" type="submit" name="action">Send
                        <i class="material-icons right">send</i>
                      </button>
                    </center>
                </div>
            </form>
        </div>
          
      );
    }
  }
  document.title = 'Contact'
  export default Contact