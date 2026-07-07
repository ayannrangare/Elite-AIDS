
// ------------------------------
// Navigation
// ------------------------------

function showCalculator(id) {

    let pages = document.querySelectorAll(".calculator");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");
}

// ------------------------------
// Force Calculator
// F = m × a
// ------------------------------

function calculateForce() {

    let m = parseFloat(document.getElementById("forceMass").value);
    let a = parseFloat(document.getElementById("forceAcc").value);

    if (isNaN(m) || isNaN(a)) {
        document.getElementById("forceResult").innerHTML =
        "Please enter valid numbers.";
        return;
    }

    let force = m * a;

    document.getElementById("forceResult").innerHTML =
    "Force = " + force.toFixed(2) + " N";
}

function resetForce() {

    document.getElementById("forceMass").value = "";
    document.getElementById("forceAcc").value = "";
    document.getElementById("forceResult").innerHTML = "";
}

// ------------------------------
// Work Calculator
// W = F × d
// ------------------------------

function calculateWork() {

    let force = parseFloat(document.getElementById("workForce").value);
    let distance = parseFloat(document.getElementById("workDistance").value);

    if (isNaN(force) || isNaN(distance)) {
        document.getElementById("workResult").innerHTML =
        "Please enter valid numbers.";
        return;
    }

    let work = force * distance;

    document.getElementById("workResult").innerHTML =
    "Work Done = " + work.toFixed(2) + " J";
}

function resetWork() {

    document.getElementById("workForce").value = "";
    document.getElementById("workDistance").value = "";
    document.getElementById("workResult").innerHTML = "";
}

// ------------------------------
// Power Calculator
// P = W / t
// ------------------------------

function calculatePower() {

    let work = parseFloat(document.getElementById("powerWork").value);
    let time = parseFloat(document.getElementById("powerTime").value);

    if (isNaN(work) || isNaN(time)) {
        document.getElementById("powerResult").innerHTML =
        "Please enter valid numbers.";
        return;
    }

    if (time == 0) {
        document.getElementById("powerResult").innerHTML =
        "Time cannot be zero.";
        return;
    }

    let power = work / time;

    document.getElementById("powerResult").innerHTML =
    "Power = " + power.toFixed(2) + " W";
}

function resetPower() {

    document.getElementById("powerWork").value = "";
    document.getElementById("powerTime").value = "";
    document.getElementById("powerResult").innerHTML = "";
}
// ------------------------------
// Pressure Calculator
// P = F / A
// ------------------------------

function calculatePressure() {

    let force = parseFloat(document.getElementById("pressureForce").value);
    let area = parseFloat(document.getElementById("pressureArea").value);

    if (isNaN(force) || isNaN(area)) {
        document.getElementById("pressureResult").innerHTML =
        "Please enter valid numbers.";
        return;
    }

    if (area == 0) {
        document.getElementById("pressureResult").innerHTML =
        "Area cannot be zero.";
        return;
    }

    let pressure = force / area;

    document.getElementById("pressureResult").innerHTML =
    "Pressure = " + pressure.toFixed(2) + " Pa";
}

function resetPressure() {

    document.getElementById("pressureForce").value = "";
    document.getElementById("pressureArea").value = "";
    document.getElementById("pressureResult").innerHTML = "";
}

// ------------------------------
// Momentum Calculator
// p = m × v
// ------------------------------

function calculateMomentum() {

    let mass = parseFloat(document.getElementById("momentumMass").value);
    let velocity = parseFloat(document.getElementById("momentumVelocity").value);

    if (isNaN(mass) || isNaN(velocity)) {
        document.getElementById("momentumResult").innerHTML =
        "Please enter valid numbers.";
        return;
    }

    let momentum = mass * velocity;

    document.getElementById("momentumResult").innerHTML =
    "Momentum = " + momentum.toFixed(2) + " kg·m/s";
}

function resetMomentum() {

    document.getElementById("momentumMass").value = "";
    document.getElementById("momentumVelocity").value = "";
    document.getElementById("momentumResult").innerHTML = "";
}

// ------------------------------
// Kinetic Energy Calculator
// KE = ½mv²
// ------------------------------

