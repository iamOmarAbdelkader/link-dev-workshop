import React , {useMemo} from 'react'
import moment from 'moment'
export default function useParseNewsDate(prop){
    const date = useMemo(()=>{
        return moment(new Date(prop))
      },[prop , moment])
    return date
}