var express = require('express');
var router = express.Router();
var gamesModel = require('../models/gamesModel');

/*VER ALGUNS JOGOS NA PÁGINA PRINCIPAL*/

router.get('/allgames', async function(req, res, next) {

    let result = await gamesModel.getGames();
    res.status(result.status).send(result.data);
  
});

  
/*router.get('/allgeneros', async function(req, res, next) {

    let result = await gamesModel.getAllGeneros();
    res.status(result.status).send(result.data);
  
});*/

router.get('/games/genero/:idgenero', async function(req, res, next) {

    let idgenre = req.params.idgenero;
    console.log("Retrieving games with id " + idgenre);
    let result = await gamesModel.getGamesFromGenre(idgenre);
    res.status(result.status).send(result.data);

});

//FILTRAR JOGOS POR PLATAFORMA
  
router.get('/games/plataforma/:idplataforma', async function(req, res, next) {

    let idplataforma = req.params.idplataforma;
    console.log("Retrieving games with id " + idplataforma);
    let result = await gamesModel.getGamesFromPlatform(idplataforma);
    res.status(result.status).send(result.data);

});

//FILTRAR JOGOS PELOS MAIS RECENTES (DATA DE LANÇAMENTO)

router.get('/games/lancamento/recentes', async function(req, res, next) {

    let idplataforma = req.params.idplataforma;
    console.log("Retrieving games with id " + idplataforma);
    let result = await gamesModel.getGamesFromPlatform(idplataforma);
    res.status(result.status).send(result.data);

});

//FILTRAR JOGOS PELOS MAIS ANTIGOS (DATA DE LANÇAMENTO)

router.get('/games/lancamento/antigos', async function(req, res, next) {

    let idplataforma = req.params.idplataforma;
    console.log("Retrieving games with id " + idplataforma);
    let result = await gamesModel.getGamesFromPlatform(idplataforma);
    res.status(result.status).send(result.data);

});

//ADICIONAR JOGO Á WISHLIST DO UTILIZADOR 

router.post('/addgamewishlist/:idutilizador/:idjogo', async function(req, res, next) {
    let utilizador_id = req.params.idutilizador;
    let jogo_id = req.params.idjogo;
    //let newBuyGame = req.body;
    //console.log("[usersRoutes] Saving user " + JSON.stringify(newUser));
    let result = await gamesModel.saveGameWishlist(utilizador_id, jogo_id);
    res.status(result.status).send(result.result);
  });

  //ADICIONAR JOGO Á WISHLIST DO UTILIZADOR 

  router.post('/insertnewwishlistgame', async function(req, res, next) {
    let newWishlistGame = req.body;
    //console.log("[usersRoutes] Saving user " + JSON.stringify(newUser));
    let result = await gamesModel.saveWishlistGame(newWishlistGame);
    res.status(result.status).send(result.result);
  });


//ADICIONAR JOGO AOS FAVORITOS DO UTILIZADOR (TERMINAR AMANHÃ)

router.post('/addgamefavorites/:idutilizador/:idjogo', async function(req, res, next) {
  let utilizador_id = req.params.idutilizador;
  let jogo_id = req.params.idjogo;
  //let newBuyGame = req.body;
  //console.log("[usersRoutes] Saving user " + JSON.stringify(newUser));
  let result = await gamesModel.saveGameFavoritos(utilizador_id, jogo_id);
  res.status(result.status).send(result.result);
});

//VERIFICAR COMPRA PARA ADICIONAR AOS FAVORITOS

router.get('/verifygame/:idutilizador/:idjogo', async function(req, res, next) {

  let idutilizador = req.params.idutilizador;
  let idjogo = req.params.idjogo;
  console.log("Retrieving games with id " + idutilizador + " and game with id: " + idjogo);
  let result = await gamesModel.getGamesVerify(idutilizador, idjogo);
  res.status(result.status).send(result.data);

});

//COMPRAR JOGO (ADQUIRIR JOGO)

