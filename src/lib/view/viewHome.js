export const viewHome = () => {
  const divHome = document.createElement('div');
    divHome.innerHTML = `
       
          <div id="home">
            <div id="textYug">
              <div id="logo">
              <img src="http://imgfz.com/i/i2tPzH4.png">
              </div>
              <p>Únete al mundo del yoga. Descubre y comparte contenido y trae a tu vida todos sus beneficios.</p>
            </div>
            <div id="containerBtn">
            <a href="#/login" id="btnLogin" class="btns">Iniciar sesión</a>
            <a href="#/register" id="btnRegister" class="btns">Registrarse</a>
            </div>
          </div>
        
    `;
    divHome.setAttribute('id', 'containerHome');  
    return divHome;
};