import {useMemo} from 'react'
import moment from 'moment'
export default function useParseNewsDate(prop){
    const date = useMemo(()=>{
        return moment(new Date(prop))
      },[prop])
    return date
}