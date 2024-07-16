# 🚀 Desafio 01 - Fundamentos do Node.js (Ignite)

Desafio referente ao módulo: Fundamentos do Node.js

## 📚 Introdução

Olá, pessoal!

Este projeto é parte do primeiro desafio da trilha de Node.js do Ignite, oferecida pela [Rocketseat](https://www.rocketseat.com.br/). O objetivo do desafio é colocar em prática os conceitos aprendidos no módulo de Fundamentos do Node.js, desenvolvendo uma API para realizar o CRUD de tasks (tarefas).

## 🛠️ Funcionalidades

A API desenvolvida possui as seguintes funcionalidades:

- **Criação de uma task**: Permite criar uma nova task no banco de dados.
- **Listagem de todas as tasks**: Permite listar todas as tasks salvas no banco de dados, com a opção de filtrar por título e descrição.
- **Atualização de uma task pelo `id`**: Permite atualizar o título e/ou descrição de uma task específica.
- **Remover uma task pelo `id`**: Permite remover uma task específica do banco de dados.
- **Marcar pelo `id` uma task como completa**: Permite marcar uma task como completa ou reverter para o estado não completo.
- **Importação de tasks em massa por um arquivo CSV**: Permite importar múltiplas tasks a partir de um arquivo CSV utilizando Streams.

### 📋 Estrutura das Tasks

Cada task possui as seguintes propriedades:

- `id`: Identificador único de cada task.
- `title`: Título da task.
- `description`: Descrição detalhada da task.
- `completed_at`: Data de quando a task foi concluída. O valor inicial é `null`.
- `created_at`: Data de quando a task foi criada.
- `updated_at`: Data de quando a task foi atualizada.

### 🔄 Rotas da API

- `POST - /tasks`
    
    Cria uma task no banco de dados, enviando os campos `title` e `description` no corpo da requisição.
    
    Ao criar uma task, os campos: `id`, `created_at`, `updated_at` e `completed_at` são preenchidos automaticamente.

- `GET - /tasks`
    
    Lista todas as tasks salvas no banco de dados.
    
    Também permite realizar buscas filtrando as tasks pelo `title` e `description`.

- `PUT - /tasks/:id`
    
    Atualiza uma task pelo `id`.
    
    No corpo da requisição, recebe somente o `title` e/ou `description` para serem atualizados.
    
    Antes de realizar a atualização, valida se o `id` pertence a uma task salva no banco de dados.

- `DELETE - /tasks/:id`
    
    Remove uma task pelo `id`.
    
    Antes de realizar a remoção, valida se o `id` pertence a uma task salva no banco de dados.

- `PATCH - /tasks/:id/complete`
    
    Marca a task como completa ou não. Se a task estiver concluída, reverte para o estado não completo.
    
    Antes da alteração, valida se o `id` pertence a uma task salva no banco de dados.

### 📥 Importação de CSV

A importação de tasks a partir de um arquivo CSV é feita utilizando a biblioteca `CSV Parse`. O arquivo CSV deve estar dentro do próprio projeto. 

Para importar as tasks, a API lê o arquivo CSV e utiliza Streams para processar os dados de forma eficiente.

Para mais detalhes sobre a importação via CSV com Stream, acesse a [explicação detalhada](https://www.notion.so/Cria-o-via-CSV-com-Stream-21ba6d279991473792787d9265212181?pvs=21).

## 🚀 Como rodar o projeto

```bash
# Clone este repositório
$ git clone https://github.com/seu-usuario/nome-do-repositorio.git

# Acesse a pasta do projeto no terminal/cmd
$ cd nome-do-repositorio

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor iniciará na porta 3333 - acesse http://localhost:3333
```

## 🎉 Considerações Finais

Foi uma experiência incrível desenvolver essa API e reforçar os conceitos aprendidos. A [Rocketseat](https://www.rocketseat.com.br/) proporciona um ambiente excelente para o aprendizado e crescimento como desenvolvedor.

Feito com 💜 por [Maiquinho](https://michaelmatheus.dev).