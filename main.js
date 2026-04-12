// 1. 운동 데이터베이스 (레벨별 통합 루틴)
const progressions = {
    pull: [
        {
            levelName: "입문 (Foundation)",
            exercises: [
                { name: "데드행 (Dead Hang)", desc: "철봉에 매달려 전신을 정렬하고 악력을 기릅니다.", link: "https://en.wikipedia.org/wiki/Dead_hang", intensity: "더 힘들게: 한 팔로 매달리기 시도" },
                { name: "스캐풀라 풀업", desc: "날개뼈만 아래로 당겨 내리는 동작에 집중합니다.", link: "https://www.youtube.com/results?search_query=scapular+pull+ups", intensity: "더 힘들게: 수축 지점에서 3초 정지" },
                { name: "호주식 풀업", desc: "낮은 바에서 가슴을 바 쪽으로 당깁니다.", link: "https://en.wikipedia.org/wiki/Inverted_row", intensity: "더 힘들게: 몸의 각도를 더 낮춰 지면과 수평이 되게 조절" }
            ]
        },
        {
            levelName: "초급 (Beginner)",
            exercises: [
                { name: "네거티브 풀업", desc: "점프 후 최대한 버티며 천천히 내려옵니다.", link: "https://www.hybridcalisthenics.com/pullups", intensity: "더 힘들게: 내려오는 시간을 5초에서 10초로 연장" },
                { name: "친업 (Chin-ups)", desc: "손바닥이 얼굴을 보게 잡아 이두근을 활용합니다.", link: "https://en.wikipedia.org/wiki/Pull-up_(exercise)#Variations", intensity: "더 힘들게: 무릎을 가슴 쪽으로 당겨 L-싯 자세 유지" }
            ]
        },
        {
            levelName: "중급 (Intermediate)",
            exercises: [
                { name: "표준 풀업", desc: "정석적인 자세로 가슴이 철봉에 닿을 듯 당깁니다.", link: "https://en.wikipedia.org/wiki/Pull-up_(exercise)", intensity: "더 힘들게: 가방에 책을 넣어 3~5kg 중량 추가" },
                { name: "커맨도 풀업", desc: "바와 수평으로 서서 한쪽으로 번갈아 당깁니다.", link: "https://www.youtube.com/results?search_query=commando+pull+ups", intensity: "더 힘들게: 올라간 상태에서 좌우로 몸을 이동(타이프라이터)" }
            ]
        },
        {
            levelName: "상급 (Advanced)",
            exercises: [
                { name: "L-싯 풀업", desc: "다리를 L자로 들어 올린 상태에서 수행합니다.", link: "https://www.youtube.com/results?search_query=L-sit+pull+ups", intensity: "더 힘들게: 발끝에 가벼운 덤벨이나 밴드 저항 추가" },
                { name: "머슬업 (Muscle-ups)", desc: "풀업에서 딥스로 전환하여 철봉 위로 올라옵니다.", link: "https://en.wikipedia.org/wiki/Muscle-up", intensity: "더 힘들게: 반동을 최소화한 슬로우 머슬업 시도" }
            ]
        }
    ],
    push: [
        {
            levelName: "입문 (Foundation)",
            exercises: [
                { name: "월 푸쉬업", desc: "벽을 짚고 서서 수행하는 기초 밀기 운동입니다.", link: "https://www.hybridcalisthenics.com/pushups", intensity: "더 힘들게: 벽에서 발을 더 멀리 떨어뜨려 각도 증가" },
                { name: "인클라인 푸쉬업", desc: "높은 지형을 짚어 부하를 줄인 푸쉬업입니다.", link: "https://en.wikipedia.org/wiki/Push-up#Variations", intensity: "더 힘들게: 짚고 있는 물체의 높이를 점점 낮춤" }
            ]
        },
        {
            levelName: "초급 (Beginner)",
            exercises: [
                { name: "무릎 푸쉬업", desc: "무릎을 대고 상체의 무게를 밀어냅니다.", link: "https://en.wikipedia.org/wiki/Push-up", intensity: "더 힘들게: 손의 위치를 골반 쪽으로 내려 부하 증가" },
                { name: "표준 푸쉬업", desc: "몸을 일직선으로 유지하며 지면을 밀어냅니다.", link: "https://en.wikipedia.org/wiki/Push-up", intensity: "더 힘들게: 발을 의자 위에 올리는 디클라인 자세" }
            ]
        },
        {
            levelName: "중급 (Intermediate)",
            exercises: [
                { name: "평행봉 딥스", desc: "공중에서 몸 전체 무게를 삼두와 가슴으로 밉니다.", link: "https://en.wikipedia.org/wiki/Dip_(exercise)", intensity: "더 힘들게: 상체를 15도 더 숙여 가슴 하부 자극 극대화" },
                { name: "다이아몬드 푸쉬업", desc: "손을 모아 삼두근을 집중 공략합니다.", link: "https://en.wikipedia.org/wiki/Push-up#Variations", intensity: "더 힘들게: 한쪽 다리를 들고 수행하여 코어 부하 추가" }
            ]
        },
        {
            levelName: "상급 (Advanced)",
            exercises: [
                { name: "파이크 푸쉬업", desc: "엉덩이를 높게 들어 어깨 근육을 사용합니다.", link: "https://www.youtube.com/results?search_query=pike+push+ups", intensity: "더 힘들게: 발을 벽에 대고 수직에 가깝게 각도 조절" },
                { name: "핸드스탠드 푸쉬업", desc: "물구나무를 서서 어깨로 몸을 밀어 올립니다.", link: "https://en.wikipedia.org/wiki/Handstand_push-up", intensity: "더 힘들게: 벽에서 등을 떼고 자유형 시도" }
            ]
        }
    ],
    lower: [
        {
            levelName: "입문 (Foundation)",
            exercises: [
                { name: "표준 스쿼트", desc: "수직으로 앉아 하체 기본 근력을 기릅니다.", link: "https://en.wikipedia.org/wiki/Squat_(exercise)", intensity: "더 힘들게: 내려간 상태에서 2초 정지" }
            ]
        },
        {
            levelName: "초급 (Beginner)",
            exercises: [
                { name: "런지 (Lunges)", desc: "한 발씩 내디디며 균형과 근력을 기릅니다.", link: "https://en.wikipedia.org/wiki/Lunge_(exercise)", intensity: "더 힘들게: 뒷발을 높은 곳에 두는 불가리안 스플릿 자세" }
            ]
        },
        {
            levelName: "중급 (Intermediate)",
            exercises: [
                { name: "코사크 스쿼트", desc: "옆으로 깊게 앉아 하체 유연성과 근력을 기릅니다.", link: "https://www.youtube.com/results?search_query=cossack+squat", intensity: "더 힘들게: 손을 머리 뒤로 하고 수행" }
            ]
        },
        {
            levelName: "상급 (Advanced)",
            exercises: [
                { name: "피스톨 스쿼트", desc: "한 발의 힘으로만 앉았다 일어납니다.", link: "https://en.wikipedia.org/wiki/Squat_(exercise)#Pistol_squat", intensity: "더 힘들게: 가방을 앞으로 메고 중량 추가" }
            ]
        }
    ]
};

