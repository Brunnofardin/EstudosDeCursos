



function msg(n){
    let c = 0;
    let t =  new Promise((resolve,reject)=>{
        setTimeout(()=>{
            for(let i=0;i<=n;i++){
                c++

            }
            if(n == c){
                resolve(cont)
            }else{
                reject('erro')
            }
        },2000)  
    })
    return c; 


}
console.log(msg(10))