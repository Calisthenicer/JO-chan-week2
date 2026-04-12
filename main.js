// 운동 데이터베이스 (레벨별 3~4개 운동 묶음)
const progressions = {
    pull: [
        {
            levelName: "입문 (Foundation)",
            exercises: [
                { name: "데드행 (Dead Hang)", desc: "철봉에 매달려 전신을 정렬하고 악력을 기릅니다.", link: "https://en.wikipedia.org/wiki/Dead_hang" },
                { name: "스캐풀라 풀업", desc: "팔을 굽히지 않고 날개뼈만 아래로 당겨 내립니다.", link: "https://www.youtube.com/results?search_query=scapular+pull+ups" },
                { name: "호주식 풀업", desc: "낮은 바에서 몸을 기울여 가슴을 바 쪽으로 당깁니다.", link: "https://en.wikipedia.org/wiki/Inverted_row" }
            ]
        },
        {
            levelName: "초급 (Beginner)",
            exercises: [
                { name: "네거티브 풀업", desc: "점프해서 올라간 후 최대한 버티며 천천히 내려옵니다.", link: "https://www.hybridcalisthenics.com/pullups" },
                { name: "친업 (Chin-ups)", desc: "손바닥이 얼굴을 보게 잡아 이두근의 도움을 받습니다.", link: "https://en.wikipedia.org/wiki/Pull-up_(exercise)#Variations" },
                { name: "홀드 (Top Position)", desc: "철봉 위에서 턱을 걸고 최대한 버팁니다.", link: "https://en.wikipedia.org/wiki/Pull-up_(exercise)" }
            ]
        },
        {
            levelName: "중급 (Intermediate)",
            exercises: [
                { name: "표준 풀업", desc: "정석적인 자세로 가슴이 철봉에 닿을 듯이 당깁니다.", link: "https://en.wikipedia.org/wiki/Pull-up_(exercise)" },
                { name: "와이드 풀업", desc: "어깨보다 넓게 잡아 등의 넓이를 강조합니다.", link: "https://en.wikipedia.org/wiki/Pull-up_(exercise)" },
                { name: "커맨도 풀업", desc: "바와 수평으로 서서 한쪽으로 번갈아 당깁니다.", link: "https://www.youtube.com/results?search_query=commando+pull+ups" }
            ]
        },
        {
            levelName: "상급 (Advanced)",
            exercises: [
                { name: "L-싯 풀업", desc: "다리를 L자로 들어 올린 상태에서 풀업을 수행합니다.", link: "https://www.youtube.com/results?search_query=L-sit+pull+ups" },
                { name: "아처 풀업", desc: "한쪽 팔을 펴서 활을 쏘는 듯한 자세로 당깁니다.", link: "https://en.wikipedia.org/wiki/Pull-up_(exercise)#Variations" },
                { name: "머슬업 (Muscle-ups)", desc: "풀업에서 딥스로 전환하여 철봉 위로 올라옵니다.", link: "https://en.wikipedia.org/wiki/Muscle-up" }
            ]
        }
    ],
    push: [
        {
            levelName: "입문 (Foundation)",
            exercises: [
                { name: "월 푸쉬업", desc: "벽을 짚고 서서 수행하는 가장 기초적인 밀기 운동입니다.", link: "https://www.hybridcalisthenics.com/pushups" },
                { name: "인클라인 푸쉬업", desc: "높은 지형을 짚어 부하를 줄인 푸쉬업입니다.", link: "https://en.wikipedia.org/wiki/Push-up#Variations" },
                { name: "플랭크 홀드", desc: "푸쉬업 자세로 버티며 코어의 안정성을 기릅니다.", link: "https://en.wikipedia.org/wiki/Plank_(exercise)" }
            ]
        },
        {
            levelName: "초급 (Beginner)",
            exercises: [
                { name: "무릎 푸쉬업", desc: "무릎을 바닥에 대고 상체의 무게를 밀어냅니다.", link: "https://en.wikipedia.org/wiki/Push-up" },
                { name: "표준 푸쉬업", desc: "몸을 일직선으로 유지하며 지면을 밀어냅니다.", link: "https://en.wikipedia.org/wiki/Push-up" },
                { name: "벤치 딥스", desc: "의자나 벤치를 뒤로 짚고 삼두근으로 밀어 올립니다.", link: "https://en.wikipedia.org/wiki/Dip_(exercise)" }
            ]
        },
        {
            levelName: "중급 (Intermediate)",
            exercises: [
                { name: "평행봉 딥스", desc: "공중에서 몸 전체 무게를 삼두와 가슴으로 밉니다.", link: "https://en.wikipedia.org/wiki/Dip_(exercise)" },
                { name: "다이아몬드 푸쉬업", desc: "손을 모아 다이아몬드 모양을 만들어 삼두를 강조합니다.", link: "https://en.wikipedia.org/wiki/Push-up#Variations" },
                { name: "파이크 푸쉬업", desc: "엉덩이를 높게 들어 어깨 근육을 주로 사용합니다.", link: "https://www.youtube.com/results?search_query=pike+push+ups" }
            ]
        },
        {
            levelName: "상급 (Advanced)",
            exercises: [
                { name: "아처 푸쉬업", desc: "한쪽 팔을 옆으로 펴고 다른 한 팔의 힘으로 밉니다.", link: "https://en.wikipedia.org/wiki/Push-up#Variations" },
                { name: "핸드스탠드 푸쉬업", desc: "벽에 기대어 물구나무를 서서 어깨로 밉니다.", link: "https://en.wikipedia.org/wiki/Handstand_push-up" },
                { name: "폭발적 푸쉬업", desc: "강하게 밀어 손을 지면에서 떼거나 박수를 칩니다.", link: "https://en.wikipedia.org/wiki/Plyometrics" }
            ]
        }
    ],
    lower: [
        {
            levelName: "입문 (Foundation)",
            exercises: [
                { name: "박스 스쿼트", desc: "의자에 앉았다 일어나듯 수행하여 감을 익힙니다.", link: "https://en.wikipedia.org/wiki/Squat_(exercise)" },
                { name: "표준 스쿼트", desc: "무릎이 안으로 굽지 않게 주의하며 수직으로 앉습니다.", link: "https://en.wikipedia.org/wiki/Squat_(exercise)" },
                { name: "카프 레이즈", desc: "까치발을 들어 종아리 근육을 강화합니다.", link: "https://en.wikipedia.org/wiki/Calf_raise" }
            ]
        },
        {
            levelName: "초급 (Beginner)",
            exercises: [
                { name: "워킹 런지", desc: "한 발씩 앞으로 내디디며 하체 전체를 자극합니다.", link: "https://en.wikipedia.org/wiki/Lunge_(exercise)" },
                { name: "사이드 런지", desc: "옆으로 발을 뻗어 내전근과 둔근을 강화합니다.", link: "https://en.wikipedia.org/wiki/Lunge_(exercise)" },
                { name: "글루트 브릿지", desc: "누워서 엉덩이를 들어 올려 후면 사슬을 강화합니다.", link: "https://en.wikipedia.org/wiki/Bridge_(exercise)" }
            ]
        },
        {
            levelName: "중급 (Intermediate)",
            exercises: [
                { name: "불가리안 스플릿 스쿼트", desc: "한 발을 뒤에 걸치고 수행하여 강도를 높입니다.", link: "https://en.wikipedia.org/wiki/Split_squat" },
                { name: "코사크 스쿼트", desc: "깊게 옆으로 앉아 하체 유연성과 근력을 동시에 기릅니다.", link: "https://www.youtube.com/results?search_query=cossack+squat" },
                { name: "점프 스쿼트", desc: "폭발적으로 뛰어올라 하체의 순발력을 기릅니다.", link: "https://en.wikipedia.org/wiki/Plyometrics" }
            ]
        },
        {
            levelName: "상급 (Advanced)",
            exercises: [
                { name: "어시스티드 피스톨", desc: "한 발로 서서 앉되, 무언가를 잡아 중심을 잡습니다.", link: "https://www.hybridcalisthenics.com/squats" },
                { name: "피스톨 스쿼트", desc: "도움 없이 오직 한 발의 힘으로만 앉았다 일어납니다.", link: "https://en.wikipedia.org/wiki/Squat_(exercise)#Pistol_squat" },
                { name: "노르딕 햄스트링 컬", desc: "무릎을 대고 상체를 천천히 내려 하체 후면을 극대화합니다.", link: "https://en.wikipedia.org/wiki/Nordic_hamstring_exercise" }
            ]
        }
    ]
};

