const authorize = (req, res, next) => {
    const {user} = req.query
    //checking the user name
    //if name is john then we authorized him
    //and will pass handle to next function
    //else send 401 code and unauthorized string
    //will not let handle to pass to next function
    if(user === 'john'){
        console.log("authorized")
        //attaching data to req object
        req.user = {name : 'john', id:3}
        next()
    } else {
        res.status(401).send("Unauthorized")
    }
}

module.exports = authorize