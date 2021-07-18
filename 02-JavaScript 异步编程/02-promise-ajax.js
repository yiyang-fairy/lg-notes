//Promise 方式 的AJAX

function ajax(url) {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest() //发送 ajax 请求
        xhr.open("GET", url)
        xhr.responseType = 'json' //相应类型为json ， 请求过后拿到json对象而不是字符串
        xhr.onload = function() {
            if (this.status === 200) {
                resolve(this.response)
            } else {
                reject(new Error(this, statusText))
            }
        }
        xhr.send()
    })
}

ajax("/api/users.json").then(
    function(res) {
        console.log(res)
    },
    function(error) {
        console.log(error)
    }
)