router.post('/addgame/:idutilizador/:idjogo', async function(req, res, next) {
    let utilizador_id = req.params.idutilizador;
    let jogo_id = req.params.idjogo;
    //let newBuyGame = req.body;
    //console.log("[usersRoutes] Saving user " + JSON.stringify(newUser));
    let result = await gamesModel.saveGame(utilizador_id, jogo_id);
    res.status(result.status).send(result.result);
  });

  //FILTRAR JOGOS POR LOJA (TERMINAR AMANHA)

  router.get('/gameswishlist/:idutilizador', async function(req, res, next) {

    let idutilizador = req.params.idutilizador;
    console.log("Retrieving games with id " + idutilizador);
    let result = await gamesModel.getGamesWishlist(idutilizador);
    res.status(result.status).send(result.data);

});

  //GET DOS JOGOS FAVORITOS 

  router.get('/gamesfavorite/:idutilizador', async function(req, res, next) {

    let idutilizador = req.params.idutilizador;
    console.log("Retrieving games with id " + idutilizador);
    let result = await gamesModel.getGamesFavorito(idutilizador);
    res.status(result.status).send(result.data);

});

  //GET DOS JOGOS DA WISHLIST

  router.get('/gameswishlist/:idutilizador', async function(req, res, next) {

    let idutilizador = req.params.idutilizador;
    console.log("Retrieving games with id " + idutilizador);
    let result = await gamesModel.getGamesWishlist(idutilizador);
    res.status(result.status).send(result.data);

});

  //APAGAR JOGOS DA WISHLIST

  router.delete('/gamesfavorite/delete/:idutilizador/:idgame', async function(req, res, next){

    let id_utilizador = req.params.idutilizador;
    let id_game = req.params.idgame;

    let result = await gamesModel.deleteFavoriteGame(id_utilizador, id_game);
    res.status(result.status).send(result.data);

});

//ADICIONAR UM JOGO (TESTE)

router.post('/insertnewgame', async function(req, res, next) {
  let newGame = req.body;
  //console.log("[usersRoutes] Saving user " + JSON.stringify(newUser));
  let result = await gamesModel.saveGame(newGame);
  res.status(result.status).send(result.result);
});


  //APAGAR JOGOS DOS FAVORITOS

  router.delete('/gameswishlist/delete/:idutilizador/:idgame', async function(req, res, next){

    let id_utilizador = req.params.idutilizador;
    let id_game = req.params.idgame;

    let result = await gamesModel.deleteWishlistGame(id_utilizador, id_game);
    res.status(result.status).send(result.data);

});

  // FILTRAR JOGOS POR RANKING (ASCENDENTE & DESCENDENTE)

  router.get('/gamesranking/ascendente', async function(req, res, next) {

    let result = await gamesModel.getGamesRankingAsc();
    res.status(result.status).send(result.data);

});

router.get('/gamesranking/descendente', async function(req, res, next) {

    let result = await gamesModel.getGamesRankingDesc();
    res.status(result.status).send(result.data);

});

  //MOSTRAR DETALHES DE UM JOGO (REQUISITOS, PLATAFORMAS, GENEROS, LOJAS, DESCRICAO, RANKING, ETC).

  router.get('/gamesdetails/:idjogo', async function(req, res, next) {

    let idjogo = req.params.idjogo;
    console.log("Retrieving games with id " + idjogo);
    let result = await gamesModel.getGamesDetails(idjogo);
    res.status(result.status).send(result.data);

});

  //MOSTRAR DETALHES DO JOGADOR (JOGOS ADQUIRIDOS MAIS RECENTEMENTE, PLATAFORMAS QUE SEGUE, QUANTOS JOGOS FAVORITOS TEM, QUANTOS JOGOS TEM NA WISHLIST, EMAIL E USERNAME DA CONTA)

  // JOGOS ADQUIRIDOS RECENTEMENTE POR UM UTILIZADOR


  // PLATAFORMAS QUE SEGUE


  // QUANTOS FAVORITOS TEM (UTILIZANDO COUNT)

  // QUANTOS JOGOS TEM NA WISHLIST (UTILIZANDO COUNT)

  //QUANTOS JOGOS TEM NOS FAVORITOS (UTILIZANDO COUNT)

  



  module.exports = router;
