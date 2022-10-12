function getAllPath(tree) {
    const paths = []; //记录路径的arr
    for (let i = 0; i < tree.length; i++) { //遍历同层次所有节点
        if (tree[i].children && tree[i].children.length) {
            const res = getAllPath(tree[i].children); //如果有子节点便继续深入，直到到达叶子节点
            for (let j = 0; j < res.length; j++) {
                paths.push([tree[i].id, ...[res[j].id]]); //子节点返回后将其返回的路径与自身拼接
            }
        } else {
            paths.push([tree[i].id]); //没有子节点的话，直接将自身拼接到paths中
        }
    }
    return paths; //返回
}


const exampleTree = [{
    id: 1,
    name: "company",
    children: [{
            id: 2,
            name: "group1",
            children: [{
                    id: 3,
                    name: 'dept1'
                },
                {
                    id: 5,
                    name: 'dept2',
                    children: [{
                        id: 6,
                        name: 'user1'
                    }]
                },
            ]
        },
        {
            id: 4,
            name: "gropu2"
        },
    ]
}]


console.log(getAllPath(exampleTree));