// 부위별 기본 라인업 매핑
const partMapping = {
    arms: ["pull", "push"], // 팔은 당기기와 밀기를 모두 포함
    back: ["pull"],
    chest: ["push"],
    upper: ["pull", "push"],
    lower: ["lower"],
    push: ["push"],
    pull: ["pull"]
};

const goalAdvice = {
    strength: {
        meta: "5세트 x 5회 | 휴식: 3분",
        mindset: "신경계를 깨우세요. '횟수'가 아니라 '부하'에 집중해야 합니다. 한 번을 하더라도 몸이 찢어지는 듯한 텐션을 유지하는 것이 스트렝스의 핵심입니다.",
        proteinRatio: 1.8, // 체중 1kg당 단백질 g
        mistakes: [
            { title: "실패 지점 강박", content: "매 세트 실패 지점까지 가면 근신경계가 과부하되어 다음 운동의 효율이 급감합니다. 1~2회 정도 더 할 수 있을 때 멈추는 RPE 8-9 수준이 가장 과학적입니다." },
            { title: "불충분한 휴식", content: "ATP(에너지원)가 재합성되는 데는 최소 3분이 필요합니다. 조급함에 짧게 쉬면 힘이 아니라 심폐지구력 훈련이 되어버립니다." }
        ]
    },
    hypertrophy: {
        meta: "4세트 x 8~12회 | 휴식: 1.5분",
        mindset: "근육의 수축과 이완에 집중하세요. 템포를 천천히(내려갈 때 3초) 가져가며 근비대를 유도하는 스트레스를 주어야 합니다.",
        proteinRatio: 1.6,
        mistakes: [
            { title: "반동 사용 (Cheating)", content: "반동을 쓰는 순간 타겟 근육의 기계적 긴장(Mechanical Tension)이 풀립니다. 이는 근비대를 방해하고 건과 인대의 부상 위험을 2.5배 높입니다." },
            { title: "수면 부족", content: "근육은 운동할 때가 아니라 잘 때 자랍니다. 7시간 미만의 수면은 단백질 합성률을 떨어뜨려 운동 노력을 수포로 만듭니다." }
        ]
    },
    endurance: {
        meta: "3세트 x 15~20회 | 휴식: 45초",
        mindset: "숨이 차오르고 근육이 타오르는 느낌을 즐기세요. 짧은 휴식 시간 동안 회복하는 능력을 기르는 것이 목표입니다.",
        proteinRatio: 1.4,
        mistakes: [
            { title: "자세 붕괴 무시", content: "횟수만을 위해 무너진 자세로 반복하는 것은 근육이 아니라 관절을 갉아먹는 행위입니다. 자세가 무너지면 해당 세트는 즉시 종료해야 합니다." },
            { title: "불규칙한 템포", content: "일정한 속도를 유지하지 못하면 근지구력 향상 효율이 떨어집니다. 메트로놈을 켜놓듯 규칙적으로 움직이세요." }
        ]
    }
};

