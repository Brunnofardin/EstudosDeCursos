let div = [...document.getElementsByTagName('div')]


div.map((el,i)=>{
    el.style.cursor='pointer'
    el.style.fontSize='1.2em'
    el.style.lineHeight='28px'
    el.addEventListener('click',()=>{
        console.log(el)
        el.style.color='blue'
        el.style.display='block'
        el.style.textAlign='center'
        el.style.lineHeight='32px'
        el.style.fontFamily='arial,helvética,sans-serif'
        el.style.fontSize='1.3em'

    })
    
})
