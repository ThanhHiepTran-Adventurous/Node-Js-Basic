// import Pool from 'mysql2/typings/mysql/lib/Pool';
import connection from '../configs/connectDB';
import pool from '../configs/connectDB';
//async: việc dùng async ở đầu hàm thì nó giúp đây là 1 function bất đồng bộ
let getHomepage = async (req, res) => {
    //viết login nơi đây
    let data = [];

    const [rows, fields] = await connection.execute('SELECT * FROM `users` ');
    let check = await connection.execute('SELECT * FROM `users` ');
    return res.render('index.ejs', { dataUser: rows, test: 'abc string test' });
    // console.log('>>>>>check rows: ', rows);
    // console.log('>>>>>>>>>>>check data: ', typeof (data), JSON.stringify(data))
    //để ngoài đây sẽ bị dính bất đồng bộ

}


let getDetailPage = async (req, res) => {
    let userId = req.params.id;
    let user = await pool.execute(`select * from users where id = ?`, [userId]);

    // return res.send("helo")
    return res.send(JSON.stringify(user[0]))
}

let createNewUser = async (req, res) => {
    console.log('check req: ', req.body);
    //destructer cua javascirpt
    let { firstName, lastName, email, address } = req.body;
    await pool.execute('INSERT INTO users(firstName, lastName, email, address) VALUES (?, ?, ?, ?)',
        [firstName, lastName, email, address]);
    return res.redirect('/api/v1')
}

//bản chất của js là bất đồng bộ
let deleteUser = async (req, res) => {
    let userId = req.body.userId;

    await pool.execute('delete from users where id = ?', [userId]);
    return res.redirect('/api/v1');
}

let getEditPage = async (req, res) => {
    let id = req.params.id;
    let [user] = await pool.execute('select * from users where id = ?', [id])
    return res.send(JSON.stringify(user));
}

//export function để sử dụng ở nơi kshác
module.exports = {
    getHomepage, getDetailPage, createNewUser, deleteUser, getEditPage
};