/* eslint-disable */

import axios from 'axios'

const url = 'http://localhost:3001/pages'

class PageService {
  /**
   * Description: Get page's metadata by page slug
   * @param: Page Slug - typeof: String
   * @return: Page Metadata - typeof: Object
   **/
  // static getPageBySlug(slug) {
  //   return new Promise(async (resolve, reject) => {
  //     try {
  //       const res = await axios.get(`${url}?slug=${slug}`)
  //       const data = res.data[0]
  //       resolve(data)
  //     } catch (error) {
  //       reject(error)
  //     }
  //   })
  // }

  static getPages() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url)
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

export default PageService
