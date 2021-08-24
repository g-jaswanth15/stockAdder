var stockList = localStorage.getItem('list')?JSON.parse(localStorage.getItem('list')):[]

document.getElementById('Add').addEventListener('click',()=>{
    var stockText = document.getElementById('stockText')
    stockList.push(stockText.value)
    console.log(stockList)
    adding()
})

function adding(){

    var li = document.createElement('li')
    li.className = 'text'
        
    var liText = document.createTextNode(stockText.value)
        li.appendChild(liText)
    
    document.getElementById('stockList').appendChild(li)

    localStorage.setItem('list',JSON.stringify(stockList))

    var del = document.createElement('button')
    del.className = 'delete'
    del.appendChild(document.createTextNode('X'))
    li.appendChild(del)

    var delButtons = document.querySelectorAll('.delete')
    delButtons.forEach((deleteStock) =>{
        deleteStock.addEventListener('click',(event)=>{
            var stockLi = event.target.parentElement
            document.getElementById('stockList').removeChild(stockLi)
            stockList.pop(stockText)
            localStorage.setItem('list',JSON.stringify(stockList))
        })
    })
}

stored = JSON.parse(localStorage.getItem('list'))

    stored.forEach(store=>{
        var li = document.createElement('li')
        li.className = 'text'
        var liText = document.createTextNode(store)
        li.appendChild(liText)
     
    document.getElementById('stockList').appendChild(li)

    var del = document.createElement('button')
    del.className = 'delete'
    del.appendChild(document.createTextNode('X'))
    li.appendChild(del)
    var delButtons1 = document.querySelectorAll('.delete1')
    delButtons1.forEach((deleteStock) =>{
        deleteStock.addEventListener('click',(event)=>{
            var stockLi1 = event.target.parentElement
            document.getElementById('stockList').removeChild(stockLi1)
            stockList.pop(stockText)
            localStorage.setItem('list',JSON.stringify(stockList))
        })
    })
})



