//observerInterface
class Server {
    constructor(){

    }

    addUser(user){};
    removeUser(user){};
    update_users(){};
}

class GameServer extends Server{
    constructor(){
        super();
        this.usersNum = 0;
        this.users = new Array();
    }

    addUser(user){
        this.users.push(user);
        this.usersNum++;

        this.update_users(this.usersNum);
    }

    removeUser(user){
        const userIndex = this.users.indexOf(user);
        this.users.splice(userIndex,1);
        this.usersNum--;
    }

    update_users(usersNum){
        this.users.forEach((user) => {
            user.update(usersNum);
        });
    }
}

//observer 
class User {
    constructor(){};
    update(usersNum){};
}

class Player extends User {
    constructor(Server){
        super();
        
        Server.addUser(this);
    }

    update(usersNum){
        console.log(`GameServer Players: ${usersNum}`);
    }
}

module.exports = function(){
    const m_gameServer = new GameServer();
    for(let i = 0; i < 10; i++)
    {
        let m_player = new Player(m_gameServer);
    }
}

