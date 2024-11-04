# Home Hub

## 📌 Índice

- [Descrição](#descrição)
- [Pré-requisitos](#pré-requisitos)
- [Instruções para geração e execução do servidor](#instruções-para-geração-e-execução-do-servidor)

<a id="descrição"></a>

## 🌟 Descrição

Esse repositório foi criado para gerenciar o projeto Home Hub. O projeto é voltado para automação residencial, com foco na criação do orquestrador de microfrontend utilizando o Single SPA e na construção da interface, incluindo recursos como autenticação e interação com formulários. Neste curso, aprendi sobre:

- 🏗️ **Arquitetura micro-frontend**: Estruturação do projeto para dividir a aplicação em diferentes microfrontends, facilitando o gerenciamento e a escalabilidade.
- ⚙️ **Configuração de um orquestrador**: Uso do Single SPA para integrar múltiplos microfrontends em uma única aplicação.
- 🎨 **Estilização com Material-UI**: Aplicação de componentes baseados no Google Material Design para garantir uma interface moderna e responsiva.
- 🔒 **Autenticação**: Implementação de login e gerenciamento de usuários de maneira segura.
- 🔄 **Gerenciamento de dados entre microfrontends**: Compartilhamento eficiente de dados e estado entre diferentes partes da aplicação, mantendo a coesão e a funcionalidade.

<a id="pré-requisitos"></a>

## 📋 Pré-requisitos

- Node.js v21.5.0

<a id="instruções-para-geração-e-execução-do-servidor"></a>

### 🛠️ Instruções para geração e execução do servidor

Para gerar a pasta `/dist` e iniciar o servidor HTTP, siga os passos abaixo:

1. **Gere a pasta `/dist`**:

   - Abra o terminal no diretório `react-utils`.
   - Execute o comando para compilar os arquivos:
     ```bash
     npm run build:webpack
     ```
   - Este comando criará uma pasta chamada `/dist`, onde os arquivos compilados da aplicação ficarão armazenados.

2. **Acesse a pasta `/dist`**:

   - Navegue até a pasta `/dist` utilizando o terminal:
     ```bash
     cd dist
     ```

3. **Inicie o servidor HTTP**:
   - Para iniciar o servidor HTTP e permitir o acesso às páginas, execute o seguinte comando:
     ```bash
     http-server . --cors
     ```
   - O parâmetro `--cors` habilita o suporte a CORS (Cross-Origin Resource Sharing), o que é útil para aplicações que interagem com diferentes domínios ou microfrontends.

Após seguir esses passos, o servidor HTTP será executado, permitindo o acesso à aplicação através do navegador.

**⚠️ Obs**: Sempre que houver uma alteração em algum MFE (Microfrontend), o comando `npm run build:webpack` deverá ser executado novamente.
