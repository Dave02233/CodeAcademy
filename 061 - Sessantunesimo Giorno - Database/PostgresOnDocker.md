# PostgreSQL su Docker

## Installazione di PostgreSQL tramite Docker

### 1. Scaricare l'immagine PostgreSQL

```bash
docker pull postgres
```

Oppure per una versione specifica:

```bash
docker pull postgres:18
```

### 2. Creare e avviare il container

```bash
docker run --name postgres-container -e POSTGRES_PASSWORD=mypassword -d -p 5432:5432 postgres
```

**Parametri del comando:**
- `--name postgres-container`: Nome del container
- `-e POSTGRES_PASSWORD=mypassword`: Password per l'utente `postgres`
- `-d`: Esegue il container in background (detached)
- `-p 5432:5432`: Mappa la porta 5432 del container alla porta 5432 dell'host
- `postgres`: Nome dell'immagine

### 3. Verificare che il container sia in esecuzione

```bash
docker ps
```

### 4. Connettersi al database

```bash
docker exec -it postgres-container psql -U postgres
```

### 5. Comandi utili

**Fermare il container:**
```bash
docker stop postgres-container
```

**Riavviare il container:**
```bash
docker start postgres-container
```

**Rimuovere il container:**
```bash
docker rm postgres-container
```

### 6. Configurazione avanzata con variabili d'ambiente

```bash
docker run --name postgres-db \
  -e POSTGRES_DB=mydatabase \
  -e POSTGRES_USER=myuser \
  -e POSTGRES_PASSWORD=mypassword \
  -p 5432:5432 \
  -d postgres
```

### 7. Persistenza dei dati con volume

```bash
docker run --name postgres-persistent \
  -e POSTGRES_PASSWORD=mypassword \
  -v postgres-data:/var/lib/postgresql/data \
  -p 5432:5432 \
  -d postgres
```

Questo comando crea un volume Docker per mantenere i dati anche dopo la rimozione del container.