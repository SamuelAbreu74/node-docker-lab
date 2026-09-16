# Mini API Node.js com Docker

Projeto prático de conteinerização com Docker de uma API Node.js/Express. Desenvolvido para consolidação de conhecimentos durante o programa Geração Tech no curso de Engenharia de Software da FullCycle.

## Como rodar o projeto e o que aprendemos com cada comando

### 1. Construindo (Build) a imagem da aplicação
```bash
docker build -t mini-node-api .
```

**O que acontece neste comando:**
* `docker build`: É a instrução que lê o arquivo `Dockerfile` e executa suas camadas passo a passo para criar a nossa imagem.
* `-t mini-node-api`: A flag `-t` (tag) serve para nomear a nossa imagem. Isso facilita muito na hora de chamá-la para rodar, em vez de usar um ID numérico aleatório.
* `.`: O ponto no final é fundamental. Ele indica o contexto do build, ou seja, avisa ao Docker que os arquivos necessários (como o `Dockerfile` e o `package.json`) estão no diretório atual.

---

### 2. Executando o container
```bash
docker run -d -p 3000:3000 mini-node-api
```

**O que acontece neste comando:**
* `docker run`: Pega a imagem que acabamos de criar no passo anterior e a transforma em um container ativo e isolado.
* `-d` (detached): Faz o container rodar em segundo plano. Assim, o terminal não fica "preso" e você pode continuar digitando outros comandos.
* `-p 3000:3000` (publish): Faz o mapeamento de portas (`PortaDaSuaMáquina`:`PortaDoContainer`). Isso cria uma ponte permitindo que a porta 3000 do seu computador acesse a porta 3000 isolada lá dentro do container.


---

### 3. Acessando a aplicação

Abra o seu navegador e acesse:
```text
http://localhost:3000
```

**O que acontece aqui:**
* Ao acessar o `localhost` na porta `3000`, a requisição bate no seu computador, passa pela "ponte" criada pelo comando de portas (`-p`) e chega até a nossa API Node.js rodando lá dentro do container Docker, devolvendo a mensagem de sucesso!


### Aprendizado adquirido ?
* Ao utilizar o Docker no desenvolvimento da nossa API,  tornamos possível que qualquer pessoa rode o projeto localmente sem a necessidade de ter o ambiente e as dependências (como Node.js e npm) instalados em sua própria máquina. Isso resolve de vez o famoso problema do "na minha máquina funciona", pois o container garante que a aplicação rodará em um ambiente idêntico para todos.