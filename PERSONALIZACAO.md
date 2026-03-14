# 🚀 GUIA RÁPIDO DE PERSONALIZAÇÃO - TQP

## ⚡ 3 Passos Essenciais Para Lançar

### 1️⃣ ADICIONAR SEU VÍDEO DE VENDAS

**Arquivo:** `index.html`  
**Linha:** ~361 (procure por `video-placeholder`)

**Substitua isto:**
```html
<div class="video-placeholder">
    <i class="fas fa-play-circle"></i>
    <p>COLOQUE SEU VÍDEO AQUI</p>
    ...
</div>
```

**Por isto (YouTube/Vimeo):**
```html
<iframe src="https://www.youtube.com/embed/SEU_VIDEO_ID" 
        frameborder="0" 
        allow="autoplay; fullscreen; picture-in-picture" 
        allowfullscreen>
</iframe>
```

**Ou por isto (MP4):**
```html
<video controls playsinline webkit-playsinline>
    <source src="videos/seu-video.mp4" type="video/mp4">
    Seu navegador não suporta vídeos.
</video>
```

---

### 2️⃣ CONFIGURAR SEU WHATSAPP

**Arquivo:** `js/main.js`  
**Linha:** 194

**Encontre:**
```javascript
const whatsappNumber = '5500000000000';
```

**Altere para seu número:**
```javascript
const whatsappNumber = '5511999887766'; // Exemplo: 55 + 11 + 999887766
```

**Formato:** 55 (Brasil) + DDD + Número completo (sem espaços, traços ou parênteses)

**Exemplos:**
- São Paulo (11): `'5511999887766'`
- Rio de Janeiro (21): `'5521987654321'`
- Belo Horizonte (31): `'5531976543210'`

---

### 3️⃣ ADICIONAR SUA FOTO

**Opção A - Foto Externa (URL):**

**Arquivo:** `index.html`  
**Linha:** ~420 (procure por `mentor-photo-placeholder`)

**Substitua:**
```html
<div class="mentor-photo-placeholder">
    <i class="fas fa-user-tie"></i>
    <p>Sua Foto Aqui</p>
</div>
```

**Por:**
```html
<img src="https://url-da-sua-foto.com/foto.jpg" 
     alt="Mentor Oliveira" 
     style="width: 100%; height: 100%; object-fit: cover; border-radius: 20px;">
```

**Opção B - Foto Local:**

1. Faça upload da sua foto para a pasta `images/`
2. Renomeie para `mentor-oliveira.jpg`
3. Use:
```html
<img src="images/mentor-oliveira.jpg" 
     alt="Mentor Oliveira" 
     style="width: 100%; height: 100%; object-fit: cover; border-radius: 20px;">
```

---

## 🎨 PERSONALIZAÇÕES EXTRAS (OPCIONAL)

### 💰 Adicionar Preço do Curso

**Arquivo:** `index.html`  
**Linha:** ~763 (dentro da `.cta-box`, após `.cta-box-header`)

**Adicione:**
```html
<div class="cta-price" style="margin: 30px 0; padding: 30px; background: rgba(212, 175, 55, 0.1); border-radius: 15px;">
    <p style="color: #B0B0B0; font-size: 0.9rem; margin-bottom: 10px;">INVESTIMENTO:</p>
    <div style="font-size: 3rem; font-weight: 900; color: #D4AF37; font-family: 'Playfair Display', serif;">
        12x R$ 97
    </div>
    <p style="color: #B0B0B0; font-size: 1rem; margin-top: 10px;">ou R$ 997 à vista</p>
</div>
```

---

### 📱 Trocar Links de Redes Sociais

**Arquivo:** `index.html`  
**Linha:** ~879 (procure por `footer-social`)

**Encontre:**
```html
<a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
<a href="#" class="social-link"><i class="fab fa-youtube"></i></a>
<a href="#" class="social-link"><i class="fab fa-whatsapp"></i></a>
```

