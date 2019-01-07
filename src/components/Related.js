
class Related extends React.Component {
    constructor(props) {
        super(props);
        // Setting up initial state
        this.state = {
           data: [],
           isLoading: false
        }
        
     }
     
      
     // calling the componentDidMount() method after a component is rendered for the first time
     componentDidMount() {
      let obj = this;
      this.serverRequest = axios.get('http://drupal8.local/api/related?_format=json')
      .then(function(article) { 
        obj.setState({
            data: article.data,
            isLoading: true
        });
      })
      
     }
     // calling the componentWillUnMount() method immediately before a component is unmounted from the DOM
     componentWillUnmount() {
       this.serverRequest.abort();
     }
    render() {
       var titles = []
       this.state.data.forEach(item => {
          titles.push(<div class="col s12" style={{height:"", overflow: "hidden", marginTop: "20px"}} >
          <div class="card">
            <a href={'article/' + item.nid + item.view_node } style={{color: "black"}}>
              <div class="card-image">
                <center>
                  <img src="./src/assets/images/blog-3.jpg" width="280px"/>
                </center> 
              </div>
              <div class="card-content">
                <h5>{item.title} </h5>
                <span style={{color:"#646464"}}>
                  <i class="tiny material-icons">account_circle</i> {item.uid} <br/>
                  <i class="tiny material-icons">access_time</i> {item.created}
                </span>
              </div>
            </a>
          </div>
          
          </div> 
          );
       })
       
       return (
          <div className="container">
            <div className="row">
               <div className="col s12">
                    <h3 className="title">Latest Articles</h3>
                    <div class="divider"></div>
                    <div class="row">
                      {titles} 
                    </div>
               </div>
            </div>
          </div>
        );
      } 
  }
  
  export default Related