module.exports = {
    add_weeks(dt, n) {
    return new Date(dt.setDate(dt.getDate() + (n * 7)));      
    },

    getFullDate(d){
        const   getFormatDate = function(val) {
            try{
              if (val.toString().length === 1) {
                val = '0' + val
              }
            }catch(e){
              return val
            }
            return val
        }
        const date = [
            d.getFullYear(),
            ('0' + (d.getMonth() + 1)).slice(-2),
            ('0' + d.getDate()).slice(-2) + ' ' + getFormatDate(d.getHours()) + ':' + getFormatDate(d.getMinutes())
        ].join('-').split(' ')
        return date
    }

  
}