// 输入输出
// ["1.45.1", "1.5.0"] => ["1.5.0", "1.45.1"]
// ["9.99.9", "10.1.0", "0.0.1"] => ["0.0.1", "9.99.9", "10.1.0"]

function sortVersions(versions) {
    return versions.sort((a, b) => {
        let v1 = a.split("."),
            v2 = b.split("."),
            k = 0
        for (let i in v1) {
            let a1 = v1[i],
                a2 = v2[i]
            if (typeof a2 === undefined) {
                k = 1
                break
            } else {
                if (a1 === a2) {
                    continue
                }
                k = Number(a1) - Number(a2)
                break
            }
        }
        return k
    })
}