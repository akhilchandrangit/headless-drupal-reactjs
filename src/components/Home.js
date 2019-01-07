import getData from './API';
class Home extends React.Component {
    constructor(props) {
        super(props);
        // Setting up initial state
        this.state = {
           data : [],
           isLoading: false,
           items: 5,
           loadingState: false

        }
     this.updateState = this.updateState.bind(this); 
     }
     componentDidMount() {
      getData().then( items => {
        this.setState({data: items})
      })
      document.title = ''
     }

    updateState() {
      this.setState({items: this.state.items +3 });
    }
    
    render() {
      var titles = [];
      var i=1;
      var k=1;
      const regex = /(<([^>]+)>)/ig;
      //var articles = JSON.parse(window.sessionStorage.getItem("items"))
      this.state.data.forEach(item => {
        const result = item.body.replace(regex, '');
        let trimmed = result.slice(0,53);
          //view_url = { 'article/' + item.view_node }
        if (k < this.state.items) {
          if( i==1 ) {
            titles.push(<div class="col s12" style={{height:"", overflow: "hidden", marginTop: "20px"}} >
              <div class="card">
                <a href={'article/' + item.nid + item.view_node } style={{color: "black"}}>
                  <div class="card-image">
                    <center>
                      <img src={item.field_image} width="280px" height="480px"/>
                    </center> 
                    <span class="card-title">{item.title}</span>
                  </div>
                </a>
              </div>
              </div> 
            );
            i++
          }
          else {
            titles.push(<div class="col s4" style={{height:"", overflow: "hidden", marginTop: "20px"}} >
            <div class="card">
              <a href={'article/' + item.nid + item.view_node } style={{color: "black"}}>
                <div class="card-image">
                  <center>
                    <img src={item.field_image} width="280px" height="180px"/>
                  </center>
		  <span class="custom-card-title">
                  	<i class="tiny material-icons">account_circle</i> {item.uid} &nbsp; &nbsp;
                  	<i class="tiny material-icons">access_time</i> {item.created}
                  </span> 
                </div>
                <div class="card-content">
                  <h5>{item.title} </h5>
                  
                   
                </div>
              </a>
            </div>
          </div> 
          
          );
          }
          k++
        }
       })
       
       return (
          <div className="container">
            <div className="row">
               <div className="col s12">
                    <div class="row">
                      {titles} <br/>
                    </div>
                    <center>
                      {this.state.items <= this.state.data.length ? 
                        <a href="#!" onClick={this.updateState} class="waves-effect waves-teal btn-flat" style={{border:"1px solid black"}}>Load More</a> 
                        : <span style={{color: "#4A4A4A"}}><i class="fas fa-hourglass-end"></i> End of Page</span>}
                    </center>
               </div>
            </div>
          </div>
          
        );
      } 
  }
  
  export default Home
