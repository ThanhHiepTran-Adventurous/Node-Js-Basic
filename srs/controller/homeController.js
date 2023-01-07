

let getHomepage = (req, res) => {
    //viết login nơi đây
    return res.render('index.ejs');
}

//export function để sử dụng ở nơi kshác
module.exports = {
    getHomepage
}