const fortunes = [
    "오늘은 새로운 도전을 하기에 좋은 날입니다!",
    "뜻밖의 행운이 찾아올 수 있어요 🍀",
    "조금 쉬어가도 괜찮은 하루입니다 ☕",
    "누군가와의 만남이 중요한 기회가 됩니다 🤝",
    "집중하면 좋은 결과를 얻을 수 있어요 📈",
    "작은 실수가 큰 배움이 됩니다 📚",
    "긍정적인 마음이 행운을 부릅니다 😊",
    "오늘은 자신을 믿고 행동하세요 💪"
];

let historyList = [];
let currentPage = 1;
const itemsPerPage = 10;

// 페이지 전환 함수
function showPage(pageId) {
    // 모든 페이지 숨기기
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    // 선택한 페이지 보이기
    document.getElementById(pageId).classList.add('active');

    // 모든 내비게이션 버튼 비활성화
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    // 클릭한 버튼 활성화
    const activeBtn = Array.from(document.querySelectorAll('.nav-btn')).find(btn => 
        btn.getAttribute('onclick').includes(pageId)
    );
    if (activeBtn) activeBtn.classList.add('active');

    // 페이지 전환 시 상단으로 스크롤
    window.scrollTo(0, 0);
}

// Disqus 리셋 함수 (다크모드 대응)
function resetDisqus() {
    if (typeof DISQUS !== 'undefined') {
        DISQUS.reset({
            reload: true,
            config: function () {
                this.page.identifier = 'jochan-fortune-main';
                this.page.url = window.location.href;
            }
        });
    }
}

function showFortune() {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const newFortune = fortunes[randomIndex];
    const fortuneDisplay = document.getElementById("fortune");

    if (fortuneDisplay.innerText !== "") {
        historyList.unshift(fortuneDisplay.innerText);
    }

    fortuneDisplay.innerText = newFortune;
    currentPage = 1;
    renderHistory();
}

function renderHistory() {
    const historyDiv = document.getElementById("history");
    const pageInfo = document.getElementById("page-info");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    
    if (!historyDiv) return;

    historyDiv.innerHTML = "";
    const totalPages = Math.max(1, Math.ceil(historyList.length / itemsPerPage));
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedItems = historyList.slice(start, end);

    if (historyList.length === 0) {
        historyDiv.innerHTML = "<p style='text-align:center; opacity:0.6;'>아직 기록이 없습니다.</p>";
    } else {
        paginatedItems.forEach((item, index) => {
            const div = document.createElement("div");
            div.className = "history-item";
            const actualIndex = start + index + 1;
            div.innerText = actualIndex + ". " + item;
            historyDiv.appendChild(div);
        });
    }

    if (pageInfo) pageInfo.innerText = `${currentPage} / ${totalPages}`;
    if (prevBtn) prevBtn.disabled = currentPage === 1;
    if (nextBtn) nextBtn.disabled = currentPage === totalPages;
}

function changePage(direction) {
    currentPage += direction;
    renderHistory();
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const targetTheme = currentTheme === "dark" ? "light" : "dark";
    
    document.documentElement.setAttribute("data-theme", targetTheme);
    localStorage.setItem("theme", targetTheme);
    
    const toggleBtn = document.querySelector(".theme-toggle");
    if (toggleBtn) {
        toggleBtn.innerText = targetTheme === "dark" ? "☀️ 라이트모드" : "🌙 다크모드";
    }

    // 테마 변경 시 Disqus 리셋
    resetDisqus();
}

document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    
    const toggleBtn = document.querySelector(".theme-toggle");
    if (toggleBtn) {
        toggleBtn.innerText = savedTheme === "dark" ? "☀️ 라이트모드" : "🌙 다크모드";
    }
    renderHistory();
});
