var stockList = localStorage.getItem('list')?JSON.parse(localStorage.getItem('list')):[]
var stprice = localStorage.getItem('price')?JSON.parse(localStorage.getItem('price')):[]
var stockText = document.getElementById('stockText')
var stockPrice = document.getElementById('priceValue')

    console.log(stprice)
document.getElementById('Add').addEventListener('click',()=>{
    if(stockList.value ==''|| stockPrice.value =='' ){
        alert('please fill the stock ')
    }
    else{
        stockList.push(stockText.value+' -'+stockPrice.value+' /-')
        stprice.push(stockPrice.value)
        adding()
        
    }
    stockText.value = ''
        stockPrice.value = ''
})

function adding(){

    var li = document.createElement('li')
    li.className = 'text'
    li.id = stockPrice.value
        
    var liText = document.createTextNode(stockText.value+' -')
        li.appendChild(liText)

    var price = document.createElement('p')
    price.className='value'

    var priceNum = document.createTextNode(stockPrice.value+"/-")
        price.appendChild(priceNum)

    li.appendChild(price)

    document.getElementById('stockList').appendChild(li)

    localStorage.setItem('list',JSON.stringify(stockList))
    localStorage.setItem('price',JSON.stringify(stprice))

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


document.getElementById('sort').addEventListener('click',()=>{
        stprice.sort((a,b)=> {return a-b})
        stprice.forEach(stp=>{
            document.getElementById('stockList').appendChild(document.getElementById(stp))
        })
})
var stored = JSON.parse(localStorage.getItem('list'))
var strPrice = JSON.parse(localStorage.getItem('price'))
    for(let i=0;i<stored.length;i++){
        var li = document.createElement('li')
        li.className = 'text'
        li.id = strPrice[i]

        console.log(li.id)
        var liText = document.createTextNode(stored[i])
        li.appendChild(liText)
        // var price = document.createElement('p')
        // price.className='value'
    
        // var priceNum = document.createTextNode(strPrice[i])
        //     price.appendChild(priceNum)
    
        // li.appendChild(price)
    document.getElementById('stockList').appendChild(li)

    var del = document.createElement('button')
    del.className = 'delete'
    del.appendChild(document.createTextNode('X'))
    li.appendChild(del)
    var delButtons = document.querySelectorAll('.delete')
    delButtons.forEach((deleteStock) =>{
        deleteStock.addEventListener('click',(event)=>{
            var stockLi1 = event.target.parentElement
            document.getElementById('stockList').removeChild(stockLi1)
            stockList.pop(stockText)
            localStorage.setItem('list',JSON.stringify(stockList))
            console.log(stockList)
        })
    })
}



