let n = 3
towerOfHonoi(n, "src", "hel", "des")

function towerOfHonoi(n, src, hel, des) {
    if (n == 1) {
        console.log(`move ${n}th place from ${src} to ${des}`)
        return
    }
    towerOfHonoi(n - 1, src, des, hel)
    console.log(`move ${n}th place from ${src} to ${des}`)
    towerOfHonoi(n - 1, hel, src, des)
}