const proteinSources = [
    { name: "닭가슴살 (생물)", proteinPer100g: 23, costPerProtein: 45, context: "가장 클래식한 선택. 가성비가 가장 좋지만 조리 시간이 필요합니다.", example: "100g당 약 1,000원" },
    { name: "계란 (대란)", proteinPer100g: 6, costPerProtein: 50, context: "조리가 간편하고 영양가가 높습니다.", example: "1알(6g)당 약 300원" },
    { name: "단백질 보충제 (WPC)", proteinPer100g: 20, costPerProtein: 40, context: "바쁜 일상에서 가장 경제적이고 빠른 공급원입니다.", example: "1회 분량당 약 800원" },
    { name: "두부 (국산)", proteinPer100g: 8, costPerProtein: 80, context: "식물성 단백질. 소화가 잘 되며 값싸게 대량 섭취 가능합니다.", example: "300g 한 모당 약 2,000원" }
];

let selectedPart = null;
let selectedGoal = null;
let currentWorkoutState = [];

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

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    const activeBtn = Array.from(document.querySelectorAll('.nav-btn')).find(b => b.getAttribute('onclick').includes(pageId));
    if (activeBtn) activeBtn.classList.add('active');
}

function generateWorkout() {
    const weight = document.getElementById('user-weight').value;
    if (!selectedPart || !selectedGoal) {
        alert("부위와 목적을 모두 선택해주세요!");
        return;
    }
    if (!weight || weight < 30) {
        alert("올바른 체중을 입력해주세요!");
        return;
    }

    const patterns = partMapping[selectedPart];
    const advice = goalAdvice[selectedGoal];

    // 초기 상태 설정
    currentWorkoutState = patterns.map(p => ({
        pattern: p,
        levelIndex: 1
    }));

    renderWorkout(advice);
    renderNutrition(weight, advice);
    showPage('workout-page');
}

