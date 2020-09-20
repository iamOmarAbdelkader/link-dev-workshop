import data from '../data/newsapi.json'

const PER_PAGE = 8;

class News {
    categoryId = undefined
    title = undefined
    offset = 0
    cursor = 0
    articles = []
    constructor(){
        // sort articles
        let articles = data.articles.sort((a , b)=> new Date(a.publishedAt) - new Date(b.publishedAt)).reverse()
        this.data = {articles:articles , categories:data.sourceCategory}
    }

    getHomeNews(){
       return this.data.articles.filter(({showOnHomepage})=> showOnHomepage)
    }

    findById(toFindId){
        return this.data.articles.find(({id})=> id == toFindId)
    }

    getCategories(){
        return this.data.categories;
    }

    whereCategory(categoryId){

        // reset offset when filter data change
        if(this.categoryId != categoryId){
            this.offset = 0
        }


        if(categoryId){
            this.categoryId = categoryId
        }

        return this
    }

    whereTite(title){
        // reset offset when filter data change
        if(this.title != title){
            this.offset = 0
        }

        if(title){
            this.title = title
        }
        return this
    }

    perform(loadMore = false){
        let query = null
        // search by title
        if(this.title != null){
            query = this.data.articles.filter((item)=> item.title.toLowerCase().includes(this.title.toLowerCase()))
        } 
        // search by category id
        if(this.categoryId != null){
            query =query.filter((item)=> parseInt(item.sourceID) == parseInt(this.categoryId))
        }

        // check if the loadMore flag set as paginate
        if(loadMore){
            this.offset += PER_PAGE
        }

        // the user has not entered any search queries
        if(query == null){
            query = this.data.articles
        }

        // check if can load more 
        this.articles =  query.splice(this.offset , PER_PAGE);
        console.log('this.articles',this.articles)
        return this
    }

    canLoadMore(){
        if(this.articles.length < this.data.articles.length){
            return true;
        }
        return false;
    }
}


export default News;