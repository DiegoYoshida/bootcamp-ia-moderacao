# Bootcamp IA - Fórum com Moderador de conteúdo

#### Clonar Repositório
```bash
git clone https://github.com/vinilima2/bootcamp-ia-moderacao.git
cd bootcamp-ia-moderacao
```

#### Inicializar Venv
```bash
# No Linux
python3 -m venv venv
source venv/bin/activate
```

```bash
# No Windows
python -m venv venv
venv\Scripts\activate
```

#### Instalar dependências
```bash
pip install -r requirements.txt
```

#### Inicializar banco de dados
```bash
python ./database/initialize_db.py
```

#### Executar Projeto
```bash
flask --app main run
```