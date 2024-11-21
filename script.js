let csr = document.getElementById("cursor");
document.addEventListener("mousemove", (e) => {
    csr.style.left = e.x - "200"+"px";
    csr.style.top = e.y - "200"+"px";  
})
gsap.to("#nav", {
    backgroundColor: "#000",
    duration:  0.8,
    height: "90px",
    scrollTrigger: {
        tigger: "#nav",
        scroller: "body",
        marker: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 2,
    }
})
gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -25%",
        end: "top -70%",
        scrub: 2,
    }

})