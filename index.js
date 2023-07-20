// 註冊與登入的畫面 
let login=document.getElementById('login');
        let register=document.getElementById('register');
        let form_box=document.getElementsByClassName('form-box')[0];
        let register_box=document.getElementsByClassName('register-box')[0];
        let login_box=document.getElementsByClassName('login-box')[0];

        register.addEventListener('click',()=>{
            form_box.style.transform='translateX(80%)';
            login_box.classList.add('hidden');
            register_box.classList.remove('hidden');
        })
        login.addEventListener('click',()=>{
            form_box.style.transform='translateX(0%)';
            register_box.classList.add('hidden');
            login_box.classList.remove('hidden');
        })

// 點擊user出現註冊與登入的畫面
        let btn=document.querySelector("#user");
        let infoModal=document.querySelector("#infoModal");
        let close=document.querySelector("#close");
        btn.addEventListener("click", function(){
            infoModal.showModal();
        })
        close1.addEventListener("click", function(){
            infoModal.close();
        })
        close2.addEventListener("click", function(){
            infoModal.close();
        })