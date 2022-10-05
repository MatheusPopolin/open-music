function handleDarkMode(){
    const buttonDark = document.getElementById("buttonDark");
    const darkModeIcon = document.getElementById("darkModeIcon");
    const html = document.querySelector("html");
    let dmPref = localStorage.getItem('darkmode')

        if(dmPref) {
            html.classList.add('dark');
            darkModeIcon.classList.toggle("darkSelected");
            darkModeIcon.src = "/assets/img/sun.png";
        }

    buttonDark.addEventListener("click", ()=>{
        html.classList.toggle("dark");
        darkModeIcon.classList.toggle("darkSelected");

        dmPref = localStorage.getItem('darkmode');
        
        if(!dmPref) {
            localStorage.setItem('darkmode', true);    
        } 

        if(dmPref) {
            localStorage.removeItem('darkmode');
        }

        if(darkModeIcon.classList.contains("darkSelected")){
            darkModeIcon.src = "/assets/img/sun.png";
        } else{
            darkModeIcon.src = "/assets/img/moon.png"
        }
    });
}
handleDarkMode();
