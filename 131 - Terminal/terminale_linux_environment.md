# 🌍 Appunti Terminale Linux — Variabili d'Ambiente, Shell e Bash Profile

> Cheatsheet personale — environment variables, PS1, PATH, source, .bashrc/.bash_profile

---

## 🔑 Cos'è una variabile d'ambiente

Le variabili d'ambiente sono coppie `NOME=valore` disponibili ai processi della shell e ai loro figli.
Esistono due tipi principali:

| Tipo | Visibilità | Dichiarazione |
|------|------------|---------------|
| **Shell variable** | Solo nella shell corrente | `VAR=valore` |
| **Environment variable** | Shell + tutti i processi figli | `export VAR=valore` |

```bash
# Variabile di shell (non ereditata dai figli)
MY_VAR="ciao"

# Variabile d'ambiente (esportata ai processi figli)
export MY_VAR="ciao"

# Dichiarazione + export in una riga
export DB_HOST="localhost"

# Variabile solo per il comando corrente (inline, non persiste)
NODE_ENV=production node app.js
```

---

## 📋 `env`, `printenv`, `set` — Visualizzare le variabili

```bash
env                            # Lista tutte le variabili d'ambiente esportate
printenv                       # Come env, stesso output
printenv PATH                  # Valore di una variabile specifica
printenv HOME USER SHELL       # Più variabili in una volta

set                            # Lista TUTTE le variabili (env + shell + funzioni)
set | grep MY_VAR              # Filtra per nome

echo $MY_VAR                   # Stampa il valore di una variabile
echo ${MY_VAR}                 # Forma con parentesi graffe (più sicura)
echo "${MY_VAR:-default}"      # Stampa valore o "default" se non definita
```

---

## 🗺️ Variabili d'ambiente fondamentali

```bash
echo $HOME          # /home/davide — home directory dell'utente corrente
echo $USER          # davide — nome utente corrente
echo $SHELL         # /bin/bash — shell in uso
echo $PATH          # Lista di directory dove la shell cerca gli eseguibili
echo $PWD           # Directory corrente (come `pwd`)
echo $OLDPWD        # Directory precedente (usata da `cd -`)
echo $HOSTNAME      # Nome del host
echo $LANG          # Locale del sistema (es. it_IT.UTF-8)
echo $EDITOR        # Editor di default (es. vim, nano, code)
echo $TERM          # Tipo di terminale (es. xterm-256color)
echo $LOGNAME       # Nome utente di login
echo $UID           # User ID numerico
echo $EUID          # Effective User ID
echo $0             # Nome della shell/script corrente
echo $?             # Exit code dell'ultimo comando (0 = successo)
echo $$             # PID della shell corrente
echo $!             # PID dell'ultimo processo in background
```

---

## 🛣️ `PATH` — Come funziona e come modificarlo

`PATH` è una lista di directory separate da `:`. Quando scrivi un comando,
la shell le scorre in ordine cercando un eseguibile con quel nome.

```bash
echo $PATH
# /usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin

# Aggiungere una directory al PATH (temporaneo, vale solo per la sessione)
export PATH="$PATH:/home/davide/.local/bin"

# Aggiungere una dir ALL'INIZIO del PATH (priorità più alta)
export PATH="/opt/myapp/bin:$PATH"

# Trovare dove si trova un eseguibile
which python3           # /usr/bin/python3
whereis python3         # Trova binario, sorgenti e man page
type python3            # Mostra se è builtin, alias o file esterno

# Verificare che un path esista prima di aggiungerlo (buona pratica in .bashrc)
[[ -d "$HOME/.local/bin" ]] && export PATH="$HOME/.local/bin:$PATH"
```

---

## 🎨 `PS1` — Personalizzare il prompt

`PS1` è la variabile che definisce come appare il **prompt** della shell.

### Escape sequences principali

