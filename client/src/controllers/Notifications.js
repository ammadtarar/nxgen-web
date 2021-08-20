export function showNotification(type, msg) {
    document.getElementById("notificationMsg").textContent = msg;
    var bg = "#4caf50";
    if (type === "success") {
        bg = "#4caf50";
    } else if (type === "danger" || type === "info") {
        bg = "#ef5350";
    } else if (type === "warning") {
        bg = "#ffb74d";
    }

    document
        .getElementById("notificationBar")
        .setAttribute(
            "style",
            `right:2rem;bottom:2rem;background:${bg};padding:1.4rem 1.8rem;display:block`
        );

    function myTimer() {
        document
            .getElementById("notificationBar")
            .setAttribute(
                "style",
                "right:-200%;bottom:0;padding:0rem !important;display:none"
            );
    }
    window.setTimeout(myTimer, 5000);
}

export function showLoading() {
    document.getElementById("loading").setAttribute("style", `top:0;left:0`);
}

export function hideLoading() {
    document
        .getElementById("loading")
        .setAttribute("style", `top:-100%;left:-100%`);
}
