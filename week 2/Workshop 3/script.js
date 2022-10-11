function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();

    m = checkTime(m);

    document.getElementById('digitale-tijd').innerHTML = h + ":" + m;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i}
    return i;
}