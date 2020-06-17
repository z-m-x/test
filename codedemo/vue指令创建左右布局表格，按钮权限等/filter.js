import moment from 'moment'
/* 
時間過濾 
value 傳入的初始數據
format  想要的格式
引用方法：組件中使用 {{變量|timeFormat("YYYY-MM-DD hh:mm:ss")}}
*/ 
const timeFormat = (value, format) => {
    return moment(value).format(format);
};
 
export {
    timeFormat
}