const express = require("express")
const router = express.Router();
const path = require("path")
const basePath = path.join(__dirname, "../templates")
router.get("/cadastrar", (req,res) => {
res.sendFile (`${basePath}/cadastrargatos.html`)
})


router.post("/salvar",(req,res) => {
console.log(req.body);
})


router.get("/:nome", (req,res) =>{
const nome = req.params.nome;
console.log(`o nome do gato é ${nome}`);
res.sendFile(`${basePath}/gato.html`)
})


module.exports = router