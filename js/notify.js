module.exports = (a,b) => {

  var options = [
    {
      title: a,
      body: b
    }]

  return notifyThem =  new Notification(options[0].title, options[0]);
};
