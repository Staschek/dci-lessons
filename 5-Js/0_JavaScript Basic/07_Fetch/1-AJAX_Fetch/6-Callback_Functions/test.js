let nails = ["rusty nail", "rusty nail", "bent nail", "clean nail"]
let planks = ["splintered plank", "straight plank", "bent plank"]

function clean(item) {
    //your code
    let li = document.createElement('li')
    li.innerText = `I already cleaned ${item}`
    document.body.lastElementChild.insertAdjacentElement('afterend', li) 
  }

function groupAndClean(items, cleaningMethod, done) {
    for ( i = 0; i < items.length; i++) {
        cleaningMethod(items[i])
    }
    
    done()
}

groupAndClean(nails.concat(planks), clean, function() {
    //your code
    let done = document.createElement('p')
    done.innerHTML = '<h3>Ouw that was a lot of Work</h3>'
    //console.log(done)
    document.body.lastElementChild.insertAdjacentElement('afterend', done) 
})



  //////book and library//////

  let book1 = {
      title : 'JavaScript',
      author : 'Brad Pitt'
  }

  let book2 = {
    title : 'JavaScript3',
    author : 'Brad Pitt3'
}

  let library = [book1, book2]

   writeBook = (author, title) => {return {title: title, author: author}}


  function showBooks(item){
    //your code
    for(items in item){
      let li = document.createElement('li')
      li.innerText = `Book:  ${JSON.stringify(item[items])}`
      document.body.lastElementChild.insertAdjacentElement('afterend', li) 
    }

}

  function addBook(author, title, writeBook, showBooks ){
      
    library.push(writeBook(author, title))
    showBooks(library)
  }

  addBook('Jason Stanley', 'OOB for Noobs', writeBook, showBooks)

  console.log(library)