import getData from './API';
class Home extends React.Component {
    constructor(props) {
        super(props);
        // Setting up initial state
        this.state = {
           data : [],
           isLoading: false,
           items: 8,
           loadingState: false

        }
     this.updateState = this.updateState.bind(this); 
     getData().then( items => {
        //if( sessionStorage.length <= 0 ) {
          sessionStorage.setItem("items",JSON.stringify(items))
        //}
      })
      document.title = 'Headless Drupal Implementation - ReactJS and Drupal 8'
     }

    updateState() {
      this.setState({items: this.state.items +6 });
    }
    
    render() {
      var titles = [];
      var i=1;
      var k=1;
      let trimmed = '';
      const regex = /(<([^>]+)>)/ig;
      var articles = JSON.parse(sessionStorage.getItem("items"))
      console.log(articles)
      articles.forEach(item => {
        const result = item.body.replace(regex, '');
        for (var j = 0;  j < result.length; j++ ) {
          if( j > 60 && (result.charAt(j) == ' ' || result.charAt(j) ==  '-') ) {
            trimmed = result.slice(0,j)
            break
          }
        }
        let title_trimmed = item.title.slice(0,26);
        if (item.title.length >= 26) {
          title_trimmed.concat('..')
        }
          //view_url = { 'article/' + item.view_node }
        if (k < this.state.items) {
          if( i==1 ) {
            titles.push(<div class="col s12" style={{height:"", overflow: "hidden", marginTop: "20px"}} >
              <div class="card hoverable">
                <a href={'article/' + item.nid + item.view_node } style={{color: "black"}}>
                  <div class="card-image">
                    <center>
                      <img src={item.field_image} width="280px" height="480px"/>
                    </center> 
                    <span class="card-title">{item.title}</span>
		    <span style={{color: "#fff",position: "absolute", bottom: "0", left: "0", maxWidth: "100%", padding: "26px", paddingBottom: "9px" }}>
                  	 {item.uid} &nbsp; &nbsp;
                  	 {item.created}
                  </span> 
                  </div>
                </a>
              </div>
              </div> 
            );
            i++
          }
          else {
            titles.push(<div class="col s12 m4 l4" style={{height:"", overflow: "hidden", marginTop: "20px"}} >
            <div class="card hoverable">
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
          k++
        }
       })
       
       return (
          <div className="container">
            <div className="row">
               <div className="col s12 m11">
                    <div class="row">
                      {titles} <br/>
                    </div>
                    <center>
                      {this.state.items <= articles.length ? 
                        <a href="#!" onClick={this.updateState} class="waves-effect waves-teal btn-flat" style={{border:"1px solid black"}}>Load More</a> 
                        : <span style={{color: "#4A4A4A"}}><i class="fas fa-hourglass-end"></i> End of Page</span>}
                    </center>
               </div>
               <div class="col m1 s12" style={{marginTop: "30px"}} > 
                <div class="col m12 s3" style={{marginBottom:"26px"}}>
                  <a class="btn-floating btn-large waves-effect waves-light red" href="/">
                  <i class="material-icons">home</i></a>
                </div>
                <div class="col m12 s3" style={{marginBottom:"26px"}}>
                  <a class="btn-floating btn-large waves-effect waves-light blue" href="/search">
                  <i class="material-icons">search</i></a>
                </div>
                <div class="col m12 s3" style={{marginBottom:"26px"}}>
                  <a class="btn-floating btn-large waves-effect waves-light green" href="/contact">
                  <i class="material-icons">contact_phone</i></a>
                </div>
                <div class="col m12 s3" style={{marginBottom:"26px"}}>
                  <a class="btn-floating btn-large waves-effect waves-light orange" href="/about">
                  <i class="material-icons">info</i></a>
                </div>
              </div>
            </div>
          </div>
          
        );
      } 
  }
  
  export default Home
