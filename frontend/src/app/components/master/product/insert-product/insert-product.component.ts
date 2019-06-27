import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../../../../app/services/jarwis.service';
import { SnotifyService } from 'ng-snotify';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-insert-product',
  templateUrl: './insert-product.component.html',
  styleUrls: ['./insert-product.component.css']
})
export class InsertProductComponent implements OnInit {

  public productCategories: any;
  public productBrands: any;
  public productGroups: any;
  public unitOfMeasurements: any;
  public editMode = false;
  public id = this.activatedRoute.snapshot.paramMap.get('id');
  public form = {
    company_id: 1,
    product_category_id: null,
    product_brand_id: null,
    product_group_id: null,
    unit_of_measurement_id: null,
    name: null,
    short_name: null,
    code: null,
    sku: null,
    description: null,
    alert_quantity: null,
    selling_price: null,
    discount: null,
    creator_user_id: 1,
    updator_user_id: null,
  };
  constructor(
    private Jarwis: JarwisService,
    private Notify: SnotifyService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    
    if(this.id){
      this.editMode = true
      this.Jarwis.getProduct(this.id).subscribe(
        response => this.handleEditProduct(response),
        error => this.handleError(error)
      )
    }
    this.Jarwis.getProductCategories().subscribe(
      response => this.handleProductCategories(response),
      error => this.handleError(error)
    )
    this.Jarwis.getProductBrands().subscribe(
      response => this.handleProductBrands(response),
      error => this.handleError(error)
    )
    this.Jarwis.getProductGroups().subscribe(
      response => this.handleProductGroups(response),
      error => this.handleError(error)
    )
  }
  onSubmit() {
    if(this.editMode){
      this.Jarwis.updateProducts(this.id,this.form).subscribe(
        response => this.handleUpdateProduct(response),
        error => this.handleError(error)
      )
    }else{
      this.Jarwis.saveProducts(this.form).subscribe(
        response => this.handleSaveProduct(response),
        error => this.handleError(error)
      )
    }
  }
  handleProductCategories(response) {
    this.productCategories = response.data
  }
  handleProductBrands(response) {
    this.productBrands = response.data
  }
  handleProductGroups(response) {
    this.productGroups = response.data
  }
  handleSaveProduct(response) {
    this.Notify.success(response.data.name + ' added successfully!',{timeout:3000});
    this.router.navigateByUrl('/products');
  }
  handleUpdateProduct(response) {
    this.Notify.success(response.data.name + ' updated successfully!',{timeout:3000});
    this.router.navigateByUrl('/products');
  }
  handleEditProduct(response) {
    this.form = response.data
  }
  handleError(error) {
    console.log(error)
    alert('response error, check console')
  }

}
