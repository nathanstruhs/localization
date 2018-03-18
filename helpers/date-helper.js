module.exports = {
  getCurrentDateAndTime: function() {
    var date = new Date();
    var datetime = date.getDate() + "/"
                   + (date.getMonth()+1)  + "/"
                   + date.getFullYear() + " @ "
                   + date.getHours() + ":"
                   + (date.getMinutes() < 10 ? '0' : '') +  date.getMinutes();
    return datetime;
  }
}
