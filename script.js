// ================================================================
// DISCORD BOTS MASTERY 2026 - NEXUS PLATAFORMS
// JavaScript Principal COMPLETO - SPA Router, Curso Detalhado, Ferramentas
// ================================================================

(function() {
  'use strict';

  // ========== DADOS DO CURSO - CONTEÚDO EXPANDIDO E PROFISSIONAL ==========
  const courseData = [
    {
      id: 'mod1',
      icon: '📘',
      title: 'Módulo 1 — Fundamentos da Programação com Python',
      description: 'Aprenda os fundamentos essenciais de programação com Python do zero absoluto',
      difficulty: 'Iniciante',
      duration: '6h',
      lessons: [
        {
          id: 'm1l1',
          title: '1.1 O que é programação e por que Python?',
          content: `<p><strong>Programação</strong> é o processo de escrever instruções que um computador pode executar para realizar tarefas específicas. Pense em programação como dar ordens precisas para uma máquina — cada linha de código é um comando que o computador segue exatamente.</p>
<p><strong>Por que Python?</strong></p>
<ul>
<li>✅ <strong>Sintaxe limpa e legível</strong> — Código Python parece quase com inglês, facilitando o aprendizado</li>
<li>✅ <strong>Tipagem dinâmica</strong> — Você não precisa declarar tipos de variáveis, o Python infere automaticamente</li>
<li>✅ <strong>Multi-paradigma</strong> — Suporta programação procedural, orientada a objetos e funcional</li>
<li>✅ <strong>Ecossistema gigante</strong> — +400.000 pacotes no PyPI para qualquer necessidade</li>
<li>✅ <strong>Comunidade ativa</strong> — Milhões de desenvolvedores, documentação farta e suporte constante</li>
<li>✅ <strong>Ideal para bots Discord</strong> — A biblioteca discord.py é madura, bem documentada e suporta todos os recursos modernos do Discord</li>
</ul>
<p><strong>O que você vai construir:</strong> Ao final deste curso, você será capaz de criar bots completos como sistemas de moderação, economia, tickets, música e muito mais — tudo com código profissional e escalável.</p>
<p><strong>Referências:</strong></p>
<ul>
<li><a href="https://www.python.org/doc/" target="_blank" style="color:var(--accent-cyan);">Documentação oficial do Python</a></li>
<li><a href="https://docs.python.org/3/tutorial/" target="_blank" style="color:var(--accent-cyan);">Tutorial oficial Python</a></li>
</ul>`,
          code: `# Este é o seu primeiro programa Python!
# Os comentários começam com # e são ignorados pelo computador

# A função print() exibe mensagens no terminal/console
print("Olá, mundo dos bots!")
print("Bem-vindo ao Discord Bots Mastery 2026")

# Você também pode usar aspas simples
print('Python é incrível para criar bots!')

# E pode imprimir números diretamente
print(2026)

# Dica: Execute este código no Playground para ver o resultado!
# Atalho: Use o Terminal Python na barra lateral`,
          tags: ['python', 'introdução', 'fundamentos', 'print']
        },
        {
          id: 'm1l2',
          title: '1.2 Variáveis, Tipos de Dados e Tipagem em Python',
          content: `<p><strong>Variáveis</strong> são espaços na memória do computador que armazenam dados que seu programa pode manipular. Em Python, você cria uma variável simplesmente atribuindo um valor a um nome usando o sinal <code>=</code>.</p>
<p><strong>Regras para nomes de variáveis:</strong></p>
<ul>
<li>Devem começar com letra (a-z, A-Z) ou underscore (_)</li>
<li>Podem conter letras, números e underscores</li>
<li>São case-sensitive: <code>nome</code> e <code>Nome</code> são variáveis diferentes</li>
<li>Não podem ser palavras reservadas (if, for, while, class, etc.)</li>
<li>Convenção Python: use <code>snake_case</code> (minúsculas com underscore)</li>
</ul>
<p><strong>Tipos de dados principais em Python:</strong></p>
<table style="width:100%; border-collapse:collapse; margin:1rem 0;">
<tr style="border-bottom:1px solid var(--border-subtle);"><th style="text-align:left;padding:0.5rem;">Tipo</th><th style="text-align:left;padding:0.5rem;">Descrição</th><th style="text-align:left;padding:0.5rem;">Exemplo</th></tr>
<tr style="border-bottom:1px solid var(--border-subtle);"><td style="padding:0.5rem;"><code>str</code></td><td style="padding:0.5rem;">Texto (string)</td><td style="padding:0.5rem;"><code>"NexusBot"</code></td></tr>
<tr style="border-bottom:1px solid var(--border-subtle);"><td style="padding:0.5rem;"><code>int</code></td><td style="padding:0.5rem;">Número inteiro</td><td style="padding:0.5rem;"><code>42</code></td></tr>
<tr style="border-bottom:1px solid var(--border-subtle);"><td style="padding:0.5rem;"><code>float</code></td><td style="padding:0.5rem;">Número decimal</td><td style="padding:0.5rem;"><code>3.14</code></td></tr>
<tr style="border-bottom:1px solid var(--border-subtle);"><td style="padding:0.5rem;"><code>bool</code></td><td style="padding:0.5rem;">Booleano (verdadeiro/falso)</td><td style="padding:0.5rem;"><code>True</code></td></tr>
<tr><td style="padding:0.5rem;"><code>NoneType</code></td><td style="padding:0.5rem;">Valor nulo/vazio</td><td style="padding:0.5rem;"><code>None</code></td></tr>
</table>
<p><strong>Tipagem dinâmica:</strong> Python determina o tipo da variável automaticamente com base no valor atribuído. Use <code>type()</code> para verificar o tipo.</p>
<p><strong>f-strings:</strong> Forma moderna de formatar strings desde Python 3.6. Use <code>f"texto {variavel}"</code> para inserir variáveis diretamente no texto.</p>`,
          code: `# === VARIÁVEIS E TIPOS DE DADOS EM PYTHON ===

# Strings (texto) - usam aspas simples ou duplas
nome_bot = "NexusBot"          # str
versao = "2.6"                 # str (texto, não número!)
prefixo = '/'                  # str (um caractere também é string)

# Números
porta = 8080                   # int (inteiro)
latencia = 0.042               # float (decimal)
contagem = 1_000_000           # int (underscore para legibilidade)

# Booleanos (True/False - case sensitive!)
bot_online = True              # bool
modo_dev = False               # bool

# None (valor nulo - útil para inicializar variáveis)
token = None                   # NoneType

# === VERIFICANDO TIPOS COM type() ===
print(f"Tipo de nome_bot: {type(nome_bot)}")
print(f"Tipo de porta: {type(porta)}")
print(f"Tipo de latencia: {type(latencia)}")

# === f-strings (formatação moderna) ===
print(f"Bot: {nome_bot} v{versao}")
print(f"Status: {'🟢 Online' if bot_online else '🔴 Offline'}")
print(f"Latência: {latencia * 1000:.0f}ms")  # :.0f = sem casas decimais

# === CONVERSÃO DE TIPOS (CASTING) ===
numero_str = "123"
numero_int = int(numero_str)   # Converte string para inteiro
print(f"Convertido: {numero_int} + 1 = {numero_int + 1}")`,
          tags: ['python', 'variáveis', 'tipos', 'f-strings', 'casting']
        },
        {
          id: 'm1l3',
          title: '1.3 Operadores Aritméticos, Comparação e Lógicos',
          content: `<p><strong>Operadores aritméticos</strong> realizam operações matemáticas:</p>
<table style="width:100%; border-collapse:collapse; margin:1rem 0;">
<tr style="border-bottom:1px solid var(--border-subtle);"><th style="text-align:left;padding:0.5rem;">Operador</th><th style="text-align:left;padding:0.5rem;">Nome</th><th style="text-align:left;padding:0.5rem;">Exemplo</th></tr>
<tr style="border-bottom:1px solid var(--border-subtle);"><td style="padding:0.5rem;"><code>+</code></td><td style="padding:0.5rem;">Adição</td><td style="padding:0.5rem;"><code>5 + 3 = 8</code></td></tr>
<tr style="border-bottom:1px solid var(--border-subtle);"><td style="padding:0.5rem;"><code>-</code></td><td style="padding:0.5rem;">Subtração</td><td style="padding:0.5rem;"><code>5 - 3 = 2</code></td></tr>
<tr style="border-bottom:1px solid var(--border-subtle);"><td style="padding:0.5rem;"><code>*</code></td><td style="padding:0.5rem;">Multiplicação</td><td style="padding:0.5rem;"><code>5 * 3 = 15</code></td></tr>
<tr style="border-bottom:1px solid var(--border-subtle);"><td style="padding:0.5rem;"><code>/</code></td><td style="padding:0.5rem;">Divisão (float)</td><td style="padding:0.5rem;"><code>5 / 2 = 2.5</code></td></tr>
<tr style="border-bottom:1px solid var(--border-subtle);"><td style="padding:0.5rem;"><code>//</code></td><td style="padding:0.5rem;">Divisão inteira</td><td style="padding:0.5rem;"><code>5 // 2 = 2</code></td></tr>
<tr style="border-bottom:1px solid var(--border-subtle);"><td style="padding:0.5rem;"><code>%</code></td><td style="padding:0.5rem;">Módulo (resto)</td><td style="padding:0.5rem;"><code>5 % 2 = 1</code></td></tr>
<tr><td style="padding:0.5rem;"><code>**</code></td><td style="padding:0.5rem;">Exponenciação</td><td style="padding:0.5rem;"><code>2 ** 3 = 8</code></td></tr>
</table>
<p><strong>Operadores de comparação</strong> retornam <code>True</code> ou <code>False</code>: <code>==</code>, <code>!=</code>, <code>></code>, <code><</code>, <code>>=</code>, <code><=</code></p>
<p><strong>Operadores lógicos</strong> combinam condições:</p>
<ul>
<li><code>and</code> — Verdadeiro se AMBAS as condições forem verdadeiras</li>
<li><code>or</code> — Verdadeiro se PELO MENOS UMA condição for verdadeira</li>
<li><code>not</code> — Inverte o valor booleano</li>
</ul>
<p><strong>Precedência de operadores:</strong> <code>**</code> → <code>* / // %</code> → <code>+ -</code> → <code>== != > < >= <=</code> → <code>not</code> → <code>and</code> → <code>or</code>. Use parênteses para controlar a ordem.</p>`,
          code: `# === OPERADORES EM PYTHON ===

a = 15
b = 4

# --- Aritméticos ---
print(f"Soma: {a} + {b} = {a + b}")
print(f"Subtração: {a} - {b} = {a - b}")
print(f"Multiplicação: {a} * {b} = {a * b}")
print(f"Divisão: {a} / {b} = {a / b}")        # Sempre retorna float
print(f"Divisão inteira: {a} // {b} = {a // b}")  # Descarta decimais
print(f"Resto (módulo): {a} % {b} = {a % b}")    # Útil para verificar par/ímpar
print(f"Potência: {a} ** {b} = {a ** b}")

# --- Comparação ---
print(f"a é igual a b? {a == b}")
print(f"a é maior que b? {a > b}")
print(f"a é diferente de b? {a != b}")

# --- Lógicos ---
x = True
y = False
print(f"x AND y: {x and y}")  # False (ambos precisam ser True)
print(f"x OR y: {x or y}")    # True (basta um ser True)
print(f"NOT x: {not x}")      # False (inverte o valor)

# --- Exemplo prático para bots ---
comando_valido = True
usuario_tem_permissao = False
pode_executar = comando_valido and usuario_tem_permissao
print(f"Pode executar comando? {pode_executar}")

# Verificando se um número é par (útil para paginação)
numero = 42
eh_par = (numero % 2 == 0)
print(f"{numero} é par? {eh_par}")`,
          tags: ['python', 'operadores', 'aritméticos', 'comparação', 'lógicos']
        },
        {
          id: 'm1l4',
          title: '1.4 Estruturas Condicionais (if, elif, else)',
          content: `<p><strong>Estruturas condicionais</strong> permitem que seu programa tome decisões baseadas em condições. É como dar ao seu código a capacidade de "pensar" e escolher diferentes caminhos.</p>
<p><strong>Sintaxe:</strong></p>
<ul>
<li><code>if condição:</code> — Executa o bloco se a condição for True</li>
<li><code>elif condição:</code> — Testa uma condição alternativa (pode ter vários)</li>
<li><code>else:</code> — Executa se nenhuma condição anterior for True</li>
</ul>
<p><strong>⚠️ INDENTAÇÃO É OBRIGATÓRIA!</strong> Em Python, a indentação (espaços no início da linha) define quais linhas pertencem a cada bloco. Use 4 espaços (padrão PEP 8). Código sem indentação correta gera <code>IndentationError</code>.</p>
<p><strong>Operador ternário:</strong> Forma compacta de if/else em uma linha: <code>valor = X if condição else Y</code></p>
<p><strong>Truthy e Falsy:</strong> Em Python, valores como <code>0</code>, <code>""</code>, <code>[]</code>, <code>{}</code>, <code>None</code> são considerados False em contexto booleano.</p>`,
          code: `# === ESTRUTURAS CONDICIONAIS ===

# Exemplo básico: verificando idade
idade = 16

if idade >= 18:
    print("✅ Acesso total liberado")
    print("Você pode usar todos os comandos do bot")
elif idade >= 13:
    print("⚠️ Acesso permitido com supervisão")
    print("Alguns comandos podem estar restritos")
else:
    print("❌ Acesso negado - idade insuficiente")
    print("Volte quando tiver 13 anos ou mais")

# --- Operador ternário (if/else em uma linha) ---
status = "online" if idade >= 13 else "offline"
print(f"Status do usuário: {status}")

# --- Truthy/Falsy ---
nome = ""  # String vazia é Falsy
if nome:
    print(f"Bem-vindo, {nome}!")
else:
    print("Nome não informado - usando 'Convidado'")
    nome = "Convidado"

# --- Exemplo prático: verificando permissões de comando ---
comando = "ban"
cargo_usuario = "Moderador"

comandos_mod = ["ban", "kick", "mute"]
comandos_admin = ["shutdown", "reload"]

if comando in comandos_admin and cargo_usuario == "Admin":
    print(f"🔧 Executando comando admin: {comando}")
elif comando in comandos_mod and cargo_usuario in ["Moderador", "Admin"]:
    print(f"🛡️ Executando comando mod: {comando}")
else:
    print(f"❌ Você não tem permissão para usar /{comando}")`,
          tags: ['python', 'condicionais', 'if', 'elif', 'else', 'operador-ternário']
        },
        {
          id: 'm1l5',
          title: '1.5 Laços de Repetição (for, while)',
          content: `<p><strong>Laços de repetição (loops)</strong> permitem executar um bloco de código múltiplas vezes sem precisar reescrevê-lo. São essenciais para processar listas, iterar sobre dados e automatizar tarefas repetitivas.</p>
<p><strong>Loop for:</strong> Itera sobre uma sequência (lista, string, range, dicionário, etc.).</p>
<p><strong>range():</strong> Gera uma sequência de números: <code>range(n)</code> (0 a n-1), <code>range(início, fim)</code>, <code>range(início, fim, passo)</code>.</p>
<p><strong>Loop while:</strong> Repete enquanto uma condição for True. Cuidado com loops infinitos!</p>
<p><strong>Comandos de controle:</strong> <code>break</code> (sai do loop), <code>continue</code> (pula iteração), <code>else</code> no loop (executa se terminou sem break).</p>`,
          code: `# === LAÇOS DE REPETIÇÃO ===

# --- FOR LOOP ---
print("=== For Loop ===")

# range(n): 0 até n-1
for i in range(5):
    print(f"Iteração {i}")

# Iterando sobre listas
comandos = ["ping", "kick", "ban", "mute", "help"]
for cmd in comandos:
    print(f"Carregando comando: /{cmd}")

# enumerate() - obtém índice e valor
for indice, comando in enumerate(comandos, start=1):
    print(f"{indice}. /{comando}")

# --- WHILE LOOP ---
print("\\n=== While Loop ===")

contador = 0
while contador < 5:
    print(f"Tentativa {contador + 1}/5")
    contador += 1  # IMPORTANTE: incrementar para evitar loop infinito!

# --- BREAK e CONTINUE ---
print("\\n=== Break e Continue ===")

for cmd in comandos:
    if cmd == "ban":
        print(f"Comando sensível encontrado: /{cmd}")
        break
    print(f"Verificando /{cmd}...")

for i in range(10):
    if i % 2 == 0:
        continue
    print(f"Número ímpar: {i}")`,
          tags: ['python', 'loops', 'for', 'while', 'break', 'continue', 'range']
        },
        {
          id: 'm1l6',
          title: '1.6 Listas: Criação, Métodos e Operações',
          content: `<p><strong>Listas</strong> são coleções ordenadas, mutáveis e que permitem elementos duplicados. São a estrutura de dados mais versátil do Python.</p>
<p><strong>Características:</strong> Ordenadas, mutáveis, indexadas (índice começa em 0), permitem duplicatas, aceitam qualquer tipo.</p>
<p><strong>Índices negativos:</strong> -1 é o último elemento, -2 é o penúltimo, etc.</p>
<p><strong>Slicing:</strong> <code>lista[início:fim:passo]</code> extrai uma sublista.</p>`,
          code: `# === LISTAS EM PYTHON ===

permissoes = ["kick", "ban", "mute"]

# Acessando elementos
print(f"Primeiro: {permissoes[0]}")
print(f"Último: {permissoes[-1]}")

# Slicing
print(f"Primeiros 2: {permissoes[0:2]}")

# Métodos
permissoes.append("warn")
permissoes.insert(1, "timeout")
print(f"Após adicionar: {permissoes}")

permissoes.remove("mute")
banido = permissoes.pop()
print(f"Removido: {banido}")

permissoes.sort()
print(f"Ordenado: {permissoes}")
print(f"Tamanho: {len(permissoes)}")
print(f"'admin' está na lista? {'admin' in permissoes}")

# List Comprehension
quadrados = [x**2 for x in range(10)]
print(f"Quadrados: {quadrados}")

# Exemplo prático: IDs de canais permitidos
canais_permitidos = [123456, 789012, 345678]
canal_usuario = 789012
if canal_usuario in canais_permitidos:
    print(f"✅ Canal {canal_usuario} autorizado!")
else:
    print(f"❌ Canal {canal_usuario} não autorizado!")`,
          tags: ['python', 'listas', 'coleções', 'slicing', 'list-comprehension']
        },
        {
          id: 'm1l7',
          title: '1.7 Dicionários (dict): Chave-Valor',
          content: `<p><strong>Dicionários</strong> são estruturas que armazenam pares de chave-valor. Pense neles como um "banco de dados em memória".</p>
<p><strong>Características:</strong> Chaves imutáveis, valores de qualquer tipo, acesso rápido (O(1)), mutáveis, mantêm ordem de inserção (Python 3.7+).</p>
<p><strong>Quando usar em bots:</strong> Configurações por servidor, dados de usuários, cache, respostas de APIs.</p>`,
          code: `# === DICIONÁRIOS EM PYTHON ===

config = {
    "prefix": "!",
    "owner_id": 123456789,
    "language": "pt-BR",
    "mod_roles": ["Moderador", "Admin"],
    "channels": {
        "logs": 987654321,
        "welcome": 987654322
    }
}

print(f"Prefixo: {config['prefix']}")
print(f"Idioma: {config.get('language')}")
print(f"Tema: {config.get('theme', 'dark')}")  # Com valor padrão

config['version'] = '2.6'
config['prefix'] = '/'

if 'owner_id' in config:
    print(f"Owner ID: {config['owner_id']}")

for chave, valor in config.items():
    print(f"  {chave}: {valor}")

# Exemplo: Config por servidor
servidores = {}
servidores[123456] = {"prefix": "!", "lang": "pt"}
servidores[789012] = {"prefix": "/", "lang": "en"}

servidor_id = 789012
if servidor_id in servidores:
    cfg = servidores[servidor_id]
    print(f"Servidor {servidor_id} usa prefixo '{cfg['prefix']}'")`,
          tags: ['python', 'dicionários', 'dict', 'chave-valor']
        },
        {
          id: 'm1l8',
          title: '1.8 Funções: Definição, Parâmetros e Escopo',
          content: `<p><strong>Funções</strong> são blocos de código reutilizáveis. Vantagens: reutilização, modularidade, testabilidade, legibilidade.</p>
<p><strong>Parâmetros:</strong> Obrigatórios, com valor padrão, *args (múltiplos posicionais), **kwargs (múltiplos nomeados).</p>
<p><strong>Escopo:</strong> Variáveis dentro da função são locais. Use <code>global</code> para modificar globais (evite).</p>`,
          code: `# === FUNÇÕES EM PYTHON ===

def saudacao(nome):
    """Retorna uma saudação personalizada."""
    return f"Olá, {nome}!"

print(saudacao("Admin"))

def criar_embed(titulo, descricao="Sem descrição", cor=0x3b82f6):
    """Cria um dicionário representando um embed do Discord."""
    return {"title": titulo, "description": descricao, "color": cor}

embed = criar_embed("Boas-vindas", "Bem-vindo ao servidor!")
print(embed)

def listar_comandos(bot_nome, *comandos):
    """Lista comandos disponíveis no bot."""
    print(f"\\n=== Comandos do {bot_nome} ===")
    for cmd in comandos:
        print(f"  /{cmd}")

listar_comandos("NexusBot", "ping", "info", "help", "ban")

def configurar_bot(**opcoes):
    """Configura o bot com opções personalizadas."""
    config = {"prefix": "!", "language": "pt-BR", "debug": False}
    config.update(opcoes)
    return config

minha_config = configurar_bot(prefix="/", debug=True)
print(f"Config final: {minha_config}")

def calcular_xp(mensagens: int, minutos_voice: float) -> int:
    """Calcula XP baseado em atividade."""
    return mensagens * 5 + int(minutos_voice * 2)

xp_total = calcular_xp(50, 120.5)
print(f"XP total ganho: {xp_total}")

dobro = lambda x: x * 2
print(f"Dobro de 5: {dobro(5)}")`,
          tags: ['python', 'funções', 'def', 'args', 'kwargs', 'lambda', 'type-hints']
        }
      ]
    },
    {
      id: 'mod2',
      icon: '🧠',
      title: 'Módulo 2 — Orientação a Objetos e Tratamento de Erros',
      description: 'Domine classes, herança, polimorfismo e tratamento profissional de exceções',
      difficulty: 'Iniciante-Intermediário',
      duration: '4h',
      lessons: [
        {
          id: 'm2l1',
          title: '2.1 Orientação a Objetos: Classes, Objetos e o __init__',
          content: `<p><strong>Orientação a Objetos (OOP)</strong> organiza código em "objetos" com dados (atributos) e comportamentos (métodos). É a base do discord.py.</p>
<p><strong>Conceitos:</strong> Classe (molde), Objeto (instância), Atributos (dados), Métodos (comportamentos), self (referência à instância).</p>
<p><strong>__init__:</strong> Construtor chamado ao criar um objeto. Inicializa atributos.</p>`,
          code: `# === ORIENTAÇÃO A OBJETOS ===

class Bot:
    """Classe que representa um bot Discord."""
    
    def __init__(self, nome: str, prefixo: str = "!"):
        self.nome = nome
        self.prefixo = prefixo
        self.comandos = []
        self.online = False
        print(f"🤖 Bot '{self.nome}' criado com prefixo '{self.prefixo}'")
    
    def ligar(self):
        if not self.online:
            self.online = True
            print(f"🟢 {self.nome} está online!")
    
    def adicionar_comando(self, nome: str, descricao: str = ""):
        self.comandos.append({"nome": nome, "descricao": descricao})
        print(f"✅ Comando '{self.prefixo}{nome}' adicionado!")
    
    def listar_comandos(self):
        if not self.comandos:
            return "Nenhum comando registrado."
        resultado = f"Comandos do {self.nome}:\\n"
        for cmd in self.comandos:
            resultado += f"  {self.prefixo}{cmd['nome']}\\n"
        return resultado

nexus = Bot("NexusBot", prefixo="/")
nexus.ligar()
nexus.adicionar_comando("ping", "Verifica latência")
nexus.adicionar_comando("help", "Lista comandos")
print(nexus.listar_comandos())`,
          tags: ['python', 'oop', 'classes', 'objetos', '__init__']
        },
        {
          id: 'm2l2',
          title: '2.2 Herança, Polimorfismo e super()',
          content: `<p><strong>Herança</strong> permite que uma classe herde atributos/métodos de outra. <strong>super()</strong> chama métodos da classe pai. <strong>Polimorfismo</strong> permite redefinir comportamentos em subclasses.</p>`,
          code: `# === HERANÇA E POLIMORFISMO ===

class Bot:
    def __init__(self, nome: str, prefixo: str = "!"):
        self.nome = nome
        self.prefixo = prefixo
        self.comandos = []
    
    def adicionar_comando(self, nome: str):
        self.comandos.append(nome)

class ModeradorBot(Bot):
    def __init__(self, nome: str, prefixo: str = "!"):
        super().__init__(nome, prefixo)
        self.bans = 0
        print(f"🛡️ Recursos de moderação ativados")
    
    def banir(self, usuario: str, motivo: str = "Sem motivo"):
        self.bans += 1
        print(f"🔨 {usuario} foi BANIDO por {self.nome}")
        print(f"   Total de bans: {self.bans}")

guardian = ModeradorBot("Guardian")
guardian.adicionar_comando("ban")
guardian.banir("spammer", "Spam em chat")`,
          tags: ['python', 'herança', 'polimorfismo', 'super']
        },
        {
          id: 'm2l3',
          title: '2.3 Tratamento de Erros (try/except/finally)',
          content: `<p><strong>Exceções</strong> são erros que ocorrem durante a execução. Use <code>try/except</code> para capturá-los e evitar que o programa quebre.</p>
<p><strong>finally:</strong> Bloco que sempre executa, ideal para limpeza (fechar arquivos, conexões).</p>
<p><strong>raise:</strong> Levanta uma exceção manualmente.</p>`,
          code: `# === TRATAMENTO DE EXCEÇÕES ===

def executar_comando(comando, args):
    try:
        if comando == "ban":
            if not args:
                raise ValueError("Argumentos insuficientes")
            print(f"Banindo {args[0]}...")
        elif comando == "div":
            resultado = 10 / int(args[0])
            print(f"Resultado: {resultado}")
        else:
            raise ValueError(f"Comando desconhecido: {comando}")
    except ZeroDivisionError:
        print("❌ Erro: Divisão por zero!")
    except IndexError:
        print("❌ Erro: Argumentos insuficientes!")
    except ValueError as e:
        print(f"❌ Erro: {e}")
    except Exception as e:
        print(f"❌ Erro inesperado: {e}")
    finally:
        print("✅ Execução do comando finalizada")

executar_comando("ban", ["spammer"])
executar_comando("div", ["0"])
executar_comando("div", ["2"])
executar_comando("unknown", [])`,
          tags: ['python', 'exceções', 'try-except', 'finally', 'raise']
        },
        {
          id: 'm2l4',
          title: '2.4 Manipulação de Arquivos (open, with)',
          content: `<p>Leia e escreva arquivos com <code>open()</code>. Modos: 'r' (leitura), 'w' (escrita), 'a' (anexar). Use <code>with</code> para garantir fechamento automático.</p>`,
          code: `# === MANIPULAÇÃO DE ARQUIVOS ===

# Escrita
with open("config.txt", "w", encoding="utf-8") as f:
    f.write("prefix=!\\n")
    f.write("language=pt-BR\\n")
print("✅ Arquivo config.txt criado!")

# Leitura
with open("config.txt", "r", encoding="utf-8") as f:
    conteudo = f.read()
    print(f"Conteúdo:\\n{conteudo}")

# Anexar (append)
with open("bot.log", "a", encoding="utf-8") as f:
    f.write("[INFO] Bot iniciado\\n")
print("✅ Log adicionado!")`,
          tags: ['python', 'arquivos', 'open', 'with']
        }
      ]
    },
    {
      id: 'mod3',
      icon: '⚡',
      title: 'Módulo 3 — Python Moderno para Bots',
      description: 'Async/await, tipagem, ambientes virtuais e arquitetura de projetos',
      difficulty: 'Intermediário',
      duration: '4h',
      lessons: [
        {
          id: 'm3l1',
          title: '3.1 Programação Assíncrona (async/await)',
          content: `<p>Bots Discord precisam ser <strong>assíncronos</strong> para lidar com múltiplos eventos simultaneamente. <code>async def</code> define uma corrotina; <code>await</code> pausa até a tarefa concluir. O <strong>event loop</strong> gerencia todas as tarefas.</p>
<p><strong>asyncio.gather():</strong> Executa múltiplas corrotinas concorrentemente.</p>`,
          code: `import asyncio

async def buscar_dados_api():
    print("🔍 Buscando dados...")
    await asyncio.sleep(2)  # Simula requisição
    return {"status": "ok", "data": [1, 2, 3]}

async def processar_comando():
    print("⚙️ Processando comando...")
    await asyncio.sleep(0.5)
    return "Comando executado"

async def main():
    dados, resultado = await asyncio.gather(
        buscar_dados_api(),
        processar_comando()
    )
    print(f"Dados: {dados}")
    print(f"Resultado: {resultado}")

asyncio.run(main())`,
          tags: ['python', 'async', 'await', 'assíncrono', 'asyncio']
        },
        {
          id: 'm3l2',
          title: '3.2 Tipagem Estática (Type Hints)',
          content: `<p><strong>Type hints</strong> melhoram legibilidade, permitem checagem com mypy e ajudam IDEs com autocomplete. Use <code>: tipo</code> para parâmetros e <code>-> tipo</code> para retorno.</p>`,
          code: `from typing import List, Dict, Optional

def criar_embed(
    titulo: str,
    descricao: str,
    cor: int = 0x3b82f6,
    campos: Optional[List[Dict[str, str]]] = None
) -> Dict[str, any]:
    """Cria um embed do Discord com tipagem completa."""
    embed = {"title": titulo, "description": descricao, "color": cor}
    if campos:
        embed["fields"] = campos
    return embed

embed = criar_embed("Título", "Descrição")
print(embed)`,
          tags: ['python', 'type-hints', 'tipagem', 'mypy']
        },
        {
          id: 'm3l3',
          title: '3.3 Ambientes Virtuais e Dependências',
          content: `<p><strong>Ambientes virtuais</strong> isolam dependências de cada projeto. Use <code>venv</code> (built-in) ou <code>poetry</code> (moderno).</p>
<p><strong>requirements.txt:</strong> Lista bibliotecas com versões exatas para reproduzir o ambiente.</p>`,
          code: `# Criar ambiente virtual
# python -m venv botenv
# source botenv/bin/activate  (Linux/Mac)
# botenv\\Scripts\\activate   (Windows)

# Instalar dependências
# pip install discord.py
# pip install aiosqlite
# pip install asyncpg
# pip install python-dotenv

# requirements.txt (exemplo):
# discord.py>=2.6.0
# aiosqlite>=0.20.0
# asyncpg>=0.29.0
# python-dotenv>=1.0.0

# Instalar a partir do arquivo:
# pip install -r requirements.txt`,
          tags: ['python', 'venv', 'dependências', 'requirements']
        }
      ]
    },
    {
      id: 'mod4',
      icon: '🤖',
      title: 'Módulo 4 — discord.py 2.6+ (2026)',
      description: 'Slash commands, Cogs, Views, Buttons, Select Menus e Modals',
      difficulty: 'Intermediário',
      duration: '6h',
      lessons: [
        {
          id: 'm4l1',
          title: '4.1 Criando o Bot no Developer Portal',
          content: `<p>Acesse <a href="https://discord.com/developers/applications" target="_blank" style="color:var(--accent-cyan);">discord.com/developers/applications</a> para criar sua aplicação. Gere o token, configure intents privilegiadas (message content, members, presences).</p>
<p><strong>⚠️ NUNCA compartilhe o token!</strong> Use variáveis de ambiente com <code>python-dotenv</code>.</p>`,
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
          tags: ['discord.py', 'bot', 'token', 'intents']
        },
        {
          id: 'm4l2',
          title: '4.2 Slash Commands (app_commands)',
          content: `<p><strong>Slash commands</strong> são o padrão moderno do Discord. Use <code>@bot.tree.command()</code> para criar comandos e <code>bot.tree.sync()</code> para sincronizar.</p>`,
          code: `from discord import app_commands

@bot.tree.command(name="ping", description="Verifica latência")
async def ping(interaction: discord.Interaction):
    latency = round(bot.latency * 1000)
    await interaction.response.send_message(f"🏓 Pong! {latency}ms")

@bot.tree.command(name="say", description="Faz o bot repetir")
@app_commands.describe(mensagem="O texto a repetir")
async def say(interaction: discord.Interaction, mensagem: str):
    await interaction.response.send_message(f"📢 {mensagem}")`,
          tags: ['discord.py', 'slash-commands', 'app_commands']
        },
        {
          id: 'm4l3',
          title: '4.3 Cogs: Organização Profissional',
          content: `<p><strong>Cogs</strong> permitem separar funcionalidades em módulos independentes. Cada Cog herda de <code>commands.Cog</code>. Use <code>setup()</code> para carregar.</p>`,
          code: `# cogs/moderation.py
import discord
from discord.ext import commands
from discord import app_commands

class Moderation(commands.Cog):
    def __init__(self, bot):
        self.bot = bot
    
    @app_commands.command(name="kick", description="Expulsa um membro")
    @app_commands.describe(member="Membro a ser expulso")
    async def kick(self, interaction: discord.Interaction, member: discord.Member):
        await member.kick()
        await interaction.response.send_message(f"👢 {member.mention} expulso!")

async def setup(bot):
    await bot.add_cog(Moderation(bot))`,
          tags: ['discord.py', 'cogs', 'organização']
        },
        {
          id: 'm4l4',
          title: '4.4 Views, Buttons e Select Menus',
          content: `<p><strong>Componentes interativos</strong> enriquecem a UX. <code>discord.ui.View</code> é container para botões e selects. Use callbacks para responder interações.</p>`,
          code: `class ConfirmView(discord.ui.View):
    def __init__(self):
        super().__init__(timeout=30)
    
    @discord.ui.button(label="Confirmar", style=discord.ButtonStyle.green)
    async def confirm(self, interaction: discord.Interaction, button: discord.ui.Button):
        await interaction.response.send_message("✅ Confirmado!")
        self.stop()
    
    @discord.ui.button(label="Cancelar", style=discord.ButtonStyle.red)
    async def cancel(self, interaction: discord.Interaction, button: discord.ui.Button):
        await interaction.response.send_message("❌ Cancelado!")
        self.stop()`,
          tags: ['discord.py', 'views', 'buttons', 'components']
        }
      ]
    },
    {
      id: 'mod5',
      icon: '🗄️',
      title: 'Módulo 5 — Banco de Dados',
      description: 'SQLite, PostgreSQL, ORM e migrations para bots',
      difficulty: 'Intermediário-Avançado',
      duration: '4h',
      lessons: [
        {
          id: 'm5l1',
          title: '5.1 SQLite Assíncrono com aiosqlite',
          content: `<p><strong>SQLite</strong> é ideal para bots pequenos/médios por não precisar de servidor separado. <strong>aiosqlite</strong> permite operações assíncronas para não bloquear o event loop.</p>
<p><strong>Placeholders (?):</strong> Previnem SQL injection. Nunca use f-strings para queries!</p>`,
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
    print("✅ Banco de dados inicializado!")

async def add_xp(user_id: int, amount: int):
    async with aiosqlite.connect("bot.db") as db:
        await db.execute(
            "INSERT INTO users (id, xp) VALUES (?, ?) "
            "ON CONFLICT(id) DO UPDATE SET xp = xp + ?",
            (user_id, amount, amount)
        )
        await db.commit()

async def get_user(user_id: int):
    async with aiosqlite.connect("bot.db") as db:
        cursor = await db.execute("SELECT * FROM users WHERE id = ?", (user_id,))
        return await cursor.fetchone()

# Uso
import asyncio
asyncio.run(init_db())`,
          tags: ['database', 'sqlite', 'aiosqlite', 'async']
        }
      ]
    },
    {
      id: 'mod6',
      icon: '🛡️',
      title: 'Módulo 6 — Bots Profissionais',
      description: 'Sistemas de moderação, tickets, logs e economia',
      difficulty: 'Avançado',
      duration: '6h',
      lessons: [
        {
          id: 'm6l1',
          title: '6.1 Sistema de Moderação Completo',
          content: `<p>Crie um sistema profissional com comandos de warn, mute, kick e ban. Armazene histórico no banco de dados e envie logs para canais designados.</p>`,
          code: `@app_commands.command(name="warn", description="Avisa um membro")
@app_commands.describe(member="Membro", reason="Motivo")
async def warn(self, interaction: discord.Interaction, member: discord.Member, reason: str = "Sem motivo"):
    # Salvar no banco (função assíncrona)
    await add_warn(member.id, interaction.user.id, reason)
    
    # Notificar o usuário via DM
    try:
        await member.send(f"⚠️ Você recebeu um aviso em {interaction.guild.name}\\nMotivo: {reason}")
    except:
        pass
    
    await interaction.response.send_message(f"⚠️ {member.mention} foi avisado. Motivo: {reason}")`,
          tags: ['discord.py', 'moderação', 'sistema', 'warn']
        }
      ]
    },
    {
      id: 'mod7',
      icon: '📈',
      title: 'Módulo 7 — Escalabilidade Enterprise',
      description: 'Sharding, Redis, cache e arquitetura para grandes bots',
      difficulty: 'Avançado',
      duration: '3h',
      lessons: [
        {
          id: 'm7l1',
          title: '7.1 AutoShardedBot para +2500 Servidores',
          content: `<p>Quando seu bot ultrapassa 2.500 servidores, o Discord exige <strong>sharding</strong>. <code>AutoShardedBot</code> divide automaticamente a carga entre múltiplos processos (shards).</p>`,
          code: `from discord import AutoShardedBot

bot = AutoShardedBot(shard_count=4, intents=intents)

@bot.event
async def on_ready():
    print(f"Shard {bot.shard_id} pronta de {bot.shard_count}")

@bot.event
async def on_shard_ready(shard_id):
    print(f"✅ Shard {shard_id} conectada ao gateway")`,
          tags: ['discord.py', 'sharding', 'escalabilidade', 'AutoShardedBot']
        }
      ]
    },
    {
      id: 'mod8',
      icon: '☁️',
      title: 'Módulo 8 — Deploy e Produção',
      description: 'Docker, Railway, VPS e boas práticas de deploy',
      difficulty: 'Avançado',
      duration: '3h',
      lessons: [
        {
          id: 'm8l1',
          title: '8.1 Dockerizando seu Bot',
          content: `<p><strong>Docker</strong> garante ambiente consistente em qualquer servidor. Crie um <code>Dockerfile</code> otimizado com multi-stage builds para imagens menores.</p>`,
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
CMD ["python", "main.py"]

# Build: docker build -t nexusbot .
# Run: docker run -d --name bot -e DISCORD_TOKEN=xxx nexusbot`,
          tags: ['docker', 'deploy', 'produção', 'Dockerfile']
        }
      ]
    }
  ];

  // ========== CHEATSHEETS DATA ==========
  const cheatsheetsData = {
    python: `# Python Cheatsheet\n\n# Variáveis\nnome = "Bot"\nversao = 2.6\n\n# Listas\ncomandos = ["ping", "kick", "ban"]\ncomandos.append("mute")\n\n# Dicionários\nconfig = {"prefix": "!", "owner": 123}\n\n# Funções\ndef saudacao(nome: str) -> str:\n    return f"Olá, {nome}"\n\n# Condicionais\nif ativo:\n    print("Online")\n\n# Loops\nfor i in range(5):\n    print(i)`,
    async: `# AsyncIO Cheatsheet\n\nimport asyncio\n\nasync def fetch():\n    await asyncio.sleep(1)\n    return "data"\n\nasyncio.run(fetch())\n\n# Tasks concorrentes\nresults = await asyncio.gather(fetch(), fetch())`,
    discordpy: `# discord.py Cheatsheet\n\n@bot.tree.command(name="ping")\nasync def ping(interaction):\n    await interaction.response.send_message("Pong!")\n\n# Cog\nclass MyCog(commands.Cog):\n    def __init__(self, bot):\n        self.bot = bot\n\n# Embed\nembed = discord.Embed(title="Título", color=0x3b82f6)`,
    sql: `# SQL Cheatsheet\n\nCREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT);\nINSERT INTO users VALUES (1, "Bot");\nSELECT * FROM users;\nUPDATE users SET name = "New" WHERE id = 1;\nDELETE FROM users WHERE id = 1;`,
    docker: `# Docker Cheatsheet\n\nFROM python:3.12-slim\nWORKDIR /app\nCOPY . .\nRUN pip install -r requirements.txt\nCMD ["python", "main.py"]\n\n# Build\ndocker build -t mybot .\n# Run\ndocker run -d mybot`,
    git: `# Git Cheatsheet\n\ngit init\ngit add .\ngit commit -m "msg"\ngit push origin main\ngit pull origin main\ngit checkout -b feature`
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

  // ========== XP SYSTEM ==========
  const xpSystem = {
    xp: parseInt(localStorage.getItem('nexus_xp') || '0'),
    level: parseInt(localStorage.getItem('nexus_level') || '1'),
    streak: parseInt(localStorage.getItem('nexus_streak') || '0'),
    lastLogin: localStorage.getItem('nexus_last_login') || null,
    
    xpPerLevel: function(level) { return Math.floor(100 * Math.pow(level, 1.5)); },
    
    addXP: function(amount) {
      this.xp += amount;
      while (this.xp >= this.xpPerLevel(this.level)) { this.xp -= this.xpPerLevel(this.level); this.level++; }
      this.save(); this.updateUI();
    },
    
    save: function() {
      localStorage.setItem('nexus_xp', this.xp);
      localStorage.setItem('nexus_level', this.level);
      localStorage.setItem('nexus_streak', this.streak);
      localStorage.setItem('nexus_last_login', new Date().toDateString());
    },
    
    checkStreak: function() {
      const today = new Date().toDateString();
      if (this.lastLogin === today) return;
      const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
      this.streak = (this.lastLogin === yesterday.toDateString()) ? this.streak + 1 : 1;
      this.save();
    },
    
    updateUI: function() {
      ['xpNumber','xpNumber2','levelNumber','levelNumber2','streakNumber','streakNumber2','sidebarXP','sidebarStreak'].forEach(id => {
        const el = document.getElementById(id); if (!el) return;
        if (id.startsWith('xp') || id === 'sidebarXP') el.textContent = this.xp;
        if (id.startsWith('level')) el.textContent = this.level;
        if (id.startsWith('streak') || id === 'sidebarStreak') el.textContent = this.streak;
      });
    }
  };

  // ========== MISSIONS SYSTEM ==========
  const missionsSystem = {
    missions: [
      { id: 'm1', type: 'daily', title: 'Complete 3 exercícios', xp: 50, target: 3, progress: 0, completed: false },
      { id: 'm2', type: 'daily', title: 'Execute código no Playground', xp: 30, target: 1, progress: 0, completed: false },
      { id: 'm3', type: 'weekly', title: 'Complete um módulo inteiro', xp: 200, target: 1, progress: 0, completed: false },
      { id: 'm4', type: 'weekly', title: 'Crie um comando slash funcional', xp: 150, target: 1, progress: 0, completed: false },
      { id: 'm5', type: 'secret', title: 'Encontre o easter egg na documentação', xp: 500, target: 1, progress: 0, completed: false },
    ],
    load: function() {
      const saved = JSON.parse(localStorage.getItem('nexus_missions') || '{}');
      this.missions.forEach(m => { if (saved[m.id]) { m.progress = saved[m.id].progress || 0; m.completed = saved[m.id].completed || false; } });
    },
    save: function() {
      const data = {}; this.missions.forEach(m => { data[m.id] = { progress: m.progress, completed: m.completed }; });
      localStorage.setItem('nexus_missions', JSON.stringify(data));
    },
    progressMission: function(missionId, amount = 1) {
      const mission = this.missions.find(m => m.id === missionId);
      if (mission && !mission.completed) {
        mission.progress = Math.min(mission.progress + amount, mission.target);
        if (mission.progress >= mission.target) { mission.completed = true; xpSystem.addXP(mission.xp); }
        this.save(); this.renderMissions(); achievementsSystem.renderAchievements();
      }
    },
    renderMissions: function() {
      const container = document.getElementById('missionsContainer'); if (!container) return;
      container.innerHTML = this.missions.map(m => `<div class="mission-card ${m.completed?'completed':''}"><span class="mission-type ${m.type}">${m.type}</span><h4 class="mission-title">${m.title}</h4><div class="mission-xp">⭐ +${m.xp} XP</div><div class="mission-progress"><div class="mission-progress-bar"><div class="mission-progress-fill" style="width:${(m.progress/m.target)*100}%"></div></div><small style="color:var(--text-muted);">${m.progress}/${m.target}</small></div></div>`).join('');
    }
  };

  // ========== ACHIEVEMENTS SYSTEM ==========
  const achievementsSystem = {
    achievements: [
      { id: 'a1', icon: '🤖', name: 'Primeiro Bot', rarity: 'common', unlocked: false },
      { id: 'a2', icon: '🚀', name: 'Deploy Master', rarity: 'rare', unlocked: false },
      { id: 'a3', icon: '⚡', name: 'Mestre Async', rarity: 'epic', unlocked: false },
      { id: 'a4', icon: '🐳', name: 'Docker Hero', rarity: 'epic', unlocked: false },
      { id: 'a5', icon: '📚', name: 'Estudioso', rarity: 'legendary', unlocked: false },
    ],
    load: function() { const saved = JSON.parse(localStorage.getItem('nexus_achievements') || '[]'); this.achievements.forEach(a => a.unlocked = saved.includes(a.id)); },
    save: function() { localStorage.setItem('nexus_achievements', JSON.stringify(this.achievements.filter(a=>a.unlocked).map(a=>a.id))); },
    unlock: function(id) { const a = this.achievements.find(x=>x.id===id); if (a && !a.unlocked) { a.unlocked = true; this.save(); this.renderAchievements(); } },
    renderAchievements: function() {
      const container = document.getElementById('achievementsContainer'); if (!container) return;
      container.innerHTML = this.achievements.map(a => `<div class="achievement-card ${a.unlocked?'unlocked':'locked'}"><div class="achievement-icon">${a.unlocked?a.icon:'🔒'}</div><div class="achievement-name">${a.name}</div><span class="achievement-rarity ${a.rarity}">${a.rarity}</span></div>`).join('');
    }
  };

  // ========== PROJECTS SYSTEM ==========
  const projectsSystem = {
    projects: [
      { id: 'p1', icon: '🛡️', title: 'Bot de Moderação', difficulty: 'Intermediário', steps: 8, completedSteps: 0 },
      { id: 'p2', icon: '💰', title: 'Bot de Economia', difficulty: 'Avançado', steps: 12, completedSteps: 0 },
      { id: 'p3', icon: '🎫', title: 'Sistema de Tickets', difficulty: 'Intermediário', steps: 6, completedSteps: 0 },
      { id: 'p4', icon: '📊', title: 'Dashboard Web', difficulty: 'Avançado', steps: 15, completedSteps: 0 },
    ],
    renderProjects: function() {
      const container = document.getElementById('projectsContainer'); if (!container) return;
      container.innerHTML = this.projects.map(p => `<div class="project-card"><div class="project-preview">${p.icon}</div><div class="project-info"><h3 class="project-title">${p.title}</h3><div class="project-meta"><span>📊 ${p.difficulty}</span><span>📝 ${p.steps} etapas</span></div><div class="mission-progress-bar"><div class="mission-progress-fill" style="width:${(p.completedSteps/p.steps)*100}%"></div></div></div></div>`).join('');
    }
  };

  // ========== AI TUTOR ==========
  const aiTutor = {
    renderChat: function() { const c = document.getElementById('aiChatMessages'); if(c) c.innerHTML = '<div class="ai-message bot"><div class="ai-avatar bot">🤖</div><div class="ai-bubble">Olá! Sou a Nexus AI. Pergunte sobre Python, bots Discord ou deploy!</div></div>'; },
    sendMessage: function() {
      const input = document.getElementById('aiInput'), container = document.getElementById('aiChatMessages');
      if (!input || !container) return;
      const msg = input.value.trim(); if (!msg) return;
      container.innerHTML += `<div class="ai-message user"><div class="ai-avatar user">👤</div><div class="ai-bubble">${msg}</div></div>`; input.value = '';
      setTimeout(() => {
        let r = 'Posso ajudar com Python, bots Discord, async/await, deploy e mais!';
        if (msg.toLowerCase().includes('async')) r = '⚡ Async/Await: Use async def e await. Ex: async def fetch(): await asyncio.sleep(1)';
        if (msg.toLowerCase().includes('deploy')) r = '🐳 Deploy com Docker: FROM python:3.12-slim, COPY, RUN pip install, CMD ["python", "bot.py"]';
        container.innerHTML += `<div class="ai-message bot"><div class="ai-avatar bot">🤖</div><div class="ai-bubble">${r}</div></div>`; container.scrollTop = container.scrollHeight;
      }, 500 + Math.random() * 1000);
    }
  };

  // ========== POMODORO SYSTEM ==========
  const pomodoroSystem = {
    timeLeft: 25 * 60, isRunning: false, sessions: 0, interval: null,
    start: function() { if(this.isRunning) return; this.isRunning = true; this.interval = setInterval(() => this.tick(), 1000); this.updateUI(); },
    pause: function() { this.isRunning = false; clearInterval(this.interval); this.updateUI(); },
    reset: function() { this.pause(); this.timeLeft = 25 * 60; this.updateUI(); },
    tick: function() { if(this.timeLeft > 0) this.timeLeft--; else { this.pause(); this.sessions++; this.timeLeft = 5 * 60; alert('🎯 Descanso!'); } this.updateUI(); },
    updateUI: function() { const t = document.getElementById('pomodoroTimer'); if(t) { const m = Math.floor(this.timeLeft/60), s = this.timeLeft%60; t.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`; } const se = document.getElementById('pomodoroSessions'); if(se) se.textContent = `Sessões: ${this.sessions}`; }
  };

  // ========== UTILS ==========
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);
  function escapeHtml(text) { const d = document.createElement('div'); d.textContent = text; return d.innerHTML; }
  function formatCodeForDisplay(code) { return escapeHtml(code); }
  function saveProgress() { localStorage.setItem('nexus_progress', JSON.stringify({ completedLessons: Array.from(completedLessons), lastModule: currentModuleId, lastLesson: currentLessonId, lastPage: currentPage, lastUpdated: Date.now() })); updateProgressUI(); }
  function updateProgressUI() { const total = courseData.reduce((a,m) => a + m.lessons.length, 0); const pct = Math.min(100, Math.floor((completedLessons.size / total) * 100)); const pe = document.getElementById('sidebarProgressPercent'); const pf = document.getElementById('sidebarProgressFill'); if(pe) pe.textContent = `${pct}%`; if(pf) pf.style.width = `${pct}%`; }

  // ========== NAVIGATION ==========
  function navigateTo(page, data = {}) {
    currentPage = page;
    $$('.nav-item').forEach(el => el.classList.remove('active'));
    const ni = $(`.nav-item[data-page="${page}"]`); if(ni) ni.classList.add('active');
    $$('.page').forEach(el => el.classList.remove('active'));
    const pe = document.getElementById(`page-${page}`); if(pe) { pe.classList.add('active'); pe.scrollTop = 0; }
    switch(page) {
      case 'documentation': renderDocumentationPage(data.moduleId || currentModuleId, data.lessonId || currentLessonId); break;
      case 'roadmap': renderRoadmapPage(); break;
      case 'playground': initPlayground(); break;
      case 'terminal': initTerminalPage(); break;
      case 'tools': initToolsPage(); break;
      case 'discord-simulator': initSimulator(); break;
      case 'cheatsheets': renderCheatsheet('python'); break;
      case 'quizzes': initQuiz(); break;
      case 'missions': missionsSystem.renderMissions(); achievementsSystem.renderAchievements(); break;
      case 'projects': projectsSystem.renderProjects(); break;
      case 'ai-tutor': aiTutor.renderChat(); break;
      case 'pomodoro': pomodoroSystem.updateUI(); break;
      case 'dashboard': renderDashboard(); break;
    }
    closeMobileSidebar(); saveProgress();
  }

  function navigateToLesson(mid, lid) { currentModuleId = mid; currentLessonId = lid; navigateTo('documentation', { moduleId: mid, lessonId: lid }); }

  function buildModuleNav() {
    const c = document.getElementById('moduleNavContainer'); if(!c) return; c.innerHTML = '';
    courseData.forEach(mod => {
      const me = document.createElement('div'); me.className = `nav-item ${mod.id===currentModuleId?'active':''}`; me.innerHTML = `<span class="nav-icon">${mod.icon}</span><span class="nav-label">${mod.title}</span>`; me.addEventListener('click', () => navigateToLesson(mod.id, mod.lessons[0].id)); c.appendChild(me);
      mod.lessons.forEach(les => {
        const le = document.createElement('div'); le.className = `nav-item module-nav-item ${les.id===currentLessonId?'active':''}`; le.style.paddingLeft='3rem'; le.style.fontSize='0.78rem'; le.innerHTML = `<span class="nav-label">📝 ${les.title}</span>${completedLessons.has(les.id)?'<span style="color:#28c840;">✓</span>':''}`; le.addEventListener('click', (e) => { e.stopPropagation(); navigateToLesson(mod.id, les.id); }); c.appendChild(le);
      });
    });
  }

  function closeMobileSidebar() { const s = document.getElementById('main-sidebar'); const o = document.getElementById('sidebarOverlay'); if(s) s.classList.remove('mobile-open'); if(o) o.classList.remove('active'); document.body.style.overflow = ''; }
  function openMobileSidebar() { const s = document.getElementById('main-sidebar'); const o = document.getElementById('sidebarOverlay'); if(s) s.classList.add('mobile-open'); if(o) o.classList.add('active'); document.body.style.overflow = 'hidden'; }

  function renderDocumentationPage(mid, lid) {
    const mod = courseData.find(m => m.id === mid); if(!mod) return;
    const les = mod.lessons.find(l => l.id === lid) || mod.lessons[0]; if(!les) return;
    currentModuleId = mid; currentLessonId = les.id;
    const dn = document.getElementById('docNav');
    if(dn) { dn.innerHTML = ''; courseData.forEach(m => { const mh = document.createElement('div'); mh.className='doc-nav-item'; mh.style.fontWeight='700'; mh.style.color='var(--text-primary)'; mh.textContent = `${m.icon} ${m.title}`; mh.addEventListener('click', () => navigateToLesson(m.id, m.lessons[0].id)); dn.appendChild(mh); m.lessons.forEach(l => { const le = document.createElement('div'); le.className = `doc-nav-item ${l.id===les.id?'active':''}`; le.style.paddingLeft='2rem'; le.textContent = l.title; le.addEventListener('click', () => navigateToLesson(m.id, l.id)); dn.appendChild(le); }); }); }
    const bc = document.getElementById('docBreadcrumbs'); if(bc) bc.innerHTML = `<span style="color:var(--accent-cyan);">${mod.title}</span> / ${les.title}`;
    const ar = document.getElementById('docArticle');
    if(ar) {
      const idx = mod.lessons.findIndex(l => l.id === les.id);
      const pr = idx > 0 ? mod.lessons[idx-1] : null;
      const nx = idx < mod.lessons.length-1 ? mod.lessons[idx+1] : null;
      ar.innerHTML = `<h3>📘 ${les.title}</h3><div class="prose">${les.content}</div><div class="code-block"><button class="copy-btn" onclick="window.copyLessonCode()">📋 Copiar código</button><pre style="color:#c7d2fe;white-space:pre-wrap;font-family:var(--font-mono);">${formatCodeForDisplay(les.code)}</pre></div><div style="display:flex;justify-content:space-between;margin-top:2rem;"><button class="btn-outline" ${!pr?'disabled':''} onclick="navigateToLesson('${mid}','${pr?.id||''}')">← Anterior</button><button class="btn-primary-glow" onclick="window.completeLesson('${les.id}')">${completedLessons.has(les.id)?'✅ Concluída':'Marcar concluída'}</button><button class="btn-outline" ${!nx?'disabled':''} onclick="navigateToLesson('${mid}','${nx?.id||''}')">Próxima →</button></div>`;
      window._currentLessonCode = les.code;
    }
    buildModuleNav(); updateProgressUI();
  }

  window.copyLessonCode = function() { if(window._currentLessonCode) navigator.clipboard?.writeText(window._currentLessonCode).then(() => alert('✅ Copiado!')); };
  window.completeLesson = function(lid) { if(completedLessons.has(lid)) completedLessons.delete(lid); else { completedLessons.add(lid); xpSystem.addXP(25); missionsSystem.progressMission('m1'); missionsSystem.progressMission('m3'); } saveProgress(); navigateToLesson(currentModuleId, currentLessonId); };

  function renderRoadmapPage() {
    const c = document.getElementById('roadmapFull'); if(!c) return;
    let h = '<div class="timeline-roadmap" style="max-width:600px;margin:0 auto;">';
    courseData.forEach((m,i) => { const d = m.lessons.every(l => completedLessons.has(l.id)); h += `<div class="timeline-node ${d?'completed':(m.id===currentModuleId?'active':'')}"><div class="node-marker">${i+1}</div><div class="node-content"><h4>${m.icon} ${m.title}</h4><a href="#" onclick="navigateToLesson('${m.id}','${m.lessons[0].id}');return false;" style="color:var(--accent-cyan);">${d?'✅ Concluído':'▶ Começar'}</a></div></div>`; if(i < courseData.length-1) h += `<div class="timeline-connector ${d?'completed':''}"></div>`; });
    h += '</div>'; c.innerHTML = h;
  }

  function initPlayground() { if(!monacoReady) loadMonacoEditor().then(() => setupMonacoEditor()); else setupMonacoEditor(); }
  function loadMonacoEditor() { return new Promise((resolve) => { if(typeof monaco !== 'undefined') { monacoReady = true; resolve(); return; } require.config({ paths: { vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs' } }); require(['vs/editor/editor.main'], () => { monacoReady = true; resolve(); }); }); }
  function setupMonacoEditor() { if(monacoEditorInstance) return; const c = document.getElementById('monacoEditor'); if(!c) return; monaco.editor.defineTheme('nexus-dark', { base: 'vs-dark', inherit: true, rules: [], colors: { 'editor.background': '#0c0e17' } }); monacoEditorInstance = monaco.editor.create(c, { value: '# Playground Python\nprint("Olá!")', language: 'python', theme: 'nexus-dark', fontSize: 14, automaticLayout: true }); document.getElementById('runCodeBtn')?.addEventListener('click', executePlaygroundCode); document.getElementById('resetCodeBtn')?.addEventListener('click', () => monacoEditorInstance?.setValue('# Resetado')); }
  async function executePlaygroundCode() { const o = document.getElementById('outputContent'); if(!o||!monacoEditorInstance) return; o.textContent = '⏳ Executando...'; const code = monacoEditorInstance.getValue(); if(window.pyodideInstance) { try { await window.pyodideInstance.runPythonAsync('import sys\nfrom io import StringIO\nsys.stdout = StringIO()'); await window.pyodideInstance.runPythonAsync(code); o.textContent = await window.pyodideInstance.runPythonAsync('sys.stdout.getvalue()') || '(sem saída)'; xpSystem.addXP(5); missionsSystem.progressMission('m2'); } catch(e) { o.textContent = `❌ Erro: ${e.message}`; } } else { o.textContent = '⚠️ Pyodide não carregado.'; } }

  function initTerminalPage() { document.getElementById('runPythonBtn')?.addEventListener('click', executeTerminalPython); }
  async function executeTerminalPython() { const i = document.getElementById('pythonInput'), o = document.getElementById('terminalContent'); if(!i||!o) return; const code = i.value.trim(); if(!code) { o.textContent = '⚠️ Digite código.'; return; } o.textContent = '⏳ Executando...\n'; if(window.pyodideInstance) { try { await window.pyodideInstance.runPythonAsync('import sys\nfrom io import StringIO\nsys.stdout = StringIO()'); await window.pyodideInstance.runPythonAsync(code); o.textContent = await window.pyodideInstance.runPythonAsync('sys.stdout.getvalue()') || '(sem saída)'; } catch(e) { o.textContent = `❌ Erro:\n${e.message}`; } } else { o.textContent = '⚠️ Pyodide offline.'; } }

  function initToolsPage() { initPermissionCalculator(); }
  function initPermissionCalculator() { const g = document.getElementById('permGrid'); if(!g) return; g.innerHTML = ['CREATE_INSTANT_INVITE','KICK_MEMBERS','BAN_MEMBERS','ADMINISTRATOR','SEND_MESSAGES','EMBED_LINKS'].map(p => `<label><input type="checkbox" value="${p}" onchange="calcPermissions()"> ${p}</label>`).join(''); }

  window.formatJSON = function() { const i = document.getElementById('jsonInput'), o = document.getElementById('jsonOutput'); if(!i||!o) return; try { o.textContent = JSON.stringify(JSON.parse(i.value), null, 2); o.style.color = '#86efac'; } catch(e) { o.textContent = `❌ ${e.message}`; o.style.color = '#ff5f57'; } };
  window.generateEmbedJSON = function() { const o = document.getElementById('embedJSONOutput'); if(o) o.textContent = JSON.stringify({ title: "Título", description: "Descrição", color: 0x3b82f6, fields: [{ name: "Campo", value: "Valor" }] }, null, 2); };
  window.generateTimestamp = function() { const i = document.getElementById('timestampInput'), o = document.getElementById('timestampOutput'); if(!i||!o) return; o.textContent = `<t:${Math.floor(new Date(i.value).getTime()/1000)}:F>`; };
  window.calcPermissions = function() { const o = document.getElementById('permOutput'); if(!o) return; const map = { CREATE_INSTANT_INVITE:1, KICK_MEMBERS:2, BAN_MEMBERS:4, ADMINISTRATOR:8, SEND_MESSAGES:2048, EMBED_LINKS:16384 }; let t = 0; document.querySelectorAll('#permGrid input:checked').forEach(cb => t |= (map[cb.value]||0)); o.textContent = `Permissão: ${t}`; };

  function initSimulator() { const i = document.getElementById('discordCommandInput'), s = document.getElementById('sendDiscordCommand'), m = document.getElementById('discordMessages'); if(!i||!s||!m) return; s.addEventListener('click', () => { const cmd = i.value.trim(); if(!cmd) return; m.innerHTML += `<div class="discord-message"><div class="message-avatar">👤</div><div class="message-content"><span class="message-author">Você</span><p><code>/${cmd}</code></p></div></div>`; let r = 'Comando não reconhecido.'; if(cmd==='ping') r = '🏓 Pong! 42ms'; if(cmd==='help') r = '📋 /ping, /help, /info'; m.innerHTML += `<div class="discord-message bot-message"><div class="message-avatar">🤖</div><div class="message-content"><span class="message-author">NexusBot</span><p>${r}</p></div></div>`; i.value = ''; m.scrollTop = m.scrollHeight; }); }

  function renderCheatsheet(sheet) { const c = document.getElementById('cheatsheetContent'); if(!c) return; c.innerHTML = `<pre style="color:#c7d2fe;font-family:var(--font-mono);padding:1.5rem;background:rgba(0,0,0,0.3);border-radius:12px;">${escapeHtml(cheatsheetsData[sheet]||'N/A')}</pre>`; $$('.cheatsheet-tab').forEach(t => t.classList.toggle('active', t.dataset.sheet === sheet)); }

  function initQuiz() {
    currentQuizQuestions = [
      { question: 'Qual biblioteca para bots Discord?', options: ['discord.py','flask','numpy','requests'], correct: 0 },
      { question: 'O que é async/await?', options: ['Síncrono','Assíncrono não-bloqueante','Loop','Estrutura'], correct: 1 },
      { question: 'Como criar slash command?', options: ['@bot.command()','@bot.tree.command()','@bot.slash()','@bot.create()'], correct: 1 },
    ];
    const c = document.getElementById('quizContainer'), r = document.getElementById('quizResults'); if(!c||!r) return; r.style.display = 'none'; quizAnswers = {};
    c.innerHTML = currentQuizQuestions.map((q,i) => `<div class="quiz-question"><h3>${i+1}. ${q.question}</h3><div class="quiz-options">${q.options.map((o,j) => `<div class="quiz-option" onclick="selectQuizOption(${i},${j})">${o}</div>`).join('')}</div></div>`).join('') + '<button class="btn-primary-glow" onclick="submitQuiz()">Enviar</button>';
  }

  window.selectQuizOption = function(qi, oi) { quizAnswers[qi] = oi; document.querySelectorAll('.quiz-question')[qi]?.querySelectorAll('.quiz-option').forEach((el,i) => el.classList.toggle('selected', i===oi)); };
  window.submitQuiz = function() { let s = 0; currentQuizQuestions.forEach((q,i) => { const el = document.querySelectorAll('.quiz-question')[i]; el?.querySelectorAll('.quiz-option').forEach((o,j) => { o.classList.remove('correct','incorrect'); if(j===q.correct) o.classList.add('correct'); if(j===quizAnswers[i] && j!==q.correct) o.classList.add('incorrect'); }); if(quizAnswers[i]===q.correct) s++; }); const r = document.getElementById('quizResults'); if(r) { r.style.display = 'block'; document.getElementById('quizScore').textContent = `${s}/${currentQuizQuestions.length}`; } xpSystem.addXP(s*10); };

  function renderDashboard() { const c = document.getElementById('dashboardContainer'); if(!c) return; const t = courseData.reduce((a,m) => a + m.lessons.length, 0); c.innerHTML = `<div class="dashboard-grid"><div class="dashboard-card"><h3>📊 Estatísticas</h3><div class="dashboard-stat"><span class="stat-icon-large">📚</span><div class="stat-info"><div class="stat-value">${completedLessons.size}/${t}</div><div class="stat-label-dash">Aulas</div></div></div><div class="dashboard-stat"><span class="stat-icon-large">⭐</span><div class="stat-info"><div class="stat-value" style="color:var(--xp-gold);">${xpSystem.xp}</div><div class="stat-label-dash">XP</div></div></div><div class="dashboard-stat"><span class="stat-icon-large">🔥</span><div class="stat-info"><div class="stat-value" style="color:var(--streak-fire);">${xpSystem.streak}</div><div class="stat-label-dash">Streak</div></div></div></div></div>`; }

  function openSearchModal() { document.getElementById('searchModal').style.display = 'flex'; document.getElementById('modalSearchInput')?.focus(); }
  function closeSearchModal() { document.getElementById('searchModal').style.display = 'none'; }

  function performSearch(query) { const r = document.getElementById('searchResults'); if(!r) return; if(!query||query.length<2) { r.innerHTML = '<div class="search-result-item">Digite 2+ caracteres...</div>'; return; } const items = []; courseData.forEach(m => m.lessons.forEach(l => { if(l.title.toLowerCase().includes(query)||l.content.toLowerCase().includes(query)) items.push({ mid: m.id, lid: l.id, title: l.title, mod: m.title }); })); r.innerHTML = items.length ? items.map(i => `<div class="search-result-item" onclick="navigateToLesson('${i.mid}','${i.lid}');closeSearchModal();"><strong>${i.title}</strong><small>${i.mod}</small></div>`).join('') : '<div class="search-result-item">Nada encontrado.</div>'; }

  function fixHeroButtons() { document.querySelectorAll('.hero-cta-group a').forEach(btn => { const page = btn.getAttribute('data-nav') || (btn.getAttribute('href')==='#documentation'?'documentation':btn.getAttribute('href')==='#playground'?'playground':null); if(page) btn.addEventListener('click', (e) => { e.preventDefault(); navigateTo(page); }); }); }

  function animateCounters() { document.querySelectorAll('[data-counter]').forEach(c => { const target = parseInt(c.getAttribute('data-counter')); let cur = 0; const obs = new IntersectionObserver((entries) => { if(entries[0].isIntersecting) { const iv = setInterval(() => { cur += target/50; if(cur >= target) { c.textContent = target; clearInterval(iv); } else c.textContent = Math.floor(cur); }, 40); obs.unobserve(c); } }, { threshold: 0.5 }); obs.observe(c); }); }

  // ========== INIT ==========
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => { document.getElementById('app-loading')?.classList.add('hidden'); document.getElementById('app-container').style.opacity = '1'; }, 600);
    xpSystem.checkStreak(); xpSystem.updateUI(); missionsSystem.load(); achievementsSystem.load();
    buildModuleNav(); fixHeroButtons(); animateCounters(); updateProgressUI();
    document.getElementById('sidebarNav')?.addEventListener('click', (e) => { const item = e.target.closest('.nav-item'); if(item?.dataset.page) { e.preventDefault(); navigateTo(item.dataset.page); } });
    document.getElementById('mobileMenuBtn')?.addEventListener('click', () => { document.getElementById('main-sidebar')?.classList.contains('mobile-open') ? closeMobileSidebar() : openMobileSidebar(); });
    document.getElementById('sidebarOverlay')?.addEventListener('click', closeMobileSidebar);
    document.getElementById('mobileSearchBtn')?.addEventListener('click', openSearchModal);
    document.getElementById('globalSearch')?.addEventListener('focus', openSearchModal);
    document.getElementById('modalSearchInput')?.addEventListener('input', (e) => performSearch(e.target.value));
    document.getElementById('globalSearch')?.addEventListener('input', (e) => { performSearch(e.target.value); openSearchModal(); });
    document.getElementById('searchModal')?.addEventListener('click', (e) => { if(e.target === document.getElementById('searchModal')) closeSearchModal(); });
    document.addEventListener('keydown', (e) => { if((e.metaKey||e.ctrlKey)&&e.key==='k') { e.preventDefault(); openSearchModal(); } if(e.key==='Escape') { closeSearchModal(); closeMobileSidebar(); } });
    $$('.cheatsheet-tab').forEach(t => t.addEventListener('click', () => renderCheatsheet(t.dataset.sheet)));
    document.getElementById('focusModeBtn')?.addEventListener('click', () => document.body.classList.toggle('focus-mode'));
    document.getElementById('themeToggleBtn')?.addEventListener('click', () => { document.documentElement.setAttribute('data-theme', document.documentElement.getAttribute('data-theme')==='light'?'':'light'); });
    document.getElementById('sidebar-collapse-btn')?.addEventListener('click', () => document.getElementById('main-sidebar')?.classList.toggle('collapsed'));
    document.getElementById('videoMock')?.addEventListener('click', () => alert('🎬 Video Player'));
  });

  async function initPyodide() { if(typeof loadPyodide==='undefined') return; try { window.pyodideInstance = await loadPyodide({ indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.25.0/full/' }); const s = document.getElementById('pyodideStatus'); if(s) { s.textContent = '✅ Python 3.12 pronto'; s.style.color = '#28c840'; } } catch(e) { console.error(e); } }
  if(typeof loadPyodide !== 'undefined') initPyodide(); else window.addEventListener('load', () => setTimeout(initPyodide, 1000));

  // Expose globals
  window.navigateTo = navigateTo; window.navigateToLesson = navigateToLesson; window.closeSearchModal = closeSearchModal;
  window.formatJSON = window.formatJSON; window.generateEmbedJSON = window.generateEmbedJSON; window.generateTimestamp = window.generateTimestamp;
  window.calcPermissions = window.calcPermissions; window.selectQuizOption = window.selectQuizOption; window.submitQuiz = window.submitQuiz;
  window.completeLesson = window.completeLesson; window.copyLessonCode = window.copyLessonCode; window.retakeQuiz = () => initQuiz();
  window.xpSystem = xpSystem; window.missionsSystem = missionsSystem; window.achievementsSystem = achievementsSystem;
  window.projectsSystem = projectsSystem; window.aiTutor = aiTutor; window.pomodoroSystem = pomodoroSystem;

  console.log('🚀 Discord Bots Mastery 2026 - Pronto!');
})();