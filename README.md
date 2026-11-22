# ⚙️ Cadastro de Usuários (Back-end)

API REST para **cadastrar, listar, editar e excluir usuários**, construída com Node.js, Express, Prisma e MongoDB Atlas. Ela alimenta o front-end do projeto de cadastro de usuários.

🔗 **API no ar:** [back-cadastro-usuarios.onrender.com/usuarios](https://back-cadastro-usuarios.onrender.com/usuarios)

🔗 **Front-end:** [front-cadastro-usuarios-alpha.vercel.app](https://front-cadastro-usuarios-alpha.vercel.app/) | [repositório](https://github.com/fabriciabarbisan/front-cadastro-usuarios)

> ⏳ **Atenção:** a API está hospedada no plano gratuito do Render, que "dorme" após alguns minutos sem uso. A primeira requisição depois de um tempo parado pode levar de 30 a 50 segundos para responder. Depois disso, funciona normalmente.

---

## ✨ Funcionalidades

- Cadastro de usuários com nome, idade e e-mail
- E-mail único: não permite dois usuários com o mesmo e-mail
- Listagem de todos os usuários
- Edição de usuários
- Exclusão de usuários
- Respostas de erro com mensagem clara (por exemplo, e-mail já cadastrado)

---

## 🛠️ Tecnologias

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [MongoDB Atlas](https://www.mongodb.com/atlas)
- [CORS](https://www.npmjs.com/package/cors)
- [dotenv](https://www.npmjs.com/package/dotenv)

---

## 🔌 Rotas da API

Endereço base: `https://back-cadastro-usuarios.onrender.com`

| Método   | Rota            | Descrição                    |
| -------- | --------------- | ---------------------------- |
| `GET`    | `/usuarios`     | Lista todos os usuários      |
| `POST`   | `/usuarios`     | Cria um novo usuário         |
| `PUT`    | `/usuarios/:id` | Atualiza um usuário          |
| `DELETE` | `/usuarios/:id` | Exclui um usuário            |

### Exemplo de corpo (POST e PUT)

```json
{
  "name": "Maria Silva",
  "email": "maria@email.com",
  "age": 30
}
```

### Exemplo de resposta (GET)

```json
[
  {
    "id": "6ae6c5d7125a2faf3adf7030",
    "email": "maria@email.com",
    "name": "Maria Silva",
    "age": 30
  }
]
```

### Códigos de resposta

| Código | Significado                                                 |
| ------ | ----------------------------------------------------------- |
| `200`  | Requisição feita com sucesso (listar, editar, excluir)      |
| `201`  | Usuário criado com sucesso                                  |
| `409`  | E-mail já cadastrado (`{ "message": "Este email já está cadastrado." }`) |
| `500`  | Erro interno ao cadastrar o usuário                         |

---

## 🗂️ Modelo de dados

```prisma
model User {
  id    String @id @default(auto()) @map("_id") @db.ObjectId
  email String @unique
  name  String
  age   Int
}
```

---

## 🚀 Como rodar o projeto localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- Uma conta gratuita no [MongoDB Atlas](https://www.mongodb.com/atlas) com um cluster criado

### Passo a passo

1. Clone o repositório:

```bash
git clone https://github.com/fabriciabarbisan/back_cadastro_usuarios.git
```

2. Entre na pasta do projeto:

```bash
cd back_cadastro_usuarios
```

3. Instale as dependências:

```bash
npm install
```

4. Crie um arquivo `.env` na raiz do projeto com a string de conexão do seu MongoDB Atlas:

```
DATABASE_URL="mongodb+srv://USUARIO:SENHA@SEU-CLUSTER.mongodb.net/NOME-DO-BANCO?retryWrites=true&w=majority"
```

5. Gere o Prisma Client e crie as regras do banco (como o e-mail único):

```bash
npx prisma generate
npx prisma db push
```

6. Inicie o servidor:

```bash
npm run dev
```

7. A API estará disponível em `http://localhost:3000/usuarios`.

> No MongoDB Atlas, em **Network Access**, libere o seu IP (ou `0.0.0.0/0` para estudo) para o servidor conseguir conectar ao banco.

---

## 🌐 Deploy

- **API:** [Render](https://render.com/)
  - Build Command: `npm install && npx prisma generate`
  - Start Command: `npm start`
  - Variável de ambiente: `DATABASE_URL`
- **Banco de dados:** [MongoDB Atlas](https://www.mongodb.com/atlas)

---

## 👩‍💻 Autora

**Fabrícia Barbisan Camargo**

Desenvolvedora Front-end em transição de carreira, vinda da Arquitetura e Urbanismo.

- GitHub: [@fabriciabarbisan](https://github.com/fabriciabarbisan)
- LinkedIn: [fabriciabarbisan](https://www.linkedin.com/in/fabriciabarbisan)
