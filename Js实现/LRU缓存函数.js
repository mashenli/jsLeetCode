/**
 * 
1.LRU是Least Recently Used的缩写，即最近最少使用页面置换算法，是为虚拟页式存储管理服务的，是根据页面调入内存后的使用情况进行决策了。
由于无法预测各页面将来的使用情况，只能利用“最近的过去”作为“最近的将来”的近似，因此，LRU算法就是将最近最久未使用的页面予以淘汰。

2.操作系统课程里有学过，在内存不够的场景下，淘汰旧内容的策略。LRU … Least Recent Used，淘汰掉最不经常使用的。
可以稍微多补充两句，因为计算机体系结构中，最大的最可靠的存储是硬盘，它容量很大，并且内容可以固化，但是访问速度很慢，
所以需要把使用的内容载入内存中；内存速度很快，但是容量有限，并且断电后内容会丢失，并且为了进一步提升性能，
还有CPU内部的 L1 Cache，L2 Cache等概念。因为速度越快的地方，它的单位成本越高，容量越小，新的内容不断被载入，
旧的内容肯定要被淘汰，所以就有这样的使用背景。
 */

/**
特点分析：
我们需要一块有限的存储空间，因为无限的化就没必要使用 LRU 算发删除数据了。
我们这块存储空间里面存储的数据需要是有序的，因为我们必须要顺序来删除数据，所以可以考虑使用 Array、Map 数据结构来存储，不能使用 Object，因为它是无序的。
我们能够删除或者添加以及获取到这块存储空间中的指定数据。
存储空间存满之后，在添加数据时，会自动删除时间最久远的那条数据。

实现需求：
实现一个 LRUCache 类型，用来充当存储空间
采用 Map 数据结构存储数据，因为它的存取时间复杂度为 O(1)，数组为 O(n)
实现 get 和 set 方法，用来获取和添加数据
我们的存储空间有长度限制，所以无需提供删除方法，存储满之后，自动删除最久远的那条数据
当使用 get 获取数据后，该条数据需要更新到最前面
*/

class LRUCache {
    constructor(size) {
        this.size = size; // 存储长度
        this.cache = new Map(); // 存储数据
    }
    // 首先从 map 对象中拿出该条数据，然后删除该条数据，最后再重新插入该条数据，确保将该条数据移动到最前面。
    get(key) {
        const hasKey = this.cache.has(key);
        if (hasKey) {
            const val = this.cache.get(key);
            this.cache.delete(key);
            this.cache.set(key, val);
            return val;
        } else {
            return -1;
        }
    }
    // 存储数据，采用key, value的形式
    // 往 map 里面添加新数据，如果添加的数据存在了，则先删除该条数据，然后再添加。
    // 如果添加数据后超长了，则需要删除最久远的一条数据。data.keys().next().value 便是获取最后一条数据的意思。
    set(key, value) {
        const hasKey = this.cache.has(key);
        if (hasKey) {
            this.cache.delete(key);
        }
        this.cache.set(key, value);
        if (this.cache.size > this.size) {
            // this.cache.keys().next().value用于获取最前面（即使用次数最少的key）,然后删除
            this.cache.delete(this.cache.keys().next().value);
        }
    }
}