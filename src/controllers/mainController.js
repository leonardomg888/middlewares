module.exports = {
    index : (req,res) => {
        return res.render('index')
    },

    contact : (req,res) => {
        return res.render('contact')
    },

    about : (req,res) => {
        return res.render('about' )
    },

    services : (req,res) => {
        return res.render('services')
    },
   admin : (req,res) => {
        return res.render('admin',{
    user : req.query.user
        })
    },
    login : (req,res) => {
        return res.render('login',{
            msg:req.query.error ? 'no tienes los privilegios para ingresar ': null
        })
    },


}