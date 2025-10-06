# Otimização de Imagens

## Comandos para otimizar imagens antes do deploy:

### 1. Converter PNG para WebP (melhor compressão)
```bash
# Instalar cwebp
npm install -g webp

# Converter logos dos clientes
cwebp -q 80 "src/assets/images/clients/KV GROUP.png" -o "src/assets/images/clients/KV GROUP.webp"
cwebp -q 80 "src/assets/images/clients/VIANNA ADV.png" -o "src/assets/images/clients/VIANNA ADV.webp"
cwebp -q 80 "src/assets/images/clients/FACRED.png" -o "src/assets/images/clients/FACRED.webp"
cwebp -q 80 "src/assets/images/clients/FAÇOACONTA.png" -o "src/assets/images/clients/FAÇOACONTA.webp"

# Converter logo principal
cwebp -q 80 "src/assets/images/vertix-logo.png" -o "src/assets/images/vertix-logo.webp"
```

### 2. Criar favicons em diferentes tamanhos
```bash
# Instalar sharp-cli
npm install -g sharp-cli

# Gerar favicons
sharp -i src/assets/images/vertix-logo.png -o public/favicon-16x16.png --resize 16 16
sharp -i src/assets/images/vertix-logo.png -o public/favicon-32x32.png --resize 32 32
sharp -i src/assets/images/vertix-logo.png -o public/apple-touch-icon.png --resize 180 180
sharp -i src/assets/images/vertix-logo.png -o public/android-chrome-192x192.png --resize 192 192
sharp -i src/assets/images/vertix-logo.png -o public/android-chrome-512x512.png --resize 512 512
```

### 3. Criar imagem Open Graph
```bash
# Criar imagem para redes sociais (1200x630px)
sharp -i src/assets/images/vertix-logo.png -o public/og-image.jpg --resize 1200 630 --jpeg
```

## Benefícios das otimizações:
- WebP: 25-35% menor que PNG
- Lazy loading: Carrega imagens apenas quando necessário
- Responsive images: Diferentes tamanhos para diferentes telas
- Preload: Carrega imagens críticas primeiro
