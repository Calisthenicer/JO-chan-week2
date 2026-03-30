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

function showFortune() {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const newFortune = fortunes[randomIndex];
    const fortuneDisplay = document.getElementById("fortune");

    // 이전 운세를 기록에 추가
    if (fortuneDisplay.innerText !== "") {
        historyList.unshift(fortuneDisplay.innerText);
    }

    // 현재 운세 표시
    fortuneDisplay.innerText = newFortune;

    // 새로운 운세를 볼 때마다 1페이지로 이동하여 최신 기록 확인
    currentPage = 1;
    renderHistory();
}

function renderHistory() {
    const historyDiv = document.getElementById("history");
    const pageInfo = document.getElementById("page-info");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    
    historyDiv.innerHTML = "";

    const totalPages = Math.max(1, Math.ceil(historyList.length / itemsPerPage));
    
    // 현재 페이지에 해당하는 데이터 슬라이스
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

    // 페이징 정보 업데이트
    pageInfo.innerText = `${currentPage} / ${totalPages}`;
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
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
