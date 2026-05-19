// ================================================================
// DISCORD BOTS MASTERY 2026 - NEXUS PLATAFORMS
// JavaScript Principal - SPA Router, Curso, Ferramentas
// ================================================================

(function() {
  'use strict';

  // ========== DADOS DO CURSO ==========
  const courseData = [
    {
      id: 'mod1',
      icon: '📘',
      title: 'Módulo 1 — Fundamentos da Programação',
      description: 'Aprenda os fundamentos essenciais de programação com Python',
      difficulty: 'Iniciante',
      duration: '4h',
      lessons: [
        {
          id: 'm1l1',
          title: '1.1 O que é programação e por que Python?',
          content: `Programação é a arte de instruir computadores a executar tarefas específicas através de código. Python se destaca por sua sintaxe limpa, legibilidade e vasto ecossistema de bibliotecas. É a linguagem ideal para bots Discord por seu suporte nativo a programação assíncrona e pela biblioteca discord.py, uma das mais maduras do ecossistema.`,
          code: `# Seu primeiro programa Python
print("Olá, mundo dos bots!")
print("Bem-vindo ao Discord Bots Mastery 2026")`,
          tags: ['python', 'introdução', 'fundamentos']
        },
        {
          id: 'm1l2',
          title: '1.2 Variáveis e tipos de dados em Python',
          content: `Variáveis são espaços na memória que armazenam dados. Python possui tipagem dinâmica, ou seja, você não precisa declarar o tipo da variável. Os principais tipos são: int (números inteiros), float (números decimais), str (texto/cadeias de caracteres), bool (True/False - booleanos) e NoneType (None - valor nulo).`,
          code: `# Tipos de dados em Python
nome = "NexusBot"          # str
versao = 2.6               # float
porta = 8080               # int
ativo = True               # bool
token = None               # NoneType

print(f"Bot: {nome} v{versao}")
print(f"Status: {'Online' if ativo else 'Offline'}")`,
          tags: ['python', 'variáveis', 'tipos']
        },
        {
          id: 'm1l3',
          title: '1.3 Operadores e expressões',
          content: `Python suporta operadores aritméticos (+, -, *, /, //, %, **), operadores de comparação (==, !=, >, <, >=, <=), operadores lógicos (and, or, not) e operadores de atribuição (=, +=, -=, etc.). Expressões combinam valores e operadores para produzir novos valores.`,
          code: `# Operadores em Python
a = 15
b = 4

# Aritméticos
print(f"Soma: {a + b}")
print(f"Divisão inteira: {a // b}")
print(f"Resto: {a % b}")
print(f"Potência: {a ** b}")

# Lógicos
x = True
y = False
print(f"AND: {x and y}")
print(f"OR: {x or y}")
print(f"NOT: {not x}")`,
          tags: ['python', 'operadores', 'expressões']
        },
        {
          id: 'm1l4',
          title: '1.4 Estruturas condicionais (if/elif/else)',
          content: `Condicionais permitem que seu programa tome decisões com base em condições. Use if para testar uma condição, elif para testar condições alternativas, e else para capturar todos os outros casos. A indentação (espaços no início da linha) é obrigatória em Python para definir blocos de código.`,
          code: `# Estruturas condicionais
idade = 16

if idade >= 18:
    print("Acesso total liberado")
elif idade >= 13:
    print("Acesso permitido com supervisão")
else:
    print("Acesso negado - idade insuficiente")

# Operador ternário
status = "online" if idade >= 13 else "offline"
print(f"Status: {status}")`,
          tags: ['python', 'condicionais', 'if']
        },
        {
          id: 'm1l5',
          title: '1.5 Laços de repetição (for e while)',
          content: `Loops permitem executar blocos de código repetidamente. O loop for itera sobre sequências (listas, strings, ranges). O loop while repete enquanto uma condição for verdadeira. Use break para sair do loop e continue para pular para a próxima iteração.`,
          code: `# Loop for
for i in range(5):
    print(f"Iteração {i}")

# Iterando lista
comandos = ["ping", "kick", "ban", "mute"]
for cmd in comandos:
    print(f"Carregando comando: /{cmd}")

# Loop while
contador = 0
while contador < 3:
    print(f"Tentativa {contador + 1}")
    contador += 1`,
          tags: ['python', 'loops', 'for', 'while']
        },
        {
          id: 'm1l6',
          title: '1.6 Listas e seus métodos',
          content: `Listas são coleções ordenadas e mutáveis. Elas podem armazenar qualquer tipo de dado e são indexadas a partir de 0. Métodos importantes: append() adiciona item, remove() remove item específico, pop() remove por índice, sort() ordena, reverse() inverte.`,
          code: `# Trabalhando com listas
permissoes = ["kick", "ban", "mute"]

# Adicionar
permissoes.append("warn")
permissoes.insert(1, "timeout")

# Remover
permissoes.remove("mute")

# Acessar
print(f"Primeira: {permissoes[0]}")
print(f"Última: {permissoes[-1]}")
print(f"Total: {len(permissoes)}")

# Fatiamento (slice)
print(permissoes[1:3])`,
          tags: ['python', 'listas', 'coleções']
        },
        {
          id: 'm1l7',
          title: '1.7 Dicionários (dict)',
          content: `Dicionários são estruturas que mapeiam chaves a valores. São ideais para configurações e dados estruturados. Acesse valores com dict["chave"] ou dict.get("chave", valor_padrao). São extremamente úteis para armazenar configurações de bots e dados de servidores.`,
          code: `# Dicionários
config = {
    "prefix": "!",
    "owner_id": 123456789,
    "mod_roles": ["Mod", "Admin"],
    "channels": {
        "logs": 987654321,
        "welcome": 987654322
    }
}

print(config["prefix"])
print(config.get("language", "pt-BR"))  # valor padrão

# Iterar
for key, value in config.items():
    print(f"{key}: {value}")`,
          tags: ['python', 'dicionários', 'dict']
        },
        {
          id: 'm1l8',
          title: '1.8 Funções: definição e parâmetros',
          content: `Funções encapsulam blocos de código reutilizáveis. Use def para definir uma função. Parâmetros podem ter valores padrão. Funções podem retornar valores com return. São essenciais para organizar código e evitar repetição.`,
          code: `# Funções em Python
def criar_embed(titulo, descricao, cor=0x3b82f6):
    """Cria um embed simples do Discord"""
    return {
        "title": titulo,
        "description": descricao,
        "color": cor
    }

# Chamando a função
embed = criar_embed("Boas-vindas", "Bem-vindo ao servidor!")
print(embed)

# Função com *args
def listar_comandos(*comandos):
    for cmd in comandos:
        print(f"/{cmd}")

listar_comandos("ping", "info", "help")`,
          tags: ['python', 'funções', 'def']
        }
      ]
    },
    {
      id: 'mod2',
      icon: '🧠',
      title: 'Módulo 2 — Lógica de Programação Avançada',
      description: 'Domine orientação a objetos, tratamento de erros e manipulação de arquivos',
      difficulty: 'Iniciante-Intermediário',
      duration: '3h',
      lessons: [
        {
          id: 'm2l1',
          title: '2.1 Orientação a Objetos (Classes e Objetos)',
          content: `OOP é um paradigma que organiza código em classes (moldes) e objetos (instâncias). Atributos armazenam estado; métodos definem comportamento. O construtor __init__ inicializa objetos. Self refere-se à própria instância.`,
          code: `# Orientação a Objetos
class Bot:
    def __init__(self, nome, prefixo="!"):
        self.nome = nome
        self.prefixo = prefixo
        self.comandos = []
    
    def adicionar_comando(self, comando):
        self.comandos.append(comando)
        print(f"Comando /{comando} adicionado ao {self.nome}")
    
    def listar_comandos(self):
        return self.comandos

# Criando instâncias
nexus = Bot("NexusBot", prefixo="/")
nexus.adicionar_comando("ping")
nexus.adicionar_comando("info")
print(nexus.listar_comandos())`,
          tags: ['python', 'oop', 'classes']
        },
        {
          id: 'm2l2',
          title: '2.2 Herança e Polimorfismo',
          content: `Herança permite que uma classe (subclasse) herde atributos e métodos de outra (superclasse). Use super() para chamar métodos da classe pai. Polimorfismo permite que subclasses redefinam comportamentos. Essencial para criar bots modulares com Cogs.`,
          code: `# Herança e Polimorfismo
class ModeradorBot(Bot):
    def __init__(self, nome, prefixo="!"):
        super().__init__(nome, prefixo)
        self.bans = 0
    
    def banir(self, usuario):
        self.bans += 1
        print(f"{usuario} foi banido por {self.nome}")
        print(f"Total de bans: {self.bans}")

mod_bot = ModeradorBot("Guardian")
mod_bot.adicionar_comando("ban")
mod_bot.banir("spammer123")`,
          tags: ['python', 'herança', 'polimorfismo']
        },
        {
          id: 'm2l3',
          title: '2.3 Tratamento de erros (try/except)',
          content: `Erros são inevitáveis em programação. Use try/except para capturar exceções e evitar que seu bot pare de funcionar. finally sempre executa, ideal para limpeza. Levante exceções com raise quando necessário.`,
          code: `# Tratamento de exceções
def executar_comando(comando, args):
    try:
        if comando == "ban":
            resultado = banir_usuario(args[0])
        elif comando == "div":
            resultado = 10 / int(args[0])
        else:
            raise ValueError(f"Comando desconhecido: {comando}")
    except ZeroDivisionError:
        print("Erro: Divisão por zero!")
    except IndexError:
        print("Erro: Argumentos insuficientes!")
    except Exception as e:
        print(f"Erro inesperado: {e}")
    finally:
        print("Execução do comando finalizada")`,
          tags: ['python', 'exceções', 'try-except']
        },
        {
          id: 'm2l4',
          title: '2.4 Manipulação de arquivos',
          content: `Leia e escreva arquivos com open(). Modos: 'r' (leitura), 'w' (escrita, sobrescreve), 'a' (anexar), 'r+' (leitura e escrita). Sempre use with para garantir que o arquivo seja fechado corretamente. Útil para logs e configurações persistentes.`,
          code: `# Manipulação de arquivos
# Escrita
with open("config.txt", "w") as f:
    f.write("prefix=!\\n")
    f.write("language=pt-BR\\n")

# Leitura
with open("config.txt", "r") as f:
    conteudo = f.read()
    print(conteudo)

# Anexar (append)
with open("bot.log", "a") as f:
    f.write("[INFO] Bot iniciado\\n")`,
          tags: ['python', 'arquivos', 'io']
        }
      ]
    },
    {
      id: 'mod3',
      icon: '⚡',
      title: 'Módulo 3 — Python Moderno para Bots',
      description: 'Async/await, tipagem, ambientes virtuais e arquitetura de projetos',
      difficulty: 'Intermediário',
      duration: '3h',
      lessons: [
        {
          id: 'm3l1',
          title: '3.1 Programação Assíncrona (async/await)',
          content: `Bots Discord precisam ser assíncronos para lidar com múltiplos eventos simultaneamente sem travar. async def define uma corrotina; await pausa a execução até que a tarefa seja concluída. O event loop gerencia todas as tarefas.`,
          code: `import asyncio

async def buscar_dados_api():
    print("Buscando dados...")
    await asyncio.sleep(2)  # Simula requisição
    return {"status": "ok", "data": [1, 2, 3]}

async def processar_comando():
    print("Processando comando...")
    await asyncio.sleep(0.5)
    return "Comando executado"

async def main():
    # Executa tarefas concorrentemente
    dados, resultado = await asyncio.gather(
        buscar_dados_api(),
        processar_comando()
    )
    print(dados, resultado)

asyncio.run(main())`,
          tags: ['python', 'async', 'await', 'assíncrono']
        },
        {
          id: 'm3l2',
          title: '3.2 Tipagem Estática (Type Hints)',
          content: `Anotações de tipo (type hints) melhoram a legibilidade, permitem checagem estática com mypy e ajudam IDEs a fornecer autocomplete mais preciso. Use : para parâmetros e -> para tipo de retorno. O módulo typing oferece tipos genéricos.`,
          code: `from typing import List, Dict, Optional

def criar_embed(
    titulo: str,
    descricao: str,
    cor: int = 0x3b82f6,
    campos: Optional[List[Dict[str, str]]] = None
) -> Dict[str, any]:
    """Cria um embed do Discord com tipagem completa"""
    embed = {
        "title": titulo,
        "description": descricao,
        "color": cor
    }
    if campos:
        embed["fields"] = campos
    return embed

# Uso
embed = criar_embed("Título", "Descrição")
print(embed)`,
          tags: ['python', 'type-hints', 'tipagem']
        },
        {
          id: 'm3l3',
          title: '3.3 Ambientes Virtuais e Dependências',
          content: `Ambientes virtuais isolam as dependências de cada projeto. Use venv (built-in) ou poetry (gerenciador moderno). requirements.txt lista as bibliotecas. Sempre versionar as dependências para reproduzir o ambiente exato.`,
          code: `# Criando ambiente virtual
# python -m venv botenv
# source botenv/bin/activate  (Linux/Mac)
# botenv\\Scripts\\activate   (Windows)

# Instalando dependências
# pip install discord.py
# pip install aiosqlite
# pip install asyncpg

# requirements.txt
# discord.py>=2.6.0
# aiosqlite>=0.20.0
# asyncpg>=0.29.0
# python-dotenv>=1.0.0

# Para instalar:
# pip install -r requirements.txt`,
          tags: ['python', 'venv', 'dependências']
        }
      ]
    },
    {
      id: 'mod4',
      icon: '🤖',
      title: 'Módulo 4 — discord.py 2.6+ (2026)',
      description: 'Slash commands, Cogs, Views, Buttons, Select Menus e Modals',
      difficulty: 'Intermediário',
      duration: '5h',
      lessons: [
        {
          id: 'm4l1',
          title: '4.1 Criando o Bot no Developer Portal',
          content: `Acesse discord.com/developers/applications para criar sua aplicação. Gere o token do bot, configure intents privilegiadas (message content, members, presences). Nunca compartilhe o token publicamente - use variáveis de ambiente.`,
          code: `import discord
import os
from dotenv import load_dotenv

load_dotenv()
TOKEN = os.getenv("DISCORD_TOKEN")

intents = discord.Intents.default()
intents.message_content = True
intents.members = True

class MeuBot(discord.Client):
    async def on_ready(self):
        print(f"✅ {self.user} está online!")
        print(f"🆔 ID: {self.user.id}")
        print(f"📊 Servidores: {len(self.guilds)}")

bot = MeuBot(intents=intents)
bot.run(TOKEN)`,
          tags: ['discord.py', 'bot', 'token']
        },
        {
          id: 'm4l2',
          title: '4.2 Slash Commands (app_commands)',
          content: `Comandos de barra (slash commands) são o padrão moderno do Discord. Use @bot.tree.command() para criar comandos. Sincronize com bot.tree.sync(). Suportam parâmetros tipados, autocomplete e descrições.`,
          code: `from discord import app_commands

@bot.tree.command(
    name="ping",
    description="Verifica a latência do bot"
)
async def ping(interaction: discord.Interaction):
    latency = round(bot.latency * 1000)
    await interaction.response.send_message(
        f"🏓 Pong! Latência: {latency}ms"
    )

@bot.tree.command(
    name="say",
    description="Faz o bot repetir uma mensagem"
)
@app_commands.describe(mensagem="O texto que o bot deve repetir")
async def say(interaction: discord.Interaction, mensagem: str):
    await interaction.response.send_message(
        f"📢 {mensagem}"
    )`,
          tags: ['discord.py', 'slash-commands', 'app_commands']
        },
        {
          id: 'm4l3',
          title: '4.3 Cogs: Organização Profissional',
          content: `Cogs permitem separar funcionalidades em módulos independentes. Cada Cog é uma classe que herda de commands.Cog. Use setup() para carregar o Cog. Essencial para bots grandes e manuteníveis.`,
          code: `# Arquivo: cogs/moderation.py
import discord
from discord.ext import commands
from discord import app_commands

class Moderation(commands.Cog):
    def __init__(self, bot):
        self.bot = bot
    
    @app_commands.command(name="kick")
    @app_commands.describe(member="Membro a ser expulso")
    async def kick(
        self,
        interaction: discord.Interaction,
        member: discord.Member
    ):
        await member.kick()
        await interaction.response.send_message(
            f"👢 {member.mention} foi expulso!"
        )

async def setup(bot):
    await bot.add_cog(Moderation(bot))`,
          tags: ['discord.py', 'cogs', 'organização']
        },
        {
          id: 'm4l4',
          title: '4.4 Views, Buttons e Select Menus',
          content: `Componentes interativos enriquecem a UX do bot. Views são containers para botões e selects. Use callbacks para responder a interações. Suportam timeout e desabilitação automática.`,
          code: `class ConfirmView(discord.ui.View):
    def __init__(self):
        super().__init__(timeout=30)
    
    @discord.ui.button(
        label="Confirmar",
        style=discord.ButtonStyle.green
    )
    async def confirm(
        self,
        interaction: discord.Interaction,
        button: discord.ui.Button
    ):
        await interaction.response.send_message(
            "✅ Ação confirmada!"
        )
        self.stop()
    
    @discord.ui.button(
        label="Cancelar",
        style=discord.ButtonStyle.red
    )
    async def cancel(
        self,
        interaction: discord.Interaction,
        button: discord.ui.Button
    ):
        await interaction.response.send_message(
            "❌ Ação cancelada!"
        )
        self.stop()`,
          tags: ['discord.py', 'views', 'buttons']
        }
      ]
    },
    {
      id: 'mod5',
      icon: '🗄️',
      title: 'Módulo 5 — Banco de Dados',
      description: 'SQLite, PostgreSQL, ORM e migrations para bots',
      difficulty: 'Intermediário-Avançado',
      duration: '3h',
      lessons: [
        {
          id: 'm5l1',
          title: '5.1 SQLite Assíncrono com aiosqlite',
          content: `SQLite é ideal para bots pequenos/médios. aiosqlite permite operações assíncronas. Crie tabelas, faça CRUD e use placeholders para prevenir SQL injection.`,
          code: `import aiosqlite

async def init_db():
    async with aiosqlite.connect("bot.db") as db:
        await db.execute("""
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY,
                xp INTEGER DEFAULT 0,
                level INTEGER DEFAULT 1,
                warns INTEGER DEFAULT 0
            )
        """)
        await db.commit()

async def add_xp(user_id: int, amount: int):
    async with aiosqlite.connect("bot.db") as db:
        await db.execute(
            "INSERT INTO users (id, xp) VALUES (?, ?) "
            "ON CONFLICT(id) DO UPDATE SET xp = xp + ?",
            (user_id, amount, amount)
        )
        await db.commit()`,
          tags: ['database', 'sqlite', 'aiosqlite']
        }
      ]
    },
    {
      id: 'mod6',
      icon: '🛡️',
      title: 'Módulo 6 — Bots Profissionais',
      description: 'Sistemas de moderação, tickets, logs e economia',
      difficulty: 'Avançado',
      duration: '4h',
      lessons: [
        {
          id: 'm6l1',
          title: '6.1 Sistema de Moderação Completo',
          content: `Crie um sistema de moderação profissional com comandos de warn, mute, kick e ban. Armazene histórico no banco de dados e envie logs para canais designados.`,
          code: `@app_commands.command(name="warn")
@app_commands.describe(
    member="Membro a ser avisado",
    reason="Motivo do aviso"
)
async def warn(
    self,
    interaction: discord.Interaction,
    member: discord.Member,
    reason: str = "Sem motivo especificado"
):
    # Salva no banco de dados
    await add_warn(member.id, interaction.user.id, reason)
    
    # Envia DM para o usuário
    try:
        await member.send(
            f"⚠️ Você recebeu um aviso em {interaction.guild.name}\\n"
            f"Motivo: {reason}"
        )
    except:
        pass
    
    await interaction.response.send_message(
        f"⚠️ {member.mention} foi avisado. Motivo: {reason}"
    )`,
          tags: ['discord.py', 'moderação', 'sistema']
        }
      ]
    },
    {
      id: 'mod7',
      icon: '📈',
      title: 'Módulo 7 — Escalabilidade Enterprise',
      description: 'Sharding, Redis, cache e arquitetura para grandes bots',
      difficulty: 'Avançado',
      duration: '2h',
      lessons: [
        {
          id: 'm7l1',
          title: '7.1 AutoShardedBot para +2500 Servidores',
          content: `Quando seu bot ultrapassa 2500 servidores, é necessário sharding. AutoShardedBot divide automaticamente a carga entre múltiplos processos. Cada shard gerencia um subconjunto de servidores.`,
          code: `from discord import AutoShardedBot

bot = AutoShardedBot(
    shard_count=4,
    intents=intents
)

@bot.event
async def on_ready():
    print(f"Shard {bot.shard_id} pronta")
    print(f"Total shards: {bot.shard_count}")

@bot.event
async def on_shard_ready(shard_id):
    print(f"Shard {shard_id} conectada ao gateway")`,
          tags: ['discord.py', 'sharding', 'escalabilidade']
        }
      ]
    },
    {
      id: 'mod8',
      icon: '☁️',
      title: 'Módulo 8 — Deploy e Produção',
      description: 'Docker, Railway, VPS e boas práticas de deploy',
      difficulty: 'Avançado',
      duration: '2h',
      lessons: [
        {
          id: 'm8l1',
          title: '8.1 Dockerizando seu Bot',
          content: `Docker garante ambiente consistente em qualquer servidor. Crie um Dockerfile otimizado com multi-stage builds. Use docker-compose para serviços auxiliares (Redis, PostgreSQL).`,
          code: `# Dockerfile
FROM python:3.12-slim AS builder
WORKDIR /app
COPY requirements.txt .
RUN pip install --user -r requirements.txt

FROM python:3.12-slim
WORKDIR /app
COPY --from=builder /root/.local /root/.local
COPY . .
ENV PATH=/root/.local/bin:$PATH
CMD ["python", "main.py"]`,
          tags: ['docker', 'deploy', 'produção']
        }
      ]
    }
  ];

  // ========== CHEATSHEETS DATA ==========
  const cheatsheetsData = {
    python: `# Python Cheatsheet

# Variáveis
nome = "Bot"
versao = 2.6
ativo = True

# Listas
comandos = ["ping", "kick", "ban"]
comandos.append("mute")
comandos[0]  # "ping"

# Dicionários
config = {"prefix": "!", "owner": 123}
config.get("prefix", "/")

# Funções
def saudacao(nome: str) -> str:
    return f"Olá, {nome}"

# Condicionais
if ativo:
    print("Online")
elif versao > 2:
    print("Atualizar")
else:
    print("Offline")

# Loops
for i in range(5):
    print(i)

while True:
    break

# Classes
class Bot:
    def __init__(self, nome):
        self.nome = nome`,
    async: `# AsyncIO Cheatsheet

import asyncio

# Corrotina
async def fetch():
    await asyncio.sleep(1)
    return "data"

# Executar
asyncio.run(fetch())

# Tasks concorrentes
async def main():
    results = await asyncio.gather(
        fetch(),
        fetch(),
        fetch()
    )

# Timeout
try:
    result = await asyncio.wait_for(
        fetch(),
        timeout=5.0
    )
except asyncio.TimeoutError:
    print("Timeout!")

# Criar task
task = asyncio.create_task(fetch())
await task`,
    discordpy: `# discord.py Cheatsheet

# Slash Command
@bot.tree.command(name="ping")
async def ping(interaction):
    await interaction.response.send_message("Pong!")

# Cog
class MyCog(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

# View com botão
class MyView(discord.ui.View):
    @discord.ui.button(label="Click")
    async def btn(self, interaction, button):
        await interaction.response.send_message("Clicked!")

# Embed
embed = discord.Embed(
    title="Título",
    description="Descrição",
    color=0x3b82f6
)
embed.add_field(name="Campo", value="Valor")`,
    sql: `# SQL Cheatsheet

# Criar tabela
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    xp INTEGER DEFAULT 0
);

# Inserir
INSERT INTO users (id, name) VALUES (1, 'Bot');

# Selecionar
SELECT * FROM users WHERE xp > 100;

# Atualizar
UPDATE users SET xp = xp + 10 WHERE id = 1;

# Deletar
DELETE FROM users WHERE id = 1;

# Join
SELECT u.name, w.reason
FROM users u
JOIN warns w ON u.id = w.user_id;`,
    docker: `# Docker Cheatsheet

# Dockerfile
FROM python:3.12-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["python", "main.py"]

# Build
docker build -t mybot .

# Run
docker run -d --name bot \\
  -e DISCORD_TOKEN=xxx \\
  mybot

# Docker Compose
version: '3.8'
services:
  bot:
    build: .
    environment:
      - DISCORD_TOKEN=xxx
  redis:
    image: redis:alpine`,
    git: `# Git Cheatsheet

# Inicializar
git init

# Clonar
git clone <url>

# Status
git status

# Adicionar
git add .
git add arquivo.py

# Commit
git commit -m "mensagem"

# Push
git push origin main

# Pull
git pull origin main

# Branch
git checkout -b feature/nova
git checkout main
git merge feature/nova

# Log
git log --oneline`
  };

  // ========== STATE ==========
  let currentPage = 'home';
  let currentModuleId = 'mod1';
  let currentLessonId = 'm1l1';
  let pyodideInstance = null;
  let monacoEditorInstance = null;
  let progressData = JSON.parse(localStorage.getItem('nexus_progress') || '{}');
  let completedLessons = new Set(progressData.completedLessons || []);
  let quizAnswers = {};
  let currentQuizQuestions = [];
  let monacoReady = false;

  // ========== DOM ELEMENTS ==========
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  const appLoading = $('#app-loading');
  const appContainer = $('#app-container');
  const mainSidebar = $('#main-sidebar');
  const sidebarOverlay = $('#sidebarOverlay');
  const moduleNavContainer = $('#moduleNavContainer');
  const sidebarNav = $('#sidebarNav');
  const sidebarProgressPercent = $('#sidebarProgressPercent');
  const sidebarProgressFill = $('#sidebarProgressFill');
  const pageContainer = $('#page-container');
  const searchModal = $('#searchModal');
  const modalSearchInput = $('#modalSearchInput');
  const searchResults = $('#searchResults');
  const globalSearch = $('#globalSearch');

  // ========== UTILS ==========
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function formatCodeForDisplay(code) {
    return code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/(".*?")/g, '<span style="color:#86efac;">$1</span>')
      .replace(/('#.*')/g, '<span style="color:#86efac;">$1</span>')
      .replace(/\b(def|class|import|from|async|await|return|if|elif|else|for|while|try|except|finally|with|as|in|not|and|or|True|False|None|pass|break|continue|raise)\b/g, '<span style="color:#c084fc;">$1</span>')
      .replace(/\b(print|len|range|int|str|float|bool|list|dict|set|tuple|type|isinstance|super|open)\b/g, '<span style="color:#67e8f9;">$1</span>')
      .replace(/\b(self|cls)\b/g, '<span style="color:#f9a8d4;">$1</span>')
      .replace(/#.*$/gm, '<span style="color:#64748b;">$&</span>');
  }

  function saveProgress() {
    localStorage.setItem('nexus_progress', JSON.stringify({
      completedLessons: Array.from(completedLessons),
      lastModule: currentModuleId,
      lastLesson: currentLessonId,
      lastPage: currentPage,
      lastUpdated: Date.now()
    }));
    updateProgressUI();
  }

  function updateProgressUI() {
    const totalLessons = courseData.reduce((acc, m) => acc + m.lessons.length, 0);
    const pct = Math.min(100, Math.floor((completedLessons.size / totalLessons) * 100));
    if (sidebarProgressPercent) sidebarProgressPercent.textContent = `${pct}%`;
    if (sidebarProgressFill) sidebarProgressFill.style.width = `${pct}%`;
  }

  // ========== NAVIGATION ==========
  function navigateTo(page, data = {}) {
    currentPage = page;

    // Update sidebar nav
    $$('.nav-item').forEach(el => el.classList.remove('active'));
    const navItem = $(`.nav-item[data-page="${page}"]`);
    if (navItem) navItem.classList.add('active');

    // Update pages
    $$('.page').forEach(el => el.classList.remove('active'));
    const pageEl = $(`#page-${page}`);
    if (pageEl) {
      pageEl.classList.add('active');
      pageEl.scrollTop = 0;
    }

    // Render specific page content
    switch (page) {
      case 'documentation':
        renderDocumentationPage(data.moduleId || currentModuleId, data.lessonId || currentLessonId);
        break;
      case 'roadmap':
        renderRoadmapPage();
        break;
      case 'playground':
        initPlayground();
        break;
      case 'terminal':
        initTerminalPage();
        break;
      case 'tools':
        initToolsPage();
        break;
      case 'discord-simulator':
        initSimulator();
        break;
      case 'cheatsheets':
        renderCheatsheet('python');
        break;
      case 'quizzes':
        initQuiz();
        break;
    }

    // Close mobile sidebar
    closeMobileSidebar();
    
    saveProgress();
  }

  function navigateToLesson(moduleId, lessonId) {
    currentModuleId = moduleId;
    currentLessonId = lessonId;
    navigateTo('documentation', { moduleId, lessonId });
  }

  // ========== SIDEBAR ==========
  function buildModuleNav() {
    if (!moduleNavContainer) return;
    moduleNavContainer.innerHTML = '';
    
    courseData.forEach(mod => {
      const modEl = document.createElement('div');
      modEl.className = `nav-item ${mod.id === currentModuleId ? 'active' : ''}`;
      modEl.innerHTML = `
        <span class="nav-icon">${mod.icon}</span>
        <span class="nav-label">${mod.title}</span>
      `;
      modEl.addEventListener('click', () => {
        navigateToLesson(mod.id, mod.lessons[0].id);
      });
      moduleNavContainer.appendChild(modEl);

      // Add lessons as sub-items
      mod.lessons.forEach(lesson => {
        const lessonEl = document.createElement('div');
        lessonEl.className = `nav-item module-nav-item ${lesson.id === currentLessonId ? 'active' : ''}`;
        lessonEl.style.paddingLeft = '3rem';
        lessonEl.style.fontSize = '0.78rem';
        lessonEl.innerHTML = `
          <span class="nav-label">📝 ${lesson.title.split(' —')[0] || lesson.title.split('. ')[1] || lesson.title}</span>
          ${completedLessons.has(lesson.id) ? '<span style="color:#28c840;">✓</span>' : ''}
        `;
        lessonEl.addEventListener('click', (e) => {
          e.stopPropagation();
          navigateToLesson(mod.id, lesson.id);
        });
        moduleNavContainer.appendChild(lessonEl);
      });
    });
  }

  function closeMobileSidebar() {
    mainSidebar?.classList.remove('mobile-open');
    sidebarOverlay?.classList.remove('active');
    document.body.style.overflow = '';
  }

  function openMobileSidebar() {
    mainSidebar?.classList.add('mobile-open');
    sidebarOverlay?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // ========== DOCUMENTATION PAGE ==========
  function renderDocumentationPage(moduleId, lessonId) {
    const module = courseData.find(m => m.id === moduleId);
    if (!module) return;
    
    const lesson = module.lessons.find(l => l.id === lessonId) || module.lessons[0];
    if (!lesson) return;

    currentModuleId = moduleId;
    currentLessonId = lesson.id;

    // Render doc sidebar
    const docNav = $('#docNav');
    if (docNav) {
      docNav.innerHTML = '';
      courseData.forEach(mod => {
        const modHeader = document.createElement('div');
        modHeader.className = 'doc-nav-item';
        modHeader.style.fontWeight = '700';
        modHeader.style.color = 'var(--text-primary)';
        modHeader.textContent = `${mod.icon} ${mod.title}`;
        modHeader.addEventListener('click', () => navigateToLesson(mod.id, mod.lessons[0].id));
        docNav.appendChild(modHeader);

        mod.lessons.forEach(les => {
          const lesEl = document.createElement('div');
          lesEl.className = `doc-nav-item ${les.id === lessonId ? 'active' : ''}`;
          lesEl.style.paddingLeft = '2rem';
          lesEl.textContent = les.title;
          lesEl.addEventListener('click', () => navigateToLesson(mod.id, les.id));
          docNav.appendChild(lesEl);
        });
      });
    }

    // Render breadcrumbs
    const breadcrumbs = $('#docBreadcrumbs');
    if (breadcrumbs) {
      breadcrumbs.innerHTML = `
        <span>${module.title}</span> / ${lesson.title}
      `;
    }

    // Render article
    const article = $('#docArticle');
    if (article) {
      const lessonIndex = module.lessons.findIndex(l => l.id === lessonId);
      const prevLesson = lessonIndex > 0 ? module.lessons[lessonIndex - 1] : null;
      const nextLesson = lessonIndex < module.lessons.length - 1 ? module.lessons[lessonIndex + 1] : null;

      article.innerHTML = `
        <h3>📘 ${lesson.title}</h3>
        <div class="prose">${lesson.content}</div>
        <div class="code-block">
          <button class="copy-btn" onclick="window.copyLessonCode()">📋 Copiar código</button>
          <pre style="color:#c7d2fe; white-space:pre-wrap; font-family:var(--font-mono);">${formatCodeForDisplay(lesson.code)}</pre>
        </div>
        <div style="display:flex; align-items:center; gap:1rem; padding:1rem; background:rgba(59,130,246,0.05); border-radius:12px; margin:1.5rem 0;">
          <span style="font-size:1.5rem;">💡</span>
          <span style="color:var(--text-secondary); font-size:0.9rem;">
            <strong>Dica profissional:</strong> Teste este código no <a href="#playground" style="color:var(--accent-cyan); cursor:pointer;" onclick="navigateTo('playground')">Playground interativo</a> para ver o resultado em tempo real!
          </span>
        </div>
        <div style="display:flex; justify-content:space-between; margin-top:2rem;">
          <button class="btn-outline" ${!prevLesson ? 'disabled' : ''} onclick="window.navigateDocLesson('${moduleId}', '${prevLesson?.id || ''}')">
            ← Aula Anterior
          </button>
          <button class="btn-primary-glow" onclick="window.completeLesson('${lesson.id}')">
            ${completedLessons.has(lesson.id) ? '✅ Concluída' : 'Marcar como concluída'}
          </button>
          <button class="btn-outline" ${!nextLesson ? 'disabled' : ''} onclick="window.navigateDocLesson('${moduleId}', '${nextLesson?.id || ''}')">
            Próxima Aula →
          </button>
        </div>
        <div style="margin-top:2rem; padding:1rem; background:rgba(0,0,0,0.2); border-radius:12px;">
          <strong>📊 Dificuldade:</strong> ${module.difficulty} | 
          <strong>⏱️ Duração do módulo:</strong> ${module.duration} |
          <strong>🏷️ Tags:</strong> ${lesson.tags?.join(', ') || 'N/A'}
        </div>
      `;

      // Store current lesson code for copy
      window._currentLessonCode = lesson.code;
    }

    buildModuleNav();
    updateProgressUI();
  }

  window.copyLessonCode = function() {
    if (window._currentLessonCode) {
      navigator.clipboard?.writeText(window._currentLessonCode);
      alert('✅ Código copiado!');
    }
  };

  window.navigateDocLesson = function(moduleId, lessonId) {
    if (lessonId) navigateToLesson(moduleId, lessonId);
  };

  window.completeLesson = function(lessonId) {
    if (completedLessons.has(lessonId)) {
      completedLessons.delete(lessonId);
    } else {
      completedLessons.add(lessonId);
    }
    saveProgress();
    navigateToLesson(currentModuleId, currentLessonId);
  };

  // ========== ROADMAP PAGE ==========
  function renderRoadmapPage() {
    const container = $('#roadmapFull');
    if (!container) return;

    let html = '<div class="timeline-roadmap" style="max-width:600px;margin:0 auto;">';
    courseData.forEach((mod, index) => {
      const allLessonsCompleted = mod.lessons.every(l => completedLessons.has(l.id));
      const someLessonsCompleted = mod.lessons.some(l => completedLessons.has(l.id));
      const isActive = mod.id === currentModuleId;

      html += `
        <div class="timeline-node ${allLessonsCompleted ? 'completed' : (isActive ? 'active' : '')}">
          <div class="node-marker">${index + 1}</div>
          <div class="node-content">
            <h4>${mod.icon} ${mod.title}</h4>
            <p>${mod.description} • ${mod.difficulty} • ${mod.duration}</p>
            <small style="color:var(--text-muted);">${mod.lessons.length} aulas</small>
            <br>
            <a href="#" onclick="navigateToLesson('${mod.id}', '${mod.lessons[0].id}');return false;" 
               style="color:var(--accent-cyan); font-size:0.85rem; text-decoration:none;">
              ${allLessonsCompleted ? '✅ Concluído' : (someLessonsCompleted ? '📖 Em andamento' : '▶ Começar')}
            </a>
          </div>
        </div>
      `;
      if (index < courseData.length - 1) {
        html += `<div class="timeline-connector ${allLessonsCompleted ? 'completed' : (isActive ? 'active' : '')}"></div>`;
      }
    });
    html += '</div>';
    container.innerHTML = html;
  }

  // ========== PLAYGROUND ==========
  function initPlayground() {
    if (!monacoReady) {
      loadMonacoEditor().then(() => setupMonacoEditor());
    } else {
      setupMonacoEditor();
    }
  }

  function loadMonacoEditor() {
    return new Promise((resolve) => {
      if (typeof monaco !== 'undefined') {
        monacoReady = true;
        resolve();
        return;
      }

      require.config({
        paths: { vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs' }
      });

      require(['vs/editor/editor.main'], function() {
        monacoReady = true;
        resolve();
      });
    });
  }

  function setupMonacoEditor() {
    if (monacoEditorInstance) return;

    const container = document.getElementById('monacoEditor');
    if (!container) return;

    monaco.editor.defineTheme('nexus-dark', {
      base: 'vs-dark',
      inherit: true,
      rules: [
        { token: 'keyword', foreground: 'c084fc' },
        { token: 'string', foreground: '86efac' },
        { token: 'number', foreground: 'fbbf24' },
        { token: 'type', foreground: '7dd3fc' },
        { token: 'function', foreground: 'f9a8d4' },
        { token: 'comment', foreground: '64748b', fontStyle: 'italic' }
      ],
      colors: {
        'editor.background': '#0c0e17',
        'editor.foreground': '#c7d2fe',
        'editor.lineHighlightBackground': '#1a1b2e',
        'editor.selectionBackground': '#3b82f644',
        'editorCursor.foreground': '#3b82f6',
        'editorLineNumber.foreground': '#4b5563',
        'editorLineNumber.activeForeground': '#60a5fa'
      }
    });

    monacoEditorInstance = monaco.editor.create(container, {
      value: `# Playground Python - Discord Bots Mastery 2026
# Experimente código Python aqui!

def criar_bot(nome: str) -> dict:
    """Simula a criação de um bot Discord"""
    return {
        "nome": nome,
        "status": "online",
        "comandos": ["ping", "info", "help"]
    }

# Teste sua função
meu_bot = criar_bot("NexusBot")
print(f"Bot {meu_bot['nome']} está {meu_bot['status']}")
print(f"Comandos: {meu_bot['comandos']}")`,
      language: 'python',
      theme: 'nexus-dark',
      fontSize: 14,
      fontFamily: "'JetBrains Mono', monospace",
      minimap: { enabled: true, scale: 1, showSlider: 'mouseover' },
      lineNumbers: 'on',
      renderWhitespace: 'selection',
      tabSize: 4,
      insertSpaces: true,
      automaticLayout: true,
      scrollBeyondLastLine: false,
      padding: { top: 16, bottom: 16 },
      suggest: { showKeywords: true, showSnippets: true }
    });

    // Run button
    const runBtn = $('#runCodeBtn');
    if (runBtn) {
      runBtn.addEventListener('click', executePlaygroundCode);
    }

    // Reset button
    const resetBtn = $('#resetCodeBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (monacoEditorInstance) {
          monacoEditorInstance.setValue(`# Digite seu código Python aqui...
print("Olá, Nexus Plataforms!")`);
        }
      });
    }

    // Copy button
    const copyBtn = $('#copyCodeBtn');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        if (monacoEditorInstance) {
          const code = monacoEditorInstance.getValue();
          navigator.clipboard?.writeText(code);
          alert('✅ Código copiado!');
        }
      });
    }

    // Clear output
    const clearBtn = $('#clearOutputBtn');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        const output = $('#outputContent');
        if (output) output.textContent = '// Output limpo. Execute seu código...';
      });
    }
  }

  async function executePlaygroundCode() {
    const output = $('#outputContent');
    if (!output) return;

    if (!monacoEditorInstance) {
      output.textContent = '// Editor não inicializado. Recarregue a página.';
      return;
    }

    const code = monacoEditorInstance.getValue();
    output.textContent = '⏳ Executando...';

    // Try Pyodide first, fallback to simulation
    if (window.pyodideInstance) {
      try {
        await window.pyodideInstance.runPythonAsync(`
import sys
from io import StringIO
sys.stdout = StringIO()
        `);
        await window.pyodideInstance.runPythonAsync(code);
        const result = await window.pyodideInstance.runPythonAsync('sys.stdout.getvalue()');
        output.textContent = result || '(sem saída)';
      } catch (e) {
        output.textContent = `❌ Erro: ${e.message}`;
      }
    } else {
      // Simulate output for common patterns
      let simulatedOutput = '';
      if (code.includes('print(')) {
        const matches = code.match(/print\((.*?)\)/g);
        if (matches) {
          matches.forEach(m => {
            const content = m.replace('print(', '').replace(')', '').replace(/['"]/g, '');
            simulatedOutput += content + '\n';
          });
        }
      }
      output.textContent = simulatedOutput || '⚠️ Pyodide não carregado. Instale para execução real.\n\nSimulação: Código Python analisado.\nDica: Recarregue a página para tentar carregar o Pyodide.';
    }
  }

  // ========== TERMINAL PAGE ==========
  function initTerminalPage() {
    const statusEl = $('#pyodideStatus');
    if (statusEl && window.pyodideInstance) {
      statusEl.textContent = '✅ Python 3.12 pronto';
      statusEl.style.color = '#28c840';
    }

    const runBtn = $('#runPythonBtn');
    if (runBtn) {
      runBtn.addEventListener('click', executeTerminalPython);
    }

    const clearBtn = $('#clearTerminalBtn');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        const output = $('#terminalContent');
        if (output) output.textContent = '';
      });
    }
  }

  async function executeTerminalPython() {
    const input = $('#pythonInput');
    const output = $('#terminalContent');
    if (!input || !output) return;

    const code = input.value.trim();
    if (!code) {
      output.textContent = '⚠️ Digite algum código Python.';
      return;
    }

    output.textContent = '⏳ Executando...\n';

    if (window.pyodideInstance) {
      try {
        await window.pyodideInstance.runPythonAsync(`
import sys
from io import StringIO
sys.stdout = StringIO()
        `);
        await window.pyodideInstance.runPythonAsync(code);
        const result = await window.pyodideInstance.runPythonAsync('sys.stdout.getvalue()');
        output.textContent = result || '(sem saída)';
      } catch (e) {
        output.textContent = `❌ Erro:\n${e.message}`;
      }
    } else {
      output.textContent = '⚠️ Pyodide ainda não carregado. Aguarde ou recarregue a página.';
    }
  }

  // ========== TOOLS PAGE ==========
  function initToolsPage() {
    initPermissionCalculator();
  }

  window.formatJSON = function() {
    const input = $('#jsonInput');
    const output = $('#jsonOutput');
    if (!input || !output) return;
    try {
      const parsed = JSON.parse(input.value);
      output.textContent = JSON.stringify(parsed, null, 2);
      output.style.color = '#86efac';
    } catch (e) {
      output.textContent = `❌ JSON inválido: ${e.message}`;
      output.style.color = '#ff5f57';
    }
  };

  window.generateEmbedJSON = function() {
    const output = $('#embedJSONOutput');
    if (!output) return;
    const embed = {
      title: "Título do Embed",
      description: "Descrição aqui",
      color: 0x3b82f6,
      fields: [
        { name: "Campo 1", value: "Valor 1", inline: true },
        { name: "Campo 2", value: "Valor 2", inline: true }
      ],
      footer: { text: "Nexus Plataforms" }
    };
    output.textContent = JSON.stringify(embed, null, 2);
  };

  window.generateTimestamp = function() {
    const input = $('#timestampInput');
    const output = $('#timestampOutput');
    if (!input || !output) return;
    const date = new Date(input.value);
    const unix = Math.floor(date.getTime() / 1000);
    output.textContent = `<t:${unix}:F>  →  ${date.toLocaleString('pt-BR')}\n<t:${unix}:R>  →  Tempo relativo\n<t:${unix}:D>  →  Data curta`;
  };

  function initPermissionCalculator() {
    const permGrid = $('#permGrid');
    if (!permGrid) return;
    const permissions = [
      'CREATE_INSTANT_INVITE', 'KICK_MEMBERS', 'BAN_MEMBERS',
      'ADMINISTRATOR', 'MANAGE_CHANNELS', 'MANAGE_GUILD',
      'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES',
      'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS'
    ];
    permGrid.innerHTML = permissions.map(p => `
      <label style="display:flex;align-items:center;gap:0.5rem;color:var(--text-secondary);">
        <input type="checkbox" value="${p}" onchange="calcPermissions()"> ${p}
      </label>
    `).join('');
  }

  window.calcPermissions = function() {
    const output = $('#permOutput');
    if (!output) return;
    const checkboxes = $$('#permGrid input:checked');
    let total = 0;
    checkboxes.forEach(cb => {
      const permMap = {
        'CREATE_INSTANT_INVITE': 1,
        'KICK_MEMBERS': 2,
        'BAN_MEMBERS': 4,
        'ADMINISTRATOR': 8,
        'MANAGE_CHANNELS': 16,
        'MANAGE_GUILD': 32,
        'SEND_MESSAGES': 2048,
        'EMBED_LINKS': 16384,
        'ATTACH_FILES': 32768,
        'READ_MESSAGE_HISTORY': 65536,
        'MENTION_EVERYONE': 131072,
        'USE_EXTERNAL_EMOJIS': 262144
      };
      total |= (permMap[cb.value] || 0);
    });
    output.textContent = `Permissão: ${total}`;
  };

  // ========== DISCORD SIMULATOR ==========
  function initSimulator() {
    const input = $('#discordCommandInput');
    const sendBtn = $('#sendDiscordCommand');
    const messagesContainer = $('#discordMessages');

    if (!input || !sendBtn || !messagesContainer) return;

    const addMessage = (content, isBot = true) => {
      const msgEl = document.createElement('div');
      msgEl.className = `discord-message ${isBot ? 'bot-message' : ''}`;
      msgEl.innerHTML = `
        <div class="message-avatar">${isBot ? '🤖' : '👤'}</div>
        <div class="message-content">
          <span class="message-author">${isBot ? 'NexusBot' : 'Você'}</span>
          <p>${content}</p>
        </div>
      `;
      messagesContainer.appendChild(msgEl);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    };

    const processCommand = (cmd) => {
      const command = cmd.toLowerCase().trim();
      if (command === 'ping') {
        addMessage('🏓 Pong! Latência: 42ms');
      } else if (command === 'help') {
        addMessage('📋 Comandos disponíveis: /ping, /help, /info, /server');
      } else if (command === 'info') {
        addMessage('🤖 NexusBot v2.6 | Discord Bots Mastery 2026');
      } else if (command === 'server') {
        addMessage('📊 Servidor: Nexus Community | Membros: 1,234 | Canais: 15');
      } else {
        addMessage(`❌ Comando "/${command}" não reconhecido. Use /help para ver a lista.`);
      }
    };

    sendBtn.addEventListener('click', () => {
      const cmd = input.value.trim();
      if (cmd) {
        addMessage(`<code>/${cmd}</code>`, false);
        processCommand(cmd);
        input.value = '';
      }
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        sendBtn.click();
      }
    });
  }

  // ========== CHEATSHEETS ==========
  function renderCheatsheet(sheet) {
    const content = $('#cheatsheetContent');
    if (!content) return;

    const data = cheatsheetsData[sheet] || 'Cheatsheet não encontrado.';
    content.innerHTML = `<pre>${escapeHtml(data)}</pre>`;

    // Update tabs
    $$('.cheatsheet-tab').forEach(tab => {
      tab.classList.toggle('active', tab.dataset.sheet === sheet);
    });
  }

  // ========== QUIZ ==========
  function initQuiz() {
    currentQuizQuestions = [
      {
        question: 'Qual biblioteca Python é usada para criar bots Discord?',
        options: ['discord.py', 'flask', 'numpy', 'requests'],
        correct: 0
      },
      {
        question: 'O que significa "async/await" em Python?',
        options: [
          'Programação síncrona',
          'Programação assíncrona não-bloqueante',
          'Um tipo de loop',
          'Uma estrutura de dados'
        ],
        correct: 1
      },
      {
        question: 'Como se cria um slash command no discord.py 2.6+?',
        options: [
          '@bot.command()',
          '@bot.tree.command()',
          '@bot.slash()',
          '@bot.create_command()'
        ],
        correct: 1
      },
      {
        question: 'Qual banco de dados é recomendado para bots pequenos?',
        options: ['PostgreSQL', 'MongoDB', 'SQLite', 'Oracle'],
        correct: 2
      },
      {
        question: 'O que são Cogs no discord.py?',
        options: [
          'Comandos de música',
          'Módulos para organizar código',
          'Um tipo de evento',
          'Sistema de cache'
        ],
        correct: 1
      }
    ];

    const container = $('#quizContainer');
    const results = $('#quizResults');
    if (!container || !results) return;

    results.style.display = 'none';
    quizAnswers = {};

    container.innerHTML = currentQuizQuestions.map((q, i) => `
      <div class="quiz-question">
        <h3>${i + 1}. ${q.question}</h3>
        <div class="quiz-options">
          ${q.options.map((opt, j) => `
            <div class="quiz-option" data-question="${i}" data-option="${j}" onclick="selectQuizOption(${i}, ${j})">
              ${opt}
            </div>
          `).join('')}
        </div>
      </div>
    `).join('') + `
      <button class="btn-primary-glow" onclick="submitQuiz()" style="margin-top:1rem;">
        Enviar Respostas
      </button>
    `;
  }

  window.selectQuizOption = function(questionIndex, optionIndex) {
    quizAnswers[questionIndex] = optionIndex;
    const questionEl = document.querySelectorAll('.quiz-question')[questionIndex];
    if (questionEl) {
      questionEl.querySelectorAll('.quiz-option').forEach((el, i) => {
        el.classList.toggle('selected', i === optionIndex);
      });
    }
  };

  window.submitQuiz = function() {
    let score = 0;
    const total = currentQuizQuestions.length;

    currentQuizQuestions.forEach((q, i) => {
      const selected = quizAnswers[i];
      const questionEl = document.querySelectorAll('.quiz-question')[i];
      if (questionEl) {
        questionEl.querySelectorAll('.quiz-option').forEach((el, j) => {
          el.classList.remove('correct', 'incorrect');
          if (j === q.correct) el.classList.add('correct');
          if (j === selected && j !== q.correct) el.classList.add('incorrect');
        });
      }
      if (selected === q.correct) score++;
    });

    const results = $('#quizResults');
    const scoreEl = $('#quizScore');
    const feedback = $('#quizFeedback');
    if (!results || !scoreEl || !feedback) return;

    results.style.display = 'block';
    scoreEl.textContent = `${score}/${total}`;
    feedback.textContent = score === total
      ? '🎉 Perfeito! Você domina os conceitos!'
      : score >= total / 2
        ? '👍 Bom trabalho! Continue estudando.'
        : '📚 Continue praticando e revisando as aulas.';
  };

  window.retakeQuiz = function() {
    initQuiz();
  };

  // ========== GLOBAL SEARCH ==========
  function openSearchModal() {
    if (searchModal) {
      searchModal.style.display = 'flex';
      modalSearchInput?.focus();
    }
  }

  function closeSearchModal() {
    if (searchModal) {
      searchModal.style.display = 'none';
    }
  }

  function performSearch(query) {
    if (!searchResults) return;
    if (!query || query.length < 2) {
      searchResults.innerHTML = '<div class="search-result-item">Digite pelo menos 2 caracteres...</div>';
      return;
    }

    const results = [];
    const q = query.toLowerCase();

    courseData.forEach(mod => {
      mod.lessons.forEach(lesson => {
        if (
          lesson.title.toLowerCase().includes(q) ||
          lesson.content.toLowerCase().includes(q) ||
          lesson.code.toLowerCase().includes(q) ||
          lesson.tags?.some(t => t.includes(q))
        ) {
          results.push({
            moduleId: mod.id,
            lessonId: lesson.id,
            title: lesson.title,
            moduleTitle: mod.title,
            snippet: lesson.content.substring(0, 100) + '...'
          });
        }
      });
    });

    if (results.length === 0) {
      searchResults.innerHTML = '<div class="search-result-item">Nenhum resultado encontrado.</div>';
      return;
    }

    searchResults.innerHTML = results.map(r => `
      <div class="search-result-item" onclick="navigateToLesson('${r.moduleId}', '${r.lessonId}'); closeSearchModal();">
        <strong>${r.title}</strong>
        <small style="color:var(--text-muted); display:block;">${r.moduleTitle}</small>
        <span style="font-size:0.8rem; color:var(--text-tertiary);">${r.snippet}</span>
      </div>
    `).join('');
  }

  // ========== EVENT LISTENERS ==========
  document.addEventListener('DOMContentLoaded', () => {
    // Hide loading
    setTimeout(() => {
      appLoading?.classList.add('hidden');
      if (appContainer) appContainer.style.opacity = '1';
    }, 600);

    // Build initial module nav
    buildModuleNav();

    // Sidebar navigation clicks
    sidebarNav?.addEventListener('click', (e) => {
      const navItem = e.target.closest('.nav-item');
      if (navItem) {
        const page = navItem.dataset.page;
        if (page) {
          e.preventDefault();
          navigateTo(page);
        }
      }
    });

    // Mobile menu
    $('#mobileMenuBtn')?.addEventListener('click', () => {
      if (mainSidebar?.classList.contains('mobile-open')) {
        closeMobileSidebar();
      } else {
        openMobileSidebar();
      }
    });

    // Overlay click
    sidebarOverlay?.addEventListener('click', closeMobileSidebar);

    // Search modal
    $('#mobileSearchBtn')?.addEventListener('click', openSearchModal);
    $('#globalSearch')?.addEventListener('focus', openSearchModal);

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        openSearchModal();
      }
      if (e.key === 'Escape') {
        closeSearchModal();
        closeMobileSidebar();
      }
    });

    // Search input in modal
    modalSearchInput?.addEventListener('input', (e) => {
      performSearch(e.target.value);
    });

    // Global search in sidebar
    globalSearch?.addEventListener('input', (e) => {
      performSearch(e.target.value);
      if (!searchModal || searchModal.style.display === 'none') {
        openSearchModal();
      }
    });

    // Close search modal on click outside
    searchModal?.addEventListener('click', (e) => {
      if (e.target === searchModal) closeSearchModal();
    });

    // Cheatsheet tabs
    $$('.cheatsheet-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        renderCheatsheet(tab.dataset.sheet);
      });
    });

    // Focus mode
    $('#focusModeBtn')?.addEventListener('click', () => {
      document.body.classList.toggle('focus-mode');
    });

    // Theme toggle (placeholder)
    $('#themeToggleBtn')?.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      document.documentElement.setAttribute('data-theme', current === 'light' ? '' : 'light');
    });

    // Sidebar collapse
    $('#sidebar-collapse-btn')?.addEventListener('click', () => {
      mainSidebar?.classList.toggle('collapsed');
    });

    // Video mock click
    $('#videoMock')?.addEventListener('click', () => {
      alert('🎬 Video Player: Aula profissional de Discord Bots Mastery 2026.\n\nEm produção, aqui estaria o player de vídeo completo.');
    });

    // Initialize tools
    if (currentPage === 'tools') initToolsPage();

    // Restore progress
    if (progressData.lastPage) {
      // Optionally restore last page
    }
    updateProgressUI();
  });

  // ========== PYODIDE INITIALIZATION ==========
  async function initPyodide() {
    if (typeof loadPyodide === 'undefined') {
      console.log('Pyodide não disponível. Aguardando...');
      return;
    }
    try {
      const statusEl = $('#pyodideStatus');
      if (statusEl) statusEl.textContent = '⏳ Carregando Python...';
      
      window.pyodideInstance = await loadPyodide({
        indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.25.0/full/'
      });
      
      if (statusEl) {
        statusEl.textContent = '✅ Python 3.12 pronto';
        statusEl.style.color = '#28c840';
      }
      console.log('Pyodide inicializado com sucesso');
    } catch (e) {
      console.error('Falha ao carregar Pyodide:', e);
      const statusEl = $('#pyodideStatus');
      if (statusEl) {
        statusEl.textContent = '⚠️ Python offline (modo simulação)';
        statusEl.style.color = '#febc2e';
      }
    }
  }

  // Try to load Pyodide
  if (typeof loadPyodide !== 'undefined') {
    initPyodide();
  } else {
    window.addEventListener('load', () => {
      setTimeout(initPyodide, 1000);
    });
  }

  // ========== EXPOSE GLOBALS ==========
  window.navigateTo = navigateTo;
  window.navigateToLesson = navigateToLesson;
  window.closeSearchModal = closeSearchModal;
  window.formatJSON = window.formatJSON;
  window.generateEmbedJSON = window.generateEmbedJSON;
  window.generateTimestamp = window.generateTimestamp;
  window.calcPermissions = window.calcPermissions;
  window.selectQuizOption = window.selectQuizOption;
  window.submitQuiz = window.submitQuiz;
  window.retakeQuiz = window.retakeQuiz;
  window.completeLesson = window.completeLesson;
  window.navigateDocLesson = window.navigateDocLesson;
  window.copyLessonCode = window.copyLessonCode;
  window.closeMobileSidebar = closeMobileSidebar;

  // Initial load
  updateProgressUI();
  console.log('🚀 Discord Bots Mastery 2026 - Nexus Plataforms');
  console.log('📚 Plataforma educacional premium inicializada');
  console.log('💡 Dica: Pressione ⌘K ou Ctrl+K para buscar em todo o curso');
})();