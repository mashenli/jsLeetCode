function versionCompare(version1, version2) {
    if (version1 === version2) {
        return 0;
    }

    function toNumber(item) {
        if (!(+item >= 0)) {
            throw new Error('传递了非法版本号:: ' + item);
        }
        return +item;
    }

    const versionArray1 = ('' + version1).split('.').map(toNumber);
    const versionArray2 = ('' + version2).split('.').map(toNumber);

    let i = 0;
    const len = Math.max(versionArray1.length, versionArray2.length);

    while (i < len) {
        if (versionArray1[i] > versionArray2[i]
            || versionArray1[i] && !versionArray2[i] && versionArray1[i] > 0) {
            return 1;
        }
        else if (versionArray1[i] < versionArray2[i]
            || versionArray2[i] && !versionArray1[i] && versionArray2[i] > 0) {
            return -1;
        }
        i++;
    }

    return 0;
}