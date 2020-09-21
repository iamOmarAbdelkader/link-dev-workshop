import data from '../data/newsapi.json'
import { PER_PAGE } from '../constants';
const DATA = {
    articles : data.articles.sort((a , b)=> new Date(a.publishedAt) - new Date(b.publishedAt)).reverse(),
    categories:data.sourceCategory
}
class News {
    categoryId = undefined
    title = undefined
    offset = 0
    cursor = 0
    articles = []
    constructor(){
        // sort articles
    }

    getHomeNews(){
        let articles =  [...DATA.articles]
        return articles.filter(({showOnHomepage})=> showOnHomepage)
    }

    findById(toFindId){
        let articles = [...DATA.articles]
        return articles.find(({id})=> id == toFindId)
    }

    getCategories(){
        return [...DATA.categories];
    }

    search(title , category , offset) /*{offset , length , data}*/{
        let query =  [...DATA.articles]
        if(title){
            query = query.filter((item)=> item.title.toLowerCase().includes(title.toLowerCase()))
        } 
        // search by category id
        if(category && query != null){
            query = query.filter((item)=> parseInt(item.sourceID) == parseInt(category))
        }

       return {
           data:  [...query.splice(offset , PER_PAGE)],
           offset,
           total:DATA.articles.length,
           canLoadMore: DATA.articles.length > offset
       }
    }
    // whereCategory(categoryId){

    //     // reset offset when filter data change
    //     if(this.categoryId != categoryId){
    //         this.offset = 0
    //     }


    //     if(categoryId){
    //         this.categoryId = categoryId
    //     }

    //     return this
    // }

    // whereTite(title){
    //     // reset offset when filter data change
    //     if(this.title != title){
    //         this.offset = 0
    //     }

    //     if(title){
    //         this.title = title
    //     }
    //     return this
    // }

    // perform(loadMore = false){
    //     let query = null
    //     // search by title
        // if(this.title != null){
        //     query = this.data.articles.filter((item)=> item.title.toLowerCase().includes(this.title.toLowerCase()))
        // } 
        // // search by category id
        // if(this.categoryId != null){
        //     query =query.filter((item)=> parseInt(item.sourceID) == parseInt(this.categoryId))
        // }

    //     // check if the loadMore flag set as paginate
    //     if(loadMore){
    //         this.offset += PER_PAGE
    //     }

    //     // the user has not entered any search queries
    //     if(query == null){
    //         query = this.data.articles
    //     }

    //     // check if can load more 
    //     this.articles =  query.splice(this.offset , PER_PAGE);
    //     console.log('this.articles',this.articles)
    //     return this
    // }

    // canLoadMore(){
    //     if(this.articles.length < this.data.articles.length){
    //         return true;
    //     }
    //     return false;
    // }
}


export default News;