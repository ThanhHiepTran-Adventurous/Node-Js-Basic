import connection from '../configs/connectDB';

//async: việc dùng async ở đầu hàm thì nó giúp đây là 1 function bất đồng bộ
let getHomepage = async (req, res) => {
    //viết login nơi đây
    let data = [];
    // connection.query(
    //     'SELECT * FROM `users`',
    //     function (err, results, fields) {
    //         results.map((row) => {
    //             data.push({
    //                 id: row.id,
    //                 email: row.email,
    //                 address: row.address,
    //                 firstName: row.firstName,
    //                 lastName: row.lastName
    //             })

    //         });
    //         console.log('>>>>>>>>>>>data inside: ', data)
    //         //return res.render('index.ejs', { dataUser: data, test: 'abc string test' });
    //     });

    const [rows, fields] = await connection.execute('SELECT * FROM `users` ');
    return res.render('index.ejs', { dataUser: rows, test: 'abc string test' });
    // console.log('>>>>>check rows: ', rows);
    // console.log('>>>>>>>>>>>check data: ', typeof (data), JSON.stringify(data))
    //để ngoài đây sẽ bị dính bất đồng bộ

}

//export function để sử dụng ở nơi kshác
module.exports = {
    getHomepage
}