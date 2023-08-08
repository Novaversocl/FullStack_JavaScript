const express = require('express');
const Jimp = require('jimp');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) =>{
  try {
    
    fs.readFile('disco/carpeta/imageChange/index.html', 'utf8', (err, htmlData) => {
      fs.readFile('disco/carpeta/imageChange/assets/css/style.css', 'utf8', (err, cssData) => {
        
        const modifiedHtml = htmlData.replace('</head>', `<style>${cssData}</style></head>`);

        
        res.send(modifiedHtml);
      });
    });
  } catch (error) {
    res.status(500).json({ error: "Error al cargar pagina" });
  }
});



app.post("/image",(req, res)=>{
  const imageUrl = req.body.imageUrl;
  if (!imageUrl) {
     res.send("<script>alert('Ingresa una URL de alguna imagen'); window.location.href = '/';</script>");
     return res.redirect("/");
  }else{
  try {
    Jimp.read(
      imageUrl,
      (err, imagen) => {
        imagen
          .resize(350, Jimp.AUTO)
          .greyscale()
          .writeAsync("newImg.png")
          .then(() => {
            fs.readFile("newImg.png", (err, imagenData) => {
              fs.readFile("disco/carpeta/imageChange/response.html", 'utf8', (err, htmlData) => {
                fs.readFile('disco/carpeta/imageChange/assets/css/styleResp.css', 'utf8', (err, cssData) => {
                  const imageData = Buffer.from(imagenData).toString('base64');
                
                  const modifiedHtml = htmlData.replace('{{image}}', `data:image/png;base64,${imageData}`);
                  const modifiedHtml2 = modifiedHtml.replace('</head>', `<style>${cssData}</style></head>`);
                 
                 res.send(modifiedHtml2);
                });
          });
        });
        });
       }
    )
  } catch (error) {
    res.status(200).send("Archivo no encontrado " + error);
  }
}
});


app.listen(PORT, () =>{
    console.log(`Escuchando el puerto ${PORT}`);
});