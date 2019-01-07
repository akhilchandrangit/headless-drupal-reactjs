import getData from './API';
class Search extends React.Component {
    constructor(props) {
        super(props);
        // Setting up initial state
        this.state = {
           data : [],
           isLoading: false,
           items: 7,
           loadingState: false,
           query: 'null'

        }
     this.updateState = this.updateState.bind(this); 
     this.handleInputChange = this.handleInputChange.bind(this);
     console.log("con1")
     getData().then( items => {
        if( sessionStorage.length <= 0 ) {
          sessionStorage.setItem("items",JSON.stringify(items))
        }
      })
      document.title = 'Search'
     }

    updateState() {
      this.setState({items: this.state.items +3 });
    }
    handleInputChange() {
      if (this.search.value != '') {
        this.setState({
          query: this.search.value
        }) 
      }
      else {
        this.setState ({
          query: 'null'
        })
      }
      document.title = 'Search Results For '+this.search.value
    }
    
    render() {
      var titles = [];
      const regex = /(<([^>]+)>)/ig;
      var articles = JSON.parse(sessionStorage.getItem("items"))
      console.log(articles)
      //if (this.states.query) {
        articles.forEach(item => {
          const result = item.body.replace(regex, '');
          let trimmed = result.slice(0,53);
	  let title_trimmed = item.title.slice(0,34);
          //view_url = { 'article/' + item.view_node }
            if (item.title.toLowerCase().includes(this.state.query)) {
            titles.push(<div class="col s12 m4" style={{height:"", overflow: "hidden", marginTop: "20px"}} >
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
                  <h6>{title_trimmed} </h6>
                  <p style={{color: "gray"}}>{trimmed}</p>
                </div>
                </a>
              </div>
            </div> 
          
            );
            }
          })
      //}
       
       return (
          <div className="container" style={{marginTop: "50px"}}>
            <div className="row">
               <div className="col s12 m12 l12">
                  <div class="row">
                    <form class="col s12 m12 l12">
                      <input
                        placeholder="Type To Search"
                        ref={input => this.search = input}
                        onChange={this.handleInputChange}
                      />
                    </form>
                      {titles} <br/>
                    <div style={{height: "70px"}}></div>
                  </div>
               </div>
            </div>
          </div>
          
        );
      } 
  }
  
  export default Search
