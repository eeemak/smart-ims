import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class JarwisService {
  private baseUrl = 'http://localhost:8000/api';
  public ApiUrl = {
    products: `${this.baseUrl}/products`,
    productCategories: `${this.baseUrl}/product-categories`,
    productBrands: `${this.baseUrl}/product-brands`,
    productGroups: `${this.baseUrl}/product-groups`,
    unitOfMeasurements: `${this.baseUrl}/unit-of-measurements`,
  }

  constructor(private http: HttpClient) { }

  signup(data) {
    return this.http.post(`${this.baseUrl}/signup`, data)
  }

  login(data) {
    return this.http.post(`${this.baseUrl}/login`, data)
  }

  sendPasswordResetLink(data) {
    return this.http.post(`${this.baseUrl}/sendPasswordResetLink`, data)
  }

  changePassword(data) {
    return this.http.post(`${this.baseUrl}/resetPassword`, data)
  }
  //Products
  getProducts() {
    return this.http.get(this.ApiUrl.products)
  }
  getProduct(id) {
    return this.http.get(`${this.ApiUrl.products}/${id}`)
  }
  saveProducts(data) {
    return this.http.post(this.ApiUrl.products, data)
  }
  updateProducts(id,data) {
    return this.http.put(`${this.ApiUrl.products}/${id}`, data)
  }
  deleteProduct(id) {
    return this.http.delete(`${this.ApiUrl.products}/${id}`)
  }
  //ProductCategories
  getProductCategories() {
    return this.http.get(this.ApiUrl.productCategories)
  }
  //ProductBrands
  getProductBrands() {
    return this.http.get(this.ApiUrl.productBrands)
  }
  //ProductGroups
  getProductGroups() {
    return this.http.get(this.ApiUrl.productGroups)
  }
  //UnitOfMeasurements
  getUnitOfMeasurements() {
    return this.http.get(this.ApiUrl.unitOfMeasurements)
  }

}
