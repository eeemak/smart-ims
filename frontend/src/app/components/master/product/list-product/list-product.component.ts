import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../../../services/jarwis.service';
import {  SnotifyService } from 'ng-snotify';
import { Router } from '@angular/router';
import { FlxUiDataTable } from 'flx-ui-datatable';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  public productsUrl = null;

  constructor(
    private Jarwis: JarwisService,
    private router: Router,
    private Notify: SnotifyService,
    public dataService: FlxUiDataTable
    ) { }

  ngOnInit() {
    this.productsUrl = this.Jarwis.ApiUrl.products
  }
  onCreate(){
    this.router.navigateByUrl('/products/add-product');
  }
  onShow($event){
    console.log('event.....',$event.data);
  }
  onEdit($event){
    this.router.navigateByUrl(`/products/edit-product/${$event.data.id}`)
  }
  onDelete($event){
    this.Jarwis.deleteProduct($event.data.id).subscribe(
      response => this.handleDeleteProduct(response),
      error => this.handleError(error)
    )
  }
  handleDeleteProduct(response){
    this.Notify.success(response.data.name +' has deleted successfully!',{timeout:3000});
    this.dataService.reloadData();
  }
  handleError(error) {
    console.log(error)
    alert('response error, check console')
  }

}
