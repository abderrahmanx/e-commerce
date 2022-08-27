const img1=document.querySelector('.img-1')
const img2=document.querySelector('.img-2')
const img3=document.querySelector('.img-3')
const img4=document.querySelector('.img-4')
const mainimg=document.querySelector('.main-img')
const popout=document.querySelector('.poped-out')
const overlay=document.querySelector('.overlay')
const popedimg1=document.querySelector('.poped-img-1')
const popedimg2=document.querySelector('.poped-img-2')
const popedimg3=document.querySelector('.poped-img-3')
const popedimg4=document.querySelector('.poped-img-4')
const closeicon=document.querySelector('.close')
const popedmainimg=document.querySelector('.poped-main-img')
const add=document.querySelector('.add')
const mines=document.querySelector('.mines')
const counter=document.querySelector('.num')
const cart=document.querySelector('.mycart')
const carticon=document.querySelector('.cart')
const addproduct=document.querySelector('.addtocart')
const price=document.querySelector('.price-one')
const trash=document.querySelector('.trash')
const productcount=document.querySelector('.product-counter')
const rightangel=document.querySelector('.angel-right')
const leftangel=document.querySelector('.angel-left')
const mi=document.querySelector('.mi')
const rightangel1=document.querySelector('.angel-right1')
const leftangel1=document.querySelector('.angel-left1')
const bars=document.querySelector('.bars')
const mi1=document.querySelector('.mi1')
const quitlist=document.querySelector('.quit-list')
const list=document.querySelector('.list')
const listtext=document.querySelector('.list ul')
let trashisther=false
 let allcount =0
let imgnum=1

window.onload=function(){
img1.classList.add('active')
popedimg1.classList.add('active')
  if(window.innerWidth<950)
           {
        cart.innerHTML=`<h3>cart</h3>
        <p class="empty"  style="font-size:1.5rem">your cart is empty</p>`
   
        }
        productcount.classList.add("active")
        productcount.innerHTML=0
}


function selectimg(imgone,imgtwo,imgthree,imgfour){
imgone.classList.add('active')
imgtwo.classList.remove('active')
imgthree.classList.remove('active')
imgfour.classList.remove('active')
mainimg.innerHTML=imgone.innerHTML
}
function selectpopedimg(imgone,imgtwo,imgthree,imgfour){
    
    imgone.classList.add('active')
    imgtwo.classList.remove('active')
    imgthree.classList.remove('active')
    imgfour.classList.remove('active')
    mi.src=`image-product-${imgnum}.jpg`
    }

   function deleteone(){
     
     console.log(allcount)
     if(allcount==0)return
    if(allcount==1)
       {
         productcount.innerHTML=0
        if(window.innerWidth<950)
        {
     cart.innerHTML=`<h3>cart</h3>
     <p class="empty"  style="font-size:1.5rem">your cart is empty</p>`
     allcount=0
     trash.classList.remove('active')
     
     }
     if(window.innerWidth>950)
     {
           cart.innerHTML=`<h3>cart</h3>
           <p  class="empty">your cart is empty</p>`
           allcount=0
           trash.classList.remove('active')
           
          } 
       }
       
      else{
          allcount-=1
          productcount.innerHTML=allcount
      cart.innerHTML=`<h3>cart</h3><div style="display: flex;">
      <div ><img class="cart-img" src="image-product-1.jpg" ></div>
      <div class="cart-text" > <p>Limited Edition Sneakers
     </p><p >$125.00</p><p  class="s" style="margin-left: 10px;opacity: .8;">x${allcount}</p>
     <h1  class="total" style="opacity: 1;" >${allcount*parseFloat(price.innerHTML.replace(/[^\d.-]/g, ''))}.00$</h1></div>
   
    </div>
    <div  class="buy">
    <button  style="margin-left: 7.7vw;">BUY</button></div>`
   }
}

function changeimg(){
   if(imgnum==4)return
    mi.src= `image-product-${imgnum+1}.jpg`
imgnum+=1
switch(imgnum)
{
case 1:selectpopedimg(popedimg1,popedimg2,popedimg3,popedimg4);break;
    case 2: selectpopedimg(popedimg2,popedimg1,popedimg3,popedimg4);break;
        case 3: selectpopedimg(popedimg3,popedimg2,popedimg1,popedimg4);break;
            case 4: selectpopedimg(popedimg4,popedimg2,popedimg1,popedimg3);break;
}
}
function changeimg1(){
    if(imgnum==1)return
     mi.src= `image-product-${imgnum-1}.jpg`
 imgnum-=1
 switch(imgnum)
 {
 case 1:selectpopedimg(popedimg1,popedimg2,popedimg3,popedimg4);break;
     case 2: selectpopedimg(popedimg2,popedimg1,popedimg3,popedimg4);break;
         case 3: selectpopedimg(popedimg3,popedimg2,popedimg1,popedimg4);break;
             case 4: selectpopedimg(popedimg4,popedimg2,popedimg1,popedimg3);break;
 }
 }
 function changeimg2(){
    if(imgnum==4)return
     mi1.src= `image-product-${imgnum+1}.jpg`
 imgnum+=1
 switch(imgnum)
 {
 case 1:selectpopedimg(popedimg1,popedimg2,popedimg3,popedimg4);break;
     case 2: selectpopedimg(popedimg2,popedimg1,popedimg3,popedimg4);break;
         case 3: selectpopedimg(popedimg3,popedimg2,popedimg1,popedimg4);break;
             case 4: selectpopedimg(popedimg4,popedimg2,popedimg1,popedimg3);break;
 }
 }
 function changeimg3(){
     if(imgnum==1)return
      mi1.src= `image-product-${imgnum-1}.jpg`
  imgnum-=1
  switch(imgnum)
  {
  case 1:selectpopedimg(popedimg1,popedimg2,popedimg3,popedimg4);break;
      case 2: selectpopedimg(popedimg2,popedimg1,popedimg3,popedimg4);break;
          case 3: selectpopedimg(popedimg3,popedimg2,popedimg1,popedimg4);break;
              case 4: selectpopedimg(popedimg4,popedimg2,popedimg1,popedimg3);break;
  }
  }