function renderWorkout(advice) {
    const container = document.getElementById("workout-result");
    container.innerHTML = `
        <div class="mindset-top">
            <h4>🧠 WORKOUT MINDSET</h4>
            <p>"${advice.mindset}"</p>
        </div>
    `;

    currentWorkoutState.forEach((state, stateIndex) => {
        const levelData = progressions[state.pattern][state.levelIndex];
        const patternBox = document.createElement("div");
        patternBox.className = "active-workout-card";
        
        let exercisesHTML = levelData.exercises.map(ex => `
            <div class="routine-item-v2" onclick="window.open('${ex.link}', '_blank')">
                <div class="routine-info">
                    <span class="routine-name">${ex.name} 🔗</span>
                    <span class="routine-desc">${ex.desc}</span>
                </div>
                <span class="routine-meta">${advice.meta}</span>
            </div>
        `).join('');

        patternBox.innerHTML = `
            <div class="exercise-display">
                <span class="pattern-label">${state.pattern.toUpperCase()} - ${levelData.levelName}</span>
                <div class="routine-list-v2">
                    ${exercisesHTML}
                </div>
                <div class="difficulty-controls">
                    <button class="diff-btn easy" onclick="changeDifficulty(${stateIndex}, -1)">📉 레벨 낮추기</button>
                    <button class="diff-btn hard" onclick="changeDifficulty(${stateIndex}, 1)">📈 레벨 높이기</button>
                </div>
            </div>
        `;
        container.appendChild(patternBox);
    });

    const mistakeSection = document.createElement("div");
    mistakeSection.className = "mistake-section";
    mistakeSection.innerHTML = `<h3>⚠️ 과학적 근거에 기반한 경고</h3>`;
    advice.mistakes.forEach(m => {
        mistakeSection.innerHTML += `
            <div class="mistake-card">
                <h4>${m.title}</h4>
                <p>${m.content}</p>
            </div>
        `;
    });
    container.appendChild(mistakeSection);
}

function renderNutrition(weight, advice) {
    const totalProtein = (weight * advice.proteinRatio).toFixed(1);
    const guideDiv = document.getElementById("guide-content");
    
    let proteinHTML = proteinSources.map(s => `
        <div class="protein-source-card">
            <h5>${s.name}</h5>
            <p>${s.context}</p>
            <ul>
                <li>필요량: 하루 약 ${(totalProtein / (s.proteinPer100g / 100)).toFixed(0)}g (또는 단위)</li>
                <li><strong>예상 비용: 약 ${(totalProtein * s.costPerProtein).toLocaleString()}원 / 일</strong></li>
                <li>단가: ${s.example}</li>
            </ul>
        </div>
    `).join('');

    guideDiv.innerHTML = `
        <div class="guide-section">
            <h4>📊 당신의 일일 단백질 목표</h4>
            <p>체중 <strong>${weight}kg</strong> 기준, <strong>${selectedGoal}</strong> 목적을 위해 하루 <strong>${totalProtein}g</strong>의 단백질 섭취가 필요합니다.</p>
            
            <h4>💰 상황별 단백질 추천 및 가성비 분석</h4>
            <div class="protein-grid">
                ${proteinHTML}
            </div>
            
            <div class="nutrition-tip">
                <p>💡 <strong>Tip:</strong> 시간이 없다면 '보충제'가 가장 저렴하고 빠릅니다. 하지만 건강을 위해 하루 최소 한 끼는 '닭가슴살'이나 '두부' 같은 자연식에서 단백질을 섭취하세요.</p>
            </div>
        </div>
    `;
}

function changeDifficulty(stateIndex, direction) {
    const state = currentWorkoutState[stateIndex];
    const newIndex = state.levelIndex + direction;

    if (newIndex >= 0 && newIndex < progressions[state.pattern].length) {
        state.levelIndex = newIndex;
        const goal = selectedGoal;
        renderWorkout(goalAdvice[goal]);
    } else {
        alert(direction > 0 ? "최고 레벨입니다!" : "최저 레벨입니다!");
    }
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