**Altere para:**
```html
<a href="https://instagram.com/seu_usuario" target="_blank" class="social-link">
    <i class="fab fa-instagram"></i>
</a>
<a href="https://youtube.com/@seu_canal" target="_blank" class="social-link">
    <i class="fab fa-youtube"></i>
</a>
<a href="https://wa.me/5511999887766" target="_blank" class="social-link">
    <i class="fab fa-whatsapp"></i>
</a>
```

---

### 🎨 Mudar Cores do Site

**Arquivo:** `css/style.css`  
**Linhas:** 19-30

**Variáveis de Cores:**
```css
:root {
    /* ALTERE ESTAS CORES */
    --gold: #D4AF37;           /* Dourado principal */
    --gold-light: #F4E4B7;     /* Dourado claro */
    --gold-dark: #B8941F;      /* Dourado escuro */
    --black: #0A0A0A;          /* Preto principal */
    --black-light: #1A1A1A;    /* Preto claro */
    --black-medium: #2A2A2A;   /* Preto médio */
}
```

**Exemplos de Combinações:**

**Azul + Preto (Confiança):**
```css
--gold: #007AFF;
--gold-light: #5AC8FA;
--gold-dark: #0051D5;
```

**Verde + Preto (Dinheiro):**
```css
--gold: #00D66B;
--gold-light: #5EDFA6;
--gold-dark: #00A854;
```

**Roxo + Preto (Premium):**
```css
--gold: #8B5CF6;
--gold-light: #C4B5FD;
--gold-dark: #6D28D9;
```

---

### 📊 Adicionar Depoimentos

**Arquivo:** `index.html`  
**Linha:** ~680 (antes da seção FAQ)

**Adicione:**
```html
<section class="testimonials-section" style="padding: 100px 0; background: #1A1A1A;">
    <div class="container">
        <div class="section-header center">
            <span class="section-tag">Depoimentos</span>
            <h2 class="section-title">O Que Dizem Nossos <span class="gold-text">Alunos</span></h2>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-top: 50px;">
            
            <!-- Depoimento 1 -->
            <div style="padding: 30px; background: #2A2A2A; border: 1px solid rgba(212, 175, 55, 0.2); border-radius: 15px;">
                <div style="margin-bottom: 20px;">
                    <i class="fas fa-star" style="color: #D4AF37;"></i>
                    <i class="fas fa-star" style="color: #D4AF37;"></i>
                    <i class="fas fa-star" style="color: #D4AF37;"></i>
                    <i class="fas fa-star" style="color: #D4AF37;"></i>
                    <i class="fas fa-star" style="color: #D4AF37;"></i>
                </div>
                <p style="color: #B0B0B0; font-size: 1rem; font-style: italic; margin-bottom: 20px;">
                    "O Método TQP mudou completamente minha forma de operar. Em 30 dias já estava tendo resultados consistentes!"
                </p>
                <div style="display: flex; align-items: center; gap: 15px;">
                    <div style="width: 50px; height: 50px; background: rgba(212, 175, 55, 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                        <i class="fas fa-user" style="color: #D4AF37; font-size: 1.5rem;"></i>
                    </div>
                    <div>
                        <strong style="color: white;">João Silva</strong>
                        <p style="color: #B0B0B0; font-size: 0.9rem; margin: 0;">Aluno TQP</p>
                    </div>
                </div>
            </div>
            
            <!-- Depoimento 2 -->
            <div style="padding: 30px; background: #2A2A2A; border: 1px solid rgba(212, 175, 55, 0.2); border-radius: 15px;">
                <div style="margin-bottom: 20px;">
                    <i class="fas fa-star" style="color: #D4AF37;"></i>
                    <i class="fas fa-star" style="color: #D4AF37;"></i>
                    <i class="fas fa-star" style="color: #D4AF37;"></i>
                    <i class="fas fa-star" style="color: #D4AF37;"></i>
                    <i class="fas fa-star" style="color: #D4AF37;"></i>
                </div>
                <p style="color: #B0B0B0; font-size: 1rem; font-style: italic; margin-bottom: 20px;">
                    "Finalmente entendi o que significa análise gráfica de verdade. Valeu cada centavo!"
                </p>
                <div style="display: flex; align-items: center; gap: 15px;">
                    <div style="width: 50px; height: 50px; background: rgba(212, 175, 55, 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                        <i class="fas fa-user" style="color: #D4AF37; font-size: 1.5rem;"></i>
                    </div>
                    <div>
                        <strong style="color: white;">Maria Santos</strong>
                        <p style="color: #B0B0B0; font-size: 0.9rem; margin: 0;">Aluna TQP</p>
                    </div>
                </div>
            </div>
            
            <!-- Depoimento 3 -->
            <div style="padding: 30px; background: #2A2A2A; border: 1px solid rgba(212, 175, 55, 0.2); border-radius: 15px;">
                <div style="margin-bottom: 20px;">
                    <i class="fas fa-star" style="color: #D4AF37;"></i>
                    <i class="fas fa-star" style="color: #D4AF37;"></i>
                    <i class="fas fa-star" style="color: #D4AF37;"></i>
                    <i class="fas fa-star" style="color: #D4AF37;"></i>
                    <i class="fas fa-star" style="color: #D4AF37;"></i>
                </div>
                <p style="color: #B0B0B0; font-size: 1rem; font-style: italic; margin-bottom: 20px;">
                    "Saí da mesmice dos grupos genéricos. Agora sei exatamente quando entrar e sair!"
                </p>
                <div style="display: flex; align-items: center; gap: 15px;">
                    <div style="width: 50px; height: 50px; background: rgba(212, 175, 55, 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                        <i class="fas fa-user" style="color: #D4AF37; font-size: 1.5rem;"></i>
                    </div>
                    <div>
                        <strong style="color: white;">Carlos Oliveira</strong>
                        <p style="color: #B0B0B0; font-size: 0.9rem; margin: 0;">Aluno TQP</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</section>
```

