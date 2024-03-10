class Tree {
    constructor(data, elem, nodeClick, options = {
        children: "children",
        name: "name",
        icon: "&#xe67d;"
    }) {
        this.data = data;
        this.elem = elem;
        this.options = options;
        this.icon = options.icon;
        this.nodeClick = nodeClick
    }

    // 创建树节点  
    createNode(data, parent, level = 0) {
        const node = document.createElement('li');
        node.setAttribute('data-level', level)
        node.style.paddingLeft = (level + 1) * 10 + 'px'

        // 设置关闭状态 
        if (level !== "0") {
            node.setAttribute('data-state', 0)
        }


        if (data[this.options.children]) {
            // 添加图标
            const triangle = document.createElement('i');
            triangle.className = 'iconfont tree_item_icon';
            triangle.innerHTML = "&#xe606;"
            node.appendChild(triangle);

            // if (level !== "0") {
            triangle.addEventListener('click', (e) => {
                // 切换icon状态
                const state = e.target.parentElement.getAttribute('data-state')
                if (state == 0) {
                    e.target.parentElement.setAttribute('data-state', "1")
                    // e.target.innerHTML = "&#xe664;"
                    e.target.style.display = "inline-block"
                    e.target.style.transform = "rotate(90deg)"
                } else {
                    e.target.parentElement.setAttribute('data-state', "0")
                    // e.target.innerHTML = "close"
                    e.target.style.display = "inline-block"
                    e.target.style.transform = "rotate(0deg)"
                }

                const childrenElems = e.target.parentElement.querySelectorAll(`li[data-level="${level + 1}"]`)
                if (state == 0) {
                    childrenElems.forEach(li => { li.style.display = "block" })
                } else {
                    childrenElems.forEach(li => { li.style.display = "none" })
                }
            })
        }

        // 文本区域
        const nodeTitle = document.createElement('span');
        nodeTitle.innerHTML = data[this.options.name];
        nodeTitle.classList.add("ellipsis");
        nodeTitle.style.setProperty('max-width', `calc(100% - ${10 * (level)}px) - 20px `);
        nodeTitle.title = data[this.options.name];
        node.appendChild(nodeTitle);

        if (parent) {
            parent.appendChild(node);
        } else {
            this.elem.appendChild(node);
        }

        if (data[this.options.children]) {
            data[this.options.children].forEach((child) => {
                this.createNode(child, node, level + 1);
            });
        }
        if (!data[this.options.children]) {
            nodeTitle.addEventListener('click', () => {
                this.nodeClick(data, node, parent, level)
            })
        }
    }

    // 渲染树结构  
    render() {
        const ul = document.createElement('ul');
        ul.style.setProperty('width', "100%")
        ul.style.setProperty('overflow', 'hidden')
        this.data.forEach((data) => {
            this.createNode(data, ul);
        });
        // 添加到页面中
        document.querySelector(`${this.elem}`).appendChild(ul);

        // 隐藏
        const filterHidden = [...document.querySelector(`${this.elem}`).querySelectorAll('li')].filter(li => li.getAttribute('data-state') === "0" && li.getAttribute('data-level') >= 1)
        filterHidden.forEach(li => {
            li.style.display = "none"
            const icon = li.querySelector('.tree_item_icon')
            if (icon) {
                icon.style.display = "inline-block"
                icon.style.transform = "rotate(0deg)"
            }
        })
    }
}

export default Tree;