img1.addEventListener('click',()=>
{
selectimg(img1,img2,img3,img4)

})
img2.addEventListener('click',()=>
{
    selectimg(img2,img1,img3,img4)

})
img3.addEventListener('click',()=>
{
    selectimg(img3,img2,img1,img4)

})
img4.addEventListener('click',()=>
{
    selectimg(img4,img2,img3,img1)

})
popedimg1.addEventListener('click',()=>
{
    imgnum=1
selectpopedimg(popedimg1,popedimg2,popedimg3,popedimg4)

})
popedimg2.addEventListener('click',()=>
{ 
     imgnum=2
    selectpopedimg(popedimg2,popedimg1,popedimg3,popedimg4)
  
})
popedimg3.addEventListener('click',()=>
{
    imgnum=3
    selectpopedimg(popedimg3,popedimg2,popedimg1,popedimg4)
    
})
popedimg4.addEventListener('click',()=>
{
    imgnum=4
   selectpopedimg(popedimg4,popedimg2,popedimg1,popedimg3)

})
mainimg.addEventListener('click',()=>
{
    if(window.innerWidth>950)
    {
  popout.classList.add('active') 
overlay.classList.add('active')
closeicon.classList.add('active')
}
})
closeicon.addEventListener('click',()=>{
    popout.classList.remove('active') 
    overlay.classList.remove('active')
    closeicon.classList.remove('active')
})
add.addEventListener('click',()=>{
 
    counter.innerHTML= parseFloat(counter.innerHTML) +1
})

mines.addEventListener('click',()=>{
   if(counter.innerHTML==0) return;
    counter.innerHTML= parseFloat(counter.innerHTML) -1
})
carticon.addEventListener('click',()=>{
  cart.classList.toggle('active')
 if(cart.innerHTML.trim()==`<h3>cart</h3>
 <p style="margin-left:9vw;font-size:clamp(.5rem,1.5vw, 5rem);margin-Top:5vh ">your cart is empty</p>`)
 {
  trash.classList.remove('active')
  }if(allcount!=0){
    trash.classList.toggle('active')
    
  }
 })
 rightangel.addEventListener('click',()=>{
changeimg()
 })
leftangel.addEventListener('click',()=>{
    changeimg1()
 })
 rightangel1.addEventListener('click',()=>{
    changeimg2()
     })
    leftangel1.addEventListener('click',()=>{
        changeimg3()
     })
     bars.addEventListener('click',()=>{
       quitlist.classList.add('active')
       bars.classList.add('active')
list.classList.add('active')
overlay.classList.add('active')
listtext.classList.add('active')
leftangel1.classList.add('active')
     })
     quitlist.addEventListener('click',()=>{
        quitlist.classList.remove('active')
        bars.classList.remove('active')
        list.classList.remove('active')
        overlay.classList.remove('active')
listtext.classList.remove('active')
leftangel1.classList.remove('active')
      })
     
    


addproduct.addEventListener('click',()=>{
 if(counter.innerHTML==0)return
  allcount+=parseFloat(counter.innerHTML) 
   cart.innerHTML=`<h3>cart</h3><div   style="display: flex;">
   <div ><img class="cart-img" src="image-product-1.jpg" ></div>
   <div class="cart-text" > <p>Limited Edition Sneakers
  </p><p >$125.00</p> <div  class="a"  style="    display: flex;
  flex-direction: row;"><p  class="s" style="margin-left: 10px;opacity: .8;">x${allcount}</p>
  <h1  class="total" style="opacity: 1;" >${allcount*parseFloat(price.innerHTML.replace(/[^\d.-]/g, ''))}.00$</h1></div></div>

 </div>
 <div  class="buy">
 <button  style="margin-left: 7.7vw;">BUY</button></div>`
counter.innerHTML=0
if (cart.classList.contains('active'))
trash.classList.add('active')
productcount.classList.add('active')
productcount.innerHTML=allcount
}) 



