import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../../services/jarwis.service';
import {  SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // public current_page = 1;
  // public page_type='list';
  // public pages = [];
  // public products = [];
  // public links = [];
  // public meta = [];
  public productsUrl = null;
  closeResult: string;

  constructor(
    private Jarwis: JarwisService,
    private Notify: SnotifyService
    ) { }

  ngOnInit() {
    this.productsUrl = this.Jarwis.ApiUrl.products
    // this.getData();
  }

  viewItem($event){
    console.log('event.....',$event.data);
  }
  // onDelete(id){
  //   this.Notify.confirm('Are you sure to delete!', {
  //     buttons:[
  //       {text: 'Yes', 
  //       action: toster =>{
  //         console.log(id);
  //         //  this.deleteData(id),
  //          this.Notify.remove(toster.id)
  //         }
  //     },
  //     ]
  //   })
  // }
  // getData(){
  //   this.Jarwis.getProductList(this.current_page).subscribe(
  //     data => this.handleResponse(data),
  //     error => this.handleError(error)
  //   );
  // }
  // deleteData(id){
  //   this.Jarwis.deleteProduct(id).subscribe(
  //     data => this.handleResponse(data),
  //     error => this.handleError(error)
  //   );
  // }

  // handleResponse(data) {
  //   this.products = data.data;
  //   console.log(this.products);
  //   this.links = data.links;
  //   this.meta = data.meta;
  //   for(let i=0; i<data.meta.last_page; i++){
  //     this.pages[i] = i+1;
  //   }
  // }

  // handleError(error) {
  //   console.log(error)
  // }
  // changePage(page){
  //   this.current_page=page;
  //   this.getData();
  // }
  // changePageType(pageType){
  //   this.page_type = pageType;
  // }

}
