# 📟 Appunti Terminale Linux — Redirect, Pipe e Comandi Essenziali

> Cheatsheet personale — comandi di base, redirect, pipe e varianti utili

---

## 📁 `cat` — Concatena e visualizza file

```bash
cat file.txt                  # Stampa il contenuto a schermo
cat file1.txt file2.txt       # Concatena e stampa entrambi
cat -n file.txt               # Mostra contenuto con numeri di riga
cat -A file.txt               # Mostra caratteri speciali (es. fine riga ^M)
cat /dev/null > file.txt      # Svuota un file senza eliminarlo
tac file.txt                  # Come cat, ma in ordine inverso (dalla fine)
```

---

## 📂 `cp` — Copia file e directory

```bash
cp file.txt copia.txt                  # Copia file
cp -r dir/ nuova_dir/                  # Copia directory ricorsivamente
cp -i file.txt dest/                   # Chiede conferma se il dest. esiste
cp -u file.txt dest/                   # Copia solo se sorgente è più recente
cp -v file.txt dest/                   # Verbose: mostra cosa sta copiando
cp -p file.txt dest/                   # Preserva permessi e timestamp
cp -a src/ dst/                        # Archivio: ricorsivo + preserva tutto
```

---

## 🚚 `mv` — Sposta o rinomina file

```bash
mv file.txt /tmp/                      # Sposta file in /tmp
mv vecchio.txt nuovo.txt               # Rinomina file
mv -i file.txt dest/                   # Chiede conferma se il dest. esiste
mv -v file.txt dest/                   # Verbose
mv -n file.txt dest/                   # Non sovrascrive mai (no-clobber)
mv -u file.txt dest/                   # Sposta solo se sorgente è più recente
```

---

## 🔍 `grep` — Cerca pattern nei file

```bash
grep "pattern" file.txt                # Cerca pattern in un file
grep -r "pattern" ./dir/               # Cerca ricorsivamente in una dir
grep -i "pattern" file.txt             # Case-insensitive
grep -v "pattern" file.txt             # Inverte: stampa righe che NON matchano
grep -n "pattern" file.txt             # Mostra numero di riga
grep -c "pattern" file.txt             # Conta le righe che matchano
grep -l "pattern" *.txt                # Mostra solo i nomi dei file che matchano
grep -o "pattern" file.txt             # Stampa solo la parte che matcha
grep -E "pat1|pat2" file.txt           # Regex estesa (egrep)
grep -w "word" file.txt                # Matcha solo parole intere
grep -A 3 "pattern" file.txt           # Mostra 3 righe DOPO il match
grep -B 3 "pattern" file.txt           # Mostra 3 righe PRIMA del match
grep -C 3 "pattern" file.txt           # Mostra 3 righe prima E dopo
grep --include="*.py" -r "def " ./     # Filtra per estensione file
```

---

## ✂️ `sed` — Stream editor (modifica testo in-stream)

```bash
sed 's/foo/bar/' file.txt              # Sostituisce prima occorrenza per riga
sed 's/foo/bar/g' file.txt             # Sostituisce TUTTE le occorrenze
sed 's/foo/bar/gi' file.txt            # Sostituzione globale case-insensitive
sed -i 's/foo/bar/g' file.txt          # Modifica il file IN-PLACE (attenzione!)
sed -i.bak 's/foo/bar/g' file.txt      # In-place con backup (.bak)
sed -n '5,10p' file.txt                # Stampa righe da 5 a 10
sed '3d' file.txt                      # Elimina la riga 3
sed '/pattern/d' file.txt              # Elimina le righe che matchano
sed '/^$/d' file.txt                   # Elimina le righe vuote
sed -n '/pattern/p' file.txt           # Stampa solo righe che matchano
sed 'y/abc/ABC/' file.txt              # Traslittera caratteri (a→A, b→B, c→C)
sed '1i\Intestazione' file.txt        # Inserisce testo PRIMA della riga 1
sed '$a\Piede pagina' file.txt        # Aggiunge testo DOPO l'ultima riga
```

---

## 🔀 Redirect — Operatori di reindirizzamento

| Operatore | Significato | Esempio |
|-----------|-------------|---------|
| `>`       | Redireziona stdout su file (sovrascrive) | `ls > out.txt` |
| `>>`      | Appende stdout a file | `echo "ciao" >> log.txt` |
| `<`       | Usa file come stdin | `grep "foo" < file.txt` |
| `2>`      | Redireziona stderr su file | `cmd 2> err.txt` |
| `2>>`     | Appende stderr a file | `cmd 2>> err.txt` |
| `&>`      | Redireziona sia stdout che stderr | `cmd &> tutto.txt` |
| `2>&1`    | Redireziona stderr verso dove va stdout | `cmd > out.txt 2>&1` |
| `1>&2`    | Redireziona stdout verso dove va stderr | `echo "errore" 1>&2` |
| `/dev/null` | Scarta output (buco nero) | `cmd 2> /dev/null` |

