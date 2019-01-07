import getData from './API'
class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           data: [],
           isLoading: false
        }
        console.log(props);
        
     }
     
    render() {
       var related = []
       var article = []
       let limit = 6
       const { match: { params } } = this.props;
       const regex = /(<([^>]+)>)/ig;
       getData().then( items => {
        if( sessionStorage.length <= 0 ) {
          sessionStorage.setItem("items",JSON.stringify(items))
          console.log("inside then")
        }
       })
       var articles = JSON.parse(sessionStorage.getItem("items"))
       articles.forEach(item => {
          const result = item.body.replace(regex, '');
          let trimmed = result.slice(0,60);
	  let title_trimmed = item.title.slice(0,26);
          if( item.nid == params.id) {
          document.title = item.title          
          article.push(<div class="col s12" style={{height:"", overflow: "hidden", marginTop: "20px"}} >
          <div class="card">
              <div class="card-image">
                <center>
                  <img src={item.field_image} width="280px"/>
                </center> 
                <span class="custom-card-title">
                  <i class="tiny material-icons">account_circle</i> {item.uid} &nbsp; &nbsp;
                  <i class="tiny material-icons">access_time</i> {item.created}
                </span>
              </div>
              <div class="card-content">
              <center>
                <h3>{item.title} </h3>
                </center>
                <br/><p style={{lineHeight: "2.5"}}>{result} </p>
              </div>
            </div>
            <div class="card">
              <div class="card-content">
                <div class="row">
                  <h5 style={{paddingLeft: "10px"}}>Add Comment</h5>
                  <form class="col s12 ">
                    <div class="row">
                      <div class="input-field col s12">
                        <input id="name" type="text" class="validate" placeholder="Name"/>
                      </div>
                    </div>
                    <div class="row">
                      <div class="input-field col s12">
                        <input id="email" type="email" class="validate" placeholder="Email"/>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col s12">
                        <textarea id="textarea1" class="materialize-textarea" placeholder="Comment"></textarea>
                      </div>
                    </div>
                    <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a>
                  </form>
                </div>
                <br/>
                <div class="divider"></div>
                <br/>
                <ul class="collection">
                  <li class="collection-item avatar">
                    <i class="material-icons circle red">person</i>
                    <span class="title"><b>Username</b></span>
                    <p>Sample Comment</p>
                    <a href="#!" class="secondary-content"><i class="material-icons">thumb_up</i></a>
                  </li>
                  <li class="collection-item avatar">
                    <i class="material-icons circle red">person</i>
                    <span class="title"><b>Username</b></span>
                    <p>Sample Comment</p>
                    <a href="#!" class="secondary-content"><i class="material-icons">thumb_up</i></a>
                  </li>
                </ul>
              </div>
          </div>
          
          </div> 
          );
        }
        else {
          if( limit!=0 ) {
            related.push( <div class="row">
              <div class="col s12">
                <div class="card hoverable">
                  <div class="card-image">
                    <img src={item.field_image} height="180px"/>
                    <a class="btn-floating halfway-fab waves-effect waves-light red" href={"../"+item.nid+item.view_node}><i class="material-icons">send</i></a>
                    <span class="custom-card-title">
                      <i class="tiny material-icons">account_circle</i> {item.uid} &nbsp; &nbsp;
                      <i class="tiny material-icons">access_time</i> {item.created}
                    </span>
                    </div>
                  <div class="card-content">
                    <h6>{title_trimmed} </h6>
                    <p style={{color: "gray"}}>{trimmed}</p>
                  </div>
                </div>
              </div>
            </div>
            );
            limit--
          }
        }
       })
       
       return (
          <div className="container">
            <div className="row">
                <div className="col s12 m8">
                  <div class="row">
                    {article} 
                  </div>
                </div>
               <div className="col s12 m4" style={{ marginTop:"20px" }}>
                  {related}
                  <center>
                  <a class="waves-effect waves-teal btn-flat" style={{border:"1px solid black"}} href="/">
                  View All
                  </a>
                  </center>
               </div>
            </div>
          </div>
        );
        
      } 
  }

  export default Article
