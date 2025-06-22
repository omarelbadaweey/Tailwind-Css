// loading Function
{var loading = document.querySelector(".loading");
setTimeout(() =>{
    loading.style.display = "none"
},4000)}

// NavBar Function
{var navList = document.querySelector(".IconNav");
var navBar = document.querySelector(".navBar");
navList.addEventListener("click" , () =>{
    navList.classList.toggle("closeIconNav")
    navBar.classList.toggle("translate-x-[1100px]")
})};

// replace form Function
{var btnForm = document.getElementById("btnForm");
var login = document.querySelector(".login");
var reguster = document.querySelector(".reguster");
var closeForm = document.querySelectorAll(".closeForm");
var toReguster = document.querySelectorAll(".toReguster");
btnForm.addEventListener("click" , () =>{
    login.classList.toggle("scale-0")
    closeForm.forEach( item =>{
        item.addEventListener("click" , () =>{
            login.classList.add("scale-0")
            reguster.classList.add("scale-0")
        })

    })
    toReguster.forEach(item =>{
        item.addEventListener("click" , () =>{
            login.classList.toggle("scale-0")
            reguster.classList.toggle("scale-0")
    })
    })
})}

// show Password Function
{var iconPass = document.querySelectorAll(".iconPass");
var password = document.querySelectorAll(".password");
iconPass.forEach( item =>{
    item.addEventListener("click" , (e) =>{
        item.classList.toggle("ri-eye-line");
        item.classList.toggle("ri-eye-off-line");
            const content = e.target.parentElement.getElementsByClassName("password")[0];
            if (item.classList.contains("ri-eye-line")) {
                content.type = "text";
            }else if (item.classList.contains("ri-eye-off-line")){
                content.type = "password";
            }
    })
});}

// copy code Function
{var copyBtn = document.getElementById("copyBtn");
copyBtn.addEventListener("click", () => {
    // جلب النص من عنصر <code> داخل <pre>
    var code = document.querySelector("#textToCopy code");
    var copied = document.querySelector(".copied");
    var text = code.innerText.trim();
    navigator.clipboard.writeText(text).then(() => {
        copied.classList.remove("scale-0");
        copied.classList.remove("h-0");
        setTimeout(() =>{
            copied.classList.add("scale-0");
            copied.classList.add("h-0"); 
        },2000)
    });
});}

// scroll backTop Function
{ var backTop = document.getElementById("backTop");
    window.addEventListener("scroll", () => {
        if (scrollY > 150) {
            backTop.style.display = "block";
            backTop.addEventListener("click", () => {
                scroll({ top: "0" })
            })
        } else {
            backTop.style.display = "none";
        }
    })
};