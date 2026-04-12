const workoutDB = {
    arms: {
        name: "팔 (Arms) 집중 루틴",
        exercises: [
            { name: "친업 (Chin-ups)", easy: "어시스티드 친업", hard: "중량 친업" },
            { name: "다이아몬드 푸쉬업", easy: "무릎 다이아몬드 푸쉬업", hard: "아처 푸쉬업" },
            { name: "벤치 딥스", easy: "무릎 굽힌 벤치 딥스", hard: "평행봉 딥스" }
        ]
    },
    back: {
        name: "등 (Back) 집중 루틴",
        exercises: [
            { name: "풀업 (Pull-ups)", easy: "네거티브 풀업", hard: "와이드 그립 풀업" },
            { name: "인버티드 로우", easy: "무릎 굽힌 인버티드 로우", hard: "원 레그 인버티드 로우" },
            { name: "홀드 (Dead Hang)", easy: "발 대고 홀드", hard: "한 팔 홀드" }
        ]
    },
    chest: {
        name: "가슴 (Chest) 집중 루틴",
        exercises: [
            { name: "평행봉 딥스", easy: "네거티브 딥스", hard: "중량 딥스" },
            { name: "푸쉬업", easy: "무릎 푸쉬업", hard: "디클라인 푸쉬업" },
            { name: "와이드 푸쉬업", easy: "인클라인 푸쉬업", hard: "아처 푸쉬업" }
        ]
    },
    upper: {
        name: "상체 (Upper Body) 전체 루틴",
        exercises: [
            { name: "풀업", easy: "호주식 풀업", hard: "머슬업 시도" },
            { name: "딥스", easy: "밴드 딥스", hard: "엘싯(L-sit) 딥스" },
            { name: "푸쉬업", easy: "월 푸쉬업", hard: "플란체 푸쉬업 시도" }
        ]
    },
    lower: {
        name: "하체 (Lower Body) 루틴",
        exercises: [
            { name: "스쿼트", easy: "박스 스쿼트", hard: "점프 스쿼트" },
            { name: "런지", easy: "서포티드 런지", hard: "불가리안 스플릿 스쿼트" },
            { name: "피스톨 스쿼트 시도", easy: "서포티드 피스톨 스쿼트", hard: "중량 피스톨 스쿼트" }
        ]
    },
    push: {
        name: "밀기 (Push) 루틴",
        exercises: [
            { name: "핸드스탠드 푸쉬업 시도", easy: "파이크 푸쉬업", hard: "자유형 핸드스탠드 푸쉬업" },
            { name: "딥스", easy: "벤치 딥스", hard: "링 딥스" },
            { name: "다이아몬드 푸쉬업", easy: "일반 푸쉬업", hard: "폭발적 푸쉬업 (박수)" }
        ]
    },
    pull: {
        name: "당기기 (Pull) 루틴",
        exercises: [
            { name: "풀업", easy: "점핑 풀업", hard: "엘싯 풀업" },
            { name: "친업", easy: "언더그립 로우", hard: "한 팔 친업 시도" },
            { name: "커맨도 풀업", easy: "스캐풀라 풀업", hard: "타이프라이터 풀업" }
        ]
    }
};

const goalAdvice = {
    strength: {
        meta: "5세트 x 5회 | 휴식: 3분",
        mindset: "매 세트마다 최대의 힘을 쏟으세요. 실패 지점까지 가기보다는 완벽한 자세로 무거운 부하(변형 동작)를 다루는 것이 핵심입니다.",
        diet: "단백질 섭취를 체중당 1.8g 이상으로 유지하고, 탄수화물을 충분히 섭취하여 글리코겐을 보충하세요."
    },
    hypertrophy: {
        meta: "4세트 x 8~12회 | 휴식: 1.5분",
        mindset: "근육의 수축과 이완에 집중하세요. 템포를 천천히(내려갈 때 3초) 가져가며 근비대를 유도하는 스트레스를 주어야 합니다.",
        diet: "잉여 칼로리를 200~300kcal 정도 유지하는 '린매스업' 식단을 추천합니다. 끼니마다 단백질을 포함하세요."
    },
    endurance: {
        meta: "3세트 x 15~20회 | 휴식: 45초",
        mindset: "숨이 차오르고 근육이 타오르는 느낌을 즐기세요. 짧은 휴식 시간 동안 회복하는 능력을 기르는 것이 목표입니다.",
        diet: "복합 탄수화물(현미, 고구마)을 통해 지속적인 에너지를 공급받으세요. 수분 보충이 매우 중요합니다."
    },
    diet: {
        meta: "4세트 x 12~15회 | 휴식: 1분",
        mindset: "심박수를 높게 유지하세요. 운동 사이사이에 가벼운 스트레칭이나 제자리 뛰기를 섞어 칼로리 소모를 극대화합니다.",
        diet: "정제 탄수화물과 설탕을 끊으세요. 채소 위주의 식이섬유와 양질의 지방, 저지방 단백질(닭가슴살, 흰살생선)로 구성하세요."
    }
};

let selectedPart = null;
let selectedGoal = null;

// 공통 페이지 전환 및 버튼 선택 로직
function setupSelection() {
    document.querySelectorAll('#part-selection .select-item').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('#part-selection .select-item').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            selectedPart = btn.dataset.value;
        });
    });

    document.querySelectorAll('#goal-selection .select-item').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('#goal-selection .select-item').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            selectedGoal = btn.dataset.value;
        });
    });
}

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');

    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    const activeBtn = Array.from(document.querySelectorAll('.nav-btn')).find(b => b.getAttribute('onclick').includes(pageId));
    if (activeBtn) activeBtn.classList.add('active');
}

function generateWorkout() {
    if (!selectedPart || !selectedGoal) {
        alert("부위와 목적을 모두 선택해주세요!");
        return;
    }

    const workout = workoutDB[selectedPart];
    const advice = goalAdvice[selectedGoal];
    
    // 1. 운동 루틴 렌더링
    const resultDiv = document.getElementById("workout-result");
    resultDiv.innerHTML = `<h3>${workout.name} (${selectedGoal.toUpperCase()})</h3>`;
    
    workout.exercises.forEach(ex => {
        const item = document.createElement("div");
        item.className = "routine-item";
        item.innerHTML = `
            <span class="routine-name">${ex.name}</span>
            <span class="routine-meta">${advice.meta}</span>
        `;
        resultDiv.appendChild(item);
    });

    // 2. 대체 운동 렌더링
    document.getElementById("alternatives").style.display = "block";
    document.getElementById("easy-alt").innerHTML = workout.exercises.map(ex => `<li>${ex.easy}</li>`).join('');
    document.getElementById("hard-alt").innerHTML = workout.exercises.map(ex => `<li>${ex.hard}</li>`).join('');

    // 3. 가이드 콘텐츠 렌더링
    const guideDiv = document.getElementById("guide-content");
    guideDiv.innerHTML = `
        <div class="guide-section">
            <h4>🧠 오늘의 마음가짐</h4>
            <p>${advice.mindset}</p>
        </div>
        <div class="guide-section">
            <h4>🥗 추천 영양 전략</h4>
            <p>${advice.diet}</p>
        </div>
        <div class="guide-section">
            <h4>💡 팁</h4>
            <p>모든 동작은 철봉을 꽉 쥐는 것부터 시작합니다. 전완근의 긴장을 유지하며 견갑골을 먼저 움직이는 연습을 하세요.</p>
        </div>
    `;

    // 결과 페이지로 이동
    showPage('workout-page');
}

function toggleTheme() {
    const theme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
}

document.addEventListener("DOMContentLoaded", () => {
    setupSelection();
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
});
