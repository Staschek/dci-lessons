function easyHTTP(){
    this.http = new XMLHttpRequest()
}

//Make an HTTP GET Request
easyHTTP.prototype.get = function (url, error, success) {
this.http.open('GET', url, true);
// let that = this // ES5 workaround
this.http.onload = () => {
    if(this.http.status === 200){
        //that.http.status
        //that.http.responseText


       // let response = JSON.parse(this.http.responseText)
      //  console.log(response)
        success('Load done: ' + this.http.responseText)
        }
    else{
    error('Failure!!')
    }
}
this.http.send()
}


//Make an HTTP POST Request
//Make an HTTP PUT Request
//Make an HTTP DELETE Request

