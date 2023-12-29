import { defineStore } from 'pinia'
import { productData } from '~/assets/js/productionList'
import { Menu } from '~/assets/js/menu'

export const useTPPStore = defineStore('store', {
  state: () => {
    return {
      isMobileSize: false,
      products: [],
      product: null,
      filterKeyWord: '',
      filterProduct: []
    }
  },
  actions: {
    getProducts () {
      this.products = productData
      this.filterProduct = this.products
    },
    getProduct (item) {
      this.product = item
    },
    filterData (filterKey) {
      if (filterKey) {
        this.filterProduct = this.products.filter(item => item.category === filterKey)
      } else {
        this.getProducts()
      }
    },
    getWidth (val) {
      if (val < 765) {
        this.isMobileSize = true
      } else {
        this.isMobileSize = false
      }
    }
  },
  getters: {
    getMenuItem: () => {
      const productList = productData.map(pord => {
        return pord.category
      }).filter((ele, index, arr) => {
        return arr.indexOf(ele) === index
      })

      const filteredMenu = Menu.filter(m => {
        return productList.includes(m.category)
      })
      return filteredMenu
    }
  }
})
