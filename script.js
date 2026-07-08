// Formula calculator ids live "inside" the Menu tab, so opening any
// of them should keep the Menu nav button highlighted.
const formulaSectionIds = [
    "force", "work", "power", "pressure", "momentum",
    "ke", "pe", "velocity", "acceleration", "projectile", "calculator"
];

function showSection(id) {

    let pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");

    let effectiveNavTarget = formulaSectionIds.includes(id) ? "menu" : id;

    let navButtons = document.querySelectorAll(".nav-btn");

    navButtons.forEach(function(btn) {
        btn.classList.toggle("active", btn.getAttribute("data-target") === effectiveNavTarget);
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
}

// ------------------------------
// Dark / Light Theme Toggle
// ------------------------------

function applyTheme(theme) {

    document.documentElement.setAttribute("data-theme", theme);

    let icon = document.getElementById("themeIcon");

    if (icon) {
        icon.textContent = theme === "light" ? "☀️" : "🌙";
    }

    try {
        localStorage.setItem("physicsCalcTheme", theme);
    } catch (e) {
        // localStorage unavailable, theme just won't persist
    }
}

function toggleTheme() {

    let current = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
    let next = current === "light" ? "dark" : "light";

    applyTheme(next);
}

(function initTheme() {

    let saved = null;

    try {
        saved = localStorage.getItem("physicsCalcTheme");
    } catch (e) {
        saved = null;
    }

    if (!saved) {
        let prefersLight = window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: light)").matches;
        saved = prefersLight ? "light" : "dark";
    }

    applyTheme(saved);
})();

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

// ------------------------------
// Scientific Calculator
// ------------------------------

let sciExpr = "0";
let sciAngleMode = "deg";
let sciVars = { alpha: 0, beta: 0, theta: 0 };

function renderSciDisplay() {
    let el = document.getElementById("sciExpression");
    if (el) {
        el.textContent = sciExpr;
    }
}

function updateVariables() {

    let a = parseFloat(document.getElementById("varAlpha").value);
    let b = parseFloat(document.getElementById("varBeta").value);
    let t = parseFloat(document.getElementById("varTheta").value);

    sciVars.alpha = isNaN(a) ? 0 : a;
    sciVars.beta = isNaN(b) ? 0 : b;
    sciVars.theta = isNaN(t) ? 0 : t;
}

function sciInsert(token) {

    let isDigit = /^[0-9.]$/.test(token);
    let isOperator = ["+", "-", "×", "÷", "^", "%"].includes(token);

    if (sciExpr === "0") {
        if (isDigit) {
            sciExpr = token;
        } else if (isOperator) {
            sciExpr = "0" + token;
        } else {
            sciExpr = token;
        }
    } else {
        sciExpr += token;
    }

    renderSciDisplay();
}

function sciClearAll() {
    sciExpr = "0";
    let result = document.getElementById("sciResult");
    if (result) result.textContent = "\u00A0";
    renderSciDisplay();
}

function sciClearEntry() {
    sciClearAll();
}

function sciBackspace() {

    if (sciExpr.length <= 1) {
        sciExpr = "0";
    } else {
        sciExpr = sciExpr.slice(0, -1);
    }

    renderSciDisplay();
}

function sciToggleSign() {

    if (/^-?\d+(\.\d+)?$/.test(sciExpr)) {
        sciExpr = sciExpr.startsWith("-") ? sciExpr.slice(1) : "-" + sciExpr;
    } else if (sciExpr.startsWith("-(") && sciExpr.endsWith(")")) {
        sciExpr = sciExpr.slice(2, -1);
    } else {
        sciExpr = "-(" + sciExpr + ")";
    }

    renderSciDisplay();
}

function toggleAngleMode() {

    sciAngleMode = sciAngleMode === "deg" ? "rad" : "deg";

    let btn = document.getElementById("angleModeBtn");
    if (btn) {
        btn.textContent = sciAngleMode === "deg" ? "DEG" : "RAD";
    }
}

function sciFactorial(n) {

    n = Math.round(n);

    if (n < 0) return NaN;

    let result = 1;

    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}

function sciTrimNumber(n) {
    return Math.round(n * 1e10) / 1e10;
}

function sciEvaluate() {

    let resultEl = document.getElementById("sciResult");

    try {

        let expr = sciExpr;

        // percentage: 50% -> (50/100)
        expr = expr.replace(/(\d+(\.\d+)?)%/g, "($1/100)");

        // factorial: 5! -> fact(5)
        expr = expr.replace(/(\d+(\.\d+)?)!/g, "fact($1)");

        expr = expr.split("×").join("*");
        expr = expr.split("÷").join("/");
        expr = expr.split("^").join("**");
        expr = expr.split("π").join("PI");
        expr = expr.replace(/\be\b/g, "E");
        expr = expr.split("α").join("(" + sciVars.alpha + ")");
        expr = expr.split("β").join("(" + sciVars.beta + ")");
        expr = expr.split("θ").join("(" + sciVars.theta + ")");

        let mode = sciAngleMode;
        let toRad = function (x) { return mode === "deg" ? (x * Math.PI / 180) : x; };
        let fromRad = function (x) { return mode === "deg" ? (x * 180 / Math.PI) : x; };

        let fn = new Function(
            "PI", "E", "sin", "cos", "tan", "asin", "acos", "atan",
            "log", "ln", "sqrt", "cbrt", "fact",
            "return (" + expr + ")"
        );

        let result = fn(
            Math.PI,
            Math.E,
            function (x) { return Math.sin(toRad(x)); },
            function (x) { return Math.cos(toRad(x)); },
            function (x) { return Math.tan(toRad(x)); },
            function (x) { return fromRad(Math.asin(x)); },
            function (x) { return fromRad(Math.acos(x)); },
            function (x) { return fromRad(Math.atan(x)); },
            function (x) { return Math.log10(x); },
            function (x) { return Math.log(x); },
            function (x) { return Math.sqrt(x); },
            function (x) { return Math.cbrt(x); },
            function (n) { return sciFactorial(n); }
        );

        if (typeof result !== "number" || !isFinite(result)) {
            throw new Error("invalid result");
        }

        result = sciTrimNumber(result);

        resultEl.textContent = "= " + result;

        sciExpr = String(result);
        renderSciDisplay();

    } catch (e) {
        resultEl.textContent = "Error — check your expression";
    }
}
