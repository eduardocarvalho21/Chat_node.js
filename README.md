#  Real-Time Chat Application

Aplicação de chat em tempo real desenvolvida com **Node.js** e **Socket.io**, focada em baixa latência e experiência do usuário (UX).

![Preview do Projeto](./chat-preview.gif)

## Sobre o Projeto

Este projeto foi desenvolvido com o objetivo de explorar a comunicação bidirecional na web utilizando **WebSockets**. Diferente do modelo tradicional HTTP, esta aplicação mantém uma conexão persistente, permitindo troca de dados instantânea.

### Funcionalidades

- **Mensagens em Tempo Real:** Comunicação instantânea (WebSockets).
- **Broadcast:** Distribuição de mensagens para múltiplos clientes.
- **Feedback Visual:** Notificação de "Usuário está digitando..." (Typing indicators).
- **Interface Responsiva:** Layout limpo e funcional.

##  Tecnologias Utilizadas

- **[Node.js](https://nodejs.org/)**: Runtime JavaScript.
- **[Express](https://expressjs.com/)**: Framework Web.
- **[Socket.io](https://socket.io/)**: Biblioteca de comunicação Real-Time.

##  Como Rodar Localmente

1. **Clone o repositório**
   ```bash
   git clone https://github.com/eduardocarvalho21/Chat_node.js.git
   
2. **Instale as dependências**
   ```bash
   npm install

3. **Rode o servidor**
   ```bash
   node server.js
   
**Acesse** Abra **http://localhost:3000** em duas abas diferentes para testar.

Desenvolvido por **Eduardo Pereira de Carvalho**
