// 给你两个数 hour 和 minutes 。请你返回在时钟上，由给定时间的时针和分针组成的较小角的角度（60 单位制）。

// 算出每个针的角度
// 注意：时钟需要加上不满一小时的分钟所对应小时的角度
// 返回 角度差，角度不会超过180，超过则取360-角度

function angleClock(hour, minutes) {
    // 6度每分钟
    // 30度每小时
    let minDegree = 360 / 60,
        hourDegree = 360 / 12;
    // 分钟转到某一度，时针角度为
    let currHourDegree = (hour + minutes / 60) * hourDegree,
        currMinDegree = minutes * minDegree;

    let ans = Math.abs(currHourDegree - currMinDegree)
    return ans <= 180 ? ans : 360 - ans;
};