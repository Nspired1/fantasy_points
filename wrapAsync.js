

//function for error handling from async functions
function wrapAsync(fn){
  return function(req, res, next){
    fn(req, res, next).catch(error => next(error))
  }
}

module.exports = wrapAsync;