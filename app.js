const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/Portafolio/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    let profesion;
    let descripcion;
    let imagen;
    let imagenFondo;
    let Email;
    let telefono;
    let fechNAc;

    if (nombre === "Alejandro") {
        imagen = "https://i.pinimg.com/originals/90/7a/23/907a234d98016f448cf39ecadd0c3cd3.jpg";
        profesion = "Desarrollador web"
        imagenFondo = "https://sm.ign.com/t/ign_es/screenshot/default/ts7k9hdogowmhnpiy8gzlz6qq3wnr05izyu2ags5jy-xybmcsjs6jllvzffr_177616_mw3a.1280.jpg";
        descripcion = "Soy estudiante de diseño y desarrollo de software, este es mi portafolio, aqui podras ver mis habilidades, y como podras contactarme."
        fechNAc = "16-12-2003";
        telefono = "+51 981498 618";
        Email = " abelponcegomez@gmail.com";
    } else if (nombre === "Erick") {
        profesion = "Desarrollador web"
        imagenFondo = "https://p4.wallpaperbetter.com/wallpaper/880/259/776/movie-godzilla-king-of-the-monsters-godzilla-hd-wallpaper-preview.jpg"
        imagen = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy4jhmjjQwqO5xUfCRNrAqtI_55xtXktseAjVwUrNMLw&s";  
        descripcion = "Me apasiona el diseño gráfico y la creación de interfaces de usuario intuitivas y atractivas. Con habilidades en herramientas como Adobe Illustrator, Photoshop y Figma, disfruto dando vida a ideas innovadoras y soluciones creativas. Este es mi portafolio, donde podrás ver mis trabajos y proyectos recientes."
        fechNAc = "25-05-1995";
        telefono = "+51 9283829";
        Email = "erickSanchez@gmail.com";
    } else {
        imagen = "https://default-url.com/imagen-por-defecto.jpg"; 
    }

    res.render('index.ejs', { nombre, profesion, descripcion, imagen, imagenFondo, fechNAc, telefono, Email});
});


const habilidades = {
    Alejandro: {
        tecnicas: {
            Javascript: '40%',
            'HTML & CSS': '89%',
            PHP: '50%',
            sql: '81%',
            java: '40%'
        },
        profesionales: {
            Comunicacion: '80%',
            'Trabajo en Equipo': '70%',
            Creatividad: '99%',
            Dedicacion: '65%',
            'Proyect Management': '94%'
        }
    },
    Erick: {
        tecnicas: {
            Javascript: '50%',
            'HTML & CSS': '85%',
            PHP: '45%',
            sql: '75%',
            java: '35%'
        },
        profesionales: {
            Comunicacion: '85%',
            'Trabajo en Equipo': '65%',
            Creatividad: '90%',
            Dedicacion: '70%',
            'Proyect Management': '92%'
        }
    }
};

app.get('/Portafolio/:nombre/habilidades', (req, res) => {
    const nombre = req.params.nombre;
    
    if (habilidades[nombre]) {
        const tecnicas = habilidades[nombre].tecnicas;
        const profesionales = habilidades[nombre].profesionales;
        
        res.render('habilidades.ejs', { nombre, tecnicas, profesionales });
    } else {
        res.send('Usuario no encontrado');
    }
});

app.get('/Portafolio/:nombre/contactame', (req, res) => {
    const nombre = req.params.nombre;

    let imagenFondo;
    let Email;
    let telefono;

    if (nombre === "Alejandro") {
        imagenFondo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr3qCiOLpWDYqpBfrjcnySm3DT3hQ8NXiQbTgEpx1XeQ&s"
        telefono = "+51 981 498 618";
        Email = " abelponcegomez@gmail.com";
    } else if (nombre === "Erick") {
        imagenFondo = "https://c4.wallpaperflare.com/wallpaper/80/377/85/movie-godzilla-king-of-the-monsters-godzilla-hd-wallpaper-preview.jpg";  
        telefono = "+51 928 382 968";
        Email = "erickSanchez@gmail.com";
    } else {
        imagenFondo = "https://default-url.com/imagen-por-defecto.jpg"; 
    }
    res.render('contactame.ejs', { imagenFondo, Email, telefono, nombre });
});

app.listen(3000, () => {
    console.log('Servidor corriendo en localhost:3000');
});