| Codice | Significato |
|--------|-------------|
| `\u`   | Nome utente |
| `\h`   | Hostname (short) |
| `\H`   | Hostname completo |
| `\w`   | Directory corrente (percorso completo) |
| `\W`   | Solo il nome della dir corrente |
| `\d`   | Data (Mon Jan 01) |
| `\t`   | Ora (HH:MM:SS) |
| `\$`   | `$` se utente normale, `#` se root |
| `\n`   | Newline |
| `\[`   | Inizio sequenza non stampabile (colori) |
| `\]`   | Fine sequenza non stampabile |

### Codici colore ANSI

```bash
# Formato: \[\e[CODICEm\]
\[\e[0m\]    # Reset
\[\e[1m\]    # Grassetto
\[\e[31m\]   # Rosso
\[\e[32m\]   # Verde
\[\e[33m\]   # Giallo
\[\e[34m\]   # Blu
\[\e[35m\]   # Magenta
\[\e[36m\]   # Ciano
\[\e[37m\]   # Bianco
```

### Esempi di PS1

```bash
# Prompt semplice: user@host:dir$
PS1='\u@\h:\w\$ '

# Prompt colorato: user verde, dir blu
PS1='\[\e[32m\]\u@\h\[\e[0m\]:\[\e[34m\]\w\[\e[0m\]\$ '

# Prompt con timestamp
PS1='[\t] \[\e[33m\]\u\[\e[0m\]:\[\e[36m\]\w\[\e[0m\]\$ '

# Prompt multiriga (dir su riga 1, $ su riga 2)
PS1='\[\e[34m\]\w\[\e[0m\]\n\$ '

# PS2: prompt per continuazione comando (default >)
PS2='... '
```

---

## 📂 File di configurazione della shell — Quali sono e quando vengono caricati

### Bash: ordine di caricamento

```
Login shell (es. SSH, terminale virtuale):
  1. /etc/profile          ← configurazione globale di sistema
  2. ~/.bash_profile        ← specifico utente (eseguito per PRIMO)
       oppure ~/.bash_login
       oppure ~/.profile    (se i precedenti non esistono)

Interactive non-login shell (es. terminale grafico, nuovo tab):
  1. /etc/bash.bashrc      ← configurazione globale
  2. ~/.bashrc             ← specifico utente (eseguito ad ogni nuova shell)

Non-interactive shell (es. script):
  Solo $BASH_ENV se definita
```

### Differenza pratica

| File | Quando viene eseguito | Uso tipico |
|------|-----------------------|------------|
| `~/.bash_profile` | Solo login shell | `export PATH`, variabili d'ambiente permanenti |
| `~/.bashrc` | Ogni shell interattiva | Alias, funzioni, PS1, completamenti |
| `~/.profile` | Login shell (sh/dash compatibile) | Variabili portabili tra shell diverse |
| `/etc/environment` | Tutti gli utenti, al boot | Variabili di sistema globali (no script) |

> 💡 **Best practice**: metti `source ~/.bashrc` dentro `.bash_profile` per avere
> tutto disponibile anche nelle login shell.

```bash
# Contenuto tipico di ~/.bash_profile
[[ -f ~/.bashrc ]] && source ~/.bashrc
```

---

## 📝 Cosa mettere nel `.bashrc`

