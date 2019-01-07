var datasource = []
async function getData() {
    if(datasource.length == 0) {
        const response = await axios.get("http://urgent.local/api/articles?_format=json");
        try {
            datasource = response.data
            return datasource
        } catch (error) {
        //this.setState({ error, isLoading: false });
        }
    }
}

export default getData