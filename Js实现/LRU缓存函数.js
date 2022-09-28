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

class LRUCache {
    constructor(size) {
        this.size = size;
        this.cache = new Map();
    }
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