// 2. 부위별 기본 라인업 매핑
const partMapping = {
    arms: ["pull", "push"],
    back: ["pull"],
    chest: ["push"],
    upper: ["pull", "push"],
    lower: ["lower"],
    push: ["push"],
    pull: ["pull"]
};

// 3. 목적별 조언 데이터
const goalAdvice = {
    strength: {
        meta: "5세트 x 5회 | 휴식: 3분",
        mindset: "신경계를 깨우세요. '횟수'가 아니라 '부하'에 집중해야 합니다. 한 번을 하더라도 몸이 찢어지는 듯한 텐션을 유지하는 것이 스트렝스의 핵심입니다.",
        proteinRatio: 1.8,
        mistakes: [
            { title: "자세 무너짐 무시", content: "힘이 빠져서 자세가 무너졌는데도 횟수를 채우려 하는 것은 '부상으로 가는 지름길'입니다. 가동 범위가 줄어들면 그 세트는 즉시 중단하십시오." },
            { title: "실패 지점 도달", content: "근력 향상을 위해선 매 세트 완전히 탈진할 때까지 하지 마세요. 1~2회 더 할 수 있는 여유(RPE 8)를 남겨야 근신경계 피로를 조절할 수 있습니다." }
        ]
    },
    hypertrophy: {
        meta: "4세트 x 8~12회 | 휴식: 1.5분",
        mindset: "근육의 수축과 이완에 집중하세요. 템포를 천천히 가져가며 근비대를 유도하는 스트레스를 주어야 합니다.",
        proteinRatio: 1.6,
        mistakes: [
            { title: "반동 사용", content: "반동을 쓰면 목표 근육의 기계적 긴장이 사라집니다. 이는 근비대 효율을 50% 이상 떨어뜨리며 관절에 무리를 줍니다." }
        ]
    },
    endurance: {
        meta: "3세트 x 15~20회 | 휴식: 45초",
        mindset: "숨이 차오르고 근육이 타오르는 느낌을 즐기세요. 짧은 휴식 시간 동안 회복하는 능력을 기르는 것이 목표입니다.",
        proteinRatio: 1.4,
        mistakes: [
            { title: "불규칙한 템포", content: "일정한 속도를 유지하지 못하면 근지구력 향상 효율이 떨어집니다." }
        ]
    }
};

