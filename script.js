const memoryPhotos = [
    { url: "Picture/city_tour.jpg", caption: "City tour 🏙️" },
    { url: "Picture/fake_sipbo.jpg", caption: "FAKE shipper🚚" },
    { url: "Picture/rabit1.jpg", caption: "Thor 🐇" },
    { url: "Picture/photobooth.jpg", caption: "Photobooth📸"},
    { url: "Picture/rabit2.jpg", caption: "Thỏ 🐰"},
    { url: "Picture/snvvnghen.jpg", caption: "Happy Birthday\n bạn Trang 04/02!"}
];

const floatingPhotos = [
    "Picture/ban_chang1.jpg",
    "Picture/ban_Chang2.jpg",
    "Picture/ban_Chang3.jpg",
    "Picture/ban_Chang4.jpg",
    "Picture/ban_Chang5.jpg",
    "Picture/ban_Chang6.jpg",
    "Picture/ban_Chang7.jpg"
    
];

function startFloatingMemories() {
    const container = document.getElementById('floatingMemories');
    if (!floatingPhotos || floatingPhotos.length === 0) return;

  
    floatingInterval = setInterval(() => {
        const memory = document.createElement('img');
        const randomSrc = floatingPhotos[Math.floor(Math.random() * floatingPhotos.length)];
        
        memory.src = randomSrc;
        memory.className = 'floating-memory';
        
       
        const left = Math.random() * 90 + 5; 
        const top = Math.random() * 80 + 10; 
        const size = Math.random() * 150 + 200; 
        const rotate = (Math.random() - 0.5) * 30; 
        const duration = Math.random() * 4 + 4; 
        
        memory.style.left = left + '%';
        memory.style.top = top + '%';
        memory.style.width = size + 'px';
        memory.style.height = 'auto'; 
        memory.style.setProperty('--r', rotate + 'deg'); 
        memory.style.animationDuration = duration + 's';
        
        container.appendChild(memory);
        
        setTimeout(() => memory.remove(), duration * 1000);
        
    }, 800); 
}




const letterContent = `Chào cậu :))

Lúc làm cái này là tui đi stalk bạn dữ lắm, cố lục một đống ảnh dìm để có cái vui vui 😛. Hơi tiếc là tui hum tìm thấy gì cả, mong là tui với bạn có nhiều kỉ niệm hơn để tui có thể dễ dàng tìm ra ảnh dìm của bạn<br><br>

Chúc ngdep tuổi mới thật vui vẻ, càng ngày càng dễ thương, xinh gái và yêu bản thân nhiều hơn, hạn chế thức khuya nựa. Đạt được mục tiêu của bản thân và gặt hái nhiều thành công nheee<br>
Và đặc biệt là cao hơn tui nha <br><br>

Happy birthday bạn Trang 04/02🎂`;


function typeLetter() {
    if (typingTimeout) clearTimeout(typingTimeout);
    const element = document.getElementById('letterText');
    const btn = document.getElementById('btnLetter');
    element.innerHTML = "";
    btn.style.opacity = '0';
    btn.style.pointerEvents = 'none';
    
    let i = 0;
    function type() {
        if (i < letterContent.length) {
            if (letterContent.substring(i).startsWith("<br>")) {
                element.innerHTML += "<br>";
                i += 4;
            } else {
                element.innerHTML += letterContent.charAt(i);
                i++;
            }
            typingTimeout = setTimeout(type, Math.random() * 20 + 10);
        } else {
            setTimeout(() => {
                btn.style.opacity = '1';
                btn.style.pointerEvents = 'auto';
            }, 2000);
        }
    }
    type();

} 


const giftLocations = [""]; 
const selectedGiftLocation = giftLocations[0];


const lotteryGifts = [
   { emoji: "🎁", name: "Gương", description: "Hỡi người con gái xinh nhất thế giới :3" },
   { emoji: "🎁", name: "Kẹp tóc", description: "Giúp bồ thêm tỏa sáng" },
   { emoji: "🎁", name: "Con gấu", description: "Có thể tỏa sáng vào đêm khuya" },
   { emoji: "🎁", name: "Sổ tay", description: "Những gì khó khăn trong này đều vượt wa dễ dàng :3" },
   { emoji: "🎁", name: "Món quà bất ngờ", description: "Nhớ chú ý điện thoại nhaa" }
];



let typingTimeout;
let isTransitioning = false;
let slideIndex = 0;
let slideTimer;
let clickCount = 0;
let isPlaying = false;
let selectedGiftIndex = null;
let floatingInterval;


