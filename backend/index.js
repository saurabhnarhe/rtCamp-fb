const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const fs = require('fs');
const shell = require("shelljs");
request = require('request');

const download = async (uri, filename) => {
  request.head(uri, async (err, res, body) => {
    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

app.post('/zip-files', async (req, res) => {
    const username = req.body.username;
      const albums = req.body.data.map(album => {
        const al = { 
          name: album.name,
          photos: album.photos ? 
                  album.photos.data.map(photo => { 
                    if(!photo.images[0]) return
                    return photo.images[0].source;
                  }) : 
                  null
        };
        return al;
      });
      const flat_albums = albums.map(al => {
        if(!al.photos) return
        return al
      });
      flat_albums.map(async (album) => {
        if(!album) return
        const dir = `data/${username}/` + album.name.split(" ").join("-");
        console.log("createing dir = ", dir);
        shell.mkdir("-p", dir);
        album.photos.map(async (pic) => {
          const pic_name = pic.slice(pic.split("/", 5).join("/").length + 1, pic.indexOf("?"));
          download(pic, `${dir}/${pic_name}`, () => {
            console.log('done');
          });
        })
        res.status(200).send("sucuss");
      })
})

app.listen(port, () => console.log(`App running on: http://localhost:${port}`));
