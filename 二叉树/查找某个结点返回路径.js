/**
 * 
 */

const exampleTree = {
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
}

function getPathById(tree, id, path) {
    tree = Array.isArray(tree) ? tree : [tree]
    if (!path) {
        path = []
    }
    for (let i = 0, len = tree.length; i < len; i++) {
        let tempPath = [...path]
        tempPath.push(tree[i].name)
        if (tree[i].id === id) {
            return tempPath
        }
        if (tree[i].children) {
            return getPathById(tree[i].children, id, tempPath)
        }
    }
}

console.log(getPathById(exampleTree, 3));