function createScene0Sparkles() {
    const scene = document.getElementById('scene0');
    setInterval(() => {
        const sparkle = document.createElement('div');
        sparkle.className = 'scene0-sparkle';
        
       
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const angle = Math.random() * Math.PI * 2;
        const distance = 150 + Math.random() * 100;
        
        sparkle.style.left = (centerX + Math.cos(angle) * distance) + 'px';
        sparkle.style.top = (centerY + Math.sin(angle) * distance) + 'px';
        sparkle.style.animationDelay = Math.random() * 2 + 's';
        
        scene.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 3000);
    }, 200);
}


window.addEventListener('DOMContentLoaded', () => {
    createScene0Sparkles();
});



function startSurprise() {
    if (isTransitioning) return;
 
    const music = document.getElementById('bgMusic');
    if (music) {
        music.muted = true;
        music.play().then(() => {
            music.pause();
            music.currentTime = 0;
            music.muted = false;
        }).catch(err => console.log('Music require interaction:', err));
    }

    showTransition(0, 1);
}

function showTransition(fromScene, toScene) {
    if (isTransitioning) return;
    isTransitioning = true;
    
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => btn.disabled = true);

    const current = document.getElementById('scene' + fromScene);
    const transition = document.getElementById('transition' + toScene);
    const next = document.getElementById('scene' + toScene);

    current.style.opacity = '0';

    setTimeout(() => {
        current.classList.add('hidden');
        
        transition.classList.remove('hidden');
        void transition.offsetWidth;
        transition.style.opacity = '1';

        setTimeout(() => {
            transition.style.opacity = '0';
            
            setTimeout(() => {
                transition.classList.add('hidden');
                next.classList.remove('hidden');
                void next.offsetWidth;
                next.style.opacity = '1';

                if (toScene === 1) createPetals();

                isTransitioning = false;
                buttons.forEach(btn => btn.disabled = false);
            }, 800);
        }, 1500);

    }, 1000);
}

function nextScene(hideId, showId) {
    if (isTransitioning) return;
    isTransitioning = true;
    
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => btn.disabled = true);

    const current = document.getElementById('scene' + hideId);
    const transition = document.getElementById('transition' + showId);
    const next = document.getElementById('scene' + showId);

    if (hideId === 2) clearTimeout(slideTimer);
    if (floatingInterval) clearInterval(floatingInterval); 
        const container = document.getElementById('floatingMemories');
        if (container) container.innerHTML = ''; 
        
    if (hideId === 4) clearTimeout(typingTimeout);

    if (showId === 3) hidePetals();

    if (transition) {
        current.style.opacity = '0';
        setTimeout(() => {
            current.classList.add('hidden');
            transition.classList.remove('hidden');
            void transition.offsetWidth;
            transition.style.opacity = '1';

            setTimeout(() => {
                transition.style.opacity = '0';
                setTimeout(() => {
                    transition.classList.add('hidden');
                    next.classList.remove('hidden');
                    void next.offsetWidth;
                    next.style.opacity = '1';

                    initializeScene(showId);
                    setTimeout(() => {
                        isTransitioning = false;
                        buttons.forEach(btn => btn.disabled = false);
                    }, 500);
                }, 800);
            }, 1500);
        }, 1000);
    } else {
        current.style.opacity = '0';
        setTimeout(() => {
            current.classList.add('hidden');
            next.classList.remove('hidden');
            void next.offsetWidth;
            next.style.opacity = '1';
            initializeScene(showId);
            setTimeout(() => {
                isTransitioning = false;
                buttons.forEach(btn => btn.disabled = false);
            }, 500);
        }, 1000);
    }
}

function initializeScene(sceneId) {
    if (sceneId === 2) startSlideshow();
   
    if (sceneId === 4) typeLetter();
    if (sceneId === 5) {
        clickCount = 0;
        document.getElementById('giftLocation').innerText = selectedGiftLocation;
    }
    if (sceneId === '5-5') {
        resetLottery();
    }
    if (sceneId === 6) {
        createFireworks();
        setTimeout(() => {
            const music = document.getElementById('bgMusic');
            music.play().then(() => {
                isPlaying = true;
                document.getElementById('playBtn').innerHTML = '⏸️';
                document.getElementById('soundWave').classList.remove('paused');
            }).catch(e => console.log('Auto-play prevented:', e));
        }, 1000);
    }
}


