// function Queue() {
//     this.data = [];
//     this.enqueue = enqueue; //队尾添加一个元素
//     this.dequeue = dequeue; //队首删除一个元素
//     this.front = front; //读取队首元素
//     this.back = back; //读取队尾元素
//     this.toStringData = toStringData; //显示队内元素
//     this.isEmpty = isEmpty; //判断队列是否为空
// }

function Queue() {
    this.data = [];
    this.enqueue = enqueue; //队尾添加一个元素
    this.dequeue = dequeue; //队首删除一个元素
    this.front = front; //读取队首元素
    this.back = back; //读取队尾元素
    this.toStringData = toStringData; //显示队内元素
    this.isEmpty = isEmpty; //判断队列是否为空

    //在队尾添加一个元素即为入队
    function enqueue(element) {
        this.data.push(element);
    }
    //在队首删除一个元素，并返回被删除的值
    function dequeue() {
        return this.data.shift();
    }
    //返回数组第一项即返回队首元素
    function front() {
        return this.data[0];
    }
    //返回数组最后一项即返回队尾元素
    function back() {
        return this.data[this.data.length - 1];
    }
    //数组长度为0即队列为空
    function isEmpty() {
        return this.data.length === 0;
    }
    //打印队列
    function toStringData() {
        return this.data;
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.toStringData();
console.log(queue);