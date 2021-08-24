

var stockList = []


document.getElementById('Add').addEventListener('click',()=>{
    var stockText = document.getElementById('stockText')
    stockList.push(stockText.value)
    console.log(stockList)
    adding()
    // deleting()
})
var count = 0
function adding(){
    

    var li = document.createElement('li')
    li.className = 'text'
    
    var liText = document.createTextNode(stockText.value)
    li.appendChild(liText)
    
    document.getElementById('stockList').appendChild(li)

    var del = document.createElement('button')
    del.className = 'delete'
    del.appendChild(document.createTextNode('X'))
    li.appendChild(del)
    var delButtons = document.querySelectorAll('.delete')
    console.log(delButtons)
    delButtons.forEach((deleteStock) =>{
        deleteStock.addEventListener('click',(event)=>{
            console.log('hi')
            var stockLi = event.target.parentElement
            console.log(stockLi)
            document.getElementById('stockList').removeChild(stockLi)
            stockList.pop(stockText)
            console.log(stockList)
            count++;
            console.log(count)
        })
    })
}
// function deleting(){
    
    
// }