function blowCandles() {
    if (isTransitioning) return;
    isTransitioning = true;
    
    const flames = document.querySelectorAll('.flame');
    const candles = document.querySelectorAll('.candle');
    
    flames.forEach(f => f.classList.add('out'));

  
    candles.forEach(candle => {
        const smoke = document.createElement('div');
        smoke.className = 'smoke';
        candle.appendChild(smoke);
    });

    document.getElementById('scene3').style.backgroundColor = 'transparent';

    createConfetti();
    setTimeout(() => {
        isTransitioning = false;
        showPetals();
        nextScene(3, 4);
    }, 2000);
}


function unlockHeart() {
    if (clickCount >= 3) return;
    
    clickCount++;
    const container = document.getElementById('heartContainer');
    const counter = document.getElementById('clickCounter');
    const lockIcon = document.getElementById('lockIcon');
    
    container.classList.add('shake');
    setTimeout(() => container.classList.remove('shake'), 500);
    
    createSparkles();
    
    const remaining = 3 - clickCount;
    if (remaining > 0) {
        counter.innerText = `Click ${remaining} more time${remaining > 1 ? 's' : ''}!`;
    } else {
        counter.innerText = '✨ Unlocking... ✨';
        
        setTimeout(() => {
            lockIcon.style.transform = 'translate(-50%, -50%) scale(2) rotate(360deg)';
            lockIcon.style.opacity = '0';
        }, 300);
        
        setTimeout(() => {
            document.getElementById('mysteryContainer').style.display = 'none';
            document.getElementById('revealBox').classList.add('show');
            createConfetti();
        }, 1000);
    }
}


function hidePetals() {
    document.getElementById('petals').classList.add('hidden');
}

function showPetals() {
    document.getElementById('petals').classList.remove('hidden');
}

function startSlideshow() {
    slideIndex = 0;
    const btn = document.getElementById('btnWish');
    btn.style.opacity = '0';
    btn.style.pointerEvents = 'none';
    showNextSlide();
}

function showNextSlide() {
    const card = document.getElementById('galleryCard');
    const img = document.getElementById('galleryImg');
    const cap = document.getElementById('galleryCaption');
    const counter = document.getElementById('photoCounter');

    img.src = memoryPhotos[slideIndex].url;
    cap.innerText = memoryPhotos[slideIndex].caption;
    

    card.classList.add('active');

    slideTimer = setTimeout(() => {
        
        if (slideIndex >= memoryPhotos.length - 1) {
            
            
            startFloatingMemories(); 
        
        setTimeout(() => {
            const btn = document.getElementById('btnWish');
            btn.style.opacity = '1';
            btn.style.pointerEvents = 'auto';
        }, 3000);

        } else {
            card.classList.remove('active');
            setTimeout(() => {
                slideIndex++;
                showNextSlide();
            }, 800);
        }
    }, 3000);
}




function createSparkles() {
    const container = document.getElementById('sparkles');
    const heartRect = document.getElementById('heartContainer').getBoundingClientRect();
    const centerX = heartRect.left + heartRect.width / 2;
    const centerY = heartRect.top + heartRect.height / 2;
    
    for (let i = 0; i < 15; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.innerHTML = ['✨', '⭐', '💫', '🌟'][Math.floor(Math.random() * 4)];
        sparkle.style.left = centerX + 'px';
        sparkle.style.top = centerY + 'px';
        
        const angle = (Math.PI * 2 * i) / 15;
        const distance = 100 + Math.random() * 50;
        sparkle.style.setProperty('--tx', Math.cos(angle) * distance + 'px');
        sparkle.style.setProperty('--ty', Math.sin(angle) * distance + 'px');
        
        container.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 2000);
    }
}

function resetLottery() {
    selectedGiftIndex = null;
    document.getElementById('giftBoxesContainer').style.display = 'flex';
    document.getElementById('giftResult').classList.remove('show');
    
    document.querySelectorAll('.gift-box').forEach(box => {
        box.classList.remove('selected');
        box.style.pointerEvents = 'auto';
    });
}

