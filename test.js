const dogrular=['A','D','B','A','C']
const form=document.querySelector('.quiz-form')
const sonuc=document.querySelector('.result')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let puan=0
    const verdigicevap=[form.s1.value, form.s2.value,form.s3.value,form.s4.value,form.s5.value]
    verdigicevap.forEach((cevap, index)=>{
        if(cevap==dogrular[index]){
            puan+=20
        }

    })
   sonuc.querySelector('span').textContent=`%${puan}`
   sonuc.classList.remove('d-none')
   scrollTo(0,0)                          //başa döndüryor

   let tamponpuan=0
   const animasyon=setInterval(()=>{
    sonuc.querySelector('span').textContent=`%${tamponpuan}`
         if(tamponpuan===puan){
            clearInterval(animasyon)
         }else{
            tamponpuan++
         }
   },20)


})