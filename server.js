import express from "express";
import cors from "cors";
import {PrismaClient} from "./generated/prisma/client.js";

const app = express()
app.use(express.json())
app.use(cors())

const prisma = new PrismaClient()

app.get('/usuarios', async (req, res) => {

    const users = await prisma.user.findMany()
    
    res.status(200).json(users)

})

app.post('/usuarios', async (req, res) => {
    
    try {
    const user = await prisma.user.create({
      data: {
        email: req.body.email,
        name: req.body.name,
        age: req.body.age
      }
    })

    res.status(201).json(user)
  } catch (error) {
  console.log('CODE:', error.code)
  console.log('MESSAGE:', error.message)

  if (error.code === 'P2002') {
    return res.status(409).json({ message: 'Este email já está cadastrado.' })
  }

  res.status(500).json({ message: 'Erro ao cadastrar o usuário.' })
  }
})

app.put('/usuarios/:id', async (req, res) => {
    
    const user = await prisma.user.update ({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(200).json(user)

})

app.delete('/usuarios/:id', async (req, res) => {
    
    const user = await prisma.user.delete ({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json(user)

})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})