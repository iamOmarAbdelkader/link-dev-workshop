import data from '../data/newsapi.json'

class News {
    constructor(){
        this.data = {articles:data.articles , categories:data.sourceCategory}
    }

    getHomeNews(){
       return this.data.articles.filter(({showOnHomepage})=> showOnHomepage)
    }
}


export default News;