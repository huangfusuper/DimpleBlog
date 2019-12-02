import request from '@/axios'

// 获取网站信息
export function getSiteInfo(query) {
    return request({
        url: '/f/siteInfo',
        method: 'get',
        params: query
    })
}

//获取所有分类
export function listCategories() {
    return request({
        url: '/f/categories',
        method: 'get',
    })
}

//获取所有的菜单
export function listMenus() {
    return request({
        url: '/f/menus',
        method: 'get',
    })
}

//获取网站信息
export function getBloggerInfo() {
    return request({
        url: '/f/bloggerInfo',
        method: 'get',
    })
}

//获取推荐内容
export function listRecommend(query) {
    return request({
        url: '/f/support',
        method: 'get',
        params: query
    })
}

//获取最热内容
export function listHot(query) {
    return request({
        url: '/f/hot',
        method: 'get',
        params: query
    })
}

//获取友链
export function listFriendLinks() {
    return request({
        url: '/f/link',
        method: 'get',
    })
}

//获取标签
export function listTag() {
    return request({
        url: '/f/tag',
        method: 'get',
    })
}

// 查询博客列表
export function listBlogBaseInfo(query) {
    return request({
        url: '/f/blog',
        method: 'get',
        params: query
    })
}

// 查询博客列表
export function BlogDetail(id) {
    return request({
        url: '/f/blog/' + id,
        method: 'get',
    })
}

//点赞博客
export function LikeBlog(id) {
    return request({
        url: '/f/blog/like/' + id,
        method: 'put',
    })
}

//获取评论
export function listComment(pageId) {
    return request({
        url: '/f/comment/' + pageId,
        method: 'get',
    })
}

//点赞评论
export function goodComment(id) {
    return request({
        url: '/f/comment/good/' + id,
        method: 'put',
    })
}

//踩评论
export function badComment(id) {
    return request({
        url: '/f/comment/bad/' + id,
        method: 'put',
    })
}

//根据QQ获取信息
export function getInfoByQQ(qqNum) {
    return request({
        url: '/f/comment/qqNum/' + qqNum,
        method: 'get',
    })
}

//新增评论
export function insertComment(comment) {
    return request({
        url: '/f/comment',
        method: 'post',
        data: comment
    })
}