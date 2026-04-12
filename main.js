// 운동 라인업 (재귀적 프로그레션)
const progressions = {
    pull: [
        { name: "데드행 (Dead Hang)", sets: "3세트 x 30초", rest: "60초" },
        { name: "스캐풀라 풀업 (Scapula Pull-ups)", sets: "3세트 x 10회", rest: "60초" },
        { name: "호주식 풀업 (Australian Pull-ups)", sets: "3세트 x 12회", rest: "90초" },
        { name: "네거티브 풀업 (Negative Pull-ups)", sets: "4세트 x 8회", rest: "120초" },
        { name: "표준 풀업 (Pull-ups)", sets: "4세트 x 8~10회", rest: "120초" },
        { name: "L-싯 풀업 (L-sit Pull-ups)", sets: "3세트 x 6회", rest: "150초" },
        { name: "아처 풀업 (Archer Pull-ups)", sets: "3세트 x 5회", rest: "180초" },
        { name: "머슬업 (Muscle-ups)", sets: "3세트 x 3~5회", rest: "180초" }
    ],
    push: [
        { name: "월 푸쉬업 (Wall Push-ups)", sets: "3세트 x 15회", rest: "60초" },
        { name: "인클라인 푸쉬업 (Incline Push-ups)", sets: "3세트 x 12회", rest: "60초" },
        { name: "무릎 푸쉬업 (Knee Push-ups)", sets: "3세트 x 12회", rest: "60초" },
        { name: "표준 푸쉬업 (Push-ups)", sets: "4세트 x 12~15회", rest: "90초" },
        { name: "다이아몬드 푸쉬업 (Diamond Push-ups)", sets: "3세트 x 10회", rest: "90초" },
        { name: "의자 딥스 (Bench Dips)", sets: "3세트 x 12회", rest: "90초" },
        { name: "평행봉 딥스 (Dips)", sets: "4세트 x 8~10회", rest: "120초" },
        { name: "파이크 푸쉬업 (Pike Push-ups)", sets: "3세트 x 8회", rest: "120초" },
        { name: "핸드스탠드 푸쉬업 (Wall HSPU)", sets: "3세트 x 5회", rest: "180초" }
    ],
    lower: [
        { name: "박스 스쿼트 (Box Squats)", sets: "3세트 x 15회", rest: "60초" },
        { name: "표준 스쿼트 (Squats)", sets: "4세트 x 20회", rest: "90초" },
        { name: "런지 (Lunges)", sets: "3세트 x 12회(각 다리)", rest: "90초" },
        { name: "불가리안 스플릿 스쿼트 (BSS)", sets: "3세트 x 10회(각 다리)", rest: "120초" },
        { name: "코사크 스쿼트 (Cossack Squats)", sets: "3세트 x 8회(각 다리)", rest: "120초" },
        { name: "어시스티드 피스톨 스쿼트", sets: "3세트 x 5회(각 다리)", rest: "150초" },
        { name: "피스톨 스쿼트 (Pistol Squats)", sets: "3세트 x 5회(각 다리)", rest: "180초" }
    ]
};

// 부위별 기본 라인업 매핑
const partMapping = {
    arms: ["pull", "push"],
    back: ["pull"],
    chest: ["push"],
    upper: ["pull", "push"],
    lower: ["lower"],
    push: ["push"],
    pull: ["pull"]
};

const goalAdvice = {
    strength: {
        mindset: "신경계를 깨우세요. '횟수'가 아니라 '부하'에 집중해야 합니다. 한 번을 하더라도 몸이 찢어지는 듯한 텐션을 유지하는 것이 스트렝스의 핵심입니다.",
        diet: "폭발적 에너지를 위해 현미밥, 바나나 같은 복합 탄수화물을 섭취하고, 근신경 회복을 위해 소고기나 연어 같은 고품질 단백질을 충분히 드세요.",
        mistakes: [
            { title: "실패 지점 강박", content: "매 세트 실패 지점까지 가면 근신경계가 과부하되어 다음 운동의 효율이 40% 이상 급감합니다. 1~2회 정도 더 할 수 있을 때 멈추는 RPE 8-9 수준이 가장 과학적입니다." },
            { title: "불충분한 휴식", content: "ATP(에너지원)가 재합성되는 데는 최소 3분이 필요합니다. 조급함에 짧게 쉬면 힘이 아니라 심폐지구력 훈련이 되어버립니다." }
        ]
    },
    hypertrophy: {
        mindset: "근육의 고립과 펌핑을 느끼세요. 타겟 근육이 타들어가는 느낌이 없다면 단순히 관절로만 움직이고 있는 것일 수 있습니다.",
        diet: "근비대를 위해 닭가슴살, 계란 흰자뿐만 아니라 아보카도, 견과류 같은 양질의 지방을 함께 드세요. 근육 성장을 위한 호르몬 생성에 필수적입니다.",
        mistakes: [
            { title: "반동 사용 (Cheating)", content: "반동을 쓰는 순간 타겟 근육의 기계적 긴장(Mechanical Tension)이 풀립니다. 이는 근비대를 방해하고 건과 인대의 부상 위험을 2.5배 높입니다." },
            { title: "수면 부족", content: "근육은 운동할 때가 아니라 잘 때 자랍니다. 7시간 미만의 수면은 단백질 합성률을 떨어뜨려 운동 노력을 수포로 만듭니다." }
        ]
    }
};

