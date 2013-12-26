/**
 * GameController
 *
 * @module    :: Controller
 * @description :: Contains logic for handling requests.
 * @method ::
 *    ColorCreate
 *    (X)GameCreate
 *    (X)GameFind
 *    (X)GameStart
 *    (X)GameMove
 *    PlayerList
 * @api::
 *    start
 *    move
 *    create_fause(debug)
 */
var ColorCreate = function (){
  return '#' + (function co(lor){   return (lor +=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])&& (lor.length == 6) ?  lor : co(lor); })('');
};

/*
var GameCreate = function (username, callback){
  Game.create({
    username: username,
    posX:'1',
    posY:'1',
    posZ:'1',
    color: ColorCreate(),
    chat: 'no_chat'
  }).done(function (err, data){
    console.log(data);
    callback(data);
  });
};
*/
/*
var GameFind = function (username, callback){
  Game.find(
    {
      username: username
    }).done(
    function (err, data){
      if(err){
        console.log('err '+err);
        callback(err);
      }
      else{
        console.log('data '+data);
        callback(data);
      }
    }
  );

};
*/
/*
var GameMove = function (username, x, y, z, callback){
  GameFind(username,function(data){
    var GameFindData = data;
    GameFindData.posX = x;
    GameFindData.posY = y;
    GameFindData.posZ = z;
    Game.update(
        GameFindData.id,
        GameFindData,
        function(){}
      ).done(
        function(err, data){
          if(err) {
            callback();
          }
          else{
            callback();
          }
    });
  });
}
*/
/*
var GameStart = function (username, callback){
  res.view("home/index.ejs", {
      username: username
    });
}
*/

var PlayerList = function (callback){
  Game.find().done(function (err, data){
    if(err){
      callback("");
    }
    else{
      //console.log(data+"PlayerList");
      callback(data);
    }
  })
};






module.exports = {
  
  _config: {},

  start: function (req, res){
    var username = req.body.username;

    if(!username||username === ""){
      return res.redirect("/login");
    }
    //user
    
    Game.find().where({username: username}).exec(function (err, user){
      if(user == ''){
        //User.create({username: username}).done();
        Game.create({
          username: username,
          posX: Math.floor((Math.random()*10)+1),
          posY: 0.5,
          posZ: Math.floor((Math.random()*10)+1),
          colorR: Math.floor((Math.random()*255)+1),
          colorG: Math.floor((Math.random()*255)+1),
          colorB: Math.floor((Math.random()*255)+1),
          chat: 'no_chat'
        }).done(function(err,data){
          if(!err){
            console.log("GameCreate "+data.username);
            res.view("home/tq.ejs", {
              username: data.username,
              colorR: data.colorR,
              colorG: data.colorG,
              colorB: data.colorB,
              posX: data.posX,
              posZ: data.posZ,
              chat: data.chat,
              load: Math.floor((Math.random()*99999)+1)
            });
          }
          else{
            return res.send("404 DB:false");
          }
        });
      }
      else{
        console.log("GameFind "+username);
        Game.findOneByUsername(username).done(function(err,data){
          //console.log( Game );
          res.view("home/tq.ejs", {
            username: data.username,
            colorR: data.colorR,
            colorG: data.colorG,
            colorB: data.colorB,
            posX: data.posX,
            posZ: data.posZ,
            chat: data.chat,
            load: Math.floor((Math.random()*99999)+1)
          });
        });
      }
    });
    
    /*
    console.log("username "+username);

    Game.find().where({username: username}).exec(function(err, user){
      console.log("err '"+err+"'||"+"user '"+user+"'");
      if(user==''){
        //console.log(err+" err username "+username);
        res.view("home/tq.ejs", {
          username: "err"
        });
      }else{
        //console.log(user+" user username "+username);
        res.view("home/tq.ejs", {
          username: "user"
        });
      }
    });
    */
  },

  move: function(req, res){
    var param = req.param('message');
    //console.log(param);

    Game.findOneByUsername(param.username).done(function(err,data){
      if(data){
        var GameFindData = data;
        GameFindData.posX = param.posX;
        //GameFindData.posY = param.posY;
        GameFindData.posZ = param.posZ;
        Game.update(
            GameFindData.id,
            GameFindData
          ).done(
            function(err, data){
              if(err) {
                return res.send("404 DB:false");
              }
              else{
                PlayerList(function(data){
                  //console.log(data);
                  res.json({list: data});
                });
              }
            }
        );
      }
    });
  },

  talk: function(req, res){
    var param = req.param('message');
    //console.log(param);

    Game.findOneByUsername(param.username).done(function(err,data){
      if(data){
        var GameFindData = data;
        //GameFindData.posX = param.posX;
        //GameFindData.posY = param.posY;
        GameFindData.chat = param.chat;
        Game.update(
            GameFindData.id,
            GameFindData
          ).done(
            function(err, data){
              if(err) {
                return res.send("404 DB:false");
              }
              else{
                PlayerList(function(data){
                  //console.log(data);
                  res.json({list: data});
                });
              }
            }
        );
      }
    });
  },

  all: function(req, res){
    var param = req.param('message');
    PlayerList(function(data){
      //console.log("param "+param);
      res.json({list: data});
    });
  },

  get_user_info: function(req, res){
    var game_socket = req.socket;
    var game_io = sails.io;
    var param = req.param('message');
    //var param = 'aoma39f508';
    Game.findOneByUsername(param).done(function(err,data){
      //console.log(data);
      res.json({list: data});
      console.log(game_socket+" "+game_io);
    });
  },

  create_fause: function(req, res){
    Game.create({
      username: (function co(lor){   return (lor +=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])&& (lor.length == 6) ?  lor : co(lor); })(''),
      posX: Math.floor((Math.random()*10)+1),
      posY: 0.5,
      posZ: Math.floor((Math.random()*10)+1),
      colorR: Math.floor((Math.random()*255)+1),
      colorG: Math.floor((Math.random()*255)+1),
      colorB: Math.floor((Math.random()*255)+1),
      chat: 'no_chat'
    }).done(function(err,data){
      if(!err){
        return res.send(true);
      }
      else{
        return res.send(false);
      }
    });
  },

  delete_all: function(req, res){
    Game.destroy().done(function(err, data){
      if(err){
        return res.redirect('/game');
      }
      else{
        return res.redirect('/game');
      }
    });
  }
};