function selectGift(boxIndex) {
    if (selectedGiftIndex !== null) return;
    
    document.querySelectorAll('.gift-box').forEach(box => box.style.pointerEvents = 'none');
    document.querySelectorAll('.gift-box')[boxIndex].classList.add('selected');
    
    selectedGiftIndex = Math.floor(Math.random() * lotteryGifts.length);
    const selectedGift = lotteryGifts[selectedGiftIndex];
    
    createLotterySparkles();
    
    setTimeout(() => {
        document.getElementById('giftBoxesContainer').style.display = 'none';
        
        const resultContainer = document.getElementById('giftResult');
        const emojiEl = document.getElementById('giftEmoji');
        const nameEl = document.getElementById('giftName');
        const descEl = document.getElementById('giftDescription');
        const nextBtn = resultContainer.querySelector('button'); 
        
        emojiEl.innerText = "😢";
        nameEl.innerText = "Chúc bạn may mắn lần sau!";
        descEl.innerText = "Hộp rỗng này chạ có gì đâu";
        nextBtn.style.display = 'none';
        
        resultContainer.classList.add('show');
        
        setTimeout(() => {
            emojiEl.innerText = selectedGift.emoji;
            nameEl.innerText = "😛Đùa thôi!";
            descEl.innerText = selectedGift.name + ": " + selectedGift.description;
            nextBtn.style.display = 'inline-block';
            createConfetti();
            createLotterySparkles();
        }, 6000);
        
    }, 1000);
}

function createLotterySparkles() {
    const container = document.getElementById('lotterySparkles');
    for (let i = 0; i < 30; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.innerHTML = ['✨', '⭐', '💫', '🌟', '🎉', '🎊'][Math.floor(Math.random() * 6)];
        sparkle.style.left = Math.random() * window.innerWidth + 'px';
        sparkle.style.top = Math.random() * window.innerHeight + 'px';
        
        const tx = (Math.random() - 0.5) * 200;
        const ty = (Math.random() - 0.5) * 200;
        sparkle.style.setProperty('--tx', tx + 'px');
        sparkle.style.setProperty('--ty', ty + 'px');
        
        container.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 2000);
    }
}

function createFireworks() {
    const container = document.getElementById('fireworks');
    function launchFirework() {
        const colors = ['#ff0844', '#ffb700', '#00e0ff', '#6a0dad', '#ff1493', '#00ff00'];
        const x = Math.random() * window.innerWidth;
        const y = 100 + Math.random() * 200;
        
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'firework';
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            
            const angle = (Math.PI * 2 * i) / 30;
            const velocity = 50 + Math.random() * 100;
            const tx = Math.cos(angle) * velocity;
            const ty = Math.sin(angle) * velocity;
            particle.style.setProperty('--tx', tx + 'px');
            particle.style.setProperty('--ty', ty + 'px');
            
            container.appendChild(particle);
            setTimeout(() => particle.remove(), 1500);
        }
    }
    launchFirework();
    setInterval(() => { if (Math.random() > 0.3) launchFirework(); }, 1500);
}

function toggleMusic() {
    const music = document.getElementById('bgMusic');
    const btn = document.getElementById('playBtn');
    const wave = document.getElementById('soundWave');
    if (isPlaying) {
        music.pause();
        btn.innerHTML = '▶️';
        wave.classList.add('paused');
    } else {
        music.play();
        btn.innerHTML = '⏸️';
        wave.classList.remove('paused');
    }
    isPlaying = !isPlaying;
}

function createPetals() {
    const container = document.getElementById('petals');
    const symbols = ['❄️', '⭐', '✨', '💙', '💎'];
    for (let i = 0; i < 30; i++) {
        const petal = document.createElement('div');
        petal.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
        petal.style.position = 'absolute';
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.top = '-10vh';
        petal.style.fontSize = (Math.random() * 20 + 10) + 'px';
        petal.style.opacity = Math.random() * 0.7 + 0.3;
        container.appendChild(petal);
        
        const duration = Math.random() * 5000 + 5000;
        petal.animate([
            { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
            { transform: `translateY(110vh) rotate(${Math.random()*360}deg)`, opacity: 0 }
        ], { duration: duration, iterations: Infinity });
    }
}

function createConfetti() {
    for (let i = 0; i < 100; i++) {
        const c = document.createElement('div');
        c.className = 'confetti';
        c.style.background = ['#ff758c', '#ffd700', '#fff'][Math.floor(Math.random() * 3)];
        c.style.left = Math.random() * 100 + 'vw';
        c.style.top = Math.random() * 100 + 'vh';
        document.body.appendChild(c);
        c.animate([
            { transform: 'translate(0,0)', opacity: 1 },
            { transform: `translate(${Math.random()*200-100}px, -100vh) rotate(720deg)`, opacity: 0 }
        ], { duration: 1500 + Math.random() * 1000 }).onfinish = () => c.remove();
    }
}
