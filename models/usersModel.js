const { response } = require("express");
var pool = require("./connection");
var brcypt = require('bcrypt');
var salt = 10;

module.exports.getUsers = async function() {
    try {
        let sql = "select * from utilizador";
        let result = await pool.query(sql);
        let users = result.rows;
        console.log("[usersModel.getUsers] users = " + JSON.stringify(users));
        return { status: 200, data: users };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.saveUser = async function(user) {
    //console.log("[usersModel.saveUser] user = " + JSON.stringify(user));
     //checks all fields needed and ignores other fields
    /*if (typeof user != "object" || failUser(user)) {
        if (user.errMsg)
            return { status: 400, data: { msg: user.errMsg } };
        else
            return { status: 400, data: { msg: "Malformed data" } };
    }
    let password = brcypt.hashSync(user.user_password, salt);*/
    try {

        let sql =
            "INSERT " +
            "INTO utilizador " +
            "(utilizador_name, utilizador_password, utilizador_email, utilizador_dinheiro, utilizador_pass) " +
            "VALUES ($1, $2, $3, $4, $5) " +
            "RETURNING utilizador_id";

            //console.log(user.user_name + "|" + user.user_password + "|" + user.user_morada + "|" + user.user_email + "|" + user.user_points + "|" + user.user_admin + "|" + user.user_pt + "|" + user.user_nutri);
        let result = await pool.query(sql, [user.utilizador_name, user.utilizador_password, user.utilizador_email, user.utilizador_dinheiro, user.utilizador_pass]);
        
        return { status: 200, result: result };
    } catch (err) {

        console.log(err);
        return { status: 500, result: err };
    }
}

/*module.exports.saveUser = async function(user) {
    //console.log("[usersModel.saveUser] user = " + JSON.stringify(user));
     checks all fields needed and ignores other fields
    if (typeof user != "object" || failUser(user)) {
        if (user.errMsg)
            return { status: 400, data: { msg: user.errMsg } };
        else
            return { status: 400, data: { msg: "Malformed data" } };
    }
    //let password = brcypt.hashSync(user.user_password, salt);

    
    try {

        let sql =
            "INSERT " +
            "INTO utilizador " +
            "(utilizador_name, utilizador_password, utilizador_email, utilizador_dinheiro) " +
            "VALUES ($1, $2, $3, $4) " +
            "RETURNING utilizador_id";

            //console.log(user.user_name + "|" + user.user_password + "|" + user.user_morada + "|" + user.user_email + "|" + user.user_points + "|" + user.user_admin + "|" + user.user_pt + "|" + user.user_nutri);
        let result = await pool.query(sql, [user.utilizador_name, user.utilizador_password, user.utilizador_email, 500]);
        
        return { status: 200, result: result };
    } catch (err) {

        console.log(err);
        return { status: 500, result: err };
    }
}

/*Login de Utilizador*/

//PEDIR AJUDA
module.exports.authUser = async function(uti_name){

    try {
        let sql = "SELECT * FROM utilizador where user_name = $1";

        let result = await pool.query(sql,[uti_name.user_name]);

        console.log("authUser.result.rows = " + JSON.stringify(result.rows));

        let passwordb = result.rows[0].user_password;

        console.log("authUser.passwordb = " + JSON.stringify(passwordb));
        console.log("authUser.uti_name.user_password = " + JSON.stringify(uti_name.user_password));

        let valor = (uti_name.user_password == passwordb);

        console.log("authUser.valor = " + JSON.stringify(valor));

        //console.log("[usersModel.getUserDados] dados_utilizador = " + JSON.stringify(dadosfound));

        if(result.rows.length > 0 && valor)
          return { status: 200, result: result.rows[0]};
            //return { status: 200, result: result.rows[0]};
        else return { status: 401, result: {msg:' wrong email or passsword'}};
        
    } catch (err) {
        console.log(err);
        return { status: 500, result: {msg: 'wrong email or passsword'}};
    }

    /*
       let sql = "SELECT * FROM utilizador " + "WHERE utilizador.user_name = " + uti_name + " AND utilizador.user_password = " + uti_pass; 
       let result = await pool.query(sql);
       if(result.rows > 0){
         
        response.send('/mainpage.html');
        response.end();
       } else {
           console.log("no");
           response.end();
       }
       */

    

}

module.exports.getUserDetails = async function(user_id) {
    try {
        let sql = "SELECT utilizador.utilizador_name, utilizador.utilizador_email, utilizador.utilizador_dinheiro FROM utilizador WHERE utilizador.utilizador_id = " + user_id;
        let result = await pool.query(sql);
        let userfound = result.rows;
        console.log("[gamesModel.getGamesFromGenre] gamesfavorite = " + JSON.stringify(userfound));
        return { status: 200, data: userfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

//LOGIN USER

module.exports.authUser = async function(uti_name){

    try {
        let sql = "SELECT * FROM utilizador where utilizador_name = $1";

        let result = await pool.query(sql,[uti_name.utilizador_name]);

        console.log("authUser.result.rows = " + JSON.stringify(result.rows));

        let passwordb = result.rows[0].utilizador_password;

        console.log("authUser.passwordb = " + JSON.stringify(passwordb));
        console.log("authUser.uti_name.user_password = " + JSON.stringify(uti_name.utilizador_password));

        let valor = (uti_name.utilizador_password == passwordb);

        console.log("authUser.valor = " + JSON.stringify(valor));

        //console.log("[usersModel.getUserDados] dados_utilizador = " + JSON.stringify(dadosfound));

        if(result.rows.length > 0 && valor)
          return { status: 200, result: result.rows[0]};
            //return { status: 200, result: result.rows[0]};
        else return { status: 401, result: {msg:' wrong email or passsword'}};
        
    } catch (err) {
        console.log(err);
        return { status: 500, result: {msg: 'wrong email or passsword'}};
    }


}
