function abrirNav(){
    document.getElementById("menuOculto").style.width="250px";
    document.getElementById("corpoPrincipal").style.marginLeft="250px";
}
function fecharNav(){
    document.getElementById("menuOculto").style.width="0";
    document.getElementById("corpoPrincipal").style.marginLeft="0";
}
document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                var targetOffset = targetElement.offsetTop;

                // Scroll suave
                window.scrollTo({
                    top: targetOffset,
                    behavior: 'smooth'
                });
            }
        });
    });
});