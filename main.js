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

    // 기록 출력
    renderHistory();
}

function renderHistory() {
    const historyDiv = document.getElementById("history");
    historyDiv.innerHTML = "";

    historyList.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = "history-item";
        div.innerText = (index + 1) + ". " + item;
        historyDiv.appendChild(div);
    });
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

// 페이지 로드 시 테마 설정 초기화
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    
    const toggleBtn = document.querySelector(".theme-toggle");
    if (toggleBtn) {
        toggleBtn.innerText = savedTheme === "dark" ? "☀️ 라이트모드" : "🌙 다크모드";
    }
});
