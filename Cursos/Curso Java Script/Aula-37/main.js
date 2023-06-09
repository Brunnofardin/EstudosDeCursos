var div = document.getElementsByTagName('div')[0]
var p = [...document.getElementsByTagName('p')]

p.map((el)=>{
    el.addEventListener('click',(evt)=>{
        evt.stopPropagation()
        
    })
})

div.addEventListener('click',(evt)=>{
    console.log(evt.target)

})