### Esempi pratici di redirect

```bash
# Salva output e scarta errori
find / -name "*.conf" > risultati.txt 2>/dev/null

# Salva sia output che errori nello stesso file
./script.sh > tutto.log 2>&1

# Usa un file come input per un comando
sort < lista_nomi.txt

# Appende output ad un log
echo "[$(date)] avviato" >> /var/log/myapp.log

# Heredoc: input multiriga inline
cat << EOF > config.txt
host=localhost
port=5432
EOF
```

---

## 🔗 `|` Pipe — Concatena comandi

Il pipe (`|`) passa lo **stdout** di un comando come **stdin** del successivo.

```bash
cat file.txt | grep "errore"           # Filtra righe da un file
ls -la | grep "^d"                     # Lista solo le directory
ps aux | grep nginx                    # Cerca processo nginx
cat /etc/passwd | cut -d: -f1          # Estrae solo i nomi utente
history | grep "docker"                # Cerca nei comandi usati
dmesg | tail -20                       # Ultime 20 righe del kernel log
cat log.txt | sort | uniq -c | sort -rn  # Conta occorrenze univoche ordinate
find . -name "*.py" | xargs grep "import pandas"  # Cerca in tutti i .py
```

### Varianti e comandi correlati al pipe

```bash
# tee: scrive su file E continua il pipe
ls -la | tee lista.txt | grep ".py"

# xargs: converte stdin in argomenti di un comando
find . -name "*.log" | xargs rm -f
cat files.txt | xargs -I{} cp {} /backup/

# Pipe con processo in background
tail -f /var/log/syslog | grep "error" &

# Pipe multipli
cat access.log | grep "POST" | cut -d' ' -f7 | sort | uniq -c | sort -rn | head -10
```

---

## 🛠️ Comandi utili da abbinare ai redirect/pipe

```bash
# wc — conta righe, parole, caratteri
wc -l file.txt                         # Conta righe
wc -w file.txt                         # Conta parole
ls | wc -l                             # Conta file in una dir

# sort — ordina righe
sort file.txt                          # Ordine alfabetico
sort -n file.txt                       # Ordine numerico
sort -r file.txt                       # Ordine inverso
sort -u file.txt                       # Rimuove duplicati mentre ordina

# uniq — rimuove/conta duplicati (richiede input ordinato)
sort file.txt | uniq                   # Rimuove duplicati
sort file.txt | uniq -c               # Conta occorrenze
sort file.txt | uniq -d               # Mostra solo i duplicati

# cut — estrae colonne/campi
cut -d',' -f1,3 file.csv              # Estrae col 1 e 3 (delimitatore ,)
cut -c1-10 file.txt                   # Estrae caratteri 1-10 per riga

# tr — traslitera/sostituisce caratteri
echo "hello" | tr 'a-z' 'A-Z'         # Maiuscolo
cat file.txt | tr -d ''             # Rimuove carriage return (Windows→Unix)
cat file.txt | tr -s ' '              # Squeezes spazi multipli in uno

# awk — potente elaborazione per colonne
awk '{print $1, $3}' file.txt         # Stampa colonna 1 e 3
awk -F',' '{print $2}' file.csv       # Usa , come separatore
awk 'NR>1' file.txt                   # Salta la prima riga (header)
awk '{sum += $1} END {print sum}' f   # Somma la prima colonna

# head / tail
head -n 20 file.txt                   # Prime 20 righe
tail -n 20 file.txt                   # Ultime 20 righe
tail -f /var/log/syslog               # Segue il file in tempo reale
tail -F /var/log/syslog               # Come -f ma riapre se ruota

# less / more — pager interattivo
cat file.txt | less                   # Naviga con frecce, q per uscire
grep "error" log.txt | less
```

---

## 🧩 Pattern combinati avanzati

```bash
# Top 10 IP da access log
awk '{print $1}' access.log | sort | uniq -c | sort -rn | head -10

# Trova e sostituisci in tutti i file .py di una directory
find . -name "*.py" | xargs sed -i 's/old_func/new_func/g'

# Controlla se un servizio è attivo e logga il risultato
systemctl status nginx | grep "active" >> /tmp/status.log 2>&1

# Estrai tutti gli indirizzi IP da un file
grep -oE '([0-9]{1,3}\.){3}[0-9]{1,3}' file.txt

# Elimina righe vuote e commenti da un config
grep -Ev '^(#|$)' /etc/ssh/sshd_config

# Conta errori per tipo in un log
grep "ERROR" app.log | awk '{print $NF}' | sort | uniq -c | sort -rn

# Monitoring in tempo reale con pipe
watch -n 2 'ps aux | sort -k 3 -rn | head -10'
```

---

*Generato il 23 Marzo 2026 — Davide Cannistraro*