---

## 🔧 RESOLUÇÃO DE PROBLEMAS

### ❌ O vídeo não aparece
- Verifique se a URL está correta
- Teste a URL do vídeo diretamente no navegador
- Certifique-se de usar `/embed/` para YouTube
- Para Vimeo, use: `https://player.vimeo.com/video/ID_DO_VIDEO`

### ❌ WhatsApp não funciona
- Verifique o formato: `55` + `DDD` + `número completo`
- Não use espaços, traços ou parênteses
- Exemplo correto: `'5511999887766'`
- Exemplo errado: `'55 (11) 99988-7766'`

### ❌ Logo não aparece
- Verifique se o arquivo está em `images/logo-tqp.svg`
- Limpe o cache do navegador (Ctrl + Shift + R)
- Verifique se o caminho no HTML está correto

### ❌ Cores não mudaram
- Salve o arquivo `css/style.css` após editar
- Limpe o cache do navegador
- Verifique se não há erros de sintaxe CSS

---

## ✅ CHECKLIST PRÉ-LANÇAMENTO

Antes de publicar, verifique:

- [ ] Vídeo de vendas adicionado e funcionando
- [ ] WhatsApp configurado corretamente
- [ ] Sua foto profissional adicionada
- [ ] Links de redes sociais atualizados
- [ ] Testado em celular (responsividade)
- [ ] Testado em diferentes navegadores
- [ ] Todos os botões funcionando
- [ ] Sem erros no console (F12)
- [ ] Ortografia revisada
- [ ] Informações de contato corretas

---

## 🚀 PRONTO PARA PUBLICAR?

Depois de fazer as personalizações:

1. ✅ Salve todos os arquivos
2. ✅ Teste localmente
3. ✅ Vá para a aba **"Publish"**
4. ✅ Publique seu site!

---

**💡 Dica:** Faça uma personalização por vez e teste antes de fazer a próxima!

**📝 Nota:** Mantenha sempre um backup antes de fazer alterações grandes.

**🎯 Objetivo:** Converter visitantes em alunos do TQP!

---

Desenvolvido com 💛 para o sucesso do **Método TQP**