```bash
# ~/.bashrc — template commentato

# ── Variabili d'ambiente ──────────────────────────────────────────
export EDITOR="nano"
export VISUAL="code"
export LANG="it_IT.UTF-8"
export HISTSIZE=10000              # Righe in memoria
export HISTFILESIZE=20000          # Righe nel file .bash_history
export HISTCONTROL=ignoredups:erasedups  # Non salvare duplicati
export HISTTIMEFORMAT="%F %T "     # Timestamp nella history

# ── PATH personalizzato ───────────────────────────────────────────
export PATH="$HOME/.local/bin:$HOME/bin:$PATH"
export PATH="$HOME/.cargo/bin:$PATH"     # Rust/cargo
# export PATH="/opt/conda/bin:$PATH"     # Conda/Miniconda

# ── PS1 colorato ─────────────────────────────────────────────────
export PS1='\[\e[32m\]\u@\h\[\e[0m\]:\[\e[34m\]\w\[\e[0m\]\$ '

# ── Alias utili ───────────────────────────────────────────────────
alias ll='ls -lahF --color=auto'
alias la='ls -A'
alias l='ls -CF'
alias ..='cd ..'
alias ...='cd ../..'
alias grep='grep --color=auto'
alias df='df -h'
alias du='du -sh'
alias free='free -h'
alias mkdir='mkdir -pv'
alias cp='cp -iv'
alias mv='mv -iv'
alias rm='rm -iv'

# ── Funzioni personalizzate ───────────────────────────────────────
# Crea una dir ed entra subito dentro
mkcd() { mkdir -p "$1" && cd "$1"; }

# Estrai qualsiasi archivio
extract() {
  case "$1" in
    *.tar.gz|*.tgz) tar xzf "$1" ;;
    *.tar.bz2)       tar xjf "$1" ;;
    *.tar.xz)        tar xJf "$1" ;;
    *.zip)           unzip "$1" ;;
    *.gz)            gunzip "$1" ;;
    *.rar)           unrar x "$1" ;;
    *)               echo "Formato non supportato: $1" ;;
  esac
}

# Vai su N livelli di directory
up() { cd $(printf '%0.s../' $(seq 1 $1)); }

# ── Completamenti e tool esterni ──────────────────────────────────
# source /usr/share/bash-completion/bash_completion
# eval "$(pyenv init -)"
# eval "$(conda shell.bash hook)"
```

---

## 🔄 `source` — Eseguire file nella shell corrente

`source` (o il suo alias `.`) esegue un file di script **nella shell corrente**,
non in un sottoprocesso. Questo permette alle variabili definite nel file di essere
disponibili nella sessione attiva.

```bash
source ~/.bashrc                   # Ricarica il bashrc senza riaprire il terminale
source ~/.bash_profile

# Forma equivalente con il punto
. ~/.bashrc

# Caricare variabili da un file .env (pattern comune nei progetti)
source .env
# oppure
export $(grep -v '^#' .env | xargs)

# Esempio file .env:
# DB_HOST=localhost
# DB_PORT=5432
# API_KEY=abc123
```

### `source` vs esecuzione diretta

| Metodo | Processo | Variabili disponibili dopo |
|--------|----------|---------------------------|
| `source script.sh` | Shell corrente | Si |
| `. script.sh` | Shell corrente | Si |
| `./script.sh` | Nuovo sottoprocesso | No |
| `bash script.sh` | Nuovo sottoprocesso | No |

---

## 🗑️ Rimuovere e gestire variabili

```bash
unset MY_VAR               # Rimuove la variabile completamente
export -n MY_VAR           # Rimuove solo l'export (torna a shell variable)

# Variabile con valore di default
: "${DB_PORT:=5432}"       # Assegna 5432 solo se DB_PORT è vuota/non definita

# Test su variabili
[[ -z "$VAR" ]] && echo "VAR è vuota"
[[ -n "$VAR" ]] && echo "VAR ha un valore"
```

---

## 🧩 Pattern utili con le variabili d'ambiente

```bash
# Leggere un .env file esportando tutto automaticamente
set -a && source .env && set +a

# Passare variabili temporanee a un comando
DEBUG=true LOG_LEVEL=debug ./myscript.sh

# Mostrare tutte le variabili che iniziano per DB_
printenv | grep "^DB_"

# Sostituire variabili in un template con envsubst
envsubst < config.template.yaml > config.yaml

# Persistere una variabile per tutti gli utenti
echo 'export MY_GLOBAL_VAR="valore"' | sudo tee /etc/profile.d/myapp.sh

# Verificare l'ambiente di un processo in esecuzione (tramite PID)
cat /proc/<PID>/environ | tr '\0' '\n'
```

---

## 🐍 Ambiente virtuale Python (venv)

```bash
# Attivare un venv (usa source!)
source ./venv/bin/activate

# Funzione in .bashrc per attivare automaticamente il venv se esiste
auto_venv() {
  if [[ -f "./venv/bin/activate" ]]; then
    source ./venv/bin/activate
    echo "venv attivato"
  fi
}

# Disattivare il venv
deactivate
```

---

*Generato il 23 Marzo 2026 — Davide Cannistraro*
