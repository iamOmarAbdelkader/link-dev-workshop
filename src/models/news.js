import data from '../data/newsapi.json'

class News {
    constructor(){
        this.data = {articles:data.articles , categories:data.sourceCategory}
    }

    getHomeNews(){
       return this.data.articles.sort((a , b)=> new Date(a.publishedAt) - new Date(b.publishedAt)).reverse().filter(({showOnHomepage})=> showOnHomepage)
    }

    findById(toFindId){
        return this.data.articles.find(({id})=> id == toFindId)
    }
}


export default News;