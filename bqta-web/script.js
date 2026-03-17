// Elements
const domUserForce = document.getElementById('userForce');
const domLatency = document.getElementById('latency');
const domPacketLoss = document.getElementById('packetLoss');
const domAiPrediction = document.getElementById('aiPrediction');

const valUserForce = document.getElementById('userForceValue');
const valLatency = document.getElementById('latencyValue');
const valPacketLoss = document.getElementById('packetLossValue');

const btnReset = document.getElementById('resetBtn');
const btnRefresh = document.getElementById('refreshDataBtn');

// Chart instance
let chartInstance = null;

// Constants & Math
const N_POINTS = 100;

// Update labels
function updateLabels() {
    valUserForce.textContent = domUserForce.value;
    valLatency.textContent = domLatency.value;
    valPacketLoss.textContent = domPacketLoss.value;
}

// Generate Box-Muller normal distribution
function randomNormal(mean = 0, std = 1) {
    let u = 1 - Math.random();
    let v = Math.random();
    let z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    return z * std + mean;
}

// Simulation Logic (Matches python bqta_sim)
function simulateBQTA() {
    const userForce = parseFloat(domUserForce.value);
    const latencyMs = parseInt(domLatency.value, 10);
    const packetLoss = parseInt(domPacketLoss.value, 10);
    const aiPrediction = domAiPrediction.checked;

    // t = np.linspace(0, 1, 100)
    const t = Array.from({ length: N_POINTS }, (_, i) => i / (N_POINTS - 1));

    // robotic_signal = user_force * np.sin(2 * np.pi * t)
    const roboticSignal = t.map(time => userForce * Math.sin(2 * Math.PI * time));

    // Latency simulation: delayed_signal = np.roll(robotic_signal, delay)
    // delay = int(latency_ms / 5)
    let delay = Math.floor(latencyMs / 5);
    // ensure within bounds for roll
    delay = delay % N_POINTS;
    let delayedSignal;
    if (delay === 0) {
        delayedSignal = [...roboticSignal];
    } else {
        // Roll right
        delayedSignal = [
            ...roboticSignal.slice(N_POINTS - delay),
            ...roboticSignal.slice(0, N_POINTS - delay)
        ];
    }

    // Packet loss simulation: mask = np.random.rand(len) > (packet_loss/100)
    const lossProb = packetLoss / 100;
    const received = delayedSignal.map(val => Math.random() > lossProb ? val : 0);

    // AI Prediction
    if (aiPrediction) {
        for (let i = 1; i < received.length; i++) {
            if (received[i] === 0) {
                received[i] = received[i - 1];
            }
        }
    }

    // Haptic feedback
    const feedback = received.map(val => val + randomNormal(0, 0.1));

    updateChart(t, roboticSignal, feedback);
}

// Chart Initialization
function initChart() {
    const ctx = document.getElementById('signalChart').getContext('2d');

    Chart.defaults.color = '#94a3b8';
    Chart.defaults.font.family = "'Inter', sans-serif";

    chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [
                {
                    label: 'Robotic Signal',
                    data: [],
                    borderColor: '#00f0ff',
                    backgroundColor: 'rgba(0, 240, 255, 0.1)',
                    borderWidth: 2,
                    pointRadius: 0,
                    tension: 0.4,
                    // Glow effect via shadow in canvas happens mostly with plugins, simple approximation:
                    borderJoinStyle: 'round'
                },
                {
                    label: 'Haptic Feedback',
                    data: [],
                    borderColor: '#ff003c',
                    backgroundColor: 'rgba(255, 0, 60, 0.05)',
                    borderWidth: 2,
                    pointRadius: 0,
                    tension: 0.1,
                    borderDash: [5, 5]
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 400,
                easing: 'easeOutQuart'
            },
            interaction: {
                intersect: false,
                mode: 'index',
            },
            plugins: {
                legend: {
                    display: false // We use custom HTML legend
                },
                tooltip: {
                    backgroundColor: 'rgba(11, 14, 20, 0.9)',
                    titleColor: '#e2e8f0',
                    bodyColor: '#94a3b8',
                    borderColor: 'rgba(255,255,255,0.1)',
                    borderWidth: 1,
                    padding: 10,
                    displayColors: true,
                    boxPadding: 4
                }
            },
            scales: {
                x: {
                    title: { display: true, text: 'Time (s)', color: '#94a3b8' },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.03)'
                    },
                    ticks: {
                        maxTicksLimit: 10,
                        callback: function (val, index) {
                            return (this.getLabelForValue(val) * 1).toFixed(1);
                        }
                    }
                },
                y: {
                    title: { display: true, text: 'Signal Magnitude', color: '#94a3b8' },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)'
                    },
                    suggestedMin: -12,
                    suggestedMax: 12
                }
            }
        }
    });

    simulateBQTA();
}

function updateChart(t, roboticSignal, feedback) {
    chartInstance.data.labels = t;
    chartInstance.data.datasets[0].data = roboticSignal;
    chartInstance.data.datasets[1].data = feedback;
    chartInstance.update();
}

// Event Listeners
[domUserForce, domLatency, domPacketLoss, domAiPrediction].forEach(el => {
    el.addEventListener('input', () => {
        updateLabels();
        simulateBQTA();
    });
});

btnReset.addEventListener('click', () => {
    domUserForce.value = 5;
    domLatency.value = 20;
    domPacketLoss.value = 10;
    domAiPrediction.checked = true;
    updateLabels();
    simulateBQTA();
});

btnRefresh.addEventListener('click', () => {
    // Only difference is noise rerolls
    simulateBQTA();
});

// Start
document.addEventListener('DOMContentLoaded', () => {
    updateLabels();
    initChart();

    // Elements to animate in sequence
    const animSteps = [];
    for (let i = 1; i <= 14; i++) {
        animSteps.push(document.querySelector(`.anim-target-${i}`));
    }

    // Hide main content initially
    const mainContent = document.querySelector('.main-content');
    const footer = document.querySelector('.app-footer');
    mainContent.classList.add('content-hidden');
    footer.classList.add('content-hidden');

    // Add initial state to steps
    animSteps.forEach(el => el && el.classList.add('anim-step'));

    // Sequence execution
    setTimeout(() => {
        let stepIdx = 0;
        const interval = setInterval(() => {
            if (stepIdx < animSteps.length) {
                if (animSteps[stepIdx]) {
                    animSteps[stepIdx].classList.add('revealed');
                }
                stepIdx++;
            } else {
                clearInterval(interval);
                // Reveal main UI after flow completes
                setTimeout(() => {
                    mainContent.classList.replace('content-hidden', 'content-shown');
                    footer.classList.replace('content-hidden', 'content-shown');
                }, 500);
            }
        }, 250); // Speed per step
    }, 200);
});