const proteinSources = [
    { name: "닭가슴살 (생물)", proteinPer100g: 23, costPerProtein: 45, context: "가장 저렴한 단백질원" },
    { name: "단백질 보충제 (WPC)", proteinPer100g: 20, costPerProtein: 40, context: "바쁠 때 가장 경제적인 선택" }
];

// 4. 상태 관리 변수
let selectedPart = null;
let selectedGoal = null;
let userLevelIndex = 1;

// 5. 버튼 선택 이벤트 리스너
function setupSelection() {
    document.querySelectorAll('#part-selection .select-item').forEach(btn => {
        btn.addEventListener('click', function() {
            this.parentElement.querySelectorAll('.select-item').forEach(b => b.classList.remove('selected'));
            this.classList.add('selected');
            selectedPart = this.dataset.value;
        });
    });

    document.querySelectorAll('#goal-selection .select-item').forEach(btn => {
        btn.addEventListener('click', function() {
            this.parentElement.querySelectorAll('.select-item').forEach(b => b.classList.remove('selected'));
            this.classList.add('selected');
            selectedGoal = this.dataset.value;
        });
    });
}

// 6. 페이지 전환 함수
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const targetPage = document.getElementById(pageId);
    if (targetPage) targetPage.classList.add('active');

    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    const btnMap = {
        'setup-page': 'nav-setup',
        'assessment-page': 'nav-assessment',
        'workout-page': 'nav-workout',
        'guide-page': 'nav-guide',
        'privacy-page': 'nav-privacy'
    };
    const activeBtn = document.getElementById(btnMap[pageId]);
    if (activeBtn) activeBtn.classList.add('active');
    window.scrollTo(0, 0);
}

// 7. 진단 시작
function startAssessment() {
    if (!selectedPart || !selectedGoal) {
        alert("부위와 목적을 먼저 선택해주세요!");
        return;
    }
    document.getElementById('nav-assessment').disabled = false;
    showPage('assessment-page');
}

