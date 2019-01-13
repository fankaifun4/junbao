import {format} from 'date-fns'
export  default {
  formatTimeStr(val,type='MM-DD'){
    let time = format(val,type)
    return time
  }
}
