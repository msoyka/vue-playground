import axios from 'axios'

const url = 'http://localhost:3001/fields/'

class FieldService {
  static getFieldsByPageId(pageId) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(`${url}?pageId=${pageId}`)
        const data = res.data
        resolve(data)
      } catch (error) {
        reject(error)
      }
    })
  }

  // static createPage(postObject) {
  //   const timestamp = Date.now()
  //   const newPost = { ...postObject, createdAt: timestamp }
  //   return axios.post(url, newPost)
  // }

  // static deletePage(id) {
  //   return axios.delete(`${url}${id}`)
  // }
}

export default FieldService