// 8. 설정 완료 및 루틴 생성
function completeSetup() {
    const pushVal = parseInt(document.getElementById('eval-push').value);
    const pullVal = parseInt(document.getElementById('eval-pull').value);
    
    userLevelIndex = Math.min(3, Math.round((pushVal + pullVal) / 2));
    
    const weightInput = document.getElementById('user-weight').value;
    if (!weightInput || weightInput < 30) {
        alert("체중을 올바르게 입력해주세요!");
        return;
    }

    const advice = goalAdvice[selectedGoal];
    document.getElementById('nav-workout').disabled = false;
    renderWorkout(advice);
    renderNutrition(weightInput, advice);
    showPage('workout-page');
}

// 9. 루틴 화면 렌더링
function renderWorkout(advice) {
    const container = document.getElementById("workout-result");
    const patterns = partMapping[selectedPart];
    
    if (!container) return;

    let allExercisesHTML = "";
    patterns.forEach(p => {
        const levelData = progressions[p][userLevelIndex];
        allExercisesHTML += levelData.exercises.map(ex => `
            <div class="routine-item-v2" onclick="window.open('${ex.link}', '_blank')">
                <div class="routine-info">
                    <span class="routine-name">${ex.name} 🔗</span>
                    <span class="routine-desc">${ex.desc}</span>
                    <span class="intensity-tip">💡 ${ex.intensity}</span>
                </div>
                <div class="routine-meta">${advice.meta}</div>
            </div>
        `).join('');
    });

    container.innerHTML = `
        <div class="mindset-top">
            <h4>🧠 TODAY'S MINDSET</h4>
            <p>"${advice.mindset}"</p>
        </div>
        <h2 style="text-align:center;">🏋️ 오늘의 통합 루틴 (Level ${userLevelIndex + 1})</h2>
        <div class="active-workout-card">
            <div class="routine-list-v2">${allExercisesHTML}</div>
        </div>
        <div class="mistake-section">
            <h3>⚠️ 과학적 근거에 기반한 경고</h3>
            ${advice.mistakes.map(m => `
                <div class="mistake-card">
                    <h4>${m.title}</h4>
                    <p>${m.content}</p>
                </div>
            `).join('')}
        </div>
    `;
}

// 10. 영양 가이드 렌더링
function renderNutrition(weight, advice) {
    const totalGoal = (weight * advice.proteinRatio).toFixed(1);
    const proteinFromMeals = 60;
    const remainingProtein = Math.max(0, (totalGoal - proteinFromMeals)).toFixed(1);
    
    const guideDiv = document.getElementById("guide-content");
    if (!guideDiv) return;

    let proteinHTML = "";
    if (remainingProtein > 0) {
        proteinHTML = proteinSources.map(s => `
            <div class="protein-source-card">
                <h5>${s.name}</h5>
                <p>${s.context}</p>
                <ul>
                    <li>필요 보충량: <strong>약 ${(remainingProtein / (s.proteinPer100g / 100)).toFixed(0)}g</strong></li>
                    <li>예상 비용: <strong>약 ${(remainingProtein * s.costPerProtein).toLocaleString()}원 / 일</strong></li>
                </ul>
            </div>
        `).join('');
    }

    guideDiv.innerHTML = `
        <div class="guide-section">
            <h4>📊 단백질 섭취 분석 (삼시세끼 제외)</h4>
            <div class="protein-breakdown">
                <div class="breakdown-item"><span>전체 일일 목표</span><strong class="total">${totalGoal}g</strong></div>
                <div class="breakdown-item"><span>일반 식사(3끼) 충족량</span><strong class="meals">- ${proteinFromMeals}g</strong></div>
                <div class="breakdown-divider"></div>
                <div class="breakdown-item result"><span>추가 보충 필요량</span><strong class="remaining">${remainingProtein}g</strong></div>
            </div>
            <div class="protein-grid">${remainingProtein > 0 ? proteinHTML : '<p class="success-msg">🎉 삼시세끼만으로 충분합니다!</p>'}</div>
        </div>
    `;
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
