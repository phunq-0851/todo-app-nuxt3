export const usePost = async () => {
    const { data: posts } = await useFetch('/posts', {
        baseURL: 'http://localhost:3001'
    })
console.log(1111)
    return {
        posts
    }
}