// 기본 목표 조언 (기타 목적용)
const defaultAdvice = goalAdvice.hypertrophy;

let currentWorkoutState = []; // [{pattern: 'pull', index: 4}, ...]

function setupSelection() {
    document.querySelectorAll('.select-item').forEach(btn => {
        btn.addEventListener('click', function() {
            this.parentElement.querySelectorAll('.select-item').forEach(b => b.classList.remove('selected'));
            this.classList.add('selected');
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
    const partBtn = document.querySelector('#part-selection .selected');
    const goalBtn = document.querySelector('#goal-selection .selected');

    if (!partBtn || !goalBtn) {
        alert("부위와 목적을 선택해주세요!");
        return;
    }

    const part = partBtn.dataset.value;
    const goal = goalBtn.dataset.value;
    const patterns = partMapping[part];
    const advice = goalAdvice[goal] || defaultAdvice;

    // 초기 상태 설정 (각 패턴의 중간 난이도로 시작)
    currentWorkoutState = patterns.map(p => ({
        pattern: p,
        index: Math.floor(progressions[p].length / 2)
    }));

    renderWorkout(advice);
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
        const exercise = progressions[state.pattern][state.index];
        const workoutBox = document.createElement("div");
        workoutBox.className = "active-workout-card";
        workoutBox.innerHTML = `
            <div class="exercise-display">
                <span class="pattern-label">${state.pattern.toUpperCase()} PATTERN</span>
                <h3 class="exercise-name">${exercise.name}</h3>
                <div class="stats-row">
                    <div class="stat-item"><strong>세트</strong><br>${exercise.sets}</div>
                    <div class="stat-item"><strong>휴식</strong><br>${exercise.rest}</div>
                </div>
                <div class="difficulty-controls">
                    <button class="diff-btn easy" onclick="changeDifficulty(${stateIndex}, -1)">더 쉽게 (-)</button>
                    <button class="diff-btn hard" onclick="changeDifficulty(${stateIndex}, 1)">더 어렵게 (+)</button>
                </div>
            </div>
        `;
        container.appendChild(workoutBox);
    });

    // 주의사항 섹션 추가
    const mistakeSection = document.createElement("div");
    mistakeSection.className = "mistake-section";
    mistakeSection.innerHTML = `<h3>⚠️ 주의: 흔히 저지르는 치명적 실수</h3>`;
    advice.mistakes.forEach(m => {
        mistakeSection.innerHTML += `
            <div class="mistake-card">
                <h4>${m.title}</h4>
                <p>${m.content}</p>
            </div>
        `;
    });
    container.appendChild(mistakeSection);

    // 영양 가이드 업데이트
    const guideDiv = document.getElementById("guide-content");
    guideDiv.innerHTML = `
        <div class="guide-section">
            <h4>🥗 추천 영양 가이드</h4>
            <p>${advice.diet}</p>
            <div class="food-examples">
                <strong>추천 식품 예시:</strong><br>
                단백질: 수비드 닭가슴살, 삶은 달걀, 틸라피아, 그릭 요거트<br>
                탄수화물: 고구마, 퀴노아, 통밀빵, 오트밀<br>
                지방: 구운 아몬드, 엑스트라 버진 올리브유, 아보카도
            </div>
        </div>
    `;
}

function changeDifficulty(stateIndex, direction) {
    const state = currentWorkoutState[stateIndex];
    const newIndex = state.index + direction;

    if (newIndex >= 0 && newIndex < progressions[state.pattern].length) {
        state.index = newIndex;
        const goalBtn = document.querySelector('#goal-selection .selected');
        const advice = goalAdvice[goalBtn.dataset.value] || defaultAdvice;
        renderWorkout(advice);
    } else {
        alert(direction > 0 ? "이미 최고 난이도 운동입니다!" : "이미 가장 쉬운 단계의 운동입니다!");
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
