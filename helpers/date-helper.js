module.exports = {
  getCurrentDateAndTime: function() {
    var date = new Date();
    var datetime = (date.getMonth()+1) + "/"
                   + date.getDate() + "/"
                   + date.getFullYear() + " at "
                   + date.getHours() + ":"
                   + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    return datetime;
  }
}
