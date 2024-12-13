import { Component , OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductBrowsingService } from '../../services/product-browsing.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule , FormsModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductBrowsingComponent implements OnInit {
  products: any[] = [];
  searchQuery: string = '';
  sortOption: string = 'price_asc';
  minPrice: number = 0;
  maxPrice: number = 100000;
  currentPage: number = 1;
  pageSize: number = 10;

  constructor(private productService: ProductBrowsingService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    const queryParams = {
      searchQuery: this.searchQuery,
      sortOption: this.sortOption,
      minPrice: this.minPrice,
      maxPrice: this.maxPrice,
      page: this.currentPage,
      pageSize: this.pageSize,
    };

    this.productService.getProducts(queryParams).subscribe(
      (response) => {
        console.log(response);
        // console.log(this.products);
        this.products = response;
        console.log(this.products);
      },
      (error) => {
        console.error('Error fetching products:', error);
        this.products = [];
      }
    );
  }

  changePage(page: number): void {
    if (page < 1) return;
    this.currentPage = page;
    this.fetchProducts();
  }
}
