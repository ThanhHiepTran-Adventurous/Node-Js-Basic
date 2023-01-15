import connection from '../configs/connectDB';

let getHomepage = (req, res) => {
    //viết login nơi đây
    let data = [];
    connection.query(
        'SELECT * FROM `users`',
        function (err, results, fields) {
            results.map((row) => {
                data.push({
                    id: row.id,
                    email: row.email,
                    address: row.address,
                    firstName: row.firstName,
                    lastName: row.lastName
                })

            });
            console.log('>>>>>>>>>>>data inside: ', data)
            return res.render('index.ejs', { dataUser: JSON.stringify(data) });
        });

    // console.log('>>>>>>>>>>>check data: ', typeof (data), JSON.stringify(data))
    //để ngoài đây sẽ bị dính bất đồng bộ
}

//export function để sử dụng ở nơi kshác
module.exports = {
    getHomepage
}