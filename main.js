const fortunes = [
    {
        summary: "새로운 도전의 기운이 가득한 날!",
        detail: "망설이고 있던 일이 있다면 오늘이 바로 시작할 적기입니다. 주변의 도움보다는 자신의 직관을 믿고 나아가세요. 귀인의 도움이 예상치 못한 곳에서 찾아옵니다."
    },
    {
        summary: "뜻밖의 행운이 찾아올 수 있어요 🍀",
        detail: "오랫동안 연락이 끊겼던 사람에게서 기쁜 소식이 들려옵니다. 금전운도 상승 곡선을 그리니, 작은 투자나 추첨에 관심을 가져보는 것도 좋겠네요."
    },
    {
        summary: "조금 쉬어가도 괜찮은 하루입니다 ☕",
        detail: "오늘은 속도를 내기보다는 내실을 다지는 데 집중하세요. 무리한 계획은 오히려 독이 될 수 있습니다. 명상이나 가벼운 산책으로 에너지를 충전하세요."
    },
    {
        summary: "대인관계에서 큰 기회가 생깁니다 🤝",
        detail: "모임이나 회의에서 당신의 의견이 높게 평가받을 것입니다. 경청하는 태도를 보인다면 더 큰 신뢰를 얻을 수 있습니다. 오후 2시 이후의 만남을 주목하세요."
    },
    {
        summary: "집중하면 반드시 좋은 결과를 얻습니다 📈",
        detail: "분산된 관심을 하나로 모아야 할 때입니다. 어려운 과제라도 오늘만큼은 명쾌한 해결책이 떠오를 것입니다. 청색 계열의 아이템이 행운을 가져다줍니다."
    },
    {
        summary: "작은 실수가 큰 배움으로 이어집니다 📚",
        detail: "완벽하려고 애쓰기보다 과정에 충실하세요. 예상치 못한 상황이 닥치더라도 침착하게 대응하면 전화위복의 기회가 됩니다. 정직한 태도가 가장 강력한 무기입니다."
    },
    {
        summary: "긍정적인 에너지가 행운을 부릅니다 😊",
        detail: "당신의 밝은 미소가 주변 사람들에게도 좋은 영향을 미칩니다. 협상이나 설득이 필요한 일이 있다면 오늘 추진해보세요. 결과가 기대 이상일 것입니다."
    },
    {
        summary: "자신을 믿고 소신 있게 행동하세요 💪",
        detail: "주변의 시선에 흔들리지 마세요. 당신의 계획은 이미 충분히 훌륭합니다. 인내심을 가지고 밀어붙인다면 저녁 무렵 기쁜 성취감을 맛보게 될 것입니다."
    }
];

let historyList = [];
let currentPage = 1;
const itemsPerPage = 10;

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');

    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = Array.from(document.querySelectorAll('.nav-btn')).find(btn => 
        btn.getAttribute('onclick').includes(pageId)
    );
    if (activeBtn) activeBtn.classList.add('active');
    window.scrollTo(0, 0);
}

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
    const fortuneData = fortunes[randomIndex];
    const fortuneDisplay = document.getElementById("fortune");
    const fortuneDetail = document.getElementById("fortune-detail");

    if (fortuneDisplay.innerText !== "") {
        historyList.unshift(fortuneDisplay.innerText);
    }

    fortuneDisplay.innerText = fortuneData.summary;
    fortuneDetail.innerText = fortuneData.detail;
    
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