function calculateKE() {

    let mass = parseFloat(document.getElementById("keMass").value);
    let velocity = parseFloat(document.getElementById("keVelocity").value);

    if (isNaN(mass) || isNaN(velocity)) {
        document.getElementById("keResult").innerHTML =
        "Please enter valid numbers.";
        return;
    }

    let ke = 0.5 * mass * velocity * velocity;

    document.getElementById("keResult").innerHTML =
    "Kinetic Energy = " + ke.toFixed(2) + " J";
}

function resetKE() {

    document.getElementById("keMass").value = "";
    document.getElementById("keVelocity").value = "";
    document.getElementById("keResult").innerHTML = "";
}

// ------------------------------
// Potential Energy Calculator
// PE = mgh
// ------------------------------

function calculatePE() {

    const g = 9.81;

    let mass = parseFloat(document.getElementById("peMass").value);
    let height = parseFloat(document.getElementById("peHeight").value);

    if (isNaN(mass) || isNaN(height)) {
        document.getElementById("peResult").innerHTML =
        "Please enter valid numbers.";
        return;
    }

    let pe = mass * g * height;

    document.getElementById("peResult").innerHTML =
    "Potential Energy = " + pe.toFixed(2) + " J";
}

function resetPE() {

    document.getElementById("peMass").value = "";
    document.getElementById("peHeight").value = "";
    document.getElementById("peResult").innerHTML = "";
}
// Gravity
const g = 9.81;

// ------------------------------
// Velocity Calculator
// v = s / t
// ------------------------------

function calculateVelocity() {

    let distance = parseFloat(document.getElementById("velocityDistance").value);
    let time = parseFloat(document.getElementById("velocityTime").value);

    if (isNaN(distance) || isNaN(time)) {
        document.getElementById("velocityResult").innerHTML =
        "Please enter valid numbers.";
        return;
    }

    if (time == 0) {
        document.getElementById("velocityResult").innerHTML =
        "Time cannot be zero.";
        return;
    }

    let velocity = distance / time;

    document.getElementById("velocityResult").innerHTML =
    "Velocity = " + velocity.toFixed(2) + " m/s";
}

function resetVelocity() {

    document.getElementById("velocityDistance").value = "";
    document.getElementById("velocityTime").value = "";
    document.getElementById("velocityResult").innerHTML = "";
}

// ------------------------------
// Acceleration Calculator
// a = (v-u)/t
// ------------------------------

function calculateAcceleration() {

    let u = parseFloat(document.getElementById("initialVelocity").value);
    let v = parseFloat(document.getElementById("finalVelocity").value);
    let t = parseFloat(document.getElementById("accTime").value);

    if (isNaN(u) || isNaN(v) || isNaN(t)) {
        document.getElementById("accelerationResult").innerHTML =
        "Please enter valid numbers.";
        return;
    }

    if (t == 0) {
        document.getElementById("accelerationResult").innerHTML =
        "Time cannot be zero.";
        return;
    }

    let acceleration = (v - u) / t;

    document.getElementById("accelerationResult").innerHTML =
    "Acceleration = " + acceleration.toFixed(2) + " m/s²";
}

function resetAcceleration() {

    document.getElementById("initialVelocity").value = "";
    document.getElementById("finalVelocity").value = "";
    document.getElementById("accTime").value = "";
    document.getElementById("accelerationResult").innerHTML = "";
}

// ------------------------------
// Projectile Motion Calculator
function calculateProjectile() {
    const g = 9.81;

    let velocity = parseFloat(document.getElementById("projectileVelocity").value);
    let angle = parseFloat(document.getElementById("projectileAngle").value);

    if (isNaN(velocity) || isNaN(angle)) {
        document.getElementById("projectileResult").innerHTML =
        "Please enter valid numbers.";
        return;
    }

    let rad = angle * Math.PI / 180;

    let time = (2 * velocity * Math.sin(rad)) / g;
    let height = (velocity * velocity * Math.pow(Math.sin(rad), 2)) / (2 * g);
    let range = (velocity * velocity * Math.sin(2 * rad)) / g;

    document.getElementById("projectileResult").innerHTML =
        "Time of Flight = " + time.toFixed(2) + " s<br>" +
        "Maximum Height = " + height.toFixed(2) + " m<br>" +
        "Horizontal Range = " + range.toFixed(2) + " m";
}

function resetProjectile() {
    document.getElementById("projectileVelocity").value = "";
    document.getElementById("projectileAngle").value = "";
    document.getElementById("projectileResult").innerHTML = "";
}