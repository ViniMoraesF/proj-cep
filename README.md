# Projeto Consulta CEP

Projeto de portfólio para consulta de CEP utilizando React no frontend e Python (Flask) no backend. O projeto permite digitar um CEP, consultar a API pública do ViaCEP e exibir o endereço completo.  




## Estrutura do Projeto

O projeto possui a seguinte estrutura de pastas:

proj-cep/
├── backend/ # API em Python (Flask)
├── frontend/ # Aplicação React
└── README.md # Este arquivo





## Tecnologias Utilizadas

- Frontend: React  
- Backend: Python + Flask  
- API externa: ViaCEP  
- Estilo: CSS simples  
- Comunicação Frontend ↔ Backend: Fetch API / JSON  




## Configuração do Backend

1. Abra o terminal na raiz do projeto (`D:\PROJETOS\proj-cep`).  
2. Crie e ative o ambiente virtual (venv):  
   - `python -m venv .venv`  
   - `& .venv\Scripts\Activate.ps1`  
3. Instale as dependências do backend com `pip install flask requests`.  
4. Rode o backend com `python app.py` dentro da pasta `backend`.  
5. O backend será iniciado em `http://127.0.0.1:5000`.  




## Configuração do Frontend

1. Abra outro terminal (não precisa do venv) e entre na pasta `frontend`.  
2. Instale as dependências do React com `npm install`.  
3. Inicie a aplicação com `npm start`.  
4. O frontend será aberto em `http://localhost:3000`.  




## Como Testar

1. Certifique-se de que o backend e o frontend estão rodando.  
2. No navegador, abra `http://localhost:3000`.  
3. Digite um CEP válido, por exemplo `01001000`.  
4. Clique em **Buscar** e veja o endereço completo retornado pelo ViaCEP.  




## Observações

- O backend deve estar rodando **antes** do frontend, pois o React depende da API para buscar os dados.  
- É recomendado usar Python 3.11 ou 3.10.  
- Para publicar no GitHub, inclua um `.gitignore` para ignorar a pasta `node_modules/` do frontend e a pasta `.venv` do backend.  
- Para produção, será necessário configurar o frontend para apontar para a API correta, utilizando proxy ou URL real.  
- O projeto é simples e minimalista, ideal para portfólio ou estudo de integração entre React e Flask.
