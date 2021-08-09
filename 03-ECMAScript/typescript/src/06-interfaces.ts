// interfaces 接口

export {}

interface Post {
    title: string
    content: string
    subtitle?: string  //  ?: xx表示类型为空或者为XX  可选成员
    readonly summary: string
}

function printPort (post: Post) {
    console.log(post.title)
    console.log(post.content)
}

printPort({
    title: 'hello',
    content: 'world',
    summary: 'yes it is'
})

const hello: Post = {
    title: 'hello',
    content: 'world',
    summary: 'yes it is'
}
hello.content = 'ok'
// hello